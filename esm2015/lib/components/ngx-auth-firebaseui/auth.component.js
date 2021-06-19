import { __awaiter } from "tslib";
import { isPlatformBrowser } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input, Output, PLATFORM_ID, ViewChild, } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators, } from "@angular/forms";
// ANGULAR MATERIAL
import { MatTabGroup } from "@angular/material/tabs";
import { MatDialog } from "@angular/material/dialog";
// ANGULAR FIRE
import { AngularFireAuth } from "@angular/fire/auth";
// Third PARTY
import { MatPasswordStrengthComponent } from "@angular-material-extensions/password-strength";
import { LegalityDialogComponent } from "..";
import { AuthProcessService, AuthProvider, } from "../../services/auth-process.service";
import { NgxAuthFirebaseuiAnimations } from "../../animations";
import { NgxAuthFirebaseUIConfigToken } from "../../tokens";
export const EMAIL_REGEX = new RegExp([
    '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    "[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+",
    "[a-zA-Z]{2,}))$",
].join(""));
// tslint:disable-next-line:max-line-length
export const PHONE_NUMBER_REGEX = new RegExp([
    "^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{4,12}$",
].join(""));
export class AuthComponent {
    constructor(
    // tslint:disable-next-line:ban-types
    platformId, config, auth, authProcess, dialog, activatedRoute, changeDetectorRef) {
        this.platformId = platformId;
        this.config = config;
        this.auth = auth;
        this.authProcess = authProcess;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        //  google, facebook, twitter, github as array or all as one single string
        this.providers = AuthProvider.ALL;
        this.registrationEnabled = true;
        this.resetPasswordEnabled = true;
        this.guestEnabled = true;
        this.selectedTabChange = new EventEmitter();
        // Password strength api
        this.enableLengthRule = true;
        this.enableLowerCaseLetterRule = true;
        this.enableUpperCaseLetterRule = true;
        this.enableDigitRule = true;
        this.enableSpecialCharRule = true;
        // tslint:disable-next-line:no-output-on-prefix
        this.onStrengthChanged = new EventEmitter();
        this.signOutText = "Sign out";
        // Customize the text
        // Reset Password Tab
        this.resetPasswordTabText = "Reset e-mail address to password";
        this.resetPasswordInputText = "Reset e-mail address to password";
        this.resetPasswordErrorRequiredText = "E-mail is required to reset the password!";
        this.resetPasswordErrorPatternText = "Please enter a valid e-mail address";
        this.resetPasswordActionButtonText = "Reset";
        this.resetPasswordInstructionsText = "Reset requested. Check your e-mail instructions.";
        // SignIn Tab
        this.signInTabText = "Sign in";
        this.signInCardTitleText = "Signing in";
        this.loginButtonText = "Log In";
        this.forgotPasswordButtonText = "Forgot Password ?";
        // Common
        this.nameText = "Name";
        this.nameErrorRequiredText = "Name is required";
        this.nameErrorMinLengthText = "The name is too short!";
        this.nameErrorMaxLengthText = "The name is too long!";
        this.emailText = "E-mail";
        this.emailErrorRequiredText = "E-mail is required";
        this.emailErrorPatternText = "Please enter a valid e-mail address";
        this.passwordText = "Password";
        this.passwordErrorRequiredText = "Password is required";
        this.passwordErrorMinLengthText = "The password is too short!";
        this.passwordErrorMaxLengthText = "The password is too long!";
        // Register Tab
        this.registerTabText = "Register";
        this.registerCardTitleText = "Registration";
        this.registerButtonText = "Register";
        this.guestButtonText = "continue as guest";
        // email confirmation component
        this.emailConfirmationTitle = "Confirm your e-mail address!";
        // tslint:disable-next-line:max-line-length
        this.emailConfirmationText = `A confirmation e-mail has been sent to you. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.`;
        this.authProvider = AuthProvider;
        this.authenticationError = false;
        this.passReset = false;
        this.authProviders = AuthProvider;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    get color() {
        return this.authenticationError ? "warn" : "primary";
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe(() => (this.authenticationError = true));
        }
        this.min =
            this.min != null
                ? Math.max(this.min, this.config.passwordMinLength)
                : this.config.passwordMinLength;
        this.max =
            this.max != null
                ? Math.min(this.max, this.config.passwordMaxLength)
                : this.config.passwordMaxLength;
        this.goBackURL = this.chooseBackUrl();
        this.updateAuthSnackbarMessages();
        // auth form's initialization
        this._initSignInFormGroupBuilder();
        this._initSignUpFormGroupBuilder();
        this._initResetPasswordFormGroupBuilder();
    }
    ngAfterViewInit() {
        if (this.passwordStrength) {
            this.passwordStrength.onStrengthChanged.subscribe((strength) => {
                this.onStrengthChanged.emit(strength);
            });
        }
    }
    ngOnChanges(changes) {
        if (changes.messageOnAuthSuccess || changes.messageOnAuthError) {
            this.updateAuthSnackbarMessages();
        }
        if (changes.min) {
            this.min =
                this.min != null
                    ? Math.max(this.min, this.config.passwordMinLength)
                    : this.config.passwordMinLength;
        }
        if (changes.max) {
            this.max =
                this.max != null
                    ? Math.min(this.max, this.config.passwordMaxLength)
                    : this.config.passwordMaxLength;
        }
        if (changes.goBackURL) {
            this.goBackURL = this.chooseBackUrl();
        }
    }
    ngOnDestroy() {
        if (this.onErrorSubscription) {
            this.onErrorSubscription.unsubscribe();
        }
    }
    onTabChange(event) {
        this.selectedTabChange.emit(event);
        this.tabIndex = event.index;
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this.changeDetectorRef.markForCheck();
                yield this.authProcess.signOut();
            }
            finally {
                this.isLoading = false;
                this.tabIndex = 0;
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.signInFormGroup.valid) {
                return;
            }
            try {
                this.isLoading = true;
                this.changeDetectorRef.markForCheck();
                yield this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                    email: this.signInFormGroup.value.email,
                    password: this.signInFormGroup.value.password,
                });
            }
            finally {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    updateAuthSnackbarMessages() {
        this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
        this.authProcess.messageOnAuthError = this.messageOnAuthError;
    }
    createForgotPasswordTab() {
        this.passwordResetWished = true;
        this.tabIndex = 2;
        this.changeDetectorRef.markForCheck();
    }
    processLegalSignUP(authProvider) {
        if (this.tosUrl || this.privacyPolicyUrl) {
            const params = {
                tosUrl: this.tosUrl,
                privacyPolicyUrl: this.privacyPolicyUrl,
                authProvider,
            };
            this.dialogRef = this.dialog.open(LegalityDialogComponent, {
                data: params,
            });
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result && result.checked) {
                    this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
                }
                this.dialogRef = null;
            });
        }
        else {
            this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
        }
    }
    signUp() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this.changeDetectorRef.markForCheck();
                return yield this.authProcess.signUp(this.signUpFormGroup.value.name, {
                    email: this.signUpFormGroup.value.email,
                    password: this.signUpFormGroup.value.password,
                });
            }
            finally {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    signUpAnonymously() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this.changeDetectorRef.markForCheck();
                yield this.authProcess.signInWith(this.authProvider.ANONYMOUS);
            }
            finally {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    resetPassword() {
        this.authProcess
            .resetPassword(this.resetPasswordEmailFormControl.value)
            .then(() => {
            this.passReset = true;
            // this.tabIndex = 2;
            this.changeDetectorRef.markForCheck();
        });
    }
    chooseBackUrl() {
        return (this.activatedRoute.snapshot.queryParams.redirectUrl ||
            this.goBackURL ||
            "/");
    }
    _initSignInFormGroupBuilder() {
        this.signInFormGroup = new FormGroup({});
        this.signInFormGroup.registerControl("email", (this.signInEmailFormControl = new FormControl("", [
            Validators.required,
            Validators.pattern(EMAIL_REGEX),
        ])));
        this.signInFormGroup.registerControl("password", (this.sigInPasswordFormControl = new FormControl("", [
            Validators.required,
            Validators.minLength(this.min),
            Validators.maxLength(this.max),
        ])));
    }
    _initSignUpFormGroupBuilder() {
        this.signUpFormGroup = new FormGroup({
            name: this.sigUpNameFormControl = new FormControl("", [
                Validators.required,
                Validators.minLength(this.config.nameMinLength),
                Validators.maxLength(this.config.nameMaxLength),
            ]),
            email: this.sigUpEmailFormControl = new FormControl("", [
                Validators.required,
                Validators.pattern(EMAIL_REGEX),
            ]),
            password: this.sigUpPasswordFormControl = new FormControl("", [
                Validators.required,
                Validators.minLength(this.min),
                Validators.maxLength(this.max),
            ]),
        });
    }
    _initResetPasswordFormGroupBuilder() {
        this.resetPasswordFormGroup = new FormGroup({
            email: this.resetPasswordEmailFormControl = new FormControl("", [
                Validators.required,
                Validators.pattern(EMAIL_REGEX),
            ]),
        });
    }
    _afterSignUpMiddleware(authProvider) {
        if (authProvider === this.authProvider.ANONYMOUS) {
            return this.signUpAnonymously();
        }
        return this.signUp();
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: "ngx-auth-firebaseui",
                template: "<ng-container *ngIf=\"authProcess.user$ | async as user; else showForm\">\n\n  <!-- This component will be shown when:\n    - we just sent a verification mail (notably after sign up)\n    - we arrived from the guard after trying to access a protected route even though we are connected\n    - config.enableEmailVerification is undefined, null or true\n  -->\n  <div\n    *ngIf=\"(config.enableEmailVerification !== false) && (\n     (config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) || (authProcess.emailConfirmationSent && !user.emailVerified)\n     ); else signedInUser\"\n    fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <ngx-auth-firebaseui-email-confirmation\n      (signOut)=\"signOut()\"\n      [email]=\"user.email\"\n      [goBackURL]=\"goBackURL\"\n      [messageOnEmailConfirmationSuccess]=\"messageOnEmailConfirmationSuccess\"\n      [sendNewVerificationEmailText]=\"sendNewVerificationEmailText\"\n      [signOutText]=\"signOutText\"\n      [template]=\"verifyEmailTemplate\"\n      [verifyEmailConfirmationText]=\"verifyEmailConfirmationText\"\n      [verifyEmailGoBackText]=\"verifyEmailGoBackText\"\n      [verifyEmailTitleText]=\"verifyEmailTitleText\">\n    </ngx-auth-firebaseui-email-confirmation>\n  </div>\n\n  <ng-template #signedInUser>\n    <div class=\"signed-in-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img *ngIf=\"user?.photoURL; else noPhoto\" [src]=\"user?.photoURL\" class=\"account-circle\">\n      <ng-template #noPhoto>\n        <mat-icon class=\"account-circle\">account_circle</mat-icon>\n      </ng-template>\n      <div class=\"user-display-name mat-title\">{{ user?.displayName }}</div>\n      <div class=\"user-email mat-body-2\">{{ user?.email }}</div>\n      <div class=\"actions\">\n        <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n        <a *ngIf=\"verifyEmailGoBackText\" [routerLink]=\"goBackURL\" class=\"go-back-button action-button\" color=\"primary\"\n           mat-stroked-button>{{ verifyEmailGoBackText }}</a>\n        <button (click)=\"signOut()\" class=\"sign-out-button action-button\" color=\"warn\"\n                mat-stroked-button>{{ signOutText }}</button>\n      </div>\n    </div>\n  </ng-template>\n\n</ng-container>\n\n<ng-template #showForm>\n  <mat-tab-group (selectedTabChange)=\"onTabChange($event)\" [color]=\"color\" [selectedIndex]=\"tabIndex\">\n    <!--Sign in tab-->\n    <mat-tab [label]=\"signInTabText\">\n      <mat-card>\n        <mat-card-title>{{signInCardTitleText}}</mat-card-title>\n        <mat-card-content>\n          <form (ngSubmit)=\"signIn()\"\n                [@animateStagger]=\"{ value: '50' }\"\n                [formGroup]=\"signInFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input formControlName=\"email\"\n                       matInput\n                       required\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{passwordText}}</mat-label>\n                <input [maxlength]=\"max\" [minlength]=\"min\" [type]=\"togglePass?.type\" formControlName=\"password\"\n                       autocomplete=\"current-password\" matInput\n                       required/>\n                <mat-pass-toggle-visibility #togglePass matSuffix></mat-pass-toggle-visibility>\n                <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signInFormGroup.value.password.length }}\n                  / {{ max }} </mat-hint>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('required')\">\n                  {{passwordErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('minlength')\">\n                  {{ passwordErrorMinLengthText }}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('maxlength')\">\n                  {{ passwordErrorMaxLengthText }}\n                </mat-error>\n              </mat-form-field>\n\n              <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signInFormGroup.invalid\"\n                      class=\"space-top\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{loginButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"createForgotPasswordTab()\"\n                    *ngIf=\"resetPasswordEnabled\"\n                    [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                    [color]=\"color\"\n                    class=\"space-top\"\n                    mat-button>\n              {{forgotPasswordButtonText}}\n            </button>\n          </div>\n\n        </mat-card-content>\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n      </mat-card>\n    </mat-tab>\n\n    <!--tab register-->\n    <mat-tab *ngIf=\"registrationEnabled\" [label]=\"registerTabText\">\n      <mat-card>\n        <mat-card-title>{{registerCardTitleText}}</mat-card-title>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n          <form (ngSubmit)=\"signUpFormGroup.valid &&\n            processLegalSignUP(authProvider.EmailAndPassword)\"\n                [@animateStagger]=\"{ value: '50' }\" [formGroup]=\"signUpFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <!--name-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <!--labels will work only with @angular/material@6.2.0 -->\n                <mat-label>{{nameText}}</mat-label>\n                <input\n                  [formControl]=\"sigUpNameFormControl\"\n                  [maxlength]=\"config.nameMaxLength\"\n                  [minlength]=\"config.nameMinLength\"\n                  matInput\n                  required\n                />\n                <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signUpFormGroup.value.name?.length }}\n                  / {{ config.nameMaxLength }} </mat-hint>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('required')\">\n                  {{nameErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('minlength')\">\n                  {{nameErrorMinLengthText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('maxlength')\">\n                  {{nameErrorMaxLengthText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--email-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input [formControl]=\"sigUpEmailFormControl\"\n                       matInput\n                       required\n                       type=\"email\"\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--password-->\n              <div fxLayout=\"column\">\n                <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                [appearance]=\"appearance\">\n                  <mat-label>{{passwordText}}</mat-label>\n                  <input\n                    [formControl]=\"sigUpPasswordFormControl\"\n                    [maxlength]=\"max\"\n                    [minlength]=\"min\"\n                    [type]=\"toggle.type\"\n                    matInput\n                    name=\"password\"\n                    autocomplete=\"new-password\"\n                    required\n                  />\n                  <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>\n\n                  <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n\n                  <mat-hint align=\"end\" aria-live=\"polite\">\n                    {{signUpFormGroup.value.password?.length}} / {{ max }}\n                  </mat-hint>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('required')\" class=\"cut-text\">\n                    {{passwordErrorRequiredText}}\n                  </mat-error>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('minlength')\" class=\"cut-text\">\n                    {{ passwordErrorMinLengthText }}\n                  </mat-error>\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('maxlength')\" class=\"cut-text\">\n                    {{ passwordErrorMaxLengthText }}\n                  </mat-error>\n\n                </mat-form-field>\n\n                <mat-password-strength #passwordStrength\n                                       [customValidator]=\"customValidator\"\n                                       [enableDigitRule]=\"enableDigitRule\"\n                                       [enableLengthRule]=\"enableLengthRule\"\n                                       [enableLowerCaseLetterRule]=\"enableLowerCaseLetterRule\"\n                                       [enableSpecialCharRule]=\"enableSpecialCharRule\"\n                                       [enableUpperCaseLetterRule]=\"enableUpperCaseLetterRule\"\n                                       [externalError]=\"sigUpPasswordFormControl.dirty\"\n                                       [max]=\"max\"\n                                       [min]=\"min\"\n                                       [password]=\"signUpFormGroup.value.password\">\n                </mat-password-strength>\n\n              </div>\n\n              <button [@animate]=\"{ value: '*', params: { x: '100px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signUpFormGroup.invalid\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{registerButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <button (click)=\"processLegalSignUP(authProvider.ANONYMOUS)\"\n                  *ngIf=\"guestEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                  [color]=\"color\"\n                  mat-button\n                  style=\"margin-top: 20px\">\n            <mat-icon>fingerprint</mat-icon>\n            {{guestButtonText}}\n          </button>\n\n        </mat-card-content>\n\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n\n      </mat-card>\n    </mat-tab>\n\n    <!--Reset password tab-->\n    <mat-tab *ngIf=\"passwordResetWished\" class=\"reset-password-tab\">\n      <ng-template mat-tab-label>\n        <button (click)=\"passwordResetWished = false\" class=\"reset-password-tab__close-button\" mat-icon-button>\n          {{ resetPasswordTabText }}\n          <mat-icon>close</mat-icon>\n        </button>\n      </ng-template>\n      <form (ngSubmit)=\"resetPasswordFormGroup.valid && resetPassword()\"\n            [@animateStagger]=\"{ value: '50' }\"\n            [formGroup]=\"resetPasswordFormGroup\">\n        <mat-card class=\"reset-password-card\">\n          <mat-card-content>\n            <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [appearance]=\"appearance\"\n                            class=\"full-width\">\n              <mat-label> {{ resetPasswordInputText }} </mat-label>\n              <input [title]=\"resetPasswordInputText\"\n                     formControlName=\"email\"\n                     matInput\n                     required>\n              <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('required')\">\n                {{resetPasswordErrorRequiredText}}\n              </mat-error>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('pattern')\">\n                {{resetPasswordErrorPatternText}}\n              </mat-error>\n            </mat-form-field>\n            <p *ngIf=\"passReset\">{{resetPasswordInstructionsText}}</p>\n          </mat-card-content>\n          <mat-card-actions fxLayoutAlign=\"center\">\n            <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n            <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                    [color]=\"color\"\n                    mat-raised-button\n                    type=\"submit\">\n              {{resetPasswordActionButtonText}}\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </mat-tab>\n\n  </mat-tab-group>\n  <mat-divider></mat-divider>\n  <ngx-auth-firebaseui-providers *ngIf=\"tabIndex !== 2\"\n                                 [providers]=\"providers\"\n                                 [theme]=\"providersTheme\"\n                                 [tosUrl]=\"tosUrl\"\n                                 [privacyPolicyUrl]=\"privacyPolicyUrl\">\n  </ngx-auth-firebaseui-providers>\n</ng-template>\n",
                animations: NgxAuthFirebaseuiAnimations,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-card{margin:2rem}.space-top{margin-top:.5rem}.full-width{width:100%}.cut-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.signed-in-container .account-circle{font-size:12rem;height:12rem;width:12rem}.signed-in-container img.account-circle{-o-object-fit:cover;border-radius:50%;object-fit:cover}.signed-in-container .sign-out-button{margin-top:2rem}.signed-in-container .user-display-name{margin-top:1rem}.signed-in-container .user-email{margin-top:-1rem}.signed-in-container .actions{margin-top:2rem}.signed-in-container .actions .action-button,.signed-in-container .actions mat-progress-bar{width:100%}.signed-in-container .actions .action-button{margin-top:1rem}.reset-password-tab mat-progress-bar{margin-bottom:1rem}.reset-password-tab__close-button{align-items:center;display:flex;justify-content:space-between;width:100%}.reset-password-tab__close-button mat-icon{font-size:18px;position:relative;top:-1px}"]
            },] }
];
AuthComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgxAuthFirebaseUIConfigToken),] }] },
    { type: AngularFireAuth },
    { type: AuthProcessService },
    { type: MatDialog },
    { type: ActivatedRoute },
    { type: ChangeDetectorRef }
];
AuthComponent.propDecorators = {
    matTabGroup: [{ type: ViewChild, args: [MatTabGroup, { static: false },] }],
    passwordStrength: [{ type: ViewChild, args: [MatPasswordStrengthComponent, { static: false },] }],
    providers: [{ type: Input }],
    providersTheme: [{ type: Input }],
    appearance: [{ type: Input }],
    tabIndex: [{ type: Input }],
    registrationEnabled: [{ type: Input }],
    resetPasswordEnabled: [{ type: Input }],
    guestEnabled: [{ type: Input }],
    tosUrl: [{ type: Input }],
    privacyPolicyUrl: [{ type: Input }],
    goBackURL: [{ type: Input }],
    messageOnAuthSuccess: [{ type: Input }],
    messageOnAuthError: [{ type: Input }],
    messageOnEmailConfirmationSuccess: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    selectedTabChange: [{ type: Output }],
    enableLengthRule: [{ type: Input }],
    enableLowerCaseLetterRule: [{ type: Input }],
    enableUpperCaseLetterRule: [{ type: Input }],
    enableDigitRule: [{ type: Input }],
    enableSpecialCharRule: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    customValidator: [{ type: Input }],
    onStrengthChanged: [{ type: Output }],
    verifyEmailTemplate: [{ type: Input }],
    verifyEmailTitleText: [{ type: Input }],
    verifyEmailConfirmationText: [{ type: Input }],
    verifyEmailGoBackText: [{ type: Input }],
    sendNewVerificationEmailText: [{ type: Input }],
    signOutText: [{ type: Input }],
    resetPasswordTabText: [{ type: Input }],
    resetPasswordInputText: [{ type: Input }],
    resetPasswordErrorRequiredText: [{ type: Input }],
    resetPasswordErrorPatternText: [{ type: Input }],
    resetPasswordActionButtonText: [{ type: Input }],
    resetPasswordInstructionsText: [{ type: Input }],
    signInTabText: [{ type: Input }],
    signInCardTitleText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    forgotPasswordButtonText: [{ type: Input }],
    nameText: [{ type: Input }],
    nameErrorRequiredText: [{ type: Input }],
    nameErrorMinLengthText: [{ type: Input }],
    nameErrorMaxLengthText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    passwordText: [{ type: Input }],
    passwordErrorRequiredText: [{ type: Input }],
    passwordErrorMinLengthText: [{ type: Input }],
    passwordErrorMaxLengthText: [{ type: Input }],
    registerTabText: [{ type: Input }],
    registerCardTitleText: [{ type: Input }],
    registerButtonText: [{ type: Input }],
    guestButtonText: [{ type: Input }],
    emailConfirmationTitle: [{ type: Input }],
    emailConfirmationText: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBR1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixtQkFBbUI7QUFDbkIsT0FBTyxFQUFxQixXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBR25FLGVBQWU7QUFDZixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsY0FBYztBQUNkLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBSzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBUyxNQUFNLElBQUksQ0FBQztBQU1wRCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLFlBQVksR0FDYixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9ELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU1RCxNQUFNLENBQUMsTUFB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QUNMLEtBQUs7MkNBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUlMLEtBQUs7cUNBQ0wsS0FBSzs2Q0FDTCxLQUFLOzRDQUVMLEtBQUs7NENBRUwsS0FBSzs0Q0FDTCxLQUFLOzRCQUlMLEtBQUs7a0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3VDQUNMLEtBQUs7dUJBR0wsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLEtBQUs7cUNBQ0wsS0FBSzt3QkFFTCxLQUFLO3FDQUNMLEtBQUs7b0NBQ0wsS0FBSzsyQkFFTCxLQUFLO3dDQUNMLEtBQUs7eUNBQ0wsS0FBSzt5Q0FDTCxLQUFLOzhCQUdMLEtBQUs7b0NBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBR0wsS0FBSztvQ0FFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBBTkdVTEFSIE1BVEVSSUFMXG5pbXBvcnQgeyBNYXRUYWJDaGFuZ2VFdmVudCwgTWF0VGFiR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic1wiO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XG5cbi8vIEFOR1VMQVIgRklSRVxuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuXG4vLyBUaGlyZCBQQVJUWVxuaW1wb3J0IHsgTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoXCI7XG5cbi8vIFJYSlNcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IExlZ2FsaXR5RGlhbG9nQ29tcG9uZW50LCBUaGVtZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHtcbiAgTGVnYWxpdHlEaWFsb2dQYXJhbXMsXG4gIExlZ2FsaXR5RGlhbG9nUmVzdWx0LFxuICBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7XG4gIEF1dGhQcm9jZXNzU2VydmljZSxcbiAgQXV0aFByb3ZpZGVyLFxufSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC1wcm9jZXNzLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5neEF1dGhGaXJlYmFzZXVpQW5pbWF0aW9ucyB9IGZyb20gXCIuLi8uLi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuIH0gZnJvbSBcIi4uLy4uL3Rva2Vuc1wiO1xuXG5leHBvcnQgY29uc3QgRU1BSUxfUkVHRVggPSBuZXcgUmVnRXhwKFxuICBbXG4gICAgJ14oKFtePD4oKVtcXFxcXVxcXFwuLDs6XFxcXHNAXCJdKyhcXFxcLltePD4oKVxcXFxbXFxcXF1cXFxcLiw7OlxcXFxzQFwiXSspKiknLFxuICAgICd8KFwiLitcIikpQCgoXFxcXFtbMC05XXsxLDN9XFxcXC5bMC05XXsxLDN9XFxcXC5bMC05XXsxLDN9XFxcXC4nLFxuICAgIFwiWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcXFwtMC05XStcXFxcLikrXCIsXG4gICAgXCJbYS16QS1aXXsyLH0pKSRcIixcbiAgXS5qb2luKFwiXCIpXG4pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgY29uc3QgUEhPTkVfTlVNQkVSX1JFR0VYID0gbmV3IFJlZ0V4cChcbiAgW1xuICAgIFwiXlsrXXswLDF9WyhdezAsMX1bMC05XXsxLDR9WyldezAsMX1bLVxcXFxzXFxcXC5dezAsMX1bKF17MCwxfVswLTldezEsNH1bKV17MCwxfVstXFxcXHNcXFxcLi8wLTldezQsMTJ9JFwiLFxuICBdLmpvaW4oXCJcIilcbik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtYXV0aC1maXJlYmFzZXVpXCIsXG4gIHRlbXBsYXRlVXJsOiBcImF1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJhdXRoLmNvbXBvbmVudC5zY3NzXCJdLFxuICBhbmltYXRpb25zOiBOZ3hBdXRoRmlyZWJhc2V1aUFuaW1hdGlvbnMsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoTWF0VGFiR3JvdXAsIHsgc3RhdGljOiBmYWxzZSB9KSBtYXRUYWJHcm91cDogTWF0VGFiR3JvdXA7XG4gIEBWaWV3Q2hpbGQoTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHBhc3N3b3JkU3RyZW5ndGg6IE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQ7XG5cbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAvLyAgZ29vZ2xlLCBmYWNlYm9vaywgdHdpdHRlciwgZ2l0aHViIGFzIGFycmF5IG9yIGFsbCBhcyBvbmUgc2luZ2xlIHN0cmluZ1xuICBASW5wdXQoKSBwcm92aWRlcnM6IEF1dGhQcm92aWRlcltdIHwgQXV0aFByb3ZpZGVyID0gQXV0aFByb3ZpZGVyLkFMTDtcbiAgQElucHV0KCkgcHJvdmlkZXJzVGhlbWU6IFRoZW1lOyAvLyBDbGFzc2ljLCBTdHJva2VkLCBldGMuXG5cbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIHJlZ2lzdHJhdGlvbkVuYWJsZWQgPSB0cnVlO1xuICBASW5wdXQoKSByZXNldFBhc3N3b3JkRW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGd1ZXN0RW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHRvc1VybDogc3RyaW5nO1xuICBASW5wdXQoKSBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdvQmFja1VSTDogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlT25BdXRoU3VjY2Vzczogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlT25BdXRoRXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZU9uRW1haWxDb25maXJtYXRpb25TdWNjZXNzOiBzdHJpbmc7XG5cbiAgLy8gRXZlbnRzXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IGFueTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uRXJyb3I6IGFueTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkVGFiQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XG4gICAgTWF0VGFiQ2hhbmdlRXZlbnRcbiAgPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBQYXNzd29yZCBzdHJlbmd0aCBhcGlcbiAgQElucHV0KCkgZW5hYmxlTGVuZ3RoUnVsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGUgPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlRGlnaXRSdWxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlU3BlY2lhbENoYXJSdWxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBjdXN0b21WYWxpZGF0b3I6IFJlZ0V4cDtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uU3RyZW5ndGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBWZXJpZnkgZW1haWwgdGVtcGxhdGUgdG8gdXNlIGluIHBsYWNlIG9mIGRlZmF1bHQgdGVtcGxhdGUuXG4gIC8vIFNlZSBlbWFpbC1jb25maXJtYXRpb24gY29tcG9uZW50XG4gIEBJbnB1dCgpIHZlcmlmeUVtYWlsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gaTE4biB0cmFuc2xhdGlvbnMgdG8gdXNlIGluIGRlZmF1bHQgdGVtcGxhdGUgZm9yIGVtYWlsIHZlcmlmaWNhdGlvbi5cbiAgLy8gU2VlIGVtYWlsLWNvbmZpcm1hdGlvbiBjb21wb25lbnRcbiAgQElucHV0KCkgdmVyaWZ5RW1haWxUaXRsZVRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgdmVyaWZ5RW1haWxDb25maXJtYXRpb25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZlcmlmeUVtYWlsR29CYWNrVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBzZW5kTmV3VmVyaWZpY2F0aW9uRW1haWxUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpZ25PdXRUZXh0ID0gXCJTaWduIG91dFwiO1xuXG4gIC8vIEN1c3RvbWl6ZSB0aGUgdGV4dFxuICAvLyBSZXNldCBQYXNzd29yZCBUYWJcbiAgQElucHV0KCkgcmVzZXRQYXNzd29yZFRhYlRleHQgPSBcIlJlc2V0IGUtbWFpbCBhZGRyZXNzIHRvIHBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHJlc2V0UGFzc3dvcmRJbnB1dFRleHQgPSBcIlJlc2V0IGUtbWFpbCBhZGRyZXNzIHRvIHBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHJlc2V0UGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dCA9XG4gICAgXCJFLW1haWwgaXMgcmVxdWlyZWQgdG8gcmVzZXQgdGhlIHBhc3N3b3JkIVwiO1xuICBASW5wdXQoKSByZXNldFBhc3N3b3JkRXJyb3JQYXR0ZXJuVGV4dCA9XG4gICAgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlLW1haWwgYWRkcmVzc1wiO1xuICBASW5wdXQoKSByZXNldFBhc3N3b3JkQWN0aW9uQnV0dG9uVGV4dCA9IFwiUmVzZXRcIjtcbiAgQElucHV0KCkgcmVzZXRQYXNzd29yZEluc3RydWN0aW9uc1RleHQgPVxuICAgIFwiUmVzZXQgcmVxdWVzdGVkLiBDaGVjayB5b3VyIGUtbWFpbCBpbnN0cnVjdGlvbnMuXCI7XG5cbiAgLy8gU2lnbkluIFRhYlxuICBASW5wdXQoKSBzaWduSW5UYWJUZXh0ID0gXCJTaWduIGluXCI7XG4gIEBJbnB1dCgpIHNpZ25JbkNhcmRUaXRsZVRleHQgPSBcIlNpZ25pbmcgaW5cIjtcbiAgQElucHV0KCkgbG9naW5CdXR0b25UZXh0ID0gXCJMb2cgSW5cIjtcbiAgQElucHV0KCkgZm9yZ290UGFzc3dvcmRCdXR0b25UZXh0ID0gXCJGb3Jnb3QgUGFzc3dvcmQgP1wiO1xuXG4gIC8vIENvbW1vblxuICBASW5wdXQoKSBuYW1lVGV4dCA9IFwiTmFtZVwiO1xuICBASW5wdXQoKSBuYW1lRXJyb3JSZXF1aXJlZFRleHQgPSBcIk5hbWUgaXMgcmVxdWlyZWRcIjtcbiAgQElucHV0KCkgbmFtZUVycm9yTWluTGVuZ3RoVGV4dCA9IFwiVGhlIG5hbWUgaXMgdG9vIHNob3J0IVwiO1xuICBASW5wdXQoKSBuYW1lRXJyb3JNYXhMZW5ndGhUZXh0ID0gXCJUaGUgbmFtZSBpcyB0b28gbG9uZyFcIjtcblxuICBASW5wdXQoKSBlbWFpbFRleHQgPSBcIkUtbWFpbFwiO1xuICBASW5wdXQoKSBlbWFpbEVycm9yUmVxdWlyZWRUZXh0ID0gXCJFLW1haWwgaXMgcmVxdWlyZWRcIjtcbiAgQElucHV0KCkgZW1haWxFcnJvclBhdHRlcm5UZXh0ID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlLW1haWwgYWRkcmVzc1wiO1xuXG4gIEBJbnB1dCgpIHBhc3N3b3JkVGV4dCA9IFwiUGFzc3dvcmRcIjtcbiAgQElucHV0KCkgcGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dCA9IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcbiAgQElucHV0KCkgcGFzc3dvcmRFcnJvck1pbkxlbmd0aFRleHQgPSBcIlRoZSBwYXNzd29yZCBpcyB0b28gc2hvcnQhXCI7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRXJyb3JNYXhMZW5ndGhUZXh0ID0gXCJUaGUgcGFzc3dvcmQgaXMgdG9vIGxvbmchXCI7XG5cbiAgLy8gUmVnaXN0ZXIgVGFiXG4gIEBJbnB1dCgpIHJlZ2lzdGVyVGFiVGV4dCA9IFwiUmVnaXN0ZXJcIjtcbiAgQElucHV0KCkgcmVnaXN0ZXJDYXJkVGl0bGVUZXh0ID0gXCJSZWdpc3RyYXRpb25cIjtcbiAgQElucHV0KCkgcmVnaXN0ZXJCdXR0b25UZXh0ID0gXCJSZWdpc3RlclwiO1xuICBASW5wdXQoKSBndWVzdEJ1dHRvblRleHQgPSBcImNvbnRpbnVlIGFzIGd1ZXN0XCI7XG5cbiAgLy8gZW1haWwgY29uZmlybWF0aW9uIGNvbXBvbmVudFxuICBASW5wdXQoKSBlbWFpbENvbmZpcm1hdGlvblRpdGxlID0gXCJDb25maXJtIHlvdXIgZS1tYWlsIGFkZHJlc3MhXCI7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgQElucHV0KClcbiAgZW1haWxDb25maXJtYXRpb25UZXh0ID0gYEEgY29uZmlybWF0aW9uIGUtbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdS4gQ2hlY2sgeW91ciBpbmJveCBhbmQgY2xpY2sgb24gdGhlIGxpbmsgXCJDb25maXJtIG15IGUtbWFpbFwiIHRvIGNvbmZpcm0geW91ciBlLW1haWwgYWRkcmVzcy5gO1xuXG4gIGF1dGhQcm92aWRlciA9IEF1dGhQcm92aWRlcjtcbiAgcGFzc3dvcmRSZXNldFdpc2hlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgc2lnbkluRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzaWduVXBGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgcHVibGljIHJlc2V0UGFzc3dvcmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBvbkVycm9yU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcblxuICBwYXNzUmVzZXQgPSBmYWxzZTtcbiAgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TGVnYWxpdHlEaWFsb2dDb21wb25lbnQ+O1xuXG4gIGF1dGhQcm92aWRlcnMgPSBBdXRoUHJvdmlkZXI7XG5cbiAgc2lnbkluRW1haWxGb3JtQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICBzaWdJblBhc3N3b3JkRm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBzaWdVcE5hbWVGb3JtQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICBzaWdVcEVtYWlsRm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgc2lnVXBQYXNzd29yZEZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIHNpZ1VwUGFzc3dvcmRDb25maXJtYXRpb25Gb3JtQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICByZXNldFBhc3N3b3JkRW1haWxGb3JtQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tdHlwZXNcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTmd4QXV0aEZpcmViYXNlVUlDb25maWdUb2tlbikpXG4gICAgcHVibGljIGNvbmZpZzogTmd4QXV0aEZpcmViYXNlVUlDb25maWcsXG4gICAgcHVibGljIGF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcbiAgICBwdWJsaWMgYXV0aFByb2Nlc3M6IEF1dGhQcm9jZXNzU2VydmljZSxcbiAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5vblN1Y2Nlc3MgPSBhdXRoUHJvY2Vzcy5vblN1Y2Nlc3NFbWl0dGVyO1xuICAgIHRoaXMub25FcnJvciA9IGF1dGhQcm9jZXNzLm9uRXJyb3JFbWl0dGVyO1xuICB9XG5cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB8IFRoZW1lUGFsZXR0ZSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA/IFwid2FyblwiIDogXCJwcmltYXJ5XCI7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMub25FcnJvclN1YnNjcmlwdGlvbiA9IHRoaXMub25FcnJvci5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+ICh0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSB0cnVlKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5taW4gPVxuICAgICAgdGhpcy5taW4gIT0gbnVsbFxuICAgICAgICA/IE1hdGgubWF4KHRoaXMubWluLCB0aGlzLmNvbmZpZy5wYXNzd29yZE1pbkxlbmd0aClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYXNzd29yZE1pbkxlbmd0aDtcbiAgICB0aGlzLm1heCA9XG4gICAgICB0aGlzLm1heCAhPSBudWxsXG4gICAgICAgID8gTWF0aC5taW4odGhpcy5tYXgsIHRoaXMuY29uZmlnLnBhc3N3b3JkTWF4TGVuZ3RoKVxuICAgICAgICA6IHRoaXMuY29uZmlnLnBhc3N3b3JkTWF4TGVuZ3RoO1xuXG4gICAgdGhpcy5nb0JhY2tVUkwgPSB0aGlzLmNob29zZUJhY2tVcmwoKTtcblxuICAgIHRoaXMudXBkYXRlQXV0aFNuYWNrYmFyTWVzc2FnZXMoKTtcbiAgICAvLyBhdXRoIGZvcm0ncyBpbml0aWFsaXphdGlvblxuICAgIHRoaXMuX2luaXRTaWduSW5Gb3JtR3JvdXBCdWlsZGVyKCk7XG4gICAgdGhpcy5faW5pdFNpZ25VcEZvcm1Hcm91cEJ1aWxkZXIoKTtcbiAgICB0aGlzLl9pbml0UmVzZXRQYXNzd29yZEZvcm1Hcm91cEJ1aWxkZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYXNzd29yZFN0cmVuZ3RoKSB7XG4gICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGgub25TdHJlbmd0aENoYW5nZWQuc3Vic2NyaWJlKChzdHJlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMub25TdHJlbmd0aENoYW5nZWQuZW1pdChzdHJlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubWVzc2FnZU9uQXV0aFN1Y2Nlc3MgfHwgY2hhbmdlcy5tZXNzYWdlT25BdXRoRXJyb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlQXV0aFNuYWNrYmFyTWVzc2FnZXMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubWluKSB7XG4gICAgICB0aGlzLm1pbiA9XG4gICAgICAgIHRoaXMubWluICE9IG51bGxcbiAgICAgICAgICA/IE1hdGgubWF4KHRoaXMubWluLCB0aGlzLmNvbmZpZy5wYXNzd29yZE1pbkxlbmd0aClcbiAgICAgICAgICA6IHRoaXMuY29uZmlnLnBhc3N3b3JkTWluTGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5tYXgpIHtcbiAgICAgIHRoaXMubWF4ID1cbiAgICAgICAgdGhpcy5tYXggIT0gbnVsbFxuICAgICAgICAgID8gTWF0aC5taW4odGhpcy5tYXgsIHRoaXMuY29uZmlnLnBhc3N3b3JkTWF4TGVuZ3RoKVxuICAgICAgICAgIDogdGhpcy5jb25maWcucGFzc3dvcmRNYXhMZW5ndGg7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmdvQmFja1VSTCkge1xuICAgICAgdGhpcy5nb0JhY2tVUkwgPSB0aGlzLmNob29zZUJhY2tVcmwoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vbkVycm9yU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9uRXJyb3JTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBvblRhYkNoYW5nZShldmVudDogTWF0VGFiQ2hhbmdlRXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMudGFiSW5kZXggPSBldmVudC5pbmRleDtcbiAgfVxuXG4gIGFzeW5jIHNpZ25PdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICBhd2FpdCB0aGlzLmF1dGhQcm9jZXNzLnNpZ25PdXQoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFiSW5kZXggPSAwO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzaWduSW4oKSB7XG4gICAgaWYgKCF0aGlzLnNpZ25JbkZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIGF3YWl0IHRoaXMuYXV0aFByb2Nlc3Muc2lnbkluV2l0aCh0aGlzLmF1dGhQcm92aWRlcnMuRW1haWxBbmRQYXNzd29yZCwge1xuICAgICAgICBlbWFpbDogdGhpcy5zaWduSW5Gb3JtR3JvdXAudmFsdWUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnNpZ25JbkZvcm1Hcm91cC52YWx1ZS5wYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBdXRoU25hY2tiYXJNZXNzYWdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhQcm9jZXNzLm1lc3NhZ2VPbkF1dGhTdWNjZXNzID0gdGhpcy5tZXNzYWdlT25BdXRoU3VjY2VzcztcbiAgICB0aGlzLmF1dGhQcm9jZXNzLm1lc3NhZ2VPbkF1dGhFcnJvciA9IHRoaXMubWVzc2FnZU9uQXV0aEVycm9yO1xuICB9XG5cbiAgY3JlYXRlRm9yZ290UGFzc3dvcmRUYWIoKSB7XG4gICAgdGhpcy5wYXNzd29yZFJlc2V0V2lzaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnRhYkluZGV4ID0gMjtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlcj86IEF1dGhQcm92aWRlcikge1xuICAgIGlmICh0aGlzLnRvc1VybCB8fCB0aGlzLnByaXZhY3lQb2xpY3lVcmwpIHtcbiAgICAgIGNvbnN0IHBhcmFtczogTGVnYWxpdHlEaWFsb2dQYXJhbXMgPSB7XG4gICAgICAgIHRvc1VybDogdGhpcy50b3NVcmwsXG4gICAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHRoaXMucHJpdmFjeVBvbGljeVVybCxcbiAgICAgICAgYXV0aFByb3ZpZGVyLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKExlZ2FsaXR5RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgIGRhdGE6IHBhcmFtcyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdDogTGVnYWxpdHlEaWFsb2dSZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuX2FmdGVyU2lnblVwTWlkZGxld2FyZShyZXN1bHQuYXV0aFByb3ZpZGVyKS50aGVuKCgpID0+XG4gICAgICAgICAgICB0aGlzLnNpZ25VcEZvcm1Hcm91cC5yZXNldCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpYWxvZ1JlZiA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWZ0ZXJTaWduVXBNaWRkbGV3YXJlKGF1dGhQcm92aWRlcikudGhlbigoKSA9PlxuICAgICAgICB0aGlzLnNpZ25VcEZvcm1Hcm91cC5yZXNldCgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNpZ25VcCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1dGhQcm9jZXNzLnNpZ25VcCh0aGlzLnNpZ25VcEZvcm1Hcm91cC52YWx1ZS5uYW1lLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnNpZ25VcEZvcm1Hcm91cC52YWx1ZS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc2lnblVwRm9ybUdyb3VwLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNpZ25VcEFub255bW91c2x5KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgYXdhaXQgdGhpcy5hdXRoUHJvY2Vzcy5zaWduSW5XaXRoKHRoaXMuYXV0aFByb3ZpZGVyLkFOT05ZTU9VUyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5hdXRoUHJvY2Vzc1xuICAgICAgLnJlc2V0UGFzc3dvcmQodGhpcy5yZXNldFBhc3N3b3JkRW1haWxGb3JtQ29udHJvbC52YWx1ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXNzUmVzZXQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLnRhYkluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VCYWNrVXJsKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLnJlZGlyZWN0VXJsIHx8XG4gICAgICB0aGlzLmdvQmFja1VSTCB8fFxuICAgICAgXCIvXCJcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFNpZ25JbkZvcm1Hcm91cEJ1aWxkZXIoKSB7XG4gICAgdGhpcy5zaWduSW5Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLnNpZ25JbkZvcm1Hcm91cC5yZWdpc3RlckNvbnRyb2woXG4gICAgICBcImVtYWlsXCIsXG4gICAgICAodGhpcy5zaWduSW5FbWFpbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKEVNQUlMX1JFR0VYKSxcbiAgICAgIF0pKVxuICAgICk7XG4gICAgdGhpcy5zaWduSW5Gb3JtR3JvdXAucmVnaXN0ZXJDb250cm9sKFxuICAgICAgXCJwYXNzd29yZFwiLFxuICAgICAgKHRoaXMuc2lnSW5QYXNzd29yZEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5taW4pLFxuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heCksXG4gICAgICBdKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFNpZ25VcEZvcm1Hcm91cEJ1aWxkZXIoKSB7XG4gICAgdGhpcy5zaWduVXBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIG5hbWU6IHRoaXMuc2lnVXBOYW1lRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLmNvbmZpZy5uYW1lTWluTGVuZ3RoKSxcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5jb25maWcubmFtZU1heExlbmd0aCksXG4gICAgICBdKSxcbiAgICAgIGVtYWlsOiB0aGlzLnNpZ1VwRW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihFTUFJTF9SRUdFWCksXG4gICAgICBdKSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnNpZ1VwUGFzc3dvcmRGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWluKSxcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXgpLFxuICAgICAgXSksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0UmVzZXRQYXNzd29yZEZvcm1Hcm91cEJ1aWxkZXIoKSB7XG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBlbWFpbDogdGhpcy5yZXNldFBhc3N3b3JkRW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihFTUFJTF9SRUdFWCksXG4gICAgICBdKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FmdGVyU2lnblVwTWlkZGxld2FyZShhdXRoUHJvdmlkZXI/OiBBdXRoUHJvdmlkZXIpIHtcbiAgICBpZiAoYXV0aFByb3ZpZGVyID09PSB0aGlzLmF1dGhQcm92aWRlci5BTk9OWU1PVVMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25VcEFub255bW91c2x5KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNpZ25VcCgpO1xuICB9XG59XG4iXX0=