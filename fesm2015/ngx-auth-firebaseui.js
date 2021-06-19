import { __awaiter } from 'tslib';
import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Inject, forwardRef, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, ViewChild, PLATFORM_ID, ViewEncapsulation, NgModule } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import '@firebase/auth';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import firebase from 'firebase/app';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatPasswordStrengthComponent, MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { animation, style, animate, trigger, transition, useAnimation, state, query, stagger, animateChild } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

var Accounts;
(function (Accounts) {
    Accounts["NONE"] = "account";
    Accounts["CHECK"] = "account-check";
    Accounts["EDIT"] = "account-edit";
    Accounts["OFF"] = "account-off";
    Accounts["REMOVE"] = "account-remove";
})(Accounts || (Accounts = {}));

// This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
const NgxAuthFirebaseUIConfigToken = new InjectionToken('NgxAuthFirebaseUIConfigToken');
// This is an intermediate token containing only user-provided configuration
const UserProvidedConfigToken = new InjectionToken('UserProvidedConfigToken');

const collections = {
    users: "users",
};
class FirestoreSyncService {
    constructor(afs) {
        this.afs = afs;
        // this.afs.firestore.settings({timestampsInSnapshots: true});
    }
    // get timestamp() {
    //     return firebase.firestore.FieldValue.serverTimestamp();
    // }
    getUserDocRefByUID(uid) {
        return this.afs.doc(`${collections.users}/${uid}`);
    }
    deleteUserData(uid) {
        const userRef = this.getUserDocRefByUID(uid);
        return userRef.delete();
    }
    updateUserData(user) {
        // Sets user$ data to firestore on login
        const userRef = this.getUserDocRefByUID(user.uid);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
        };
        return userRef.set(data, { merge: true });
    }
}
FirestoreSyncService.ɵprov = ɵɵdefineInjectable({ factory: function FirestoreSyncService_Factory() { return new FirestoreSyncService(ɵɵinject(AngularFirestore)); }, token: FirestoreSyncService, providedIn: "root" });
FirestoreSyncService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root",
            },] }
];
FirestoreSyncService.ctorParameters = () => [
    { type: AngularFirestore }
];

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const appleAuthProvider = new firebase.auth.OAuthProvider("apple.com");
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const microsoftAuthProvider = new firebase.auth.OAuthProvider("microsoft.com");
const yahooAuthProvider = new firebase.auth.OAuthProvider("yahoo.com");
var AuthProvider;
(function (AuthProvider) {
    AuthProvider["ALL"] = "all";
    AuthProvider["ANONYMOUS"] = "anonymous";
    AuthProvider["EmailAndPassword"] = "firebase";
    AuthProvider["Google"] = "google";
    AuthProvider["Apple"] = "apple";
    AuthProvider["Facebook"] = "facebook";
    AuthProvider["Twitter"] = "twitter";
    AuthProvider["Github"] = "github";
    AuthProvider["Microsoft"] = "microsoft";
    AuthProvider["Yahoo"] = "yahoo";
    AuthProvider["PhoneNumber"] = "phoneNumber";
})(AuthProvider || (AuthProvider = {}));
class AuthProcessService {
    constructor(afa, config, snackBar, fireStoreService, matSnackBarConfig) {
        this.afa = afa;
        this.config = config;
        this.snackBar = snackBar;
        this.fireStoreService = fireStoreService;
        this.matSnackBarConfig = matSnackBarConfig;
        this.onSuccessEmitter = new EventEmitter();
        this.onErrorEmitter = new EventEmitter();
        // Useful to know about auth state even between reloads.
        // Replace emailConfirmationSent and emailToConfirm.
        this._user$ = new BehaviorSubject(null);
    }
    get user$() {
        return this._user$.asObservable();
    }
    listenToUserEvents() {
        this.afa.user.subscribe((user) => {
            this._user$.next(user);
            this.user = user;
        });
    }
    /**
     * Reset the password of the ngx-auth-firebaseui-user via email
     *
     * @param email - the email to reset
     */
    resetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Password reset email sent");
                return yield this.afa.sendPasswordResetEmail(email);
            }
            catch (error) {
                return this.notifyError(error);
            }
        });
    }
    /**
     * General sign in mechanism to authenticate the users with a firebase project
     * using a traditional way, via username and password or by using an authentication provider
     * like google, facebook, twitter and github
     *
     * @param provider - the provider to authenticate with (google, facebook, twitter, github)
     * @param credentials optional email and password
     */
    signInWith(provider, credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let signInResult;
                switch (provider) {
                    case AuthProvider.ANONYMOUS:
                        signInResult = (yield this.afa.signInAnonymously());
                        break;
                    case AuthProvider.EmailAndPassword:
                        signInResult = (yield this.afa.signInWithEmailAndPassword(credentials.email, credentials.password));
                        break;
                    case AuthProvider.Google:
                        signInResult = (yield this.afa.signInWithPopup(googleAuthProvider));
                        break;
                    case AuthProvider.Apple:
                        signInResult = (yield this.afa.signInWithPopup(appleAuthProvider));
                        break;
                    case AuthProvider.Facebook:
                        signInResult = (yield this.afa.signInWithPopup(facebookAuthProvider));
                        break;
                    case AuthProvider.Twitter:
                        signInResult = (yield this.afa.signInWithPopup(twitterAuthProvider));
                        break;
                    case AuthProvider.Github:
                        signInResult = (yield this.afa.signInWithPopup(githubAuthProvider));
                        break;
                    case AuthProvider.Microsoft:
                        signInResult = (yield this.afa.signInWithPopup(microsoftAuthProvider));
                        break;
                    case AuthProvider.Yahoo:
                        signInResult = (yield this.afa.signInWithPopup(yahooAuthProvider));
                        break;
                    case AuthProvider.PhoneNumber:
                        // coming soon - see feature/sms branch
                        break;
                    default:
                        throw new Error(`${AuthProvider[provider]} is not available as auth provider`);
                }
                yield this.handleSuccess(signInResult);
            }
            catch (err) {
                this.handleError(err);
            }
        });
    }
    /**
     * Sign up new users via email and password.
     * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
     *
     * @param displayName - the displayName if the new ngx-auth-firebaseui-user
     * @param credentials email and password
     * @returns -
     */
    signUp(displayName, credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userCredential = yield this.afa.createUserWithEmailAndPassword(credentials.email, credentials.password);
                const user = userCredential.user;
                yield this.updateProfile(displayName, user.photoURL);
                if (this.config.enableFirestoreSync) {
                    yield this.fireStoreService.getUserDocRefByUID(user.uid).set({
                        uid: user.uid,
                        displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                    });
                }
                if (this.config.enableEmailVerification) {
                    yield user.sendEmailVerification();
                }
                // Legacy fields
                this.emailConfirmationSent = true;
                this.emailToConfirm = credentials.email;
                yield this.handleSuccess(userCredential);
            }
            catch (err) {
                this.handleError(err);
            }
        });
    }
    sendNewVerificationEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.user) {
                return Promise.reject(new Error("No signed in user"));
            }
            return this.user.sendEmailVerification();
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.afa.signOut();
            }
            catch (error) {
                this.notifyError(error);
            }
        });
    }
    /**
     * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
     * firebase authentication feature (not in firestore)
     *
     * @param name - the new name of the authenticated ngx-auth-firebaseui-user
     * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
     * @returns -
     */
    updateProfile(name, photoURL) {
        return this.afa.currentUser.then((user) => {
            if (!photoURL) {
                return user.updateProfile({ displayName: name });
            }
            else {
                return user.updateProfile({ displayName: name, photoURL });
            }
        });
    }
    parseUserInfo(user) {
        return {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null,
        };
    }
    getUserPhotoUrl() {
        return this._user$.pipe(map((user) => {
            if (!user) {
                return null;
            }
            else if (user.photoURL) {
                return user.photoURL;
            }
            else if (user.emailVerified) {
                return this.getPhotoPath(Accounts.CHECK);
            }
            else if (user.isAnonymous) {
                return this.getPhotoPath(Accounts.OFF);
            }
            else {
                return this.getPhotoPath(Accounts.NONE);
            }
        }));
    }
    getPhotoPath(image) {
        return `assets/user/${image}.svg`;
    }
    signInWithPhoneNumber() {
        // todo: 3.1.18
    }
    handleSuccess(userCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.config.useRawUserCredential) {
                this.onSuccessEmitter.next(userCredential);
            }
            else {
                this.onSuccessEmitter.next(userCredential.user);
            }
            if (this.config.enableFirestoreSync) {
                try {
                    yield this.fireStoreService.updateUserData(this.parseUserInfo(userCredential.user));
                }
                catch (e) {
                    console.error(`Error occurred while updating user data with firestore: ${e}`);
                }
            }
            if (this.config.toastMessageOnAuthSuccess) {
                const fallbackMessage = `Hello ${userCredential.user.displayName ? userCredential.user.displayName : ""}!`;
                this.showToast(this.messageOnAuthSuccess || fallbackMessage);
            }
        });
    }
    handleError(error) {
        this.notifyError(error);
        console.error(error);
    }
    // Refresh user info. Can be useful for instance to get latest status regarding email verification.
    reloadUserInfo() {
        return this._user$
            .pipe(take(1))
            .subscribe((user) => user && user.reload());
    }
    // Search for an error message.
    // Consumers of this library are given the possibility to provide a
    // function in case they want to instrument message based on error properties.
    getMessageOnAuthError(error) {
        // tslint:disable-next-line:no-bitwise
        return (error.toString() || "Sorry, something went wrong. Please retry later.");
    }
    // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
    // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
    // If that's the case, an action button is added to allow the end-user to dismiss the toast.
    showToast(message) {
        if (message) {
            this.snackBar.open(message, this.matSnackBarConfig.duration ? null : "OK");
        }
    }
    showErrorToast(error) {
        if (this.config.toastMessageOnAuthError) {
            this.showToast(this.getMessageOnAuthError(error));
        }
    }
    notifyError(error) {
        this.onErrorEmitter.emit(error);
        this.showErrorToast(error);
    }
}
AuthProcessService.ɵprov = ɵɵdefineInjectable({ factory: function AuthProcessService_Factory() { return new AuthProcessService(ɵɵinject(AngularFireAuth), ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵɵinject(MatSnackBar), ɵɵinject(FirestoreSyncService), ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: AuthProcessService, providedIn: "root" });
AuthProcessService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root",
            },] }
];
AuthProcessService.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgxAuthFirebaseUIConfigToken),] }] },
    { type: MatSnackBar },
    { type: FirestoreSyncService },
    { type: MatSnackBarConfig, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
];

const defaultTranslations = {
    verifyEmailTitleText: 'Confirm your e-mail address!',
    verifyEmailConfirmationText: 'A confirmation e-mail has been sent.' +
        ' Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.',
    verifyEmailGoBackText: 'Go back',
    sendNewVerificationEmailText: 'Send new confirmation e-mail',
    signOutText: 'Sign out',
    messageOnEmailConfirmationSuccess: 'A new confirmation e-mail has been sent. Please check your inbox.',
};
class EmailConfirmationComponent {
    constructor(authProcess, router, changeDetectorRef) {
        this.authProcess = authProcess;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.signOut = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.verifyEmailTemplate && changes.verifyEmailTemplate.currentValue == null) {
            this.verifyEmailTemplate = this.defaultTemplate;
            console.log('ngOnChanges - defaultTemplate:', this.verifyEmailTemplate);
        }
        this.verifyEmailContext = this.createTemplateContext();
    }
    ngOnInit() {
        if (!this.verifyEmailTemplate) {
            console.log('ngOnInit - defaultTemplate');
            this.verifyEmailTemplate = this.defaultTemplate;
        }
        this.verifyEmailContext = this.createTemplateContext();
        console.log('verifyEmailTemplate:', this.verifyEmailTemplate);
        console.log('verifyEmailContext:', this.verifyEmailContext);
    }
    continue() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.authProcess.reloadUserInfo();
                yield this.router.navigate([this.goBackURL]);
            }
            catch (error) {
                this.authProcess.notifyError(error);
            }
        });
    }
    sendNewVerificationEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                this.changeDetectorRef.markForCheck();
                yield this.authProcess.sendNewVerificationEmail();
                this.authProcess.showToast(this.verifyEmailContext.messageOnEmailConfirmationSuccess);
            }
            catch (error) {
                this.authProcess.notifyError(error);
            }
            finally {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    createTemplateContext() {
        return {
            email: this.email,
            goBackURL: this.goBackURL,
            verifyEmailTitleText: this.verifyEmailTitleText || defaultTranslations.verifyEmailTitleText,
            verifyEmailConfirmationText: this.verifyEmailConfirmationText || defaultTranslations.verifyEmailConfirmationText,
            verifyEmailGoBackText: this.verifyEmailGoBackText || defaultTranslations.verifyEmailGoBackText,
            sendNewVerificationEmailText: this.sendNewVerificationEmailText || defaultTranslations.sendNewVerificationEmailText,
            signOutText: this.signOutText || defaultTranslations.signOutText,
            messageOnEmailConfirmationSuccess: this.messageOnEmailConfirmationSuccess || defaultTranslations.messageOnEmailConfirmationSuccess
        };
    }
}
EmailConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-email-confirmation',
                template: "<ng-container *ngTemplateOutlet=\"verifyEmailTemplate; context: verifyEmailContext\"></ng-container>\n<ng-template #defaultVerifyEmail let-email=\"email\" let-goBackURL=\"goBackURL\"\n             let-sendNewVerificationEmailText=\"sendNewVerificationEmailText\"\n             let-signOutText=\"signOutText\"\n             let-verifyEmailConfirmationText=\"verifyEmailConfirmationText\" let-verifyEmailGoBackText=\"verifyEmailGoBackText\"\n             let-verifyEmailTitleText=\"verifyEmailTitleText\">\n  <mat-card class=\"verify-email\">\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-icon>email</mat-icon>\n      <p class=\"title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span class=\"mat-subheading-2\">{{ verifyEmailTitleText }}</span>\n        <span class=\"mat-body-2\">{{ email }}</span>\n      </p>\n      <p class=\"subtitle\">{{ verifyEmailConfirmationText }}</p>\n      <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    </mat-card-content>\n    <mat-card-actions fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <button (click)=\"continue()\" *ngIf=\"goBackURL\" class=\"go-back-button action-button\" mat-stroked-button>\n        {{ verifyEmailGoBackText }}\n      </button>\n      <button (click)=\"sendNewVerificationEmail()\" class=\"send-new-mail-button action-button\"\n              mat-stroked-button>{{ sendNewVerificationEmailText }}</button>\n      <button (click)=\"this.signOut.emit()\" class=\"sign-out-button action-button\" color=\"warn\"\n              mat-stroked-button>{{ signOutText }}</button>\n    </mat-card-actions>\n  </mat-card>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".material-icons{font-size:4rem}.verify-email{width:360px}.verify-email .mat-icon{color:#444;height:4rem;width:4rem}.verify-email .title{margin-top:16px}.verify-email .title .mat-subheading-2{margin-bottom:0}.verify-email .subtitle{margin:16px auto;text-align:justify}.verify-email p{-webkit-margin-after:1em;-webkit-margin-before:1em;-webkit-margin-end:0;-webkit-margin-start:0;display:block}.verify-email mat-card-actions{margin-top:1rem;text-align:center}.verify-email mat-card-actions .action-button{width:100%}.verify-email mat-card-actions .action-button+.action-button{margin-top:1rem}"]
            },] }
];
EmailConfirmationComponent.ctorParameters = () => [
    { type: AuthProcessService },
    { type: Router },
    { type: ChangeDetectorRef }
];
EmailConfirmationComponent.propDecorators = {
    email: [{ type: Input }],
    goBackURL: [{ type: Input }],
    verifyEmailTitleText: [{ type: Input }],
    verifyEmailConfirmationText: [{ type: Input }],
    verifyEmailGoBackText: [{ type: Input }],
    sendNewVerificationEmailText: [{ type: Input }],
    signOutText: [{ type: Input }],
    messageOnEmailConfirmationSuccess: [{ type: Input }],
    template: [{ type: Input }],
    signOut: [{ type: Output }],
    defaultTemplate: [{ type: ViewChild, args: ['defaultVerifyEmail', { static: true },] }]
};

class LegalityDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // tslint:disable-next-line:variable-name
        this._disableConfirmActionButton = false;
    }
    get disableConfirmActionButton() {
        if (this.data.tosUrl && this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !(this.checkTOS && this.checkPrivacyPolicy);
        }
        else if (this.data.tosUrl && !this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !this.checkTOS;
        }
        else if (!this.data.tosUrl && this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !this.checkPrivacyPolicy;
        }
        return this._disableConfirmActionButton;
    }
    closeDialog() {
        const result = {
            checked: !this.disableConfirmActionButton,
            authProvider: this.data.authProvider
        };
        this.dialogRef.close(result);
    }
}
LegalityDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-legality-dialog',
                template: "<h1 matDialogTitle>Legal requirements</h1>\n\n<mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start\">\n    <mat-checkbox *ngIf=\"this.data.tosUrl\" [(ngModel)]=\"checkTOS\">\n      I agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.tosUrl\"\n         target=\"_blank\">\n        Terms of Service and Conditions\n      </a>\n    </mat-checkbox>\n\n    <mat-checkbox *ngIf=\"this.data.privacyPolicyUrl\"\n                  [(ngModel)]=\"checkPrivacyPolicy\">\n      I have read and agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.privacyPolicyUrl\"\n         target=\"_blank\">\n        Privacy\n      </a>\n    </mat-checkbox>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button color=\"warn\"\n          id=\"decline-action\"\n          mat-raised-button\n          matDialogClose>Decline\n  </button>\n  <button (click)=\"closeDialog()\"\n          [disabled]=\"disableConfirmActionButton\"\n          color=\"primary\"\n          id=\"confirm-action\"\n          mat-raised-button>Confirm\n  </button>\n</mat-dialog-actions>\n\n",
                styles: ["::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content div{margin-top:1.5rem}mat-dialog-actions{margin-top:1rem}"]
            },] }
];
LegalityDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

const customAnimation = animation([
    style({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
const NgxAuthFirebaseuiAnimations = [
    trigger('animate', [transition('void => *', [useAnimation(customAnimation)])]),
    trigger('animateStagger', [
        state('50', style('*')),
        state('100', style('*')),
        state('200', style('*')),
        transition('void => 50', query('@*', [stagger('50ms', [animateChild()])], { optional: true })),
        transition('void => 100', query('@*', [stagger('100ms', [animateChild()])], { optional: true })),
        transition('void => 200', query('@*', [stagger('200ms', [animateChild()])], { optional: true }))
    ]),
];

const EMAIL_REGEX = new RegExp([
    '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    "[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+",
    "[a-zA-Z]{2,}))$",
].join(""));
// tslint:disable-next-line:max-line-length
const PHONE_NUMBER_REGEX = new RegExp([
    "^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{4,12}$",
].join(""));
class AuthComponent {
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

class NgxAuthFirebaseuiAvatarComponent {
    constructor(afa, dialog, authProcess) {
        this.afa = afa;
        this.dialog = dialog;
        this.authProcess = authProcess;
        this.layout = "default";
        this.canLogout = true;
        this.canViewAccount = true;
        this.canDeleteAccount = true;
        this.canEditAccount = true;
        this.textProfile = "Profile";
        this.textSignOut = "Sign Out";
        // tslint:disable-next-line:no-output-on-prefix
        this.onSignOut = new EventEmitter();
    }
    ngOnInit() {
        this.user$ = this.afa.user;
        this.user$.subscribe((user) => {
            this.user = user;
            this.displayNameInitials = user
                ? this.getDisplayNameInitials(user.displayName)
                : null;
        });
    }
    getDisplayNameInitials(displayName) {
        if (!displayName) {
            return null;
        }
        const initialsRegExp = displayName.match(/\b\w/g) || [];
        const initials = ((initialsRegExp.shift() || "") + (initialsRegExp.pop() || "")).toUpperCase();
        return initials;
    }
    openProfile() {
        const dialogRef = this.dialog.open(UserComponent);
        const instance = dialogRef.componentInstance;
        instance.canDeleteAccount = this.canDeleteAccount;
        instance.canEditAccount = this.canEditAccount;
        instance
            .onSignOut
            .pipe(take(1)).subscribe(_ => this.onSignOut.emit()); // propagate the onSignout event
        instance
            .onAccountEdited
            .pipe(take(1)).subscribe(_ => this.displayNameInitials = this.getDisplayNameInitials(this.authProcess.user.displayName)); // update display name initials?
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.afa.signOut();
                // Sign-out successful.
                this.onSignOut.emit();
            }
            catch (e) {
                // An error happened.
                console.error("An error happened while signing out!", e);
            }
        });
    }
}
NgxAuthFirebaseuiAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: "ngx-auth-firebaseui-avatar",
                template: "<button *ngIf=\"user\"\n        class=\"ngx-auth-firebaseui-avatar-button\"\n        [matMenuTriggerFor]=\"posXMenu\"\n        [matTooltip]=\"user?.displayName\"\n        [style.background-image]=\"'url(' + user?.photoURL + ')'\"\n        aria-label=\"Open x-positioned menu\"\n        mat-mini-fab\n        style=\"background-size: cover\">\n  <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n</button>\n\n<mat-menu #posXMenu=\"matMenu\" class=\"before ngx-auth-firebaseui-avatar-menu\" xPosition=\"before\" >\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding-left: 10px; padding-right: 10px\" [ngStyle]=\"{ 'padding-top.px': layout === 'default' ? 0 : 10 }\">\n    <button [style.background-image]=\"user?.photoURL ? 'url(' + user?.photoURL + ')' : ''\"\n            mat-fab\n            style=\"background-size: cover\"\n            *ngIf=\"layout === 'default'\">\n      <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n    </button>\n    <div fxLayout=\"column\" style=\"padding-left: 10px; padding-right: 10px\">\n      <strong mat-card-title>{{user?.displayName}}</strong>\n      <em mat-card-subtitle style=\"font-style: italic\">{{user?.email}}</em>\n    </div>\n  </div>\n\n  <div fxFlex=\"100\" fxLayout=\"column\" [ngStyle]=\"{ 'padding-bottom.px': layout === 'default' ? 0 : 10 } \">\n    <div *ngFor=\"let menuItem of links\" class=\"links-menu\">\n      <button (click)=\"menuItem?.callback()\" mat-menu-item>\n        <mat-icon>{{menuItem?.icon}}</mat-icon>\n        {{menuItem?.text}}</button>\n    </div>\n    <button *ngIf=\"canViewAccount\" (click)=\"openProfile()\" color=\"primary\" fxLayoutAlign=\"center\" mat-raised-button>{{ textProfile }}\n    </button>\n    <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"warn\" fxLayoutAlign=\"center\" mat-raised-button>{{ textSignOut }}\n    </button>\n  </div>\n</mat-menu>\n",
                styles: [".mat-raised-button{margin:.2rem 1rem}.links-menu{text-align:center}"]
            },] }
];
NgxAuthFirebaseuiAvatarComponent.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: MatDialog },
    { type: AuthProcessService }
];
NgxAuthFirebaseuiAvatarComponent.propDecorators = {
    layout: [{ type: Input }],
    canLogout: [{ type: Input }],
    links: [{ type: Input }],
    canViewAccount: [{ type: Input }],
    canDeleteAccount: [{ type: Input }],
    canEditAccount: [{ type: Input }],
    textProfile: [{ type: Input }],
    textSignOut: [{ type: Input }],
    onSignOut: [{ type: Output }]
};

class NgxAuthFirebaseuiLoginComponent {
    constructor(
    // tslint:disable-next-line:ban-types
    platformId, authProcess, formBuilder) {
        this.platformId = platformId;
        this.authProcess = authProcess;
        this.formBuilder = formBuilder;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
        this.registrationEnabled = true;
        this.resetPasswordEnabled = true;
        // i18n
        this.titleText = 'LOGIN TO YOUR ACCOUNT';
        this.rememberMeText = 'Remember Me';
        this.loginButtonText = 'LOGIN';
        this.orLabelText = 'OR';
        this.forgotPasswordText = 'Forgot Password?';
        this.dontHaveAnAccountText = 'Don\'t have an account?';
        this.createAccountButtonText = 'Create an account';
        // i18n email
        this.emailText = 'Email';
        this.emailErrorRequiredText = 'Email is required';
        this.emailErrorPatternText = 'Please enter a valid email address';
        // i18n password
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        // tslint:disable-next-line:no-output-on-prefix
        this.onCreateAccountRequested = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onResetPasswordRequested = new EventEmitter();
        this.onLoginButtonClicked = new EventEmitter();
        this.authProviders = AuthProvider;
        this.authenticationError = false;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    get color() {
        return this.authenticationError ? 'warn' : 'primary';
    }
    get colorAccent() {
        return this.authenticationError ? 'warn' : 'accent';
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe(() => this.authenticationError = true);
        }
        this.updateAuthSnackbarMessages();
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    updateAuthSnackbarMessages() {
        this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
        this.authProcess.messageOnAuthError = this.messageOnAuthError;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            // Emit event for button click
            this.onLoginButtonClicked.emit();
            return yield this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                email: this.loginForm.controls.email.value,
                password: this.loginForm.controls.password.value
            });
        });
    }
}
NgxAuthFirebaseuiLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-login',
                template: "<div fxLayout=\"column\" id=\"login\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"login-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"login-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"loginForm\" name=\"loginForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\">\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"loginForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"!loginForm.get('email')?.hasError('required') &&\n                                loginForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"current-password\">\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error>\n            {{passwordErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n             class=\"remember-forgot-password\" fxLayout=\"row\"\n             fxLayout.xs=\"column\"\n             fxLayoutAlign=\"space-between center\">\n          <!--          <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">-->\n          <!--            {{rememberMeText}}-->\n          <!--          </mat-checkbox>-->\n\n          <button (click)=\"onResetPasswordRequested.emit()\"\n                  *ngIf=\"resetPasswordEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                  [color]=\"color\"\n                  class=\"forgot-password\"\n                  mat-button\n                  type=\"button\">\n            {{forgotPasswordText}}\n          </button>\n        </div>\n\n        <button (click)=\"login()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"loginForm.invalid\"\n                aria-label=\"LOG IN\"\n                class=\"submit-button\"\n                id=\"loginButton\"\n                mat-raised-button>\n          {{loginButtonText}}\n        </button>\n\n      </form>\n\n      <div *ngIf=\"providers.length > 0\"\n           [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n           class=\"separator\">\n        <span class=\"text\">{{orLabelText}}</span>\n      </div>\n\n      <ngx-auth-firebaseui-providers [providers]=\"providers\"\n                                     fxLayoutAlign=\"center center\"\n                                     layout=\"column\"\n                                     theme=\"raised\"></ngx-auth-firebaseui-providers>\n\n      <div *ngIf=\"registrationEnabled\"\n           [@animateStagger]=\"{ value: '100' }\"\n           class=\"register\"\n           fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{dontHaveAnAccountText}}\n        </span>\n        <button (click)=\"onCreateAccountRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"color\"\n                id=\"createAccountButton\"\n                mat-button\n                type=\"button\">{{createAccountButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: NgxAuthFirebaseuiAnimations,
                styles: ["ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{height:150px;margin:32px auto;width:150px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{text-align:left;width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.apple-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{color:#fff;font-size:13px;margin-bottom:8px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}"]
            },] }
];
NgxAuthFirebaseuiLoginComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: AuthProcessService },
    { type: FormBuilder }
];
NgxAuthFirebaseuiLoginComponent.propDecorators = {
    logoUrl: [{ type: Input }],
    providers: [{ type: Input }],
    appearance: [{ type: Input }],
    registrationEnabled: [{ type: Input }],
    resetPasswordEnabled: [{ type: Input }],
    messageOnAuthSuccess: [{ type: Input }],
    messageOnAuthError: [{ type: Input }],
    titleText: [{ type: Input }],
    rememberMeText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    orLabelText: [{ type: Input }],
    forgotPasswordText: [{ type: Input }],
    dontHaveAnAccountText: [{ type: Input }],
    createAccountButtonText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    passwordText: [{ type: Input }],
    passwordErrorRequiredText: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    onCreateAccountRequested: [{ type: Output }],
    onResetPasswordRequested: [{ type: Output }],
    onLoginButtonClicked: [{ type: Output }]
};

const confirmPasswordValidator = (control) => {
    if (!control.parent || !control) {
        return null;
    }
    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { passwordsNotMatching: true };
};
class NgxAuthFirebaseuiRegisterComponent {
    // tslint:disable-next-line:ban-types
    constructor(platformId, config, formBuilder, authProcess) {
        // Configure the layout
        this.platformId = platformId;
        this.config = config;
        this.formBuilder = formBuilder;
        this.authProcess = authProcess;
        // i18n common
        this.titleText = 'CREATE AN ACCOUNT';
        this.termsAndConditionsText = 'I read and accept the';
        this.termsAndConditionsLinkText = 'terms and conditions';
        this.privacyPolicyText = 'I read and accept the';
        this.privacyPolicyLinkText = 'privacy policy';
        this.createAccountButtonText = 'CREATE AN ACCOUNT';
        this.alreadyHaveAccountText = 'Already have an account?';
        this.loginButtonText = 'LOGIN';
        // i18n name
        this.nameText = 'Name';
        this.nameErrorRequiredText = 'Name is required';
        // i18n email
        this.emailText = 'Email';
        this.emailErrorRequiredText = 'Email is required';
        this.emailErrorPatternText = 'Please enter a valid email address';
        // i18n password
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        this.passwordConfirmationText = 'Password Confirmation';
        this.passwordConfirmationErrorRequiredText = 'Password confirmation is required';
        this.passwordErrorMatchText = 'Password must match';
        this.passwordErrorMinLengthText = "The password is too short!";
        this.passwordErrorMaxLengthText = "The password is too long!";
        // tslint:disable-next-line:no-output-on-prefix
        this.onLoginRequested = new EventEmitter();
        this.onCreateAccountButtonClicked = new EventEmitter();
        this.authenticationError = false;
        // Set the private defaults
        this.unsubscribeAll = new Subject();
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    get color() {
        return this.authenticationError ? 'warn' : 'primary';
    }
    get colorAccent() {
        return this.authenticationError ? 'warn' : 'accent';
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe(() => this.authenticationError = true);
        }
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,
                    Validators.minLength(this.config.passwordMinLength),
                    Validators.maxLength(this.config.passwordMaxLength)]],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
            tos: [''],
            privacyPolicy: ['']
        });
        // If tos or privacy policy url set, ensure that the two form items are required
        if (this.tosUrl) {
            this.registerForm.controls.tos.setValidators(Validators.requiredTrue);
        }
        if (this.privacyPolicyUrl) {
            this.registerForm.controls.privacyPolicy.setValidators(Validators.requiredTrue);
        }
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm
            .controls
            .password
            .valueChanges.pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {
            this.registerForm.controls.passwordConfirm.updateValueAndValidity();
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    createAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            // Emit the create account clicked event.
            this.onCreateAccountButtonClicked.emit();
            return yield this.authProcess.signUp(this.registerForm.controls.name.value, {
                email: this.registerForm.controls.email.value,
                password: this.registerForm.controls.password.value
            });
        });
    }
}
NgxAuthFirebaseuiRegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-register',
                template: "<div fxLayout=\"column\" id=\"register\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"register-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"register-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"registerForm\" name=\"registerForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"nameText\" formControlName=\"name\" matInput/>\n          <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n          <mat-error>\n            {{nameErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\"/>\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('required')\">\n            {{passwordErrorRequiredText}}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('minlength')\">\n            {{ passwordErrorMinLengthText }}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('maxlength')\">\n            {{ passwordErrorMaxLengthText }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordConfirmationText\" formControlName=\"passwordConfirm\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('passwordConfirm')?.hasError('required')\">\n            {{passwordConfirmationErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"\n              !registerForm.get('passwordConfirm')?.hasError('required') &&\n              registerForm.get('passwordConfirm')?.hasError('passwordsNotMatching')\n            \">\n            {{passwordErrorMatchText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div *ngIf=\"this.tosUrl\">\n          <mat-checkbox aria-label=\"{{termsAndConditionsText}}\" formControlName=\"tos\" required>\n            <span>{{termsAndConditionsText}}</span>\n            <a target=\"_blank\" [href]=\"this.tosUrl\">\n                {{termsAndConditionsLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <div *ngIf=\"this.privacyPolicyUrl\">\n          <mat-checkbox aria-label=\"{{privacyPolicyText}}\" formControlName=\"privacyPolicy\" required>\n            <span>{{privacyPolicyText}}</span>\n            <a target=\"_blank\" [href]=\"this.privacyPolicyUrl\">\n                {{privacyPolicyLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <button (click)=\"createAccount()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"registerForm.invalid\"\n                aria-label=\"CREATE AN ACCOUNT\"\n                class=\"submit-button\"\n                id=\"createAccountButton\"\n                mat-raised-button>\n          {{createAccountButtonText}}\n        </button>\n      </form>\n\n      <div [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" class=\"register\" fxLayout=\"column\"\n           fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{alreadyHaveAccountText}}\n        </span>\n        <button (click)=\"onLoginRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"colorAccent\"\n                id=\"loginButton\"\n                mat-button\n                type=\"button\">\n          {{loginButtonText}}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: NgxAuthFirebaseuiAnimations,
                styles: ["ngx-auth-firebaseui-register #register{background-size:cover;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{margin:32px auto;width:128px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{text-align:left;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{color:#fff;font-size:13px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}"]
            },] }
];
NgxAuthFirebaseuiRegisterComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgxAuthFirebaseUIConfigToken),] }] },
    { type: FormBuilder },
    { type: AuthProcessService }
];
NgxAuthFirebaseuiRegisterComponent.propDecorators = {
    logoUrl: [{ type: Input }],
    appearance: [{ type: Input }],
    tosUrl: [{ type: Input }],
    privacyPolicyUrl: [{ type: Input }],
    titleText: [{ type: Input }],
    termsAndConditionsText: [{ type: Input }],
    termsAndConditionsLinkText: [{ type: Input }],
    privacyPolicyText: [{ type: Input }],
    privacyPolicyLinkText: [{ type: Input }],
    createAccountButtonText: [{ type: Input }],
    alreadyHaveAccountText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    nameText: [{ type: Input }],
    nameErrorRequiredText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    passwordText: [{ type: Input }],
    passwordErrorRequiredText: [{ type: Input }],
    passwordConfirmationText: [{ type: Input }],
    passwordConfirmationErrorRequiredText: [{ type: Input }],
    passwordErrorMatchText: [{ type: Input }],
    passwordErrorMinLengthText: [{ type: Input }],
    passwordErrorMaxLengthText: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    onLoginRequested: [{ type: Output }],
    onCreateAccountButtonClicked: [{ type: Output }]
};

class UserComponent {
    constructor(auth, authProcess, fireStoreService, config) {
        this.auth = auth;
        this.authProcess = authProcess;
        this.fireStoreService = fireStoreService;
        this.config = config;
        this.canLogout = true;
        this.canEditAccount = true;
        this.canDeleteAccount = true;
        // i18n commons
        this.notLoggedInText = "You are not logged in!";
        this.emailVerifiedText = "email is verified";
        this.emailNotVerifiedText = "email is not verified";
        this.cancelButtonText = "cancel";
        this.saveChangesButtonText = "Save changes";
        this.editButtonText = "edit";
        this.signoutButtonText = "Sign out";
        this.deleteAccountButtonText = "Delete account";
        //i18n name
        this.nameText = "Name";
        this.nameErrorRequiredText = "Name is required";
        // i18n email
        this.emailText = "Email";
        this.emailErrorRequiredText = "Email is required";
        this.emailErrorPatternText = "Please enter a valid email address";
        // i18n phone
        this.phoneText = "Phone number";
        this.phoneHintText = `
    The phone number is international. Therefore, it should start with a + sign or 00,
    followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890

      NOTE : the phone number must be a valid phone credential !!`;
        this.phoneErrorPatternText = "Please enter a valid phone number";
        // tslint:disable-next-line:no-output-on-prefix
        this.onSignOut = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onAccountEdited = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onAccountDeleted = new EventEmitter();
    }
    changeEditMode() {
        if (this.editMode) {
            this.reset();
            this.editMode = false;
        }
        else {
            this.initUpdateFormGroup().subscribe((updateFormGroup) => {
                this.updateFormGroup = updateFormGroup;
                this.editMode = true;
            });
        }
    }
    reset() {
        this.updateFormGroup.reset();
        this.updateFormGroup.disable();
        this.updateFormGroup = null;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.updateFormGroup.dirty) {
                this.editMode = false;
                const user = this.authProcess.user;
                // ngx-auth-firebaseui-user.updateProfile()
                // ngx-auth-firebaseui-user.updateEmail()
                // console.log('form = ', this.updateFormGroup);
                const snackBarMsg = [];
                try {
                    if (this.updateNameFormControl.dirty) {
                        yield user.updateProfile({
                            displayName: this.updateNameFormControl.value,
                        });
                        snackBarMsg.push(`your name has been updated to ${user.displayName}`);
                    }
                    if (this.updateEmailFormControl.dirty) {
                        yield user.updateEmail(this.updateEmailFormControl.value);
                        snackBarMsg.push(`your email has been updated to ${user.email}`);
                    }
                    if (this.updatePhoneNumberFormControl.dirty) {
                        yield user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
                        console.log("phone number = ", this.updatePhoneNumberFormControl.value);
                        snackBarMsg.push(`your phone number has been updated to ${user.phoneNumber}`);
                    }
                    if (this.config.enableFirestoreSync) {
                        yield this.fireStoreService.updateUserData(this.authProcess.parseUserInfo(user));
                    }
                }
                catch (error) {
                    this.authProcess.showToast(error && error.message ? error.message : error);
                    console.error(error);
                }
                if (snackBarMsg.length > 0) {
                    this.authProcess.showToast(snackBarMsg.join("\\n"));
                }
                this.onAccountEdited.emit(); // emit event if the form was dirty
                this.updateFormGroup.reset();
            }
        });
    }
    signOut() {
        this.auth
            .signOut()
            .then(() => this.onSignOut.emit())
            .catch((e) => console.error("An error happened while signing out!", e));
    }
    /**
     * Delete the account of the current firebase ngx-auth-firebaseui-user
     *
     * On Success, emit the <onAccountDeleted> event and toast a msg!#
     * Otherwise, log the and toast and error msg!
     *
     */
    deleteAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = this.authProcess.user;
                // await this.authProcess.deleteAccount();
                yield this.authProcess.user.delete();
                // if (this.config.enableFirestoreSync) {
                yield this.fireStoreService.deleteUserData(user.uid);
                // }
                this.onAccountDeleted.emit();
                this.editMode = false;
                console.log("Your account has been successfully deleted!");
                this.authProcess.showToast("Your account has been successfully deleted!");
            }
            catch (error) {
                console.log("Error while delete user account", error);
                this.authProcess.showToast(`Error occurred while deleting your account: ${error.message}`);
            }
        });
    }
    initUpdateFormGroup() {
        return this.authProcess.user$.pipe(take(1), map((currentUser) => {
            const updateFormGroup = new FormGroup({
                name: this.updateNameFormControl = new FormControl({ value: currentUser.displayName, disabled: this.editMode }, [
                    Validators.required,
                    Validators.minLength(this.config.nameMinLength),
                    Validators.maxLength(this.config.nameMaxLength),
                ]),
                email: this.updateEmailFormControl = new FormControl({ value: currentUser.email, disabled: this.editMode }, [Validators.required, Validators.pattern(EMAIL_REGEX)]),
                phoneNumber: this.updatePhoneNumberFormControl = new FormControl({ value: currentUser.phoneNumber, disabled: this.editMode }, [Validators.pattern(PHONE_NUMBER_REGEX)]),
            });
            updateFormGroup.enable();
            return updateFormGroup;
        }));
    }
}
UserComponent.decorators = [
    { type: Component, args: [{
                selector: "ngx-auth-firebaseui-user",
                template: "<div *ngIf=\"auth.authState| async; then authenticated else none\">\n\n</div>\n\n<ng-template #authenticated>\n  <mat-card *ngIf=\"auth.user | async as user\">\n    <!--<form [formGroup]=\"updateFormGroup\" >-->\n    <!--card header-->\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <img *ngIf=\"authProcess?.getUserPhotoUrl() | async as photoUrl\" [src]=\"photoUrl\" mat-card-avatar>\n\n      <div *ngIf=\"user.emailVerified; then emailVerified else emailNotVerified\"></div>\n      <ng-template #emailVerified>\n        <mat-icon color=\"primary\"\n                  [matTooltip]=\"emailVerifiedText\"\n                  matTooltipPosition=\"after\">\n          verified_user\n        </mat-icon>\n      </ng-template>\n      <ng-template #emailNotVerified>\n        <mat-icon color=\"warn\"\n                  [matTooltip]=\"emailNotVerifiedText\"\n                  matTooltipPosition=\"after\">\n          warning\n        </mat-icon>\n      </ng-template>\n\n    </mat-card-header>\n\n    <!--card content-->\n    <mat-card-content *ngIf=\"editMode; then edit else readonly\">\n    </mat-card-content>\n\n    <ng-template #edit>\n      <form (submit)=\"save()\" [formGroup]=\"updateFormGroup\">\n\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"changeEditMode()\" class=\"edit-button\" color=\"warn\"\n                    mat-raised-button>\n              {{cancelButtonText}}\n            </button>\n          </div>\n\n          <!--name-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{nameText}}</mat-label>\n            <input [formControl]=\"updateNameFormControl\"\n                   matInput\n                   [placeholder]=\"nameText\">\n            <mat-icon matSuffix>person</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\"> {{ updateNameFormControl.value?.length }}\n              / {{ config.nameMaxLength }} </mat-hint>\n            <mat-error *ngIf=\"updateNameFormControl.hasError('required')\">\n              {{nameErrorRequiredText}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--email-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{emailText}}</mat-label>\n            <input [formControl]=\"updateEmailFormControl\"\n                   matInput\n                   [placeholder]=\"emailText\">\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('required')\">\n              {{emailErrorRequiredText}} {{updateEmailFormControl.value}}\n            </mat-error>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('pattern')\">\n              {{emailErrorPatternText}} {{updateEmailFormControl.value}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--phone number-->\n          <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{phoneText}}</mat-label>\n            <input [formControl]=\"updatePhoneNumberFormControl\"\n                   matInput\n                   [placeholder]=\"phoneText\"\n                   type=\"tel\">\n            <mat-icon matSuffix>phone</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\">\n              {{phoneHintText}}\n            </mat-hint>\n            <mat-error *ngIf=\"updatePhoneNumberFormControl.hasError('pattern')\">\n              {{phoneErrorPatternText}}\n            </mat-error>\n          </mat-form-field>\n\n        </mat-card-content>\n\n        <mat-card-actions fxLayout=\"column\">\n          <button color=\"primary\"\n                  mat-button\n                  type=\"submit\">\n            {{saveChangesButtonText}}\n          </button>\n        </mat-card-actions>\n      </form>\n    </ng-template>\n\n    <ng-template #readonly>\n      <div fxLayoutAlign=\"center\">\n        <button *ngIf=\"canEditAccount\" (click)=\"changeEditMode()\" class=\"edit-button\" color=\"primary\"\n                mat-raised-button>\n          {{editButtonText}}\n        </button>\n      </div>\n\n      <!--name-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{nameText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.displayName\"\n               matInput\n               [placeholder]=\"nameText\">\n        <mat-icon color=\"primary\" matSuffix>person</mat-icon>\n      </mat-form-field>\n\n      <!--email-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{emailText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.email\" matInput\n               [placeholder]=\"emailText\">\n        <mat-icon color=\"primary\" matSuffix>email</mat-icon>\n      </mat-form-field>\n\n      <!--phone number-->\n      <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{phoneText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.phoneNumber\"\n               matInput\n               [placeholder]=\"phoneText\">\n        <mat-icon color=\"primary\" matSuffix>phone</mat-icon>\n      </mat-form-field>\n\n      <mat-card-actions fxLayout=\"column\">\n        <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"primary\" mat-button>{{signoutButtonText}}</button>\n        <button (click)=\"deleteAccount()\" *ngIf=\"canDeleteAccount\" color=\"warn\" mat-button>{{deleteAccountButtonText}}</button>\n      </mat-card-actions>\n\n    </ng-template>\n\n  </mat-card>\n\n</ng-template>\n\n\n<ng-template #none>\n  <mat-card class=\"none-card\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-icon color=\"accent\">warning</mat-icon>\n      <span>{{notLoggedInText}}</span>\n    </mat-card-content>\n  </mat-card>\n</ng-template>\n",
                styles: [".edit-button{margin:1rem}.full-width{width:100%}.cut-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.none-card{min-height:430px}.none-card span{color:rgba(0,0,0,.54);font-size:24px;text-align:center}"]
            },] }
];
UserComponent.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: AuthProcessService },
    { type: FirestoreSyncService },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgxAuthFirebaseUIConfigToken),] }] }
];
UserComponent.propDecorators = {
    editMode: [{ type: Input }],
    canLogout: [{ type: Input }],
    canEditAccount: [{ type: Input }],
    canDeleteAccount: [{ type: Input }],
    appearance: [{ type: Input }],
    notLoggedInText: [{ type: Input }],
    emailVerifiedText: [{ type: Input }],
    emailNotVerifiedText: [{ type: Input }],
    cancelButtonText: [{ type: Input }],
    saveChangesButtonText: [{ type: Input }],
    editButtonText: [{ type: Input }],
    signoutButtonText: [{ type: Input }],
    deleteAccountButtonText: [{ type: Input }],
    nameText: [{ type: Input }],
    nameErrorRequiredText: [{ type: Input }],
    emailText: [{ type: Input }],
    emailErrorRequiredText: [{ type: Input }],
    emailErrorPatternText: [{ type: Input }],
    phoneText: [{ type: Input }],
    phoneHintText: [{ type: Input }],
    phoneErrorPatternText: [{ type: Input }],
    onSignOut: [{ type: Output }],
    onAccountEdited: [{ type: Output }],
    onAccountDeleted: [{ type: Output }]
};

var Theme;
(function (Theme) {
    Theme["DEFAULT"] = "default";
    Theme["CLASSIC"] = "classic";
    Theme["STROKED"] = "stroked";
    Theme["FAB"] = "fab";
    Theme["MINI_FAB"] = "mini-fab";
    Theme["RAISED"] = "raised";
})(Theme || (Theme = {}));
var Layout;
(function (Layout) {
    Layout["ROW"] = "row";
    Layout["COLUMN"] = "column";
})(Layout || (Layout = {}));
class AuthProvidersComponent {
    constructor(authProcess, dialog) {
        this.authProcess = authProcess;
        this.dialog = dialog;
        this.layout = Layout.ROW;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo
        this.themes = Theme;
        this.authProvider = AuthProvider;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    processLegalSignUP(authProvider) {
        if (this.tosUrl || this.privacyPolicyUrl) {
            const params = {
                tosUrl: this.tosUrl,
                privacyPolicyUrl: this.privacyPolicyUrl,
                authProvider
            };
            this.dialogRef = this.dialog.open(LegalityDialogComponent, { data: params });
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result && result.checked) {
                    // this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
                    this.authProcess.signInWith(authProvider);
                }
                this.dialogRef = null;
            });
        }
        else {
            // this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
            this.authProcess.signInWith(authProvider);
        }
    }
}
AuthProvidersComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-auth-firebaseui-providers',
                template: "<div [@animateStagger]=\"{ value: '50' }\" [ngSwitch]=\"theme\">\n\n  <!--default icon buttons-->\n  <div *ngSwitchDefault\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"google-colored\"></mat-icon>\n      Google\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n      Apple\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n      Yahoo\n    </button>\n  </div>\n\n  <!--classic-->\n  <div *ngSwitchCase=\"themes.CLASSIC\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--stroked-->\n  <div *ngSwitchCase=\"themes.STROKED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-stroked-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-stroked-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-stroked-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-stroked-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-stroked-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-stroked-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-stroked-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--raised-->\n  <div *ngSwitchCase=\"themes.RAISED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-raised\"\n            mat-raised-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-raised\"\n            mat-raised-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-raised\"\n            mat-raised-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-raised\"\n            mat-raised-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-raised\"\n            mat-raised-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-raised\"\n            mat-raised-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-raised\"\n            mat-raised-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--fab-->\n  <div *ngSwitchCase=\"themes.FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n\n  <!--mini-fab-->\n  <div *ngSwitchCase=\"themes.MINI_FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayoutAlign.xs=\"center center\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            fxFlexAlign=\"center\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-mini-fab>\n      <mat-icon class=\"icon-white\" svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n</div>\n",
                animations: NgxAuthFirebaseuiAnimations,
                styles: [":host{display:block}.space-full-xs{margin:.4rem;width:100%}.apple-filled mat-icon svg path{fill:#000}.facebook-filled mat-icon{fill:#385899}.twitter-filled mat-icon{fill:#1da1f2}.buttons-raised button{color:#fff!important}.buttons-raised .google-raised{background-color:#db4437}.buttons-raised .apple-raised{background-color:#000}.buttons-raised .facebook-raised{background-color:#385899}.buttons-raised .twitter-raised{background-color:#1da1f2}.buttons-raised .github-raised{background-color:#000}.buttons-raised .microsoft-raised{background-color:#0078d4}.buttons-raised .yahoo-raised{background-color:#720e9e}.buttons-raised .phone-raised{background-color:#02bd7e}.buttons-classic button.google-classic{color:#db4437!important}.buttons-classic button.apple-classic{color:#000!important}.buttons-classic .facebook-classic{color:#385899!important}.buttons-classic .twitter-classic{color:#1da1f2!important}.buttons-classic .github-classic{color:#000!important}.buttons-classic .microsoft-classic{color:#0078d4!important}.buttons-classic .yahoo-classic{color:#720e9e!important}.buttons-classic .phone-classic{color:#02bd7e}.icon-white{color:#fff}.icon-white mat-icon{fill:#fff}button.microsoft{background:#f8f9fa}"]
            },] }
];
AuthProvidersComponent.ctorParameters = () => [
    { type: AuthProcessService },
    { type: MatDialog }
];
AuthProvidersComponent.propDecorators = {
    theme: [{ type: Input }],
    layout: [{ type: Input }],
    providers: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onError: [{ type: Output }],
    tosUrl: [{ type: Input }],
    privacyPolicyUrl: [{ type: Input }]
};

// import * as firebase from 'firebase';
const defaultAuthFirebaseUIConfig = {
    // authMethod: 'redirect',
    // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
    enableFirestoreSync: true,
    toastMessageOnAuthSuccess: true,
    toastMessageOnAuthError: true,
    authGuardFallbackURL: '/',
    authGuardLoggedInURL: '/',
    // Password length min/max in forms independently of each componenet min/max.
    // `min/max` input parameters in components should be within this range.
    passwordMaxLength: 60,
    passwordMinLength: 8,
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2,
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    guardProtectedRoutesUntilEmailIsVerified: true,
    // Default to email verification on
    enableEmailVerification: true,
    // Default to false to keep the current projects working as is
    useRawUserCredential: false
};
// Merge default config with user provided config.
function ngxAuthFirebaseUIConfigFactory(userProvidedConfig) {
    return Object.assign({}, defaultAuthFirebaseUIConfig, userProvidedConfig);
}

class LoggedInGuard {
    constructor(config, router, authProcess) {
        this.config = config;
        this.router = router;
        this.authProcess = authProcess;
    }
    canActivate(route, state) {
        return this.authProcess.afa.user.pipe(map(user => {
            if (user) {
                if (this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified && !user.isAnonymous) {
                    if (this.config.authGuardFallbackURL) {
                        this.router.navigate([`${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url } });
                    }
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (this.config.authGuardFallbackURL) {
                    this.router.navigate([`/${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url } });
                }
                return false;
            }
        }));
    }
}
LoggedInGuard.ɵprov = ɵɵdefineInjectable({ factory: function LoggedInGuard_Factory() { return new LoggedInGuard(ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵɵinject(Router), ɵɵinject(AuthProcessService)); }, token: LoggedInGuard, providedIn: "root" });
LoggedInGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoggedInGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NgxAuthFirebaseUIConfigToken,] }] },
    { type: Router },
    { type: AuthProcessService }
];

// @angular/*
class NgxAuthFirebaseUIModule {
    constructor(iconRegistry, sanitizer, auth) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        auth.listenToUserEvents();
        this.registerProviderIcons();
    }
    static forRoot(configFactory, appNameFactory = () => undefined, config = {}) {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS,
                    useValue: configFactory
                },
                {
                    provide: FIREBASE_APP_NAME,
                    useFactory: appNameFactory
                },
                { provide: UserProvidedConfigToken, useValue: config },
                {
                    provide: NgxAuthFirebaseUIConfigToken,
                    useFactory: ngxAuthFirebaseUIConfigFactory,
                    deps: [UserProvidedConfigToken]
                },
                AuthProcessService,
                FirestoreSyncService,
                LoggedInGuard
            ]
        };
    }
    registerProviderIcons() {
        this.iconRegistry
            .addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
            .addSvgIcon('apple', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/apple.svg'))
            .addSvgIcon('google-colored', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
            .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
            .addSvgIcon('microsoft', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
            .addSvgIcon('yahoo', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
            .addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
    }
}
NgxAuthFirebaseUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    // HTTP
                    RouterModule,
                    HttpClientModule,
                    // FLEX_LAYOUT
                    FlexLayoutModule,
                    // FORMS
                    FormsModule,
                    ReactiveFormsModule,
                    // MATERIAL2
                    MatTabsModule,
                    MatCardModule,
                    MatInputModule,
                    MatButtonModule,
                    MatIconModule,
                    MatSnackBarModule,
                    MatDividerModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatDialogModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule,
                    MatProgressBarModule,
                    MatDialogModule,
                    MatMenuModule,
                    // ANGULAR MATERIAL EXTENSIONS
                    MatPasswordStrengthModule,
                    // ANGULARFIRE2
                    AngularFireAuthModule,
                    AngularFirestoreModule,
                ],
                exports: [
                    AuthComponent,
                    UserComponent,
                    NgxAuthFirebaseuiAvatarComponent,
                    AuthProvidersComponent,
                    EmailConfirmationComponent,
                    // LoggedInGuard,
                    AngularFireAuthModule,
                    AngularFirestoreModule,
                    NgxAuthFirebaseuiLoginComponent,
                    NgxAuthFirebaseuiRegisterComponent
                ],
                declarations: [
                    AuthComponent,
                    UserComponent,
                    NgxAuthFirebaseuiAvatarComponent,
                    AuthProvidersComponent,
                    EmailConfirmationComponent,
                    LegalityDialogComponent,
                    NgxAuthFirebaseuiLoginComponent,
                    NgxAuthFirebaseuiRegisterComponent
                ],
                entryComponents: [
                    UserComponent,
                    LegalityDialogComponent
                ]
            },] }
];
NgxAuthFirebaseUIModule.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer },
    { type: AuthProcessService }
];

/*
 * Public API Surface of ngx-auth-firebaseui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Accounts, AuthComponent, AuthProcessService, AuthProvider, AuthProvidersComponent, EMAIL_REGEX, EmailConfirmationComponent, FirestoreSyncService, Layout, LegalityDialogComponent, LoggedInGuard, NgxAuthFirebaseUIConfigToken, NgxAuthFirebaseUIModule, NgxAuthFirebaseuiAvatarComponent, NgxAuthFirebaseuiLoginComponent, NgxAuthFirebaseuiRegisterComponent, PHONE_NUMBER_REGEX, Theme, UserComponent, UserProvidedConfigToken, appleAuthProvider, collections, confirmPasswordValidator, defaultAuthFirebaseUIConfig, facebookAuthProvider, githubAuthProvider, googleAuthProvider, microsoftAuthProvider, ngxAuthFirebaseUIConfigFactory, twitterAuthProvider, yahooAuthProvider, defaultAuthFirebaseUIConfig as ɵa, ngxAuthFirebaseUIConfigFactory as ɵb, NgxAuthFirebaseuiAnimations as ɵd, EmailConfirmationComponent as ɵe };
//# sourceMappingURL=ngx-auth-firebaseui.js.map
