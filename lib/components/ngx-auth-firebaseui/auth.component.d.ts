import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AbstractControl, FormGroup } from "@angular/forms";
import { MatTabChangeEvent, MatTabGroup } from "@angular/material/tabs";
import { ThemePalette } from "@angular/material/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { AngularFireAuth } from "@angular/fire/auth";
import { MatPasswordStrengthComponent } from "@angular-material-extensions/password-strength";
import { Subscription } from "rxjs";
import { LegalityDialogComponent, Theme } from "..";
import { NgxAuthFirebaseUIConfig } from "../../interfaces";
import { AuthProcessService, AuthProvider } from "../../services/auth-process.service";
import * as ɵngcc0 from '@angular/core';
export declare const EMAIL_REGEX: RegExp;
export declare const PHONE_NUMBER_REGEX: RegExp;
export declare class AuthComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private platformId;
    config: NgxAuthFirebaseUIConfig;
    auth: AngularFireAuth;
    authProcess: AuthProcessService;
    dialog: MatDialog;
    private activatedRoute;
    private changeDetectorRef;
    matTabGroup: MatTabGroup;
    passwordStrength: MatPasswordStrengthComponent;
    isLoading: boolean;
    providers: AuthProvider[] | AuthProvider;
    providersTheme: Theme;
    appearance: MatFormFieldAppearance;
    tabIndex: number | null;
    registrationEnabled: boolean;
    resetPasswordEnabled: boolean;
    guestEnabled: boolean;
    tosUrl: string;
    privacyPolicyUrl: string;
    goBackURL: string;
    messageOnAuthSuccess: string;
    messageOnAuthError: string;
    messageOnEmailConfirmationSuccess: string;
    onSuccess: any;
    onError: any;
    selectedTabChange: EventEmitter<MatTabChangeEvent>;
    enableLengthRule: boolean;
    enableLowerCaseLetterRule: boolean;
    enableUpperCaseLetterRule: boolean;
    enableDigitRule: boolean;
    enableSpecialCharRule: boolean;
    min: number;
    max: number;
    customValidator: RegExp;
    onStrengthChanged: EventEmitter<number>;
    verifyEmailTemplate: TemplateRef<any>;
    verifyEmailTitleText: string;
    verifyEmailConfirmationText: string;
    verifyEmailGoBackText: string;
    sendNewVerificationEmailText: string;
    signOutText: string;
    resetPasswordTabText: string;
    resetPasswordInputText: string;
    resetPasswordErrorRequiredText: string;
    resetPasswordErrorPatternText: string;
    resetPasswordActionButtonText: string;
    resetPasswordInstructionsText: string;
    signInTabText: string;
    signInCardTitleText: string;
    loginButtonText: string;
    forgotPasswordButtonText: string;
    nameText: string;
    nameErrorRequiredText: string;
    nameErrorMinLengthText: string;
    nameErrorMaxLengthText: string;
    emailText: string;
    emailErrorRequiredText: string;
    emailErrorPatternText: string;
    passwordText: string;
    passwordErrorRequiredText: string;
    passwordErrorMinLengthText: string;
    passwordErrorMaxLengthText: string;
    registerTabText: string;
    registerCardTitleText: string;
    registerButtonText: string;
    guestButtonText: string;
    emailConfirmationTitle: string;
    emailConfirmationText: string;
    authProvider: typeof AuthProvider;
    passwordResetWished: boolean;
    signInFormGroup: FormGroup;
    signUpFormGroup: FormGroup;
    resetPasswordFormGroup: FormGroup;
    onErrorSubscription: Subscription;
    authenticationError: boolean;
    passReset: boolean;
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    authProviders: typeof AuthProvider;
    signInEmailFormControl: AbstractControl;
    sigInPasswordFormControl: AbstractControl;
    sigUpNameFormControl: AbstractControl;
    sigUpEmailFormControl: AbstractControl;
    sigUpPasswordFormControl: AbstractControl;
    sigUpPasswordConfirmationFormControl: AbstractControl;
    resetPasswordEmailFormControl: AbstractControl;
    constructor(platformId: Object, config: NgxAuthFirebaseUIConfig, auth: AngularFireAuth, authProcess: AuthProcessService, dialog: MatDialog, activatedRoute: ActivatedRoute, changeDetectorRef: ChangeDetectorRef);
    get color(): string | ThemePalette;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onTabChange(event: MatTabChangeEvent): void;
    signOut(): Promise<void>;
    signIn(): Promise<void>;
    updateAuthSnackbarMessages(): void;
    createForgotPasswordTab(): void;
    processLegalSignUP(authProvider?: AuthProvider): void;
    signUp(): Promise<void>;
    signUpAnonymously(): Promise<void>;
    resetPassword(): void;
    private chooseBackUrl;
    private _initSignInFormGroupBuilder;
    private _initSignUpFormGroupBuilder;
    private _initResetPasswordFormGroupBuilder;
    private _afterSignUpMiddleware;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AuthComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<AuthComponent, "ngx-auth-firebaseui", never, { "providers": "providers"; "registrationEnabled": "registrationEnabled"; "resetPasswordEnabled": "resetPasswordEnabled"; "guestEnabled": "guestEnabled"; "enableLengthRule": "enableLengthRule"; "enableLowerCaseLetterRule": "enableLowerCaseLetterRule"; "enableUpperCaseLetterRule": "enableUpperCaseLetterRule"; "enableDigitRule": "enableDigitRule"; "enableSpecialCharRule": "enableSpecialCharRule"; "signOutText": "signOutText"; "resetPasswordTabText": "resetPasswordTabText"; "resetPasswordInputText": "resetPasswordInputText"; "resetPasswordErrorRequiredText": "resetPasswordErrorRequiredText"; "resetPasswordErrorPatternText": "resetPasswordErrorPatternText"; "resetPasswordActionButtonText": "resetPasswordActionButtonText"; "resetPasswordInstructionsText": "resetPasswordInstructionsText"; "signInTabText": "signInTabText"; "signInCardTitleText": "signInCardTitleText"; "loginButtonText": "loginButtonText"; "forgotPasswordButtonText": "forgotPasswordButtonText"; "nameText": "nameText"; "nameErrorRequiredText": "nameErrorRequiredText"; "nameErrorMinLengthText": "nameErrorMinLengthText"; "nameErrorMaxLengthText": "nameErrorMaxLengthText"; "emailText": "emailText"; "emailErrorRequiredText": "emailErrorRequiredText"; "emailErrorPatternText": "emailErrorPatternText"; "passwordText": "passwordText"; "passwordErrorRequiredText": "passwordErrorRequiredText"; "passwordErrorMinLengthText": "passwordErrorMinLengthText"; "passwordErrorMaxLengthText": "passwordErrorMaxLengthText"; "registerTabText": "registerTabText"; "registerCardTitleText": "registerCardTitleText"; "registerButtonText": "registerButtonText"; "guestButtonText": "guestButtonText"; "emailConfirmationTitle": "emailConfirmationTitle"; "emailConfirmationText": "emailConfirmationText"; "min": "min"; "max": "max"; "goBackURL": "goBackURL"; "tabIndex": "tabIndex"; "providersTheme": "providersTheme"; "appearance": "appearance"; "tosUrl": "tosUrl"; "privacyPolicyUrl": "privacyPolicyUrl"; "messageOnAuthSuccess": "messageOnAuthSuccess"; "messageOnAuthError": "messageOnAuthError"; "messageOnEmailConfirmationSuccess": "messageOnEmailConfirmationSuccess"; "customValidator": "customValidator"; "verifyEmailTemplate": "verifyEmailTemplate"; "verifyEmailTitleText": "verifyEmailTitleText"; "verifyEmailConfirmationText": "verifyEmailConfirmationText"; "verifyEmailGoBackText": "verifyEmailGoBackText"; "sendNewVerificationEmailText": "sendNewVerificationEmailText"; }, { "selectedTabChange": "selectedTabChange"; "onStrengthChanged": "onStrengthChanged"; "onSuccess": "onSuccess"; "onError": "onError"; }, never, never>;
}

//# sourceMappingURL=auth.component.d.ts.map