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

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/fire/firestore';
import * as ɵngcc2 from '@angular/fire/auth';
import * as ɵngcc3 from '@angular/material/snack-bar';
import * as ɵngcc4 from '@angular/router';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from '@angular/material/card';
import * as ɵngcc7 from '@angular/flex-layout/flex';
import * as ɵngcc8 from '@angular/material/icon';
import * as ɵngcc9 from '@angular/material/button';
import * as ɵngcc10 from '@angular/material/progress-bar';
import * as ɵngcc11 from '@angular/material/dialog';
import * as ɵngcc12 from '@angular/material/checkbox';
import * as ɵngcc13 from '@angular/forms';
import * as ɵngcc14 from '@angular/material/tabs';
import * as ɵngcc15 from '@angular/material/form-field';
import * as ɵngcc16 from '@angular/material/input';
import * as ɵngcc17 from '@angular-material-extensions/password-strength';
import * as ɵngcc18 from '@angular/material/divider';
import * as ɵngcc19 from '@angular/material/menu';
import * as ɵngcc20 from '@angular/flex-layout/extended';
import * as ɵngcc21 from '@angular/material/tooltip';
import * as ɵngcc22 from '@angular/platform-browser';

const _c0 = ["defaultVerifyEmail"];
function EmailConfirmationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function EmailConfirmationComponent_ng_template_1_mat_progress_bar_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-progress-bar", 12);
} }
function EmailConfirmationComponent_ng_template_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 13);
    ɵngcc0.ɵɵlistener("click", function EmailConfirmationComponent_ng_template_1_button_13_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.continue(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const verifyEmailGoBackText_r8 = ɵngcc0.ɵɵnextContext().verifyEmailGoBackText;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", verifyEmailGoBackText_r8, " ");
} }
function EmailConfirmationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-card", 2);
    ɵngcc0.ɵɵelementStart(1, "mat-card-content", 3);
    ɵngcc0.ɵɵelementStart(2, "mat-icon");
    ɵngcc0.ɵɵtext(3, "email");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "p", 4);
    ɵngcc0.ɵɵelementStart(5, "span", 5);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "span", 6);
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "p", 7);
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, EmailConfirmationComponent_ng_template_1_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "mat-card-actions", 3);
    ɵngcc0.ɵɵtemplate(13, EmailConfirmationComponent_ng_template_1_button_13_Template, 2, 1, "button", 9);
    ɵngcc0.ɵɵelementStart(14, "button", 10);
    ɵngcc0.ɵɵlistener("click", function EmailConfirmationComponent_ng_template_1_Template_button_click_14_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.sendNewVerificationEmail(); });
    ɵngcc0.ɵɵtext(15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(16, "button", 11);
    ɵngcc0.ɵɵlistener("click", function EmailConfirmationComponent_ng_template_1_Template_button_click_16_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.signOut.emit(); });
    ɵngcc0.ɵɵtext(17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const email_r3 = ctx.email;
    const goBackURL_r4 = ctx.goBackURL;
    const sendNewVerificationEmailText_r5 = ctx.sendNewVerificationEmailText;
    const signOutText_r6 = ctx.signOutText;
    const verifyEmailConfirmationText_r7 = ctx.verifyEmailConfirmationText;
    const verifyEmailTitleText_r9 = ctx.verifyEmailTitleText;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵtextInterpolate(verifyEmailTitleText_r9);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(email_r3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(verifyEmailConfirmationText_r7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isLoading);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", goBackURL_r4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(sendNewVerificationEmailText_r5);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(signOutText_r6);
} }
function LegalityDialogComponent_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-checkbox", 5);
    ɵngcc0.ɵɵlistener("ngModelChange", function LegalityDialogComponent_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.checkTOS = $event; });
    ɵngcc0.ɵɵtext(1, " I agree to the ");
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "a", 6);
    ɵngcc0.ɵɵtext(5, " Terms of Service and Conditions ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r0.checkTOS);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("href", ctx_r0.data.tosUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function LegalityDialogComponent_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-checkbox", 5);
    ɵngcc0.ɵɵlistener("ngModelChange", function LegalityDialogComponent_mat_checkbox_5_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.checkPrivacyPolicy = $event; });
    ɵngcc0.ɵɵtext(1, " I have read and agree to the ");
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "a", 6);
    ɵngcc0.ɵɵtext(5, " Privacy ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.checkPrivacyPolicy);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("href", ctx_r1.data.privacyPolicyUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function AuthComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "ngx-auth-firebaseui-email-confirmation", 5);
    ɵngcc0.ɵɵlistener("signOut", function AuthComponent_ng_container_0_div_1_Template_ngx_auth_firebaseui_email_confirmation_signOut_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.signOut(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r3 = ɵngcc0.ɵɵnextContext().ngIf;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("email", user_r3.email)("goBackURL", ctx_r4.goBackURL)("messageOnEmailConfirmationSuccess", ctx_r4.messageOnEmailConfirmationSuccess)("sendNewVerificationEmailText", ctx_r4.sendNewVerificationEmailText)("signOutText", ctx_r4.signOutText)("template", ctx_r4.verifyEmailTemplate)("verifyEmailConfirmationText", ctx_r4.verifyEmailConfirmationText)("verifyEmailGoBackText", ctx_r4.verifyEmailGoBackText)("verifyEmailTitleText", ctx_r4.verifyEmailTitleText);
} }
function AuthComponent_ng_container_0_ng_template_2_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const user_r3 = ɵngcc0.ɵɵnextContext(2).ngIf;
    ɵngcc0.ɵɵproperty("src", user_r3 == null ? null : user_r3.photoURL, ɵngcc0.ɵɵsanitizeUrl);
} }
function AuthComponent_ng_container_0_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 16);
    ɵngcc0.ɵɵtext(1, "account_circle");
    ɵngcc0.ɵɵelementEnd();
} }
function AuthComponent_ng_container_0_ng_template_2_mat_progress_bar_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-progress-bar", 17);
} }
function AuthComponent_ng_container_0_ng_template_2_a_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("routerLink", ctx_r14.goBackURL);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r14.verifyEmailGoBackText);
} }
function AuthComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, AuthComponent_ng_container_0_ng_template_2_img_1_Template, 1, 1, "img", 7);
    ɵngcc0.ɵɵtemplate(2, AuthComponent_ng_container_0_ng_template_2_ng_template_2_Template, 2, 0, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementStart(4, "div", 9);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 10);
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 11);
    ɵngcc0.ɵɵtemplate(9, AuthComponent_ng_container_0_ng_template_2_mat_progress_bar_9_Template, 1, 0, "mat-progress-bar", 12);
    ɵngcc0.ɵɵtemplate(10, AuthComponent_ng_container_0_ng_template_2_a_10_Template, 2, 2, "a", 13);
    ɵngcc0.ɵɵelementStart(11, "button", 14);
    ɵngcc0.ɵɵlistener("click", function AuthComponent_ng_container_0_ng_template_2_Template_button_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.signOut(); });
    ɵngcc0.ɵɵtext(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r11 = ɵngcc0.ɵɵreference(3);
    const user_r3 = ɵngcc0.ɵɵnextContext().ngIf;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", user_r3 == null ? null : user_r3.photoURL)("ngIfElse", _r11);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(user_r3 == null ? null : user_r3.displayName);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(user_r3 == null ? null : user_r3.email);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.isLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.verifyEmailGoBackText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.signOutText);
} }
function AuthComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AuthComponent_ng_container_0_div_1_Template, 2, 9, "div", 2);
    ɵngcc0.ɵɵtemplate(2, AuthComponent_ng_container_0_ng_template_2_Template, 13, 7, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    const _r5 = ɵngcc0.ɵɵreference(3);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.config.enableEmailVerification !== false && (ctx_r0.config.guardProtectedRoutesUntilEmailIsVerified && !user_r3.emailVerified || ctx_r0.authProcess.emailConfirmationSent && !user_r3.emailVerified))("ngIfElse", _r5);
} }
function AuthComponent_ng_template_2_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r19.emailErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r20.emailErrorPatternText, " ");
} }
function AuthComponent_ng_template_2_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r22.passwordErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r23.passwordErrorMinLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r24.passwordErrorMaxLengthText, " ");
} }
const _c1 = function () { return { x: "-50px" }; };
const _c2 = function (a1) { return { value: "*", params: a1 }; };
function AuthComponent_ng_template_2_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 37);
    ɵngcc0.ɵɵlistener("click", function AuthComponent_ng_template_2_button_32_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r31); const ctx_r30 = ɵngcc0.ɵɵnextContext(2); return ctx_r30.createForgotPasswordTab(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(4, _c2, ɵngcc0.ɵɵpureFunction0(3, _c1)))("color", ctx_r25.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r25.forgotPasswordButtonText, " ");
} }
const _c3 = function () { return { z: "50px", delay: "50ms", scale: "0.2" }; };
function AuthComponent_ng_template_2_mat_card_footer_33_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-card-footer");
    ɵngcc0.ɵɵelement(1, "mat-progress-bar", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c3)));
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r32.nameErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r33.nameErrorMinLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r34.nameErrorMaxLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r35.emailErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r36.emailErrorPatternText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error", 48);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r38.passwordErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error", 48);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r39.passwordErrorMinLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error", 48);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r40.passwordErrorMaxLengthText, " ");
} }
const _c4 = function () { return { x: "-100px" }; };
function AuthComponent_ng_template_2_mat_tab_34_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 49);
    ɵngcc0.ɵɵlistener("click", function AuthComponent_ng_template_2_mat_tab_34_button_44_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(3); return ctx_r44.processLegalSignUP(ctx_r44.authProvider.ANONYMOUS); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "fingerprint");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(4, _c2, ɵngcc0.ɵɵpureFunction0(3, _c4)))("color", ctx_r42.color);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r42.guestButtonText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_card_footer_45_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-card-footer");
    ɵngcc0.ɵɵelement(1, "mat-progress-bar", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c3)));
} }
const _c5 = function () { return { value: "50" }; };
const _c6 = function () { return { x: "50px" }; };
const _c7 = function () { return { x: "100px" }; };
function AuthComponent_ng_template_2_mat_tab_34_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-tab", 20);
    ɵngcc0.ɵɵelementStart(1, "mat-card");
    ɵngcc0.ɵɵelementStart(2, "mat-card-title");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "mat-card-content", 22);
    ɵngcc0.ɵɵelementStart(5, "form", 21);
    ɵngcc0.ɵɵlistener("ngSubmit", function AuthComponent_ng_template_2_mat_tab_34_Template_form_ngSubmit_5_listener() { ɵngcc0.ɵɵrestoreView(_r47); const ctx_r46 = ɵngcc0.ɵɵnextContext(2); return ctx_r46.signUpFormGroup.valid && ctx_r46.processLegalSignUP(ctx_r46.authProvider.EmailAndPassword); });
    ɵngcc0.ɵɵelementStart(6, "div", 22);
    ɵngcc0.ɵɵelementStart(7, "mat-form-field", 23);
    ɵngcc0.ɵɵelementStart(8, "mat-label");
    ɵngcc0.ɵɵtext(9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(10, "input", 38);
    ɵngcc0.ɵɵelementStart(11, "mat-icon", 25);
    ɵngcc0.ɵɵtext(12, "person");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "mat-hint", 30);
    ɵngcc0.ɵɵtext(14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(15, AuthComponent_ng_template_2_mat_tab_34_mat_error_15_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(16, AuthComponent_ng_template_2_mat_tab_34_mat_error_16_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(17, AuthComponent_ng_template_2_mat_tab_34_mat_error_17_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(18, "mat-form-field", 23);
    ɵngcc0.ɵɵelementStart(19, "mat-label");
    ɵngcc0.ɵɵtext(20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(21, "input", 39);
    ɵngcc0.ɵɵelementStart(22, "mat-icon", 25);
    ɵngcc0.ɵɵtext(23, "email");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(24, AuthComponent_ng_template_2_mat_tab_34_mat_error_24_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(25, AuthComponent_ng_template_2_mat_tab_34_mat_error_25_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(26, "div", 40);
    ɵngcc0.ɵɵelementStart(27, "mat-form-field", 23);
    ɵngcc0.ɵɵelementStart(28, "mat-label");
    ɵngcc0.ɵɵtext(29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(30, "input", 41);
    ɵngcc0.ɵɵelement(31, "mat-pass-toggle-visibility", 28, 42);
    ɵngcc0.ɵɵelementStart(33, "mat-icon", 25);
    ɵngcc0.ɵɵtext(34, "lock");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(35, "mat-hint", 30);
    ɵngcc0.ɵɵtext(36);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(37, AuthComponent_ng_template_2_mat_tab_34_mat_error_37_Template, 2, 1, "mat-error", 43);
    ɵngcc0.ɵɵtemplate(38, AuthComponent_ng_template_2_mat_tab_34_mat_error_38_Template, 2, 1, "mat-error", 43);
    ɵngcc0.ɵɵtemplate(39, AuthComponent_ng_template_2_mat_tab_34_mat_error_39_Template, 2, 1, "mat-error", 43);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(40, "mat-password-strength", 44, 45);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(42, "button", 46);
    ɵngcc0.ɵɵtext(43);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(44, AuthComponent_ng_template_2_mat_tab_34_button_44_Template, 4, 6, "button", 47);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(45, AuthComponent_ng_template_2_mat_tab_34_mat_card_footer_45_Template, 2, 4, "mat-card-footer", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r37 = ɵngcc0.ɵɵreference(32);
    const ctx_r27 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("label", ctx_r27.registerTabText);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r27.registerCardTitleText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(52, _c5))("formGroup", ctx_r27.signUpFormGroup);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(54, _c2, ɵngcc0.ɵɵpureFunction0(53, _c6)))("appearance", ctx_r27.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r27.nameText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r27.sigUpNameFormControl)("maxlength", ctx_r27.config.nameMaxLength)("minlength", ctx_r27.config.nameMinLength);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r27.color);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r27.signUpFormGroup.value.name == null ? null : ctx_r27.signUpFormGroup.value.name.length, " / ", ctx_r27.config.nameMaxLength, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpNameFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpNameFormControl.hasError("minlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpNameFormControl.hasError("maxlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(57, _c2, ɵngcc0.ɵɵpureFunction0(56, _c6)))("appearance", ctx_r27.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r27.emailText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r27.sigUpEmailFormControl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r27.color);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpEmailFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpEmailFormControl.hasError("pattern"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(60, _c2, ɵngcc0.ɵɵpureFunction0(59, _c6)))("appearance", ctx_r27.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r27.passwordText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r27.sigUpPasswordFormControl)("maxlength", ctx_r27.max)("minlength", ctx_r27.min)("type", _r37.type);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("color", ctx_r27.color);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r27.signUpFormGroup.value.password == null ? null : ctx_r27.signUpFormGroup.value.password.length, " / ", ctx_r27.max, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpPasswordFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpPasswordFormControl.hasError("minlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.sigUpPasswordFormControl.hasError("maxlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("customValidator", ctx_r27.customValidator)("enableDigitRule", ctx_r27.enableDigitRule)("enableLengthRule", ctx_r27.enableLengthRule)("enableLowerCaseLetterRule", ctx_r27.enableLowerCaseLetterRule)("enableSpecialCharRule", ctx_r27.enableSpecialCharRule)("enableUpperCaseLetterRule", ctx_r27.enableUpperCaseLetterRule)("externalError", ctx_r27.sigUpPasswordFormControl.dirty)("max", ctx_r27.max)("min", ctx_r27.min)("password", ctx_r27.signUpFormGroup.value.password);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(63, _c2, ɵngcc0.ɵɵpureFunction0(62, _c7)))("color", ctx_r27.color)("disabled", ctx_r27.signUpFormGroup.invalid);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r27.registerButtonText, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.guestEnabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.isLoading);
} }
function AuthComponent_ng_template_2_mat_tab_35_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 56);
    ɵngcc0.ɵɵlistener("click", function AuthComponent_ng_template_2_mat_tab_35_ng_template_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r54); const ctx_r53 = ɵngcc0.ɵɵnextContext(3); return ctx_r53.passwordResetWished = false; });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "mat-icon");
    ɵngcc0.ɵɵtext(3, "close");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r48.resetPasswordTabText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_35_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r49.resetPasswordErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_35_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r50.resetPasswordErrorPatternText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_35_p_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r51 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r51.resetPasswordInstructionsText);
} }
function AuthComponent_ng_template_2_mat_tab_35_mat_progress_bar_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-progress-bar", 17);
} }
const _c8 = function () { return { duration: "300ms", y: "100px" }; };
function AuthComponent_ng_template_2_mat_tab_35_Template(rf, ctx) { if (rf & 1) {
    const _r56 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-tab", 50);
    ɵngcc0.ɵɵtemplate(1, AuthComponent_ng_template_2_mat_tab_35_ng_template_1_Template, 4, 1, "ng-template", 51);
    ɵngcc0.ɵɵelementStart(2, "form", 21);
    ɵngcc0.ɵɵlistener("ngSubmit", function AuthComponent_ng_template_2_mat_tab_35_Template_form_ngSubmit_2_listener() { ɵngcc0.ɵɵrestoreView(_r56); const ctx_r55 = ɵngcc0.ɵɵnextContext(2); return ctx_r55.resetPasswordFormGroup.valid && ctx_r55.resetPassword(); });
    ɵngcc0.ɵɵelementStart(3, "mat-card", 52);
    ɵngcc0.ɵɵelementStart(4, "mat-card-content");
    ɵngcc0.ɵɵelementStart(5, "mat-form-field", 53);
    ɵngcc0.ɵɵelementStart(6, "mat-label");
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(8, "input", 54);
    ɵngcc0.ɵɵelementStart(9, "mat-icon", 25);
    ɵngcc0.ɵɵtext(10, "email");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, AuthComponent_ng_template_2_mat_tab_35_mat_error_11_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(12, AuthComponent_ng_template_2_mat_tab_35_mat_error_12_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, AuthComponent_ng_template_2_mat_tab_35_p_13_Template, 2, 1, "p", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "mat-card-actions", 32);
    ɵngcc0.ɵɵtemplate(15, AuthComponent_ng_template_2_mat_tab_35_mat_progress_bar_15_Template, 1, 0, "mat-progress-bar", 12);
    ɵngcc0.ɵɵelementStart(16, "button", 55);
    ɵngcc0.ɵɵtext(17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(14, _c5))("formGroup", ctx_r28.resetPasswordFormGroup);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(16, _c2, ɵngcc0.ɵɵpureFunction0(15, _c8)))("appearance", ctx_r28.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r28.resetPasswordInputText, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("title", ctx_r28.resetPasswordInputText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r28.color);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.resetPasswordEmailFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.resetPasswordEmailFormControl.hasError("pattern"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.passReset);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.isLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(19, _c2, ɵngcc0.ɵɵpureFunction0(18, _c6)))("color", ctx_r28.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r28.resetPasswordActionButtonText, " ");
} }
function AuthComponent_ng_template_2_ngx_auth_firebaseui_providers_37_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-auth-firebaseui-providers", 57);
} if (rf & 2) {
    const ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("providers", ctx_r29.providers)("theme", ctx_r29.providersTheme)("tosUrl", ctx_r29.tosUrl)("privacyPolicyUrl", ctx_r29.privacyPolicyUrl);
} }
function AuthComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-tab-group", 19);
    ɵngcc0.ɵɵlistener("selectedTabChange", function AuthComponent_ng_template_2_Template_mat_tab_group_selectedTabChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r58); const ctx_r57 = ɵngcc0.ɵɵnextContext(); return ctx_r57.onTabChange($event); });
    ɵngcc0.ɵɵelementStart(1, "mat-tab", 20);
    ɵngcc0.ɵɵelementStart(2, "mat-card");
    ɵngcc0.ɵɵelementStart(3, "mat-card-title");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "mat-card-content");
    ɵngcc0.ɵɵelementStart(6, "form", 21);
    ɵngcc0.ɵɵlistener("ngSubmit", function AuthComponent_ng_template_2_Template_form_ngSubmit_6_listener() { ɵngcc0.ɵɵrestoreView(_r58); const ctx_r59 = ɵngcc0.ɵɵnextContext(); return ctx_r59.signIn(); });
    ɵngcc0.ɵɵelementStart(7, "div", 22);
    ɵngcc0.ɵɵelementStart(8, "mat-form-field", 23);
    ɵngcc0.ɵɵelementStart(9, "mat-label");
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(11, "input", 24);
    ɵngcc0.ɵɵelementStart(12, "mat-icon", 25);
    ɵngcc0.ɵɵtext(13, "email");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(14, AuthComponent_ng_template_2_mat_error_14_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(15, AuthComponent_ng_template_2_mat_error_15_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(16, "mat-form-field", 23);
    ɵngcc0.ɵɵelementStart(17, "mat-label");
    ɵngcc0.ɵɵtext(18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(19, "input", 27);
    ɵngcc0.ɵɵelement(20, "mat-pass-toggle-visibility", 28, 29);
    ɵngcc0.ɵɵelementStart(22, "mat-icon", 25);
    ɵngcc0.ɵɵtext(23, "lock");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(24, "mat-hint", 30);
    ɵngcc0.ɵɵtext(25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(26, AuthComponent_ng_template_2_mat_error_26_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(27, AuthComponent_ng_template_2_mat_error_27_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵtemplate(28, AuthComponent_ng_template_2_mat_error_28_Template, 2, 1, "mat-error", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(29, "button", 31);
    ɵngcc0.ɵɵtext(30);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(31, "div", 32);
    ɵngcc0.ɵɵtemplate(32, AuthComponent_ng_template_2_button_32_Template, 2, 6, "button", 33);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(33, AuthComponent_ng_template_2_mat_card_footer_33_Template, 2, 4, "mat-card-footer", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(34, AuthComponent_ng_template_2_mat_tab_34_Template, 46, 65, "mat-tab", 34);
    ɵngcc0.ɵɵtemplate(35, AuthComponent_ng_template_2_mat_tab_35_Template, 18, 21, "mat-tab", 35);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(36, "mat-divider");
    ɵngcc0.ɵɵtemplate(37, AuthComponent_ng_template_2_ngx_auth_firebaseui_providers_37_Template, 1, 4, "ngx-auth-firebaseui-providers", 36);
} if (rf & 2) {
    const _r21 = ɵngcc0.ɵɵreference(21);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r2.color)("selectedIndex", ctx_r2.tabIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("label", ctx_r2.signInTabText);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.signInCardTitleText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(33, _c5))("formGroup", ctx_r2.signInFormGroup);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(35, _c2, ɵngcc0.ɵɵpureFunction0(34, _c8)))("appearance", ctx_r2.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.emailText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("color", ctx_r2.color);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.signInEmailFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.signInEmailFormControl.hasError("pattern"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(38, _c2, ɵngcc0.ɵɵpureFunction0(37, _c8)))("appearance", ctx_r2.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.passwordText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("maxlength", ctx_r2.max)("minlength", ctx_r2.min)("type", _r21 == null ? null : _r21.type);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("color", ctx_r2.color);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r2.signInFormGroup.value.password.length, " / ", ctx_r2.max, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.sigInPasswordFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.sigInPasswordFormControl.hasError("minlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.sigInPasswordFormControl.hasError("maxlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(41, _c2, ɵngcc0.ɵɵpureFunction0(40, _c6)))("color", ctx_r2.color)("disabled", ctx_r2.signInFormGroup.invalid);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.loginButtonText, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.resetPasswordEnabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.registrationEnabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.passwordResetWished);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tabIndex !== 2);
} }
function NgxAuthFirebaseuiAvatarComponent_button_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.displayNameInitials || "");
} }
function NgxAuthFirebaseuiAvatarComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵtemplate(1, NgxAuthFirebaseuiAvatarComponent_button_0_span_1_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵstyleProp("background-image", "url(" + (ctx_r0.user == null ? null : ctx_r0.user.photoURL) + ")");
    ɵngcc0.ɵɵproperty("matMenuTriggerFor", _r1)("matTooltip", ctx_r0.user == null ? null : ctx_r0.user.displayName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r0.user == null ? null : ctx_r0.user.photoURL));
} }
function NgxAuthFirebaseuiAvatarComponent_button_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.displayNameInitials || "");
} }
function NgxAuthFirebaseuiAvatarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵtemplate(1, NgxAuthFirebaseuiAvatarComponent_button_4_span_1_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", (ctx_r2.user == null ? null : ctx_r2.user.photoURL) ? "url(" + (ctx_r2.user == null ? null : ctx_r2.user.photoURL) + ")" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r2.user == null ? null : ctx_r2.user.photoURL));
} }
function NgxAuthFirebaseuiAvatarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵelementStart(1, "button", 16);
    ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiAvatarComponent_div_11_Template_button_click_1_listener() { const menuItem_r8 = ctx.$implicit; return menuItem_r8 == null ? null : menuItem_r8.callback(); });
    ɵngcc0.ɵɵelementStart(2, "mat-icon");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(menuItem_r8 == null ? null : menuItem_r8.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", menuItem_r8 == null ? null : menuItem_r8.text, "");
} }
function NgxAuthFirebaseuiAvatarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiAvatarComponent_button_12_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.openProfile(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r4.textProfile, " ");
} }
function NgxAuthFirebaseuiAvatarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiAvatarComponent_button_13_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.signOut(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r5.textSignOut, " ");
} }
const _c9 = function (a0) { return { "padding-top.px": a0 }; };
const _c10 = function (a0) { return { "padding-bottom.px": a0 }; };
function NgxAuthFirebaseuiLoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelement(1, "img", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c6)))("src", ctx_r0.logoUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxAuthFirebaseuiLoginComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.emailErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiLoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.emailErrorPatternText, " ");
} }
function NgxAuthFirebaseuiLoginComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 19);
    ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiLoginComponent_button_20_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onResetPasswordRequested.emit(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(4, _c2, ɵngcc0.ɵɵpureFunction0(3, _c1)))("color", ctx_r3.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.forgotPasswordText, " ");
} }
function NgxAuthFirebaseuiLoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelementStart(1, "span", 21);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c3)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.orLabelText);
} }
const _c11 = function () { return { value: "100" }; };
function NgxAuthFirebaseuiLoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "span", 21);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 23);
    ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiLoginComponent_div_25_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onCreateAccountRequested.emit(); });
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(6, _c11));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(8, _c2, ɵngcc0.ɵɵpureFunction0(7, _c7)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.dontHaveAnAccountText, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(11, _c2, ɵngcc0.ɵɵpureFunction0(10, _c4)))("color", ctx_r5.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.createAccountButtonText);
} }
function NgxAuthFirebaseuiRegisterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelement(1, "img", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c6)))("src", ctx_r0.logoUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.emailErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.emailErrorPatternText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.passwordErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.passwordErrorMinLengthText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.passwordErrorMaxLengthText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.passwordConfirmationErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r7.passwordErrorMatchText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "mat-checkbox", 19);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "a", 20);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("aria-label", ctx_r8.termsAndConditionsText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.termsAndConditionsText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", ctx_r8.tosUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r8.termsAndConditionsLinkText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "mat-checkbox", 21);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "a", 20);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("aria-label", ctx_r9.privacyPolicyText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.privacyPolicyText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", ctx_r9.privacyPolicyUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r9.privacyPolicyLinkText, " ");
} }
function UserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} }
function UserComponent_ng_template_2_mat_card_0_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 10);
} if (rf & 2) {
    const photoUrl_r18 = ctx.ngIf;
    ɵngcc0.ɵɵproperty("src", photoUrl_r18, ɵngcc0.ɵɵsanitizeUrl);
} }
function UserComponent_ng_template_2_mat_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 11);
    ɵngcc0.ɵɵtext(1, " verified_user ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r10.emailVerifiedText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 12);
    ɵngcc0.ɵɵtext(1, " warning ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r12.emailNotVerifiedText);
} }
function UserComponent_ng_template_2_mat_card_0_mat_card_content_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-card-content");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r19.nameErrorRequiredText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r20.emailErrorRequiredText, " ", ctx_r20.updateEmailFormControl.value, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r21.emailErrorPatternText, " ", ctx_r21.updateEmailFormControl.value, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r23.phoneErrorPatternText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "input", 23);
    ɵngcc0.ɵɵelementStart(4, "mat-icon", 18);
    ɵngcc0.ɵɵtext(5, "phone");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "mat-hint", 19);
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_mat_error_8_Template, 2, 1, "mat-error", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("appearance", ctx_r22.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.phoneText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r22.updatePhoneNumberFormControl)("placeholder", ctx_r22.phoneText);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r22.phoneHintText, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r22.updatePhoneNumberFormControl.hasError("pattern"));
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "form", 13);
    ɵngcc0.ɵɵlistener("submit", function UserComponent_ng_template_2_mat_card_0_ng_template_10_Template_form_submit_0_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r24 = ɵngcc0.ɵɵnextContext(3); return ctx_r24.save(); });
    ɵngcc0.ɵɵelementStart(1, "mat-card-content", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "button", 15);
    ɵngcc0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_10_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r26 = ɵngcc0.ɵɵnextContext(3); return ctx_r26.changeEditMode(); });
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(6, "mat-label");
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(8, "input", 17);
    ɵngcc0.ɵɵelementStart(9, "mat-icon", 18);
    ɵngcc0.ɵɵtext(10, "person");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "mat-hint", 19);
    ɵngcc0.ɵɵtext(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_13_Template, 2, 1, "mat-error", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(15, "mat-label");
    ɵngcc0.ɵɵtext(16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(17, "input", 17);
    ɵngcc0.ɵɵelementStart(18, "mat-icon", 18);
    ɵngcc0.ɵɵtext(19, "email");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(20, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_20_Template, 2, 2, "mat-error", 3);
    ɵngcc0.ɵɵtemplate(21, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_21_Template, 2, 2, "mat-error", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(22, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_Template, 9, 6, "mat-form-field", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(23, "mat-card-actions", 21);
    ɵngcc0.ɵɵelementStart(24, "button", 22);
    ɵngcc0.ɵɵtext(25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("formGroup", ctx_r15.updateFormGroup);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r15.cancelButtonText, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("appearance", ctx_r15.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.nameText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r15.updateNameFormControl)("placeholder", ctx_r15.nameText);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r15.updateNameFormControl.value == null ? null : ctx_r15.updateNameFormControl.value.length, " / ", ctx_r15.config.nameMaxLength, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.updateNameFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("appearance", ctx_r15.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.emailText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r15.updateEmailFormControl)("placeholder", ctx_r15.emailText);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.updateEmailFormControl.hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.updateEmailFormControl.hasError("pattern"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", false);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r15.saveChangesButtonText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 29);
    ɵngcc0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(4); return ctx_r31.changeEditMode(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r27.editButtonText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "input", 25);
    ɵngcc0.ɵɵelementStart(4, "mat-icon", 26);
    ɵngcc0.ɵɵtext(5, "phone");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = ɵngcc0.ɵɵnextContext(2).ngIf;
    const ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("appearance", ctx_r28.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r28.phoneText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r28.editMode)("value", user_r6.phoneNumber)("placeholder", ctx_r28.phoneText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 30);
    ɵngcc0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_16_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r35); const ctx_r34 = ɵngcc0.ɵɵnextContext(4); return ctx_r34.signOut(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r29.signoutButtonText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 31);
    ɵngcc0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_17_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(4); return ctx_r36.deleteAccount(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r30.deleteAccountButtonText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, UserComponent_ng_template_2_mat_card_0_ng_template_12_button_1_Template, 2, 1, "button", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(3, "mat-label");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "input", 25);
    ɵngcc0.ɵɵelementStart(6, "mat-icon", 26);
    ɵngcc0.ɵɵtext(7, "person");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(9, "mat-label");
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(11, "input", 25);
    ɵngcc0.ɵɵelementStart(12, "mat-icon", 26);
    ɵngcc0.ɵɵtext(13, "email");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(14, UserComponent_ng_template_2_mat_card_0_ng_template_12_mat_form_field_14_Template, 6, 5, "mat-form-field", 20);
    ɵngcc0.ɵɵelementStart(15, "mat-card-actions", 21);
    ɵngcc0.ɵɵtemplate(16, UserComponent_ng_template_2_mat_card_0_ng_template_12_button_16_Template, 2, 1, "button", 27);
    ɵngcc0.ɵɵtemplate(17, UserComponent_ng_template_2_mat_card_0_ng_template_12_button_17_Template, 2, 1, "button", 28);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = ɵngcc0.ɵɵnextContext().ngIf;
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r17.canEditAccount);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("appearance", ctx_r17.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r17.nameText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r17.editMode)("value", user_r6.displayName)("placeholder", ctx_r17.nameText);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("appearance", ctx_r17.appearance);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r17.emailText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r17.editMode)("value", user_r6.email)("placeholder", ctx_r17.emailText);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", false);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r17.canLogout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r17.canDeleteAccount);
} }
function UserComponent_ng_template_2_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-card");
    ɵngcc0.ɵɵelementStart(1, "mat-card-header", 4);
    ɵngcc0.ɵɵtemplate(2, UserComponent_ng_template_2_mat_card_0_img_2_Template, 1, 1, "img", 5);
    ɵngcc0.ɵɵpipe(3, "async");
    ɵngcc0.ɵɵtemplate(4, UserComponent_ng_template_2_mat_card_0_div_4_Template, 1, 0, "div", 0);
    ɵngcc0.ɵɵtemplate(5, UserComponent_ng_template_2_mat_card_0_ng_template_5_Template, 2, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(7, UserComponent_ng_template_2_mat_card_0_ng_template_7_Template, 2, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(9, UserComponent_ng_template_2_mat_card_0_mat_card_content_9_Template, 1, 0, "mat-card-content", 0);
    ɵngcc0.ɵɵtemplate(10, UserComponent_ng_template_2_mat_card_0_ng_template_10_Template, 26, 17, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(12, UserComponent_ng_template_2_mat_card_0_ng_template_12_Template, 18, 14, "ng-template", null, 9, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = ctx.ngIf;
    const _r9 = ɵngcc0.ɵɵreference(6);
    const _r11 = ɵngcc0.ɵɵreference(8);
    const _r14 = ɵngcc0.ɵɵreference(11);
    const _r16 = ɵngcc0.ɵɵreference(13);
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(3, 7, ctx_r5.authProcess == null ? null : ctx_r5.authProcess.getUserPhotoUrl()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", user_r6.emailVerified)("ngIfThen", _r9)("ngIfElse", _r11);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.editMode)("ngIfThen", _r14)("ngIfElse", _r16);
} }
function UserComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, UserComponent_ng_template_2_mat_card_0_Template, 14, 9, "mat-card", 3);
    ɵngcc0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 1, ctx_r2.auth.user));
} }
function UserComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-card", 32);
    ɵngcc0.ɵɵelementStart(1, "mat-card-content", 33);
    ɵngcc0.ɵɵelementStart(2, "mat-icon", 34);
    ɵngcc0.ɵɵtext(3, "warning");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.notLoggedInText);
} }
const _c12 = function () { return { "space-full-xs": true }; };
function AuthProvidersComponent_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.processLegalSignUP(ctx_r13.authProvider.Google); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 12);
    ɵngcc0.ɵɵtext(2, " Google ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 13);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.processLegalSignUP(ctx_r15.authProvider.Apple); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 14);
    ɵngcc0.ɵɵtext(2, " Apple ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 15);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.processLegalSignUP(ctx_r17.authProvider.Facebook); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 16);
    ɵngcc0.ɵɵtext(2, " Facebook ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.processLegalSignUP(ctx_r19.authProvider.Twitter); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 18);
    ɵngcc0.ɵɵtext(2, " Twitter ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.processLegalSignUP(ctx_r21.authProvider.Github); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 19);
    ɵngcc0.ɵɵtext(2, " GitHub ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.processLegalSignUP(ctx_r23.authProvider.Microsoft); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 20);
    ɵngcc0.ɵɵtext(2, " Microsoft ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.processLegalSignUP(ctx_r25.authProvider.Yahoo); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 21);
    ɵngcc0.ɵɵtext(2, " Yahoo ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_1_button_1_Template, 3, 6, "button", 7);
    ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_1_button_2_Template, 3, 6, "button", 8);
    ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_1_button_3_Template, 3, 6, "button", 9);
    ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_1_button_4_Template, 3, 6, "button", 10);
    ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_1_button_5_Template, 3, 6, "button", 7);
    ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_1_button_6_Template, 3, 6, "button", 7);
    ɵngcc0.ɵɵtemplate(7, AuthProvidersComponent_div_1_button_7_Template, 3, 6, "button", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fxLayoutAlign", ctx_r0.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r0.layout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Google));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Apple));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Facebook));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Twitter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Github));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Microsoft));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 30);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r35); const ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.processLegalSignUP(ctx_r34.authProvider.Google); });
    ɵngcc0.ɵɵtext(1, " Google ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 31);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.processLegalSignUP(ctx_r36.authProvider.Apple); });
    ɵngcc0.ɵɵtext(1, " Apple ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 32);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r39); const ctx_r38 = ɵngcc0.ɵɵnextContext(2); return ctx_r38.processLegalSignUP(ctx_r38.authProvider.Facebook); });
    ɵngcc0.ɵɵtext(1, " Facebook ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 33);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r40 = ɵngcc0.ɵɵnextContext(2); return ctx_r40.processLegalSignUP(ctx_r40.authProvider.Twitter); });
    ɵngcc0.ɵɵtext(1, " Twitter ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 34);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(2); return ctx_r42.processLegalSignUP(ctx_r42.authProvider.Github); });
    ɵngcc0.ɵɵtext(1, " GitHub ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 35);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(2); return ctx_r44.processLegalSignUP(ctx_r44.authProvider.Microsoft); });
    ɵngcc0.ɵɵtext(1, " Microsoft ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 36);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r47); const ctx_r46 = ɵngcc0.ɵɵnextContext(2); return ctx_r46.processLegalSignUP(ctx_r46.authProvider.Yahoo); });
    ɵngcc0.ɵɵtext(1, " Yahoo ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_2_button_1_Template, 2, 6, "button", 23);
    ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_2_button_2_Template, 2, 6, "button", 24);
    ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_2_button_3_Template, 2, 6, "button", 25);
    ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_2_button_4_Template, 2, 6, "button", 26);
    ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_2_button_5_Template, 2, 6, "button", 27);
    ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_2_button_6_Template, 2, 6, "button", 28);
    ɵngcc0.ɵɵtemplate(7, AuthProvidersComponent_div_2_button_7_Template, 2, 6, "button", 29);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fxLayoutAlign", ctx_r1.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r1.layout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Google));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Apple));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Facebook));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Twitter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Github));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Microsoft));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 44);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r56); const ctx_r55 = ɵngcc0.ɵɵnextContext(2); return ctx_r55.processLegalSignUP(ctx_r55.authProvider.Google); });
    ɵngcc0.ɵɵtext(1, " Google ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 45);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r58); const ctx_r57 = ɵngcc0.ɵɵnextContext(2); return ctx_r57.processLegalSignUP(ctx_r57.authProvider.Apple); });
    ɵngcc0.ɵɵtext(1, " Apple ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r60 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 46);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r60); const ctx_r59 = ɵngcc0.ɵɵnextContext(2); return ctx_r59.processLegalSignUP(ctx_r59.authProvider.Facebook); });
    ɵngcc0.ɵɵtext(1, " Facebook ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 47);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r62); const ctx_r61 = ɵngcc0.ɵɵnextContext(2); return ctx_r61.processLegalSignUP(ctx_r61.authProvider.Twitter); });
    ɵngcc0.ɵɵtext(1, " Twitter ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 48);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r64); const ctx_r63 = ɵngcc0.ɵɵnextContext(2); return ctx_r63.processLegalSignUP(ctx_r63.authProvider.Github); });
    ɵngcc0.ɵɵtext(1, " GitHub ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 49);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r66); const ctx_r65 = ɵngcc0.ɵɵnextContext(2); return ctx_r65.processLegalSignUP(ctx_r65.authProvider.Microsoft); });
    ɵngcc0.ɵɵtext(1, " Microsoft ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r68 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 50);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r68); const ctx_r67 = ɵngcc0.ɵɵnextContext(2); return ctx_r67.processLegalSignUP(ctx_r67.authProvider.Yahoo); });
    ɵngcc0.ɵɵtext(1, " Yahoo ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_3_button_1_Template, 2, 6, "button", 37);
    ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_3_button_2_Template, 2, 6, "button", 38);
    ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_3_button_3_Template, 2, 6, "button", 39);
    ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_3_button_4_Template, 2, 6, "button", 40);
    ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_3_button_5_Template, 2, 6, "button", 41);
    ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_3_button_6_Template, 2, 6, "button", 42);
    ɵngcc0.ɵɵtemplate(7, AuthProvidersComponent_div_3_button_7_Template, 2, 6, "button", 43);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fxLayoutAlign", ctx_r2.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r2.layout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Google));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Apple));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Facebook));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Twitter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Github));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Microsoft));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 59);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r77); const ctx_r76 = ɵngcc0.ɵɵnextContext(2); return ctx_r76.processLegalSignUP(ctx_r76.authProvider.Google); });
    ɵngcc0.ɵɵtext(1, " Google ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 60);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r79); const ctx_r78 = ɵngcc0.ɵɵnextContext(2); return ctx_r78.processLegalSignUP(ctx_r78.authProvider.Apple); });
    ɵngcc0.ɵɵtext(1, " Apple ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r81 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 61);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r81); const ctx_r80 = ɵngcc0.ɵɵnextContext(2); return ctx_r80.processLegalSignUP(ctx_r80.authProvider.Facebook); });
    ɵngcc0.ɵɵtext(1, " Facebook ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 62);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r83); const ctx_r82 = ɵngcc0.ɵɵnextContext(2); return ctx_r82.processLegalSignUP(ctx_r82.authProvider.Twitter); });
    ɵngcc0.ɵɵtext(1, " Twitter ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r85 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 63);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r85); const ctx_r84 = ɵngcc0.ɵɵnextContext(2); return ctx_r84.processLegalSignUP(ctx_r84.authProvider.Github); });
    ɵngcc0.ɵɵtext(1, " GitHub ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r87 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 64);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r87); const ctx_r86 = ɵngcc0.ɵɵnextContext(2); return ctx_r86.processLegalSignUP(ctx_r86.authProvider.Microsoft); });
    ɵngcc0.ɵɵtext(1, " Microsoft ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r89 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 65);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r89); const ctx_r88 = ɵngcc0.ɵɵnextContext(2); return ctx_r88.processLegalSignUP(ctx_r88.authProvider.Yahoo); });
    ɵngcc0.ɵɵtext(1, " Yahoo ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(3, _c2, ɵngcc0.ɵɵpureFunction0(2, _c8)))("ngClass.xs", ɵngcc0.ɵɵpureFunction0(5, _c12));
} }
function AuthProvidersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 51);
    ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_4_button_1_Template, 2, 6, "button", 52);
    ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_4_button_2_Template, 2, 6, "button", 53);
    ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_4_button_3_Template, 2, 6, "button", 54);
    ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_4_button_4_Template, 2, 6, "button", 55);
    ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_4_button_5_Template, 2, 6, "button", 56);
    ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_4_button_6_Template, 2, 6, "button", 57);
    ɵngcc0.ɵɵtemplate(7, AuthProvidersComponent_div_4_button_7_Template, 2, 6, "button", 58);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fxLayoutAlign", ctx_r3.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r3.layout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Google));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Apple));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Facebook));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Twitter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Github));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Microsoft));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r98 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 74);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r98); const ctx_r97 = ɵngcc0.ɵɵnextContext(2); return ctx_r97.processLegalSignUP(ctx_r97.authProvider.Google); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 75);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r100 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 76);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r100); const ctx_r99 = ɵngcc0.ɵɵnextContext(2); return ctx_r99.processLegalSignUP(ctx_r99.authProvider.Apple); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 77);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r102); const ctx_r101 = ɵngcc0.ɵɵnextContext(2); return ctx_r101.processLegalSignUP(ctx_r101.authProvider.Facebook); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r104 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 78);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r104); const ctx_r103 = ɵngcc0.ɵɵnextContext(2); return ctx_r103.processLegalSignUP(ctx_r103.authProvider.Twitter); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r106 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 79);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r106); const ctx_r105 = ɵngcc0.ɵɵnextContext(2); return ctx_r105.processLegalSignUP(ctx_r105.authProvider.Github); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r108 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 80);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r108); const ctx_r107 = ɵngcc0.ɵɵnextContext(2); return ctx_r107.processLegalSignUP(ctx_r107.authProvider.Microsoft); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r110 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 81);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r110); const ctx_r109 = ɵngcc0.ɵɵnextContext(2); return ctx_r109.processLegalSignUP(ctx_r109.authProvider.Yahoo); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 66);
    ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_5_button_1_Template, 2, 4, "button", 67);
    ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_5_button_2_Template, 2, 4, "button", 68);
    ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_5_button_3_Template, 2, 4, "button", 69);
    ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_5_button_4_Template, 2, 4, "button", 70);
    ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_5_button_5_Template, 2, 4, "button", 71);
    ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_5_button_6_Template, 2, 4, "button", 72);
    ɵngcc0.ɵɵtemplate(7, AuthProvidersComponent_div_5_button_7_Template, 2, 4, "button", 73);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fxLayoutAlign", ctx_r4.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r4.layout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Google));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Apple));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Facebook));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Twitter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Github));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Microsoft));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 90);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r119); const ctx_r118 = ɵngcc0.ɵɵnextContext(2); return ctx_r118.processLegalSignUP(ctx_r118.authProvider.Google); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 75);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r121 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 91);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r121); const ctx_r120 = ɵngcc0.ɵɵnextContext(2); return ctx_r120.processLegalSignUP(ctx_r120.authProvider.Apple); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r123 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 92);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r123); const ctx_r122 = ɵngcc0.ɵɵnextContext(2); return ctx_r122.processLegalSignUP(ctx_r122.authProvider.Facebook); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r125 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 93);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r125); const ctx_r124 = ɵngcc0.ɵɵnextContext(2); return ctx_r124.processLegalSignUP(ctx_r124.authProvider.Twitter); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 94);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r127 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 95);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r127); const ctx_r126 = ɵngcc0.ɵɵnextContext(2); return ctx_r126.processLegalSignUP(ctx_r126.authProvider.Github); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r129 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 96);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r129); const ctx_r128 = ɵngcc0.ɵɵnextContext(2); return ctx_r128.processLegalSignUP(ctx_r128.authProvider.Microsoft); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r131 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 97);
    ɵngcc0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r131); const ctx_r130 = ɵngcc0.ɵɵnextContext(2); return ctx_r130.processLegalSignUP(ctx_r130.authProvider.Yahoo); });
    ɵngcc0.ɵɵelement(1, "mat-icon", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(2, _c2, ɵngcc0.ɵɵpureFunction0(1, _c8)));
} }
function AuthProvidersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 82);
    ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_6_button_1_Template, 2, 4, "button", 83);
    ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_6_button_2_Template, 2, 4, "button", 84);
    ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_6_button_3_Template, 2, 4, "button", 85);
    ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_6_button_4_Template, 2, 4, "button", 86);
    ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_6_button_5_Template, 2, 4, "button", 87);
    ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_6_button_6_Template, 2, 4, "button", 88);
    ɵngcc0.ɵɵtemplate(7, AuthProvidersComponent_div_6_button_7_Template, 2, 4, "button", 89);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fxLayoutAlign", ctx_r5.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r5.layout);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Google));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Apple));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Facebook));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Twitter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Github));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Microsoft));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Yahoo));
} }
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
FirestoreSyncService.ɵfac = function FirestoreSyncService_Factory(t) { return new (t || FirestoreSyncService)(ɵngcc0.ɵɵinject(ɵngcc1.AngularFirestore)); };
FirestoreSyncService.ɵprov = ɵɵdefineInjectable({ factory: function FirestoreSyncService_Factory() { return new FirestoreSyncService(ɵɵinject(AngularFirestore)); }, token: FirestoreSyncService, providedIn: "root" });
FirestoreSyncService.ctorParameters = () => [
    { type: AngularFirestore }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FirestoreSyncService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ɵngcc1.AngularFirestore }]; }, null); })();

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
AuthProcessService.ɵfac = function AuthProcessService_Factory(t) { return new (t || AuthProcessService)(ɵngcc0.ɵɵinject(ɵngcc2.AngularFireAuth), ɵngcc0.ɵɵinject(forwardRef(() => NgxAuthFirebaseUIConfigToken)), ɵngcc0.ɵɵinject(ɵngcc3.MatSnackBar), ɵngcc0.ɵɵinject(FirestoreSyncService), ɵngcc0.ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS)); };
AuthProcessService.ɵprov = ɵɵdefineInjectable({ factory: function AuthProcessService_Factory() { return new AuthProcessService(ɵɵinject(AngularFireAuth), ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵɵinject(MatSnackBar), ɵɵinject(FirestoreSyncService), ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: AuthProcessService, providedIn: "root" });
AuthProcessService.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgxAuthFirebaseUIConfigToken),] }] },
    { type: MatSnackBar },
    { type: FirestoreSyncService },
    { type: MatSnackBarConfig, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthProcessService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ɵngcc2.AngularFireAuth }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }, { type: ɵngcc3.MatSnackBar }, { type: FirestoreSyncService }, { type: ɵngcc3.MatSnackBarConfig, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }] }]; }, null); })();

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
EmailConfirmationComponent.ɵfac = function EmailConfirmationComponent_Factory(t) { return new (t || EmailConfirmationComponent)(ɵngcc0.ɵɵdirectiveInject(AuthProcessService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
EmailConfirmationComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: EmailConfirmationComponent, selectors: [["ngx-auth-firebaseui-email-confirmation"]], viewQuery: function EmailConfirmationComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.defaultTemplate = _t.first);
    } }, inputs: { email: "email", goBackURL: "goBackURL", verifyEmailTitleText: "verifyEmailTitleText", verifyEmailConfirmationText: "verifyEmailConfirmationText", verifyEmailGoBackText: "verifyEmailGoBackText", sendNewVerificationEmailText: "sendNewVerificationEmailText", signOutText: "signOutText", messageOnEmailConfirmationSuccess: "messageOnEmailConfirmationSuccess", template: "template" }, outputs: { signOut: "signOut" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultVerifyEmail", ""], [1, "verify-email"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title"], [1, "mat-subheading-2"], [1, "mat-body-2"], [1, "subtitle"], ["mode", "indeterminate", 4, "ngIf"], ["class", "go-back-button action-button", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "send-new-mail-button", "action-button", 3, "click"], ["color", "warn", "mat-stroked-button", "", 1, "sign-out-button", "action-button", 3, "click"], ["mode", "indeterminate"], ["mat-stroked-button", "", 1, "go-back-button", "action-button", 3, "click"]], template: function EmailConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, EmailConfirmationComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, EmailConfirmationComponent_ng_template_1_Template, 18, 7, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.verifyEmailTemplate)("ngTemplateOutletContext", ctx.verifyEmailContext);
    } }, directives: [ɵngcc5.NgTemplateOutlet, ɵngcc6.MatCard, ɵngcc6.MatCardContent, ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, ɵngcc8.MatIcon, ɵngcc5.NgIf, ɵngcc6.MatCardActions, ɵngcc9.MatButton, ɵngcc10.MatProgressBar], styles: [".material-icons[_ngcontent-%COMP%]{font-size:4rem}.verify-email[_ngcontent-%COMP%]{width:360px}.verify-email[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#444;height:4rem;width:4rem}.verify-email[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:16px}.verify-email[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-subheading-2[_ngcontent-%COMP%]{margin-bottom:0}.verify-email[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:16px auto;text-align:justify}.verify-email[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-margin-after:1em;-webkit-margin-before:1em;-webkit-margin-end:0;-webkit-margin-start:0;display:block}.verify-email[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.verify-email[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{width:100%}.verify-email[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] + .action-button[_ngcontent-%COMP%]{margin-top:1rem}"], changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(EmailConfirmationComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-auth-firebaseui-email-confirmation',
                template: "<ng-container *ngTemplateOutlet=\"verifyEmailTemplate; context: verifyEmailContext\"></ng-container>\n<ng-template #defaultVerifyEmail let-email=\"email\" let-goBackURL=\"goBackURL\"\n             let-sendNewVerificationEmailText=\"sendNewVerificationEmailText\"\n             let-signOutText=\"signOutText\"\n             let-verifyEmailConfirmationText=\"verifyEmailConfirmationText\" let-verifyEmailGoBackText=\"verifyEmailGoBackText\"\n             let-verifyEmailTitleText=\"verifyEmailTitleText\">\n  <mat-card class=\"verify-email\">\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-icon>email</mat-icon>\n      <p class=\"title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span class=\"mat-subheading-2\">{{ verifyEmailTitleText }}</span>\n        <span class=\"mat-body-2\">{{ email }}</span>\n      </p>\n      <p class=\"subtitle\">{{ verifyEmailConfirmationText }}</p>\n      <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    </mat-card-content>\n    <mat-card-actions fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <button (click)=\"continue()\" *ngIf=\"goBackURL\" class=\"go-back-button action-button\" mat-stroked-button>\n        {{ verifyEmailGoBackText }}\n      </button>\n      <button (click)=\"sendNewVerificationEmail()\" class=\"send-new-mail-button action-button\"\n              mat-stroked-button>{{ sendNewVerificationEmailText }}</button>\n      <button (click)=\"this.signOut.emit()\" class=\"sign-out-button action-button\" color=\"warn\"\n              mat-stroked-button>{{ signOutText }}</button>\n    </mat-card-actions>\n  </mat-card>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".material-icons{font-size:4rem}.verify-email{width:360px}.verify-email .mat-icon{color:#444;height:4rem;width:4rem}.verify-email .title{margin-top:16px}.verify-email .title .mat-subheading-2{margin-bottom:0}.verify-email .subtitle{margin:16px auto;text-align:justify}.verify-email p{-webkit-margin-after:1em;-webkit-margin-before:1em;-webkit-margin-end:0;-webkit-margin-start:0;display:block}.verify-email mat-card-actions{margin-top:1rem;text-align:center}.verify-email mat-card-actions .action-button{width:100%}.verify-email mat-card-actions .action-button+.action-button{margin-top:1rem}"]
            }]
    }], function () { return [{ type: AuthProcessService }, { type: ɵngcc4.Router }, { type: ɵngcc0.ChangeDetectorRef }]; }, { signOut: [{
            type: Output
        }], email: [{
            type: Input
        }], goBackURL: [{
            type: Input
        }], verifyEmailTitleText: [{
            type: Input
        }], verifyEmailConfirmationText: [{
            type: Input
        }], verifyEmailGoBackText: [{
            type: Input
        }], sendNewVerificationEmailText: [{
            type: Input
        }], signOutText: [{
            type: Input
        }], messageOnEmailConfirmationSuccess: [{
            type: Input
        }], template: [{
            type: Input
        }], defaultTemplate: [{
            type: ViewChild,
            args: ['defaultVerifyEmail', { static: true }]
        }] }); })();

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
LegalityDialogComponent.ɵfac = function LegalityDialogComponent_Factory(t) { return new (t || LegalityDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc11.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
LegalityDialogComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LegalityDialogComponent, selectors: [["ngx-auth-firebaseui-legality-dialog"]], decls: 11, vars: 3, consts: [["matDialogTitle", ""], ["fxLayout", "column", "fxLayoutAlign", "start"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["color", "warn", "id", "decline-action", "mat-raised-button", "", "matDialogClose", ""], ["color", "primary", "id", "confirm-action", "mat-raised-button", "", 3, "disabled", "click"], [3, "ngModel", "ngModelChange"], ["target", "_blank", 3, "href"]], template: function LegalityDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1, "Legal requirements");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "mat-dialog-content");
        ɵngcc0.ɵɵelementStart(3, "div", 1);
        ɵngcc0.ɵɵtemplate(4, LegalityDialogComponent_mat_checkbox_4_Template, 6, 2, "mat-checkbox", 2);
        ɵngcc0.ɵɵtemplate(5, LegalityDialogComponent_mat_checkbox_5_Template, 6, 2, "mat-checkbox", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "mat-dialog-actions");
        ɵngcc0.ɵɵelementStart(7, "button", 3);
        ɵngcc0.ɵɵtext(8, "Decline ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 4);
        ɵngcc0.ɵɵlistener("click", function LegalityDialogComponent_Template_button_click_9_listener() { return ctx.closeDialog(); });
        ɵngcc0.ɵɵtext(10, "Confirm ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.data.tosUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.data.privacyPolicyUrl);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("disabled", ctx.disableConfirmActionButton);
    } }, directives: [ɵngcc11.MatDialogTitle, ɵngcc11.MatDialogContent, ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, ɵngcc5.NgIf, ɵngcc11.MatDialogActions, ɵngcc9.MatButton, ɵngcc11.MatDialogClose, ɵngcc12.MatCheckbox, ɵngcc13.NgControlStatus, ɵngcc13.NgModel], styles: [".mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:1.5rem}mat-dialog-actions[_ngcontent-%COMP%]{margin-top:1rem}"] });
LegalityDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LegalityDialogComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-auth-firebaseui-legality-dialog',
                template: "<h1 matDialogTitle>Legal requirements</h1>\n\n<mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start\">\n    <mat-checkbox *ngIf=\"this.data.tosUrl\" [(ngModel)]=\"checkTOS\">\n      I agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.tosUrl\"\n         target=\"_blank\">\n        Terms of Service and Conditions\n      </a>\n    </mat-checkbox>\n\n    <mat-checkbox *ngIf=\"this.data.privacyPolicyUrl\"\n                  [(ngModel)]=\"checkPrivacyPolicy\">\n      I have read and agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.privacyPolicyUrl\"\n         target=\"_blank\">\n        Privacy\n      </a>\n    </mat-checkbox>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button color=\"warn\"\n          id=\"decline-action\"\n          mat-raised-button\n          matDialogClose>Decline\n  </button>\n  <button (click)=\"closeDialog()\"\n          [disabled]=\"disableConfirmActionButton\"\n          color=\"primary\"\n          id=\"confirm-action\"\n          mat-raised-button>Confirm\n  </button>\n</mat-dialog-actions>\n\n",
                styles: ["::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content div{margin-top:1.5rem}mat-dialog-actions{margin-top:1rem}"]
            }]
    }], function () { return [{ type: ɵngcc11.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

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
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgxAuthFirebaseUIConfigToken)), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.AngularFireAuth), ɵngcc0.ɵɵdirectiveInject(AuthProcessService), ɵngcc0.ɵɵdirectiveInject(ɵngcc11.MatDialog), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
AuthComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AuthComponent, selectors: [["ngx-auth-firebaseui"]], viewQuery: function AuthComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatTabGroup, 5);
        ɵngcc0.ɵɵviewQuery(MatPasswordStrengthComponent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.matTabGroup = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.passwordStrength = _t.first);
    } }, inputs: { providers: "providers", registrationEnabled: "registrationEnabled", resetPasswordEnabled: "resetPasswordEnabled", guestEnabled: "guestEnabled", enableLengthRule: "enableLengthRule", enableLowerCaseLetterRule: "enableLowerCaseLetterRule", enableUpperCaseLetterRule: "enableUpperCaseLetterRule", enableDigitRule: "enableDigitRule", enableSpecialCharRule: "enableSpecialCharRule", signOutText: "signOutText", resetPasswordTabText: "resetPasswordTabText", resetPasswordInputText: "resetPasswordInputText", resetPasswordErrorRequiredText: "resetPasswordErrorRequiredText", resetPasswordErrorPatternText: "resetPasswordErrorPatternText", resetPasswordActionButtonText: "resetPasswordActionButtonText", resetPasswordInstructionsText: "resetPasswordInstructionsText", signInTabText: "signInTabText", signInCardTitleText: "signInCardTitleText", loginButtonText: "loginButtonText", forgotPasswordButtonText: "forgotPasswordButtonText", nameText: "nameText", nameErrorRequiredText: "nameErrorRequiredText", nameErrorMinLengthText: "nameErrorMinLengthText", nameErrorMaxLengthText: "nameErrorMaxLengthText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", passwordText: "passwordText", passwordErrorRequiredText: "passwordErrorRequiredText", passwordErrorMinLengthText: "passwordErrorMinLengthText", passwordErrorMaxLengthText: "passwordErrorMaxLengthText", registerTabText: "registerTabText", registerCardTitleText: "registerCardTitleText", registerButtonText: "registerButtonText", guestButtonText: "guestButtonText", emailConfirmationTitle: "emailConfirmationTitle", emailConfirmationText: "emailConfirmationText", min: "min", max: "max", goBackURL: "goBackURL", tabIndex: "tabIndex", providersTheme: "providersTheme", appearance: "appearance", tosUrl: "tosUrl", privacyPolicyUrl: "privacyPolicyUrl", messageOnAuthSuccess: "messageOnAuthSuccess", messageOnAuthError: "messageOnAuthError", messageOnEmailConfirmationSuccess: "messageOnEmailConfirmationSuccess", customValidator: "customValidator", verifyEmailTemplate: "verifyEmailTemplate", verifyEmailTitleText: "verifyEmailTitleText", verifyEmailConfirmationText: "verifyEmailConfirmationText", verifyEmailGoBackText: "verifyEmailGoBackText", sendNewVerificationEmailText: "sendNewVerificationEmailText" }, outputs: { selectedTabChange: "selectedTabChange", onStrengthChanged: "onStrengthChanged", onSuccess: "onSuccess", onError: "onError" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["showForm", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["signedInUser", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], [3, "email", "goBackURL", "messageOnEmailConfirmationSuccess", "sendNewVerificationEmailText", "signOutText", "template", "verifyEmailConfirmationText", "verifyEmailGoBackText", "verifyEmailTitleText", "signOut"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "signed-in-container"], ["class", "account-circle", 3, "src", 4, "ngIf", "ngIfElse"], ["noPhoto", ""], [1, "user-display-name", "mat-title"], [1, "user-email", "mat-body-2"], [1, "actions"], ["mode", "indeterminate", 4, "ngIf"], ["class", "go-back-button action-button", "color", "primary", "mat-stroked-button", "", 3, "routerLink", 4, "ngIf"], ["color", "warn", "mat-stroked-button", "", 1, "sign-out-button", "action-button", 3, "click"], [1, "account-circle", 3, "src"], [1, "account-circle"], ["mode", "indeterminate"], ["color", "primary", "mat-stroked-button", "", 1, "go-back-button", "action-button", 3, "routerLink"], [3, "color", "selectedIndex", "selectedTabChange"], [3, "label"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center"], [3, "appearance"], ["formControlName", "email", "matInput", "", "required", "", "autocomplete", "username"], ["matSuffix", "", 3, "color"], [4, "ngIf"], ["formControlName", "password", "autocomplete", "current-password", "matInput", "", "required", "", 3, "maxlength", "minlength", "type"], ["matSuffix", ""], ["togglePass", ""], ["align", "end", "aria-live", "polite"], ["mat-raised-button", "", "type", "submit", 1, "space-top", 2, "margin-top", "20px", 3, "color", "disabled"], ["fxLayoutAlign", "center"], ["class", "space-top", "mat-button", "", 3, "color", "click", 4, "ngIf"], [3, "label", 4, "ngIf"], ["class", "reset-password-tab", 4, "ngIf"], [3, "providers", "theme", "tosUrl", "privacyPolicyUrl", 4, "ngIf"], ["mat-button", "", 1, "space-top", 3, "color", "click"], ["matInput", "", "required", "", 3, "formControl", "maxlength", "minlength"], ["matInput", "", "required", "", "type", "email", "autocomplete", "username", 3, "formControl"], ["fxLayout", "column"], ["matInput", "", "name", "password", "autocomplete", "new-password", "required", "", 3, "formControl", "maxlength", "minlength", "type"], ["toggle", ""], ["class", "cut-text", 4, "ngIf"], [3, "customValidator", "enableDigitRule", "enableLengthRule", "enableLowerCaseLetterRule", "enableSpecialCharRule", "enableUpperCaseLetterRule", "externalError", "max", "min", "password"], ["passwordStrength", ""], ["mat-raised-button", "", "type", "submit", 2, "margin-top", "20px", 3, "color", "disabled"], ["mat-button", "", "style", "margin-top: 20px", 3, "color", "click", 4, "ngIf"], [1, "cut-text"], ["mat-button", "", 2, "margin-top", "20px", 3, "color", "click"], [1, "reset-password-tab"], ["mat-tab-label", ""], [1, "reset-password-card"], [1, "full-width", 3, "appearance"], ["formControlName", "email", "matInput", "", "required", "", 3, "title"], ["mat-raised-button", "", "type", "submit", 3, "color"], ["mat-icon-button", "", 1, "reset-password-tab__close-button", 3, "click"], [3, "providers", "theme", "tosUrl", "privacyPolicyUrl"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, AuthComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        ɵngcc0.ɵɵpipe(1, "async");
        ɵngcc0.ɵɵtemplate(2, AuthComponent_ng_template_2_Template, 38, 43, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 2, ctx.authProcess.user$))("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc5.NgIf, ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, EmailConfirmationComponent, ɵngcc9.MatButton, ɵngcc8.MatIcon, ɵngcc10.MatProgressBar, ɵngcc9.MatAnchor, ɵngcc4.RouterLinkWithHref, ɵngcc14.MatTabGroup, ɵngcc14.MatTab, ɵngcc6.MatCard, ɵngcc6.MatCardTitle, ɵngcc6.MatCardContent, ɵngcc13.ɵNgNoValidate, ɵngcc13.NgControlStatusGroup, ɵngcc13.FormGroupDirective, ɵngcc15.MatFormField, ɵngcc15.MatLabel, ɵngcc13.DefaultValueAccessor, ɵngcc16.MatInput, ɵngcc13.NgControlStatus, ɵngcc13.FormControlName, ɵngcc13.RequiredValidator, ɵngcc15.MatSuffix, ɵngcc13.MaxLengthValidator, ɵngcc13.MinLengthValidator, ɵngcc17.MatPassToggleVisibilityComponent, ɵngcc15.MatHint, ɵngcc18.MatDivider, ɵngcc15.MatError, ɵngcc6.MatCardFooter, ɵngcc13.FormControlDirective, ɵngcc17.MatPasswordStrengthComponent, ɵngcc14.MatTabLabel, ɵngcc6.MatCardActions, AuthProvidersComponent]; }, pipes: function () { return [ɵngcc5.AsyncPipe]; }, styles: [".mat-card[_ngcontent-%COMP%]{margin:2rem}.space-top[_ngcontent-%COMP%]{margin-top:.5rem}.full-width[_ngcontent-%COMP%]{width:100%}.cut-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.signed-in-container[_ngcontent-%COMP%]   .account-circle[_ngcontent-%COMP%]{font-size:12rem;height:12rem;width:12rem}.signed-in-container[_ngcontent-%COMP%]   img.account-circle[_ngcontent-%COMP%]{-o-object-fit:cover;border-radius:50%;object-fit:cover}.signed-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]{margin-top:2rem}.signed-in-container[_ngcontent-%COMP%]   .user-display-name[_ngcontent-%COMP%]{margin-top:1rem}.signed-in-container[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{margin-top:-1rem}.signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:2rem}.signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%], .signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{width:100%}.signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{margin-top:1rem}.reset-password-tab[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{margin-bottom:1rem}.reset-password-tab__close-button[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;width:100%}.reset-password-tab__close-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:-1px}"], data: { animation: NgxAuthFirebaseuiAnimations }, changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthComponent, [{
        type: Component,
        args: [{
                selector: "ngx-auth-firebaseui",
                template: "<ng-container *ngIf=\"authProcess.user$ | async as user; else showForm\">\n\n  <!-- This component will be shown when:\n    - we just sent a verification mail (notably after sign up)\n    - we arrived from the guard after trying to access a protected route even though we are connected\n    - config.enableEmailVerification is undefined, null or true\n  -->\n  <div\n    *ngIf=\"(config.enableEmailVerification !== false) && (\n     (config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) || (authProcess.emailConfirmationSent && !user.emailVerified)\n     ); else signedInUser\"\n    fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <ngx-auth-firebaseui-email-confirmation\n      (signOut)=\"signOut()\"\n      [email]=\"user.email\"\n      [goBackURL]=\"goBackURL\"\n      [messageOnEmailConfirmationSuccess]=\"messageOnEmailConfirmationSuccess\"\n      [sendNewVerificationEmailText]=\"sendNewVerificationEmailText\"\n      [signOutText]=\"signOutText\"\n      [template]=\"verifyEmailTemplate\"\n      [verifyEmailConfirmationText]=\"verifyEmailConfirmationText\"\n      [verifyEmailGoBackText]=\"verifyEmailGoBackText\"\n      [verifyEmailTitleText]=\"verifyEmailTitleText\">\n    </ngx-auth-firebaseui-email-confirmation>\n  </div>\n\n  <ng-template #signedInUser>\n    <div class=\"signed-in-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img *ngIf=\"user?.photoURL; else noPhoto\" [src]=\"user?.photoURL\" class=\"account-circle\">\n      <ng-template #noPhoto>\n        <mat-icon class=\"account-circle\">account_circle</mat-icon>\n      </ng-template>\n      <div class=\"user-display-name mat-title\">{{ user?.displayName }}</div>\n      <div class=\"user-email mat-body-2\">{{ user?.email }}</div>\n      <div class=\"actions\">\n        <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n        <a *ngIf=\"verifyEmailGoBackText\" [routerLink]=\"goBackURL\" class=\"go-back-button action-button\" color=\"primary\"\n           mat-stroked-button>{{ verifyEmailGoBackText }}</a>\n        <button (click)=\"signOut()\" class=\"sign-out-button action-button\" color=\"warn\"\n                mat-stroked-button>{{ signOutText }}</button>\n      </div>\n    </div>\n  </ng-template>\n\n</ng-container>\n\n<ng-template #showForm>\n  <mat-tab-group (selectedTabChange)=\"onTabChange($event)\" [color]=\"color\" [selectedIndex]=\"tabIndex\">\n    <!--Sign in tab-->\n    <mat-tab [label]=\"signInTabText\">\n      <mat-card>\n        <mat-card-title>{{signInCardTitleText}}</mat-card-title>\n        <mat-card-content>\n          <form (ngSubmit)=\"signIn()\"\n                [@animateStagger]=\"{ value: '50' }\"\n                [formGroup]=\"signInFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input formControlName=\"email\"\n                       matInput\n                       required\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{passwordText}}</mat-label>\n                <input [maxlength]=\"max\" [minlength]=\"min\" [type]=\"togglePass?.type\" formControlName=\"password\"\n                       autocomplete=\"current-password\" matInput\n                       required/>\n                <mat-pass-toggle-visibility #togglePass matSuffix></mat-pass-toggle-visibility>\n                <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signInFormGroup.value.password.length }}\n                  / {{ max }} </mat-hint>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('required')\">\n                  {{passwordErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('minlength')\">\n                  {{ passwordErrorMinLengthText }}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('maxlength')\">\n                  {{ passwordErrorMaxLengthText }}\n                </mat-error>\n              </mat-form-field>\n\n              <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signInFormGroup.invalid\"\n                      class=\"space-top\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{loginButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"createForgotPasswordTab()\"\n                    *ngIf=\"resetPasswordEnabled\"\n                    [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                    [color]=\"color\"\n                    class=\"space-top\"\n                    mat-button>\n              {{forgotPasswordButtonText}}\n            </button>\n          </div>\n\n        </mat-card-content>\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n      </mat-card>\n    </mat-tab>\n\n    <!--tab register-->\n    <mat-tab *ngIf=\"registrationEnabled\" [label]=\"registerTabText\">\n      <mat-card>\n        <mat-card-title>{{registerCardTitleText}}</mat-card-title>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n          <form (ngSubmit)=\"signUpFormGroup.valid &&\n            processLegalSignUP(authProvider.EmailAndPassword)\"\n                [@animateStagger]=\"{ value: '50' }\" [formGroup]=\"signUpFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <!--name-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <!--labels will work only with @angular/material@6.2.0 -->\n                <mat-label>{{nameText}}</mat-label>\n                <input\n                  [formControl]=\"sigUpNameFormControl\"\n                  [maxlength]=\"config.nameMaxLength\"\n                  [minlength]=\"config.nameMinLength\"\n                  matInput\n                  required\n                />\n                <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signUpFormGroup.value.name?.length }}\n                  / {{ config.nameMaxLength }} </mat-hint>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('required')\">\n                  {{nameErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('minlength')\">\n                  {{nameErrorMinLengthText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('maxlength')\">\n                  {{nameErrorMaxLengthText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--email-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input [formControl]=\"sigUpEmailFormControl\"\n                       matInput\n                       required\n                       type=\"email\"\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--password-->\n              <div fxLayout=\"column\">\n                <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                [appearance]=\"appearance\">\n                  <mat-label>{{passwordText}}</mat-label>\n                  <input\n                    [formControl]=\"sigUpPasswordFormControl\"\n                    [maxlength]=\"max\"\n                    [minlength]=\"min\"\n                    [type]=\"toggle.type\"\n                    matInput\n                    name=\"password\"\n                    autocomplete=\"new-password\"\n                    required\n                  />\n                  <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>\n\n                  <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n\n                  <mat-hint align=\"end\" aria-live=\"polite\">\n                    {{signUpFormGroup.value.password?.length}} / {{ max }}\n                  </mat-hint>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('required')\" class=\"cut-text\">\n                    {{passwordErrorRequiredText}}\n                  </mat-error>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('minlength')\" class=\"cut-text\">\n                    {{ passwordErrorMinLengthText }}\n                  </mat-error>\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('maxlength')\" class=\"cut-text\">\n                    {{ passwordErrorMaxLengthText }}\n                  </mat-error>\n\n                </mat-form-field>\n\n                <mat-password-strength #passwordStrength\n                                       [customValidator]=\"customValidator\"\n                                       [enableDigitRule]=\"enableDigitRule\"\n                                       [enableLengthRule]=\"enableLengthRule\"\n                                       [enableLowerCaseLetterRule]=\"enableLowerCaseLetterRule\"\n                                       [enableSpecialCharRule]=\"enableSpecialCharRule\"\n                                       [enableUpperCaseLetterRule]=\"enableUpperCaseLetterRule\"\n                                       [externalError]=\"sigUpPasswordFormControl.dirty\"\n                                       [max]=\"max\"\n                                       [min]=\"min\"\n                                       [password]=\"signUpFormGroup.value.password\">\n                </mat-password-strength>\n\n              </div>\n\n              <button [@animate]=\"{ value: '*', params: { x: '100px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signUpFormGroup.invalid\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{registerButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <button (click)=\"processLegalSignUP(authProvider.ANONYMOUS)\"\n                  *ngIf=\"guestEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                  [color]=\"color\"\n                  mat-button\n                  style=\"margin-top: 20px\">\n            <mat-icon>fingerprint</mat-icon>\n            {{guestButtonText}}\n          </button>\n\n        </mat-card-content>\n\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n\n      </mat-card>\n    </mat-tab>\n\n    <!--Reset password tab-->\n    <mat-tab *ngIf=\"passwordResetWished\" class=\"reset-password-tab\">\n      <ng-template mat-tab-label>\n        <button (click)=\"passwordResetWished = false\" class=\"reset-password-tab__close-button\" mat-icon-button>\n          {{ resetPasswordTabText }}\n          <mat-icon>close</mat-icon>\n        </button>\n      </ng-template>\n      <form (ngSubmit)=\"resetPasswordFormGroup.valid && resetPassword()\"\n            [@animateStagger]=\"{ value: '50' }\"\n            [formGroup]=\"resetPasswordFormGroup\">\n        <mat-card class=\"reset-password-card\">\n          <mat-card-content>\n            <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [appearance]=\"appearance\"\n                            class=\"full-width\">\n              <mat-label> {{ resetPasswordInputText }} </mat-label>\n              <input [title]=\"resetPasswordInputText\"\n                     formControlName=\"email\"\n                     matInput\n                     required>\n              <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('required')\">\n                {{resetPasswordErrorRequiredText}}\n              </mat-error>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('pattern')\">\n                {{resetPasswordErrorPatternText}}\n              </mat-error>\n            </mat-form-field>\n            <p *ngIf=\"passReset\">{{resetPasswordInstructionsText}}</p>\n          </mat-card-content>\n          <mat-card-actions fxLayoutAlign=\"center\">\n            <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n            <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                    [color]=\"color\"\n                    mat-raised-button\n                    type=\"submit\">\n              {{resetPasswordActionButtonText}}\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </mat-tab>\n\n  </mat-tab-group>\n  <mat-divider></mat-divider>\n  <ngx-auth-firebaseui-providers *ngIf=\"tabIndex !== 2\"\n                                 [providers]=\"providers\"\n                                 [theme]=\"providersTheme\"\n                                 [tosUrl]=\"tosUrl\"\n                                 [privacyPolicyUrl]=\"privacyPolicyUrl\">\n  </ngx-auth-firebaseui-providers>\n</ng-template>\n",
                animations: NgxAuthFirebaseuiAnimations,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-card{margin:2rem}.space-top{margin-top:.5rem}.full-width{width:100%}.cut-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.signed-in-container .account-circle{font-size:12rem;height:12rem;width:12rem}.signed-in-container img.account-circle{-o-object-fit:cover;border-radius:50%;object-fit:cover}.signed-in-container .sign-out-button{margin-top:2rem}.signed-in-container .user-display-name{margin-top:1rem}.signed-in-container .user-email{margin-top:-1rem}.signed-in-container .actions{margin-top:2rem}.signed-in-container .actions .action-button,.signed-in-container .actions mat-progress-bar{width:100%}.signed-in-container .actions .action-button{margin-top:1rem}.reset-password-tab mat-progress-bar{margin-bottom:1rem}.reset-password-tab__close-button{align-items:center;display:flex;justify-content:space-between;width:100%}.reset-password-tab__close-button mat-icon{font-size:18px;position:relative;top:-1px}"]
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }, { type: ɵngcc2.AngularFireAuth }, { type: AuthProcessService }, { type: ɵngcc11.MatDialog }, { type: ɵngcc4.ActivatedRoute }, { type: ɵngcc0.ChangeDetectorRef }]; }, { providers: [{
            type: Input
        }], registrationEnabled: [{
            type: Input
        }], resetPasswordEnabled: [{
            type: Input
        }], guestEnabled: [{
            type: Input
        }], selectedTabChange: [{
            type: Output
        }], enableLengthRule: [{
            type: Input
        }], enableLowerCaseLetterRule: [{
            type: Input
        }], enableUpperCaseLetterRule: [{
            type: Input
        }], enableDigitRule: [{
            type: Input
        }], enableSpecialCharRule: [{
            type: Input
        }], onStrengthChanged: [{
            type: Output
        }], signOutText: [{
            type: Input
        }], resetPasswordTabText: [{
            type: Input
        }], resetPasswordInputText: [{
            type: Input
        }], resetPasswordErrorRequiredText: [{
            type: Input
        }], resetPasswordErrorPatternText: [{
            type: Input
        }], resetPasswordActionButtonText: [{
            type: Input
        }], resetPasswordInstructionsText: [{
            type: Input
        }], signInTabText: [{
            type: Input
        }], signInCardTitleText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], forgotPasswordButtonText: [{
            type: Input
        }], nameText: [{
            type: Input
        }], nameErrorRequiredText: [{
            type: Input
        }], nameErrorMinLengthText: [{
            type: Input
        }], nameErrorMaxLengthText: [{
            type: Input
        }], emailText: [{
            type: Input
        }], emailErrorRequiredText: [{
            type: Input
        }], emailErrorPatternText: [{
            type: Input
        }], passwordText: [{
            type: Input
        }], passwordErrorRequiredText: [{
            type: Input
        }], passwordErrorMinLengthText: [{
            type: Input
        }], passwordErrorMaxLengthText: [{
            type: Input
        }], registerTabText: [{
            type: Input
        }], registerCardTitleText: [{
            type: Input
        }], registerButtonText: [{
            type: Input
        }], guestButtonText: [{
            type: Input
        }], emailConfirmationTitle: [{
            type: Input
        }], emailConfirmationText: [{
            type: Input
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], goBackURL: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], matTabGroup: [{
            type: ViewChild,
            args: [MatTabGroup, { static: false }]
        }], passwordStrength: [{
            type: ViewChild,
            args: [MatPasswordStrengthComponent, { static: false }]
        }], providersTheme: [{
            type: Input
        }], appearance: [{
            type: Input
        }], tosUrl: [{
            type: Input
        }], privacyPolicyUrl: [{
            type: Input
        }], messageOnAuthSuccess: [{
            type: Input
        }], messageOnAuthError: [{
            type: Input
        }], messageOnEmailConfirmationSuccess: [{
            type: Input
        }], customValidator: [{
            type: Input
        }], verifyEmailTemplate: [{
            type: Input
        }], verifyEmailTitleText: [{
            type: Input
        }], verifyEmailConfirmationText: [{
            type: Input
        }], verifyEmailGoBackText: [{
            type: Input
        }], sendNewVerificationEmailText: [{
            type: Input
        }] }); })();

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
NgxAuthFirebaseuiAvatarComponent.ɵfac = function NgxAuthFirebaseuiAvatarComponent_Factory(t) { return new (t || NgxAuthFirebaseuiAvatarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.AngularFireAuth), ɵngcc0.ɵɵdirectiveInject(ɵngcc11.MatDialog), ɵngcc0.ɵɵdirectiveInject(AuthProcessService)); };
NgxAuthFirebaseuiAvatarComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxAuthFirebaseuiAvatarComponent, selectors: [["ngx-auth-firebaseui-avatar"]], inputs: { layout: "layout", canLogout: "canLogout", canViewAccount: "canViewAccount", canDeleteAccount: "canDeleteAccount", canEditAccount: "canEditAccount", textProfile: "textProfile", textSignOut: "textSignOut", links: "links" }, outputs: { onSignOut: "onSignOut" }, decls: 14, vars: 13, consts: [["class", "ngx-auth-firebaseui-avatar-button", "aria-label", "Open x-positioned menu", "mat-mini-fab", "", "style", "background-size: cover", 3, "matMenuTriggerFor", "matTooltip", "background-image", 4, "ngIf"], ["xPosition", "before", 1, "before", "ngx-auth-firebaseui-avatar-menu"], ["posXMenu", "matMenu"], ["fxLayout", "row", "fxLayout.xs", "column", 2, "padding-left", "10px", "padding-right", "10px", 3, "ngStyle"], ["mat-fab", "", "style", "background-size: cover", 3, "background-image", 4, "ngIf"], ["fxLayout", "column", 2, "padding-left", "10px", "padding-right", "10px"], ["mat-card-title", ""], ["mat-card-subtitle", "", 2, "font-style", "italic"], ["fxFlex", "100", "fxLayout", "column", 3, "ngStyle"], ["class", "links-menu", 4, "ngFor", "ngForOf"], ["color", "primary", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["aria-label", "Open x-positioned menu", "mat-mini-fab", "", 1, "ngx-auth-firebaseui-avatar-button", 2, "background-size", "cover", 3, "matMenuTriggerFor", "matTooltip"], [4, "ngIf"], ["mat-fab", "", 2, "background-size", "cover"], [1, "links-menu"], ["mat-menu-item", "", 3, "click"], ["color", "primary", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click"], ["color", "warn", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click"]], template: function NgxAuthFirebaseuiAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxAuthFirebaseuiAvatarComponent_button_0_Template, 2, 5, "button", 0);
        ɵngcc0.ɵɵelementStart(1, "mat-menu", 1, 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, NgxAuthFirebaseuiAvatarComponent_button_4_Template, 2, 3, "button", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "strong", 6);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "em", 7);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 8);
        ɵngcc0.ɵɵtemplate(11, NgxAuthFirebaseuiAvatarComponent_div_11_Template, 5, 2, "div", 9);
        ɵngcc0.ɵɵtemplate(12, NgxAuthFirebaseuiAvatarComponent_button_12_Template, 2, 1, "button", 10);
        ɵngcc0.ɵɵtemplate(13, NgxAuthFirebaseuiAvatarComponent_button_13_Template, 2, 1, "button", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.user);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(9, _c9, ctx.layout === "default" ? 0 : 10));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.layout === "default");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.displayName);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.email);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(11, _c10, ctx.layout === "default" ? 0 : 10));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.links);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.canViewAccount);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.canLogout);
    } }, directives: [ɵngcc5.NgIf, ɵngcc19.MatMenu, ɵngcc7.DefaultLayoutDirective, ɵngcc5.NgStyle, ɵngcc20.DefaultStyleDirective, ɵngcc6.MatCardTitle, ɵngcc6.MatCardSubtitle, ɵngcc7.DefaultFlexDirective, ɵngcc5.NgForOf, ɵngcc9.MatButton, ɵngcc19.MatMenuTrigger, ɵngcc21.MatTooltip, ɵngcc19.MatMenuItem, ɵngcc8.MatIcon, ɵngcc7.DefaultLayoutAlignDirective], styles: [".mat-raised-button[_ngcontent-%COMP%]{margin:.2rem 1rem}.links-menu[_ngcontent-%COMP%]{text-align:center}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxAuthFirebaseuiAvatarComponent, [{
        type: Component,
        args: [{
                selector: "ngx-auth-firebaseui-avatar",
                template: "<button *ngIf=\"user\"\n        class=\"ngx-auth-firebaseui-avatar-button\"\n        [matMenuTriggerFor]=\"posXMenu\"\n        [matTooltip]=\"user?.displayName\"\n        [style.background-image]=\"'url(' + user?.photoURL + ')'\"\n        aria-label=\"Open x-positioned menu\"\n        mat-mini-fab\n        style=\"background-size: cover\">\n  <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n</button>\n\n<mat-menu #posXMenu=\"matMenu\" class=\"before ngx-auth-firebaseui-avatar-menu\" xPosition=\"before\" >\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding-left: 10px; padding-right: 10px\" [ngStyle]=\"{ 'padding-top.px': layout === 'default' ? 0 : 10 }\">\n    <button [style.background-image]=\"user?.photoURL ? 'url(' + user?.photoURL + ')' : ''\"\n            mat-fab\n            style=\"background-size: cover\"\n            *ngIf=\"layout === 'default'\">\n      <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n    </button>\n    <div fxLayout=\"column\" style=\"padding-left: 10px; padding-right: 10px\">\n      <strong mat-card-title>{{user?.displayName}}</strong>\n      <em mat-card-subtitle style=\"font-style: italic\">{{user?.email}}</em>\n    </div>\n  </div>\n\n  <div fxFlex=\"100\" fxLayout=\"column\" [ngStyle]=\"{ 'padding-bottom.px': layout === 'default' ? 0 : 10 } \">\n    <div *ngFor=\"let menuItem of links\" class=\"links-menu\">\n      <button (click)=\"menuItem?.callback()\" mat-menu-item>\n        <mat-icon>{{menuItem?.icon}}</mat-icon>\n        {{menuItem?.text}}</button>\n    </div>\n    <button *ngIf=\"canViewAccount\" (click)=\"openProfile()\" color=\"primary\" fxLayoutAlign=\"center\" mat-raised-button>{{ textProfile }}\n    </button>\n    <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"warn\" fxLayoutAlign=\"center\" mat-raised-button>{{ textSignOut }}\n    </button>\n  </div>\n</mat-menu>\n",
                styles: [".mat-raised-button{margin:.2rem 1rem}.links-menu{text-align:center}"]
            }]
    }], function () { return [{ type: ɵngcc2.AngularFireAuth }, { type: ɵngcc11.MatDialog }, { type: AuthProcessService }]; }, { layout: [{
            type: Input
        }], canLogout: [{
            type: Input
        }], canViewAccount: [{
            type: Input
        }], canDeleteAccount: [{
            type: Input
        }], canEditAccount: [{
            type: Input
        }], textProfile: [{
            type: Input
        }], textSignOut: [{
            type: Input
        }], onSignOut: [{
            type: Output
        }], links: [{
            type: Input
        }] }); })();

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
NgxAuthFirebaseuiLoginComponent.ɵfac = function NgxAuthFirebaseuiLoginComponent_Factory(t) { return new (t || NgxAuthFirebaseuiLoginComponent)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(AuthProcessService), ɵngcc0.ɵɵdirectiveInject(ɵngcc13.FormBuilder)); };
NgxAuthFirebaseuiLoginComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxAuthFirebaseuiLoginComponent, selectors: [["ngx-auth-firebaseui-login"]], inputs: { providers: "providers", registrationEnabled: "registrationEnabled", resetPasswordEnabled: "resetPasswordEnabled", titleText: "titleText", rememberMeText: "rememberMeText", loginButtonText: "loginButtonText", orLabelText: "orLabelText", forgotPasswordText: "forgotPasswordText", dontHaveAnAccountText: "dontHaveAnAccountText", createAccountButtonText: "createAccountButtonText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", passwordText: "passwordText", passwordErrorRequiredText: "passwordErrorRequiredText", logoUrl: "logoUrl", appearance: "appearance", messageOnAuthSuccess: "messageOnAuthSuccess", messageOnAuthError: "messageOnAuthError" }, outputs: { onCreateAccountRequested: "onCreateAccountRequested", onResetPasswordRequested: "onResetPasswordRequested", onLoginButtonClicked: "onLoginButtonClicked", onSuccess: "onSuccess", onError: "onError" }, decls: 26, vars: 41, consts: [["fxLayout", "column", "id", "login"], ["fxLayout", "column", "fxLayoutAlign", "center center", "id", "login-form-wrapper"], ["id", "login-form"], ["class", "logo", 4, "ngIf"], [1, "title"], ["name", "loginForm", "novalidate", "", 3, "formGroup"], [3, "appearance"], ["formControlName", "email", "matInput", "", "autocomplete", "username", 3, "placeholder"], ["matSuffix", "", 3, "color"], [4, "ngIf"], ["formControlName", "password", "matInput", "", "type", "password", "autocomplete", "current-password", 3, "placeholder"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "remember-forgot-password"], ["class", "forgot-password", "mat-button", "", "type", "button", 3, "color", "click", 4, "ngIf"], ["aria-label", "LOG IN", "id", "loginButton", "mat-raised-button", "", 1, "submit-button", 3, "color", "disabled", "click"], ["class", "separator", 4, "ngIf"], ["fxLayoutAlign", "center center", "layout", "column", "theme", "raised", 3, "providers"], ["class", "register", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "logo"], ["alt", "logo", 3, "src"], ["mat-button", "", "type", "button", 1, "forgot-password", 3, "color", "click"], [1, "separator"], [1, "text"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "register"], ["id", "createAccountButton", "mat-button", "", "type", "button", 3, "color", "click"]], template: function NgxAuthFirebaseuiLoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgxAuthFirebaseuiLoginComponent_div_3_Template, 2, 5, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "form", 5);
        ɵngcc0.ɵɵelementStart(7, "mat-form-field", 6);
        ɵngcc0.ɵɵelement(8, "input", 7);
        ɵngcc0.ɵɵelementStart(9, "mat-icon", 8);
        ɵngcc0.ɵɵtext(10, "email");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, NgxAuthFirebaseuiLoginComponent_mat_error_11_Template, 2, 1, "mat-error", 9);
        ɵngcc0.ɵɵtemplate(12, NgxAuthFirebaseuiLoginComponent_mat_error_12_Template, 2, 1, "mat-error", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "mat-form-field", 6);
        ɵngcc0.ɵɵelement(14, "input", 10);
        ɵngcc0.ɵɵelementStart(15, "mat-icon", 8);
        ɵngcc0.ɵɵtext(16, "lock");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "mat-error");
        ɵngcc0.ɵɵtext(18);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 11);
        ɵngcc0.ɵɵtemplate(20, NgxAuthFirebaseuiLoginComponent_button_20_Template, 2, 6, "button", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "button", 13);
        ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiLoginComponent_Template_button_click_21_listener() { return ctx.login(); });
        ɵngcc0.ɵɵtext(22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(23, NgxAuthFirebaseuiLoginComponent_div_23_Template, 3, 5, "div", 14);
        ɵngcc0.ɵɵelement(24, "ngx-auth-firebaseui-providers", 15);
        ɵngcc0.ɵɵtemplate(25, NgxAuthFirebaseuiLoginComponent_div_25_Template, 5, 13, "div", 16);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        let tmp_10_0;
        let tmp_11_0;
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(25, _c5));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.logoUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(27, _c2, ɵngcc0.ɵɵpureFunction0(26, _c1)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.titleText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(30, _c2, ɵngcc0.ɵɵpureFunction0(29, _c8)))("formGroup", ctx.loginForm);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(33, _c2, ɵngcc0.ɵɵpureFunction0(32, _c6)))("appearance", ctx.appearance);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.emailText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.color);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_10_0 = ctx.loginForm.get("email")) == null ? null : tmp_10_0.hasError("required"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !((tmp_11_0 = ctx.loginForm.get("email")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.loginForm.get("email")) == null ? null : tmp_11_0.hasError("email")));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(36, _c2, ɵngcc0.ɵɵpureFunction0(35, _c6)))("appearance", ctx.appearance);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.passwordText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.color);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.passwordErrorRequiredText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(39, _c2, ɵngcc0.ɵɵpureFunction0(38, _c6)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.resetPasswordEnabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.colorAccent)("disabled", ctx.loginForm.invalid);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.loginButtonText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.providers.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("providers", ctx.providers);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.registrationEnabled);
    } }, directives: function () { return [ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, ɵngcc5.NgIf, ɵngcc13.ɵNgNoValidate, ɵngcc13.NgControlStatusGroup, ɵngcc13.FormGroupDirective, ɵngcc15.MatFormField, ɵngcc13.DefaultValueAccessor, ɵngcc16.MatInput, ɵngcc13.NgControlStatus, ɵngcc13.FormControlName, ɵngcc8.MatIcon, ɵngcc15.MatSuffix, ɵngcc15.MatError, ɵngcc9.MatButton, AuthProvidersComponent]; }, styles: ["ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{height:150px;margin:32px auto;width:150px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{text-align:left;width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.apple-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{color:#fff;font-size:13px;margin-bottom:8px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}"], encapsulation: 2, data: { animation: NgxAuthFirebaseuiAnimations } });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxAuthFirebaseuiLoginComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-auth-firebaseui-login',
                template: "<div fxLayout=\"column\" id=\"login\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"login-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"login-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"loginForm\" name=\"loginForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\">\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"loginForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"!loginForm.get('email')?.hasError('required') &&\n                                loginForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"current-password\">\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error>\n            {{passwordErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n             class=\"remember-forgot-password\" fxLayout=\"row\"\n             fxLayout.xs=\"column\"\n             fxLayoutAlign=\"space-between center\">\n          <!--          <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">-->\n          <!--            {{rememberMeText}}-->\n          <!--          </mat-checkbox>-->\n\n          <button (click)=\"onResetPasswordRequested.emit()\"\n                  *ngIf=\"resetPasswordEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                  [color]=\"color\"\n                  class=\"forgot-password\"\n                  mat-button\n                  type=\"button\">\n            {{forgotPasswordText}}\n          </button>\n        </div>\n\n        <button (click)=\"login()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"loginForm.invalid\"\n                aria-label=\"LOG IN\"\n                class=\"submit-button\"\n                id=\"loginButton\"\n                mat-raised-button>\n          {{loginButtonText}}\n        </button>\n\n      </form>\n\n      <div *ngIf=\"providers.length > 0\"\n           [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n           class=\"separator\">\n        <span class=\"text\">{{orLabelText}}</span>\n      </div>\n\n      <ngx-auth-firebaseui-providers [providers]=\"providers\"\n                                     fxLayoutAlign=\"center center\"\n                                     layout=\"column\"\n                                     theme=\"raised\"></ngx-auth-firebaseui-providers>\n\n      <div *ngIf=\"registrationEnabled\"\n           [@animateStagger]=\"{ value: '100' }\"\n           class=\"register\"\n           fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{dontHaveAnAccountText}}\n        </span>\n        <button (click)=\"onCreateAccountRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"color\"\n                id=\"createAccountButton\"\n                mat-button\n                type=\"button\">{{createAccountButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: NgxAuthFirebaseuiAnimations,
                styles: ["ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{height:150px;margin:32px auto;width:150px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{text-align:left;width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.apple-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{color:#fff;font-size:13px;margin-bottom:8px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}"]
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: AuthProcessService }, { type: ɵngcc13.FormBuilder }]; }, { providers: [{
            type: Input
        }], registrationEnabled: [{
            type: Input
        }], resetPasswordEnabled: [{
            type: Input
        }], titleText: [{
            type: Input
        }], rememberMeText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], orLabelText: [{
            type: Input
        }], forgotPasswordText: [{
            type: Input
        }], dontHaveAnAccountText: [{
            type: Input
        }], createAccountButtonText: [{
            type: Input
        }], emailText: [{
            type: Input
        }], emailErrorRequiredText: [{
            type: Input
        }], emailErrorPatternText: [{
            type: Input
        }], passwordText: [{
            type: Input
        }], passwordErrorRequiredText: [{
            type: Input
        }], onCreateAccountRequested: [{
            type: Output
        }], onResetPasswordRequested: [{
            type: Output
        }], onLoginButtonClicked: [{
            type: Output
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], logoUrl: [{
            type: Input
        }], appearance: [{
            type: Input
        }], messageOnAuthSuccess: [{
            type: Input
        }], messageOnAuthError: [{
            type: Input
        }] }); })();

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
NgxAuthFirebaseuiRegisterComponent.ɵfac = function NgxAuthFirebaseuiRegisterComponent_Factory(t) { return new (t || NgxAuthFirebaseuiRegisterComponent)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgxAuthFirebaseUIConfigToken)), ɵngcc0.ɵɵdirectiveInject(ɵngcc13.FormBuilder), ɵngcc0.ɵɵdirectiveInject(AuthProcessService)); };
NgxAuthFirebaseuiRegisterComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxAuthFirebaseuiRegisterComponent, selectors: [["ngx-auth-firebaseui-register"]], inputs: { titleText: "titleText", termsAndConditionsText: "termsAndConditionsText", termsAndConditionsLinkText: "termsAndConditionsLinkText", privacyPolicyText: "privacyPolicyText", privacyPolicyLinkText: "privacyPolicyLinkText", createAccountButtonText: "createAccountButtonText", alreadyHaveAccountText: "alreadyHaveAccountText", loginButtonText: "loginButtonText", nameText: "nameText", nameErrorRequiredText: "nameErrorRequiredText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", passwordText: "passwordText", passwordErrorRequiredText: "passwordErrorRequiredText", passwordConfirmationText: "passwordConfirmationText", passwordConfirmationErrorRequiredText: "passwordConfirmationErrorRequiredText", passwordErrorMatchText: "passwordErrorMatchText", passwordErrorMinLengthText: "passwordErrorMinLengthText", passwordErrorMaxLengthText: "passwordErrorMaxLengthText", logoUrl: "logoUrl", appearance: "appearance", tosUrl: "tosUrl", privacyPolicyUrl: "privacyPolicyUrl" }, outputs: { onLoginRequested: "onLoginRequested", onCreateAccountButtonClicked: "onCreateAccountButtonClicked", onSuccess: "onSuccess", onError: "onError" }, decls: 41, vars: 69, consts: [["fxLayout", "column", "id", "register"], ["fxLayout", "column", "fxLayoutAlign", "center center", "id", "register-form-wrapper"], ["id", "register-form"], ["class", "logo", 4, "ngIf"], [1, "title"], ["name", "registerForm", "novalidate", "", 3, "formGroup"], [3, "appearance"], ["formControlName", "name", "matInput", "", 3, "placeholder"], ["matSuffix", "", 3, "color"], ["formControlName", "email", "matInput", "", "autocomplete", "username", 3, "placeholder"], [4, "ngIf"], ["formControlName", "password", "matInput", "", "type", "password", "autocomplete", "new-password", 3, "placeholder"], ["formControlName", "passwordConfirm", "matInput", "", "type", "password", "autocomplete", "new-password", 3, "placeholder"], ["aria-label", "CREATE AN ACCOUNT", "id", "createAccountButton", "mat-raised-button", "", 1, "submit-button", 3, "color", "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "register"], [1, "text"], ["id", "loginButton", "mat-button", "", "type", "button", 3, "color", "click"], [1, "logo"], ["alt", "logo", 3, "src"], ["formControlName", "tos", "required", "", 3, "aria-label"], ["target", "_blank", 3, "href"], ["formControlName", "privacyPolicy", "required", "", 3, "aria-label"]], template: function NgxAuthFirebaseuiRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgxAuthFirebaseuiRegisterComponent_div_3_Template, 2, 5, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "form", 5);
        ɵngcc0.ɵɵelementStart(7, "mat-form-field", 6);
        ɵngcc0.ɵɵelement(8, "input", 7);
        ɵngcc0.ɵɵelementStart(9, "mat-icon", 8);
        ɵngcc0.ɵɵtext(10, "person");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "mat-error");
        ɵngcc0.ɵɵtext(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "mat-form-field", 6);
        ɵngcc0.ɵɵelement(14, "input", 9);
        ɵngcc0.ɵɵelementStart(15, "mat-icon", 8);
        ɵngcc0.ɵɵtext(16, "email");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, NgxAuthFirebaseuiRegisterComponent_mat_error_17_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵtemplate(18, NgxAuthFirebaseuiRegisterComponent_mat_error_18_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "mat-form-field", 6);
        ɵngcc0.ɵɵelement(20, "input", 11);
        ɵngcc0.ɵɵelementStart(21, "mat-icon", 8);
        ɵngcc0.ɵɵtext(22, "lock");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(23, NgxAuthFirebaseuiRegisterComponent_mat_error_23_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵtemplate(24, NgxAuthFirebaseuiRegisterComponent_mat_error_24_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵtemplate(25, NgxAuthFirebaseuiRegisterComponent_mat_error_25_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(26, "mat-form-field", 6);
        ɵngcc0.ɵɵelement(27, "input", 12);
        ɵngcc0.ɵɵelementStart(28, "mat-icon", 8);
        ɵngcc0.ɵɵtext(29, "lock");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(30, NgxAuthFirebaseuiRegisterComponent_mat_error_30_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵtemplate(31, NgxAuthFirebaseuiRegisterComponent_mat_error_31_Template, 2, 1, "mat-error", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(32, NgxAuthFirebaseuiRegisterComponent_div_32_Template, 6, 4, "div", 10);
        ɵngcc0.ɵɵtemplate(33, NgxAuthFirebaseuiRegisterComponent_div_33_Template, 6, 4, "div", 10);
        ɵngcc0.ɵɵelementStart(34, "button", 13);
        ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiRegisterComponent_Template_button_click_34_listener() { return ctx.createAccount(); });
        ɵngcc0.ɵɵtext(35);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(36, "div", 14);
        ɵngcc0.ɵɵelementStart(37, "span", 15);
        ɵngcc0.ɵɵtext(38);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(39, "button", 16);
        ɵngcc0.ɵɵlistener("click", function NgxAuthFirebaseuiRegisterComponent_Template_button_click_39_listener() { return ctx.onLoginRequested.emit(); });
        ɵngcc0.ɵɵtext(40);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        let tmp_15_0;
        let tmp_16_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_23_0;
        let tmp_28_0;
        let tmp_29_0;
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(41, _c5));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.logoUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(43, _c2, ɵngcc0.ɵɵpureFunction0(42, _c1)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.titleText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(46, _c2, ɵngcc0.ɵɵpureFunction0(45, _c8)))("formGroup", ctx.registerForm);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(49, _c2, ɵngcc0.ɵɵpureFunction0(48, _c6)))("appearance", ctx.appearance);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.nameText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.color);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.nameErrorRequiredText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(52, _c2, ɵngcc0.ɵɵpureFunction0(51, _c6)))("appearance", ctx.appearance);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.emailText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.color);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_15_0 = ctx.registerForm.get("email")) == null ? null : tmp_15_0.hasError("required"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_16_0 = ctx.registerForm.get("email")) == null ? null : tmp_16_0.hasError("email"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(55, _c2, ɵngcc0.ɵɵpureFunction0(54, _c6)))("appearance", ctx.appearance);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.passwordText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.color);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_21_0 = ctx.registerForm.get("password")) == null ? null : tmp_21_0.hasError("required"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_22_0 = ctx.registerForm.get("password")) == null ? null : tmp_22_0.hasError("minlength"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_23_0 = ctx.registerForm.get("password")) == null ? null : tmp_23_0.hasError("maxlength"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(58, _c2, ɵngcc0.ɵɵpureFunction0(57, _c6)))("appearance", ctx.appearance);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("placeholder", ctx.passwordConfirmationText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.color);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", (tmp_28_0 = ctx.registerForm.get("passwordConfirm")) == null ? null : tmp_28_0.hasError("required"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !((tmp_29_0 = ctx.registerForm.get("passwordConfirm")) == null ? null : tmp_29_0.hasError("required")) && ((tmp_29_0 = ctx.registerForm.get("passwordConfirm")) == null ? null : tmp_29_0.hasError("passwordsNotMatching")));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tosUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.privacyPolicyUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("color", ctx.colorAccent)("disabled", ctx.registerForm.invalid);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.createAccountButtonText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(61, _c2, ɵngcc0.ɵɵpureFunction0(60, _c8)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(64, _c2, ɵngcc0.ɵɵpureFunction0(63, _c7)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.alreadyHaveAccountText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@animate", ɵngcc0.ɵɵpureFunction1(67, _c2, ɵngcc0.ɵɵpureFunction0(66, _c4)))("color", ctx.colorAccent);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.loginButtonText, " ");
    } }, directives: [ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, ɵngcc5.NgIf, ɵngcc13.ɵNgNoValidate, ɵngcc13.NgControlStatusGroup, ɵngcc13.FormGroupDirective, ɵngcc15.MatFormField, ɵngcc13.DefaultValueAccessor, ɵngcc16.MatInput, ɵngcc13.NgControlStatus, ɵngcc13.FormControlName, ɵngcc8.MatIcon, ɵngcc15.MatSuffix, ɵngcc15.MatError, ɵngcc9.MatButton, ɵngcc12.MatCheckbox, ɵngcc12.MatCheckboxRequiredValidator, ɵngcc13.RequiredValidator], styles: ["ngx-auth-firebaseui-register #register{background-size:cover;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{margin:32px auto;width:128px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{text-align:left;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{color:#fff;font-size:13px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}"], encapsulation: 2, data: { animation: NgxAuthFirebaseuiAnimations } });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxAuthFirebaseuiRegisterComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-auth-firebaseui-register',
                template: "<div fxLayout=\"column\" id=\"register\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"register-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"register-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"registerForm\" name=\"registerForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"nameText\" formControlName=\"name\" matInput/>\n          <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n          <mat-error>\n            {{nameErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\"/>\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('required')\">\n            {{passwordErrorRequiredText}}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('minlength')\">\n            {{ passwordErrorMinLengthText }}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('maxlength')\">\n            {{ passwordErrorMaxLengthText }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordConfirmationText\" formControlName=\"passwordConfirm\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('passwordConfirm')?.hasError('required')\">\n            {{passwordConfirmationErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"\n              !registerForm.get('passwordConfirm')?.hasError('required') &&\n              registerForm.get('passwordConfirm')?.hasError('passwordsNotMatching')\n            \">\n            {{passwordErrorMatchText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div *ngIf=\"this.tosUrl\">\n          <mat-checkbox aria-label=\"{{termsAndConditionsText}}\" formControlName=\"tos\" required>\n            <span>{{termsAndConditionsText}}</span>\n            <a target=\"_blank\" [href]=\"this.tosUrl\">\n                {{termsAndConditionsLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <div *ngIf=\"this.privacyPolicyUrl\">\n          <mat-checkbox aria-label=\"{{privacyPolicyText}}\" formControlName=\"privacyPolicy\" required>\n            <span>{{privacyPolicyText}}</span>\n            <a target=\"_blank\" [href]=\"this.privacyPolicyUrl\">\n                {{privacyPolicyLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <button (click)=\"createAccount()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"registerForm.invalid\"\n                aria-label=\"CREATE AN ACCOUNT\"\n                class=\"submit-button\"\n                id=\"createAccountButton\"\n                mat-raised-button>\n          {{createAccountButtonText}}\n        </button>\n      </form>\n\n      <div [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" class=\"register\" fxLayout=\"column\"\n           fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{alreadyHaveAccountText}}\n        </span>\n        <button (click)=\"onLoginRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"colorAccent\"\n                id=\"loginButton\"\n                mat-button\n                type=\"button\">\n          {{loginButtonText}}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: NgxAuthFirebaseuiAnimations,
                styles: ["ngx-auth-firebaseui-register #register{background-size:cover;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{margin:32px auto;width:128px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{text-align:left;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{color:#fff;font-size:13px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}"]
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }, { type: ɵngcc13.FormBuilder }, { type: AuthProcessService }]; }, { titleText: [{
            type: Input
        }], termsAndConditionsText: [{
            type: Input
        }], termsAndConditionsLinkText: [{
            type: Input
        }], privacyPolicyText: [{
            type: Input
        }], privacyPolicyLinkText: [{
            type: Input
        }], createAccountButtonText: [{
            type: Input
        }], alreadyHaveAccountText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], nameText: [{
            type: Input
        }], nameErrorRequiredText: [{
            type: Input
        }], emailText: [{
            type: Input
        }], emailErrorRequiredText: [{
            type: Input
        }], emailErrorPatternText: [{
            type: Input
        }], passwordText: [{
            type: Input
        }], passwordErrorRequiredText: [{
            type: Input
        }], passwordConfirmationText: [{
            type: Input
        }], passwordConfirmationErrorRequiredText: [{
            type: Input
        }], passwordErrorMatchText: [{
            type: Input
        }], passwordErrorMinLengthText: [{
            type: Input
        }], passwordErrorMaxLengthText: [{
            type: Input
        }], onLoginRequested: [{
            type: Output
        }], onCreateAccountButtonClicked: [{
            type: Output
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], logoUrl: [{
            type: Input
        }], appearance: [{
            type: Input
        }], tosUrl: [{
            type: Input
        }], privacyPolicyUrl: [{
            type: Input
        }] }); })();

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
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.AngularFireAuth), ɵngcc0.ɵɵdirectiveInject(AuthProcessService), ɵngcc0.ɵɵdirectiveInject(FirestoreSyncService), ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgxAuthFirebaseUIConfigToken))); };
UserComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: UserComponent, selectors: [["ngx-auth-firebaseui-user"]], inputs: { canLogout: "canLogout", canEditAccount: "canEditAccount", canDeleteAccount: "canDeleteAccount", notLoggedInText: "notLoggedInText", emailVerifiedText: "emailVerifiedText", emailNotVerifiedText: "emailNotVerifiedText", cancelButtonText: "cancelButtonText", saveChangesButtonText: "saveChangesButtonText", editButtonText: "editButtonText", signoutButtonText: "signoutButtonText", deleteAccountButtonText: "deleteAccountButtonText", nameText: "nameText", nameErrorRequiredText: "nameErrorRequiredText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", phoneText: "phoneText", phoneHintText: "phoneHintText", phoneErrorPatternText: "phoneErrorPatternText", editMode: "editMode", appearance: "appearance" }, outputs: { onSignOut: "onSignOut", onAccountEdited: "onAccountEdited", onAccountDeleted: "onAccountDeleted" }, decls: 6, vars: 5, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["authenticated", ""], ["none", ""], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["mat-card-avatar", "", 3, "src", 4, "ngIf"], ["emailVerified", ""], ["emailNotVerified", ""], ["edit", ""], ["readonly", ""], ["mat-card-avatar", "", 3, "src"], ["color", "primary", "matTooltipPosition", "after", 3, "matTooltip"], ["color", "warn", "matTooltipPosition", "after", 3, "matTooltip"], [3, "formGroup", "submit"], ["fxLayoutAlign", "center"], ["color", "warn", "mat-raised-button", "", 1, "edit-button", 3, "click"], [1, "full-width", 3, "appearance"], ["matInput", "", 3, "formControl", "placeholder"], ["matSuffix", ""], ["align", "end", "aria-live", "polite"], ["class", "full-width", 3, "appearance", 4, "ngIf"], ["fxLayout", "column"], ["color", "primary", "mat-button", "", "type", "submit"], ["matInput", "", "type", "tel", 3, "formControl", "placeholder"], ["class", "edit-button", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["matInput", "", 3, "disabled", "value", "placeholder"], ["color", "primary", "matSuffix", ""], ["color", "primary", "mat-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "mat-button", "", 3, "click", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", 1, "edit-button", 3, "click"], ["color", "primary", "mat-button", "", 3, "click"], ["color", "warn", "mat-button", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "none-card"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "accent"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, UserComponent_div_0_Template, 1, 0, "div", 0);
        ɵngcc0.ɵɵpipe(1, "async");
        ɵngcc0.ɵɵtemplate(2, UserComponent_ng_template_2_Template, 2, 3, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, UserComponent_ng_template_4_Template, 6, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        const _r3 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 3, ctx.auth.authState))("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [ɵngcc5.NgIf, ɵngcc6.MatCard, ɵngcc6.MatCardHeader, ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, ɵngcc6.MatCardAvatar, ɵngcc8.MatIcon, ɵngcc21.MatTooltip, ɵngcc6.MatCardContent, ɵngcc13.ɵNgNoValidate, ɵngcc13.NgControlStatusGroup, ɵngcc13.FormGroupDirective, ɵngcc9.MatButton, ɵngcc15.MatFormField, ɵngcc15.MatLabel, ɵngcc16.MatInput, ɵngcc13.DefaultValueAccessor, ɵngcc13.NgControlStatus, ɵngcc13.FormControlDirective, ɵngcc15.MatSuffix, ɵngcc15.MatHint, ɵngcc6.MatCardActions, ɵngcc15.MatError], pipes: [ɵngcc5.AsyncPipe], styles: [".edit-button[_ngcontent-%COMP%]{margin:1rem}.full-width[_ngcontent-%COMP%]{width:100%}.cut-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.none-card[_ngcontent-%COMP%]{min-height:430px}.none-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);font-size:24px;text-align:center}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(UserComponent, [{
        type: Component,
        args: [{
                selector: "ngx-auth-firebaseui-user",
                template: "<div *ngIf=\"auth.authState| async; then authenticated else none\">\n\n</div>\n\n<ng-template #authenticated>\n  <mat-card *ngIf=\"auth.user | async as user\">\n    <!--<form [formGroup]=\"updateFormGroup\" >-->\n    <!--card header-->\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <img *ngIf=\"authProcess?.getUserPhotoUrl() | async as photoUrl\" [src]=\"photoUrl\" mat-card-avatar>\n\n      <div *ngIf=\"user.emailVerified; then emailVerified else emailNotVerified\"></div>\n      <ng-template #emailVerified>\n        <mat-icon color=\"primary\"\n                  [matTooltip]=\"emailVerifiedText\"\n                  matTooltipPosition=\"after\">\n          verified_user\n        </mat-icon>\n      </ng-template>\n      <ng-template #emailNotVerified>\n        <mat-icon color=\"warn\"\n                  [matTooltip]=\"emailNotVerifiedText\"\n                  matTooltipPosition=\"after\">\n          warning\n        </mat-icon>\n      </ng-template>\n\n    </mat-card-header>\n\n    <!--card content-->\n    <mat-card-content *ngIf=\"editMode; then edit else readonly\">\n    </mat-card-content>\n\n    <ng-template #edit>\n      <form (submit)=\"save()\" [formGroup]=\"updateFormGroup\">\n\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"changeEditMode()\" class=\"edit-button\" color=\"warn\"\n                    mat-raised-button>\n              {{cancelButtonText}}\n            </button>\n          </div>\n\n          <!--name-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{nameText}}</mat-label>\n            <input [formControl]=\"updateNameFormControl\"\n                   matInput\n                   [placeholder]=\"nameText\">\n            <mat-icon matSuffix>person</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\"> {{ updateNameFormControl.value?.length }}\n              / {{ config.nameMaxLength }} </mat-hint>\n            <mat-error *ngIf=\"updateNameFormControl.hasError('required')\">\n              {{nameErrorRequiredText}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--email-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{emailText}}</mat-label>\n            <input [formControl]=\"updateEmailFormControl\"\n                   matInput\n                   [placeholder]=\"emailText\">\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('required')\">\n              {{emailErrorRequiredText}} {{updateEmailFormControl.value}}\n            </mat-error>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('pattern')\">\n              {{emailErrorPatternText}} {{updateEmailFormControl.value}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--phone number-->\n          <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{phoneText}}</mat-label>\n            <input [formControl]=\"updatePhoneNumberFormControl\"\n                   matInput\n                   [placeholder]=\"phoneText\"\n                   type=\"tel\">\n            <mat-icon matSuffix>phone</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\">\n              {{phoneHintText}}\n            </mat-hint>\n            <mat-error *ngIf=\"updatePhoneNumberFormControl.hasError('pattern')\">\n              {{phoneErrorPatternText}}\n            </mat-error>\n          </mat-form-field>\n\n        </mat-card-content>\n\n        <mat-card-actions fxLayout=\"column\">\n          <button color=\"primary\"\n                  mat-button\n                  type=\"submit\">\n            {{saveChangesButtonText}}\n          </button>\n        </mat-card-actions>\n      </form>\n    </ng-template>\n\n    <ng-template #readonly>\n      <div fxLayoutAlign=\"center\">\n        <button *ngIf=\"canEditAccount\" (click)=\"changeEditMode()\" class=\"edit-button\" color=\"primary\"\n                mat-raised-button>\n          {{editButtonText}}\n        </button>\n      </div>\n\n      <!--name-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{nameText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.displayName\"\n               matInput\n               [placeholder]=\"nameText\">\n        <mat-icon color=\"primary\" matSuffix>person</mat-icon>\n      </mat-form-field>\n\n      <!--email-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{emailText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.email\" matInput\n               [placeholder]=\"emailText\">\n        <mat-icon color=\"primary\" matSuffix>email</mat-icon>\n      </mat-form-field>\n\n      <!--phone number-->\n      <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{phoneText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.phoneNumber\"\n               matInput\n               [placeholder]=\"phoneText\">\n        <mat-icon color=\"primary\" matSuffix>phone</mat-icon>\n      </mat-form-field>\n\n      <mat-card-actions fxLayout=\"column\">\n        <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"primary\" mat-button>{{signoutButtonText}}</button>\n        <button (click)=\"deleteAccount()\" *ngIf=\"canDeleteAccount\" color=\"warn\" mat-button>{{deleteAccountButtonText}}</button>\n      </mat-card-actions>\n\n    </ng-template>\n\n  </mat-card>\n\n</ng-template>\n\n\n<ng-template #none>\n  <mat-card class=\"none-card\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-icon color=\"accent\">warning</mat-icon>\n      <span>{{notLoggedInText}}</span>\n    </mat-card-content>\n  </mat-card>\n</ng-template>\n",
                styles: [".edit-button{margin:1rem}.full-width{width:100%}.cut-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.none-card{min-height:430px}.none-card span{color:rgba(0,0,0,.54);font-size:24px;text-align:center}"]
            }]
    }], function () { return [{ type: ɵngcc2.AngularFireAuth }, { type: AuthProcessService }, { type: FirestoreSyncService }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }]; }, { canLogout: [{
            type: Input
        }], canEditAccount: [{
            type: Input
        }], canDeleteAccount: [{
            type: Input
        }], notLoggedInText: [{
            type: Input
        }], emailVerifiedText: [{
            type: Input
        }], emailNotVerifiedText: [{
            type: Input
        }], cancelButtonText: [{
            type: Input
        }], saveChangesButtonText: [{
            type: Input
        }], editButtonText: [{
            type: Input
        }], signoutButtonText: [{
            type: Input
        }], deleteAccountButtonText: [{
            type: Input
        }], nameText: [{
            type: Input
        }], nameErrorRequiredText: [{
            type: Input
        }], emailText: [{
            type: Input
        }], emailErrorRequiredText: [{
            type: Input
        }], emailErrorPatternText: [{
            type: Input
        }], phoneText: [{
            type: Input
        }], phoneHintText: [{
            type: Input
        }], phoneErrorPatternText: [{
            type: Input
        }], onSignOut: [{
            type: Output
        }], onAccountEdited: [{
            type: Output
        }], onAccountDeleted: [{
            type: Output
        }], editMode: [{
            type: Input
        }], appearance: [{
            type: Input
        }] }); })();

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
AuthProvidersComponent.ɵfac = function AuthProvidersComponent_Factory(t) { return new (t || AuthProvidersComponent)(ɵngcc0.ɵɵdirectiveInject(AuthProcessService), ɵngcc0.ɵɵdirectiveInject(ɵngcc11.MatDialog)); };
AuthProvidersComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AuthProvidersComponent, selectors: [["ngx-auth-firebaseui-providers"]], inputs: { layout: "layout", providers: "providers", theme: "theme", tosUrl: "tosUrl", privacyPolicyUrl: "privacyPolicyUrl" }, outputs: { onSuccess: "onSuccess", onError: "onError" }, decls: 7, vars: 8, consts: [[3, "ngSwitch"], ["fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchDefault"], ["class", "buttons-classic", "fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["class", "buttons-raised", "fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["class", "buttons-raised", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["class", "buttons-raised", "fxLayoutAlign.xs", "center center", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout"], ["mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-filled", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-filled", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-filled", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-button", "", 3, "ngClass.xs", "click"], ["svgIcon", "google-colored"], ["mat-button", "", 1, "apple-filled", 3, "ngClass.xs", "click"], ["svgIcon", "apple"], ["mat-button", "", 1, "facebook-filled", 3, "ngClass.xs", "click"], ["svgIcon", "facebook"], ["mat-button", "", 1, "twitter-filled", 3, "ngClass.xs", "click"], ["svgIcon", "twitter"], ["svgIcon", "github"], ["svgIcon", "microsoft"], ["svgIcon", "yahoo"], ["fxLayout.xs", "column", 1, "buttons-classic", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "github-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "microsoft-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "yahoo-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-button", "", 1, "google-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "apple-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "facebook-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "twitter-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "github-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "microsoft-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "yahoo-classic", 3, "ngClass.xs", "click"], ["class", "google-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "github-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "microsoft-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "yahoo-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "google-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "apple-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "facebook-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "twitter-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "github-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "microsoft-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "yahoo-classic", 3, "ngClass.xs", "click"], ["fxLayout.xs", "column", 1, "buttons-raised", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "github-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "microsoft-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "yahoo-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-raised-button", "", 1, "google-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "apple-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "facebook-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "twitter-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "github-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "microsoft-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "yahoo-raised", 3, "ngClass.xs", "click"], [1, "buttons-raised", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "apple-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "facebook-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "twitter-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "github-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "microsoft", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "yahoo-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["mat-fab", "", 1, "google-raised", 3, "click"], ["svgIcon", "google"], ["mat-fab", "", 1, "apple-raised", 3, "click"], ["mat-fab", "", 1, "facebook-raised", 3, "click"], ["mat-fab", "", 1, "twitter-raised", 3, "click"], ["mat-fab", "", 1, "github-raised", 3, "click"], ["mat-fab", "", 1, "microsoft", 3, "click"], ["mat-fab", "", 1, "yahoo-raised", 3, "click"], ["fxLayoutAlign.xs", "center center", 1, "buttons-raised", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-raised", "fxFlexAlign", "center", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "apple-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "facebook-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "twitter-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "github-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "microsoft", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "yahoo-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["fxFlexAlign", "center", "mat-mini-fab", "", 1, "google-raised", 3, "click"], ["mat-mini-fab", "", 1, "apple-raised", 3, "click"], ["mat-mini-fab", "", 1, "facebook-raised", 3, "click"], ["mat-mini-fab", "", 1, "twitter-raised", 3, "click"], ["svgIcon", "twitter", 1, "icon-white"], ["mat-mini-fab", "", 1, "github-raised", 3, "click"], ["mat-mini-fab", "", 1, "microsoft", 3, "click"], ["mat-mini-fab", "", 1, "yahoo-raised", 3, "click"]], template: function AuthProvidersComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, AuthProvidersComponent_div_1_Template, 8, 9, "div", 1);
        ɵngcc0.ɵɵtemplate(2, AuthProvidersComponent_div_2_Template, 8, 9, "div", 2);
        ɵngcc0.ɵɵtemplate(3, AuthProvidersComponent_div_3_Template, 8, 9, "div", 2);
        ɵngcc0.ɵɵtemplate(4, AuthProvidersComponent_div_4_Template, 8, 9, "div", 3);
        ɵngcc0.ɵɵtemplate(5, AuthProvidersComponent_div_5_Template, 8, 9, "div", 4);
        ɵngcc0.ɵɵtemplate(6, AuthProvidersComponent_div_6_Template, 8, 9, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("@animateStagger", ɵngcc0.ɵɵpureFunction0(7, _c5))("ngSwitch", ctx.theme);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngSwitchCase", ctx.themes.CLASSIC);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", ctx.themes.STROKED);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", ctx.themes.RAISED);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", ctx.themes.FAB);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", ctx.themes.MINI_FAB);
    } }, directives: [ɵngcc5.NgSwitch, ɵngcc5.NgSwitchDefault, ɵngcc5.NgSwitchCase, ɵngcc7.DefaultLayoutDirective, ɵngcc7.DefaultLayoutAlignDirective, ɵngcc5.NgIf, ɵngcc9.MatButton, ɵngcc20.DefaultClassDirective, ɵngcc8.MatIcon, ɵngcc7.DefaultFlexAlignDirective], styles: ["[_nghost-%COMP%]{display:block}.space-full-xs[_ngcontent-%COMP%]{margin:.4rem;width:100%}.apple-filled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.facebook-filled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{fill:#385899}.twitter-filled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{fill:#1da1f2}.buttons-raised[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff!important}.buttons-raised[_ngcontent-%COMP%]   .google-raised[_ngcontent-%COMP%]{background-color:#db4437}.buttons-raised[_ngcontent-%COMP%]   .apple-raised[_ngcontent-%COMP%]{background-color:#000}.buttons-raised[_ngcontent-%COMP%]   .facebook-raised[_ngcontent-%COMP%]{background-color:#385899}.buttons-raised[_ngcontent-%COMP%]   .twitter-raised[_ngcontent-%COMP%]{background-color:#1da1f2}.buttons-raised[_ngcontent-%COMP%]   .github-raised[_ngcontent-%COMP%]{background-color:#000}.buttons-raised[_ngcontent-%COMP%]   .microsoft-raised[_ngcontent-%COMP%]{background-color:#0078d4}.buttons-raised[_ngcontent-%COMP%]   .yahoo-raised[_ngcontent-%COMP%]{background-color:#720e9e}.buttons-raised[_ngcontent-%COMP%]   .phone-raised[_ngcontent-%COMP%]{background-color:#02bd7e}.buttons-classic[_ngcontent-%COMP%]   button.google-classic[_ngcontent-%COMP%]{color:#db4437!important}.buttons-classic[_ngcontent-%COMP%]   button.apple-classic[_ngcontent-%COMP%]{color:#000!important}.buttons-classic[_ngcontent-%COMP%]   .facebook-classic[_ngcontent-%COMP%]{color:#385899!important}.buttons-classic[_ngcontent-%COMP%]   .twitter-classic[_ngcontent-%COMP%]{color:#1da1f2!important}.buttons-classic[_ngcontent-%COMP%]   .github-classic[_ngcontent-%COMP%]{color:#000!important}.buttons-classic[_ngcontent-%COMP%]   .microsoft-classic[_ngcontent-%COMP%]{color:#0078d4!important}.buttons-classic[_ngcontent-%COMP%]   .yahoo-classic[_ngcontent-%COMP%]{color:#720e9e!important}.buttons-classic[_ngcontent-%COMP%]   .phone-classic[_ngcontent-%COMP%]{color:#02bd7e}.icon-white[_ngcontent-%COMP%]{color:#fff}.icon-white[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{fill:#fff}button.microsoft[_ngcontent-%COMP%]{background:#f8f9fa}"], data: { animation: NgxAuthFirebaseuiAnimations } });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthProvidersComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-auth-firebaseui-providers',
                template: "<div [@animateStagger]=\"{ value: '50' }\" [ngSwitch]=\"theme\">\n\n  <!--default icon buttons-->\n  <div *ngSwitchDefault\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"google-colored\"></mat-icon>\n      Google\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n      Apple\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n      Yahoo\n    </button>\n  </div>\n\n  <!--classic-->\n  <div *ngSwitchCase=\"themes.CLASSIC\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--stroked-->\n  <div *ngSwitchCase=\"themes.STROKED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-stroked-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-stroked-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-stroked-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-stroked-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-stroked-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-stroked-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-stroked-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--raised-->\n  <div *ngSwitchCase=\"themes.RAISED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-raised\"\n            mat-raised-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-raised\"\n            mat-raised-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-raised\"\n            mat-raised-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-raised\"\n            mat-raised-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-raised\"\n            mat-raised-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-raised\"\n            mat-raised-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-raised\"\n            mat-raised-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--fab-->\n  <div *ngSwitchCase=\"themes.FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n\n  <!--mini-fab-->\n  <div *ngSwitchCase=\"themes.MINI_FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayoutAlign.xs=\"center center\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            fxFlexAlign=\"center\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-mini-fab>\n      <mat-icon class=\"icon-white\" svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n</div>\n",
                animations: NgxAuthFirebaseuiAnimations,
                styles: [":host{display:block}.space-full-xs{margin:.4rem;width:100%}.apple-filled mat-icon svg path{fill:#000}.facebook-filled mat-icon{fill:#385899}.twitter-filled mat-icon{fill:#1da1f2}.buttons-raised button{color:#fff!important}.buttons-raised .google-raised{background-color:#db4437}.buttons-raised .apple-raised{background-color:#000}.buttons-raised .facebook-raised{background-color:#385899}.buttons-raised .twitter-raised{background-color:#1da1f2}.buttons-raised .github-raised{background-color:#000}.buttons-raised .microsoft-raised{background-color:#0078d4}.buttons-raised .yahoo-raised{background-color:#720e9e}.buttons-raised .phone-raised{background-color:#02bd7e}.buttons-classic button.google-classic{color:#db4437!important}.buttons-classic button.apple-classic{color:#000!important}.buttons-classic .facebook-classic{color:#385899!important}.buttons-classic .twitter-classic{color:#1da1f2!important}.buttons-classic .github-classic{color:#000!important}.buttons-classic .microsoft-classic{color:#0078d4!important}.buttons-classic .yahoo-classic{color:#720e9e!important}.buttons-classic .phone-classic{color:#02bd7e}.icon-white{color:#fff}.icon-white mat-icon{fill:#fff}button.microsoft{background:#f8f9fa}"]
            }]
    }], function () { return [{ type: AuthProcessService }, { type: ɵngcc11.MatDialog }]; }, { layout: [{
            type: Input
        }], providers: [{
            type: Input
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], theme: [{
            type: Input
        }], tosUrl: [{
            type: Input
        }], privacyPolicyUrl: [{
            type: Input
        }] }); })();

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
LoggedInGuard.ɵfac = function LoggedInGuard_Factory(t) { return new (t || LoggedInGuard)(ɵngcc0.ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵngcc0.ɵɵinject(ɵngcc4.Router), ɵngcc0.ɵɵinject(AuthProcessService)); };
LoggedInGuard.ɵprov = ɵɵdefineInjectable({ factory: function LoggedInGuard_Factory() { return new LoggedInGuard(ɵɵinject(NgxAuthFirebaseUIConfigToken), ɵɵinject(Router), ɵɵinject(AuthProcessService)); }, token: LoggedInGuard, providedIn: "root" });
LoggedInGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NgxAuthFirebaseUIConfigToken,] }] },
    { type: Router },
    { type: AuthProcessService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LoggedInGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NgxAuthFirebaseUIConfigToken]
            }] }, { type: ɵngcc4.Router }, { type: AuthProcessService }]; }, null); })();

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
NgxAuthFirebaseUIModule.ɵfac = function NgxAuthFirebaseUIModule_Factory(t) { return new (t || NgxAuthFirebaseUIModule)(ɵngcc0.ɵɵinject(ɵngcc8.MatIconRegistry), ɵngcc0.ɵɵinject(ɵngcc22.DomSanitizer), ɵngcc0.ɵɵinject(AuthProcessService)); };
NgxAuthFirebaseUIModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxAuthFirebaseUIModule });
NgxAuthFirebaseUIModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
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
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule] });
NgxAuthFirebaseUIModule.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer },
    { type: AuthProcessService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxAuthFirebaseUIModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc8.MatIconRegistry }, { type: ɵngcc22.DomSanitizer }, { type: AuthProcessService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxAuthFirebaseUIModule, { declarations: function () { return [AuthComponent, UserComponent, NgxAuthFirebaseuiAvatarComponent, AuthProvidersComponent, EmailConfirmationComponent, LegalityDialogComponent, NgxAuthFirebaseuiLoginComponent, NgxAuthFirebaseuiRegisterComponent]; }, imports: function () { return [CommonModule,
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
        AngularFirestoreModule]; }, exports: function () { return [AuthComponent, UserComponent, NgxAuthFirebaseuiAvatarComponent, AuthProvidersComponent, EmailConfirmationComponent, 
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule, NgxAuthFirebaseuiLoginComponent, NgxAuthFirebaseuiRegisterComponent]; } }); })();

/*
 * Public API Surface of ngx-auth-firebaseui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Accounts, AuthComponent, AuthProcessService, AuthProvider, AuthProvidersComponent, EMAIL_REGEX, EmailConfirmationComponent, FirestoreSyncService, Layout, LegalityDialogComponent, LoggedInGuard, NgxAuthFirebaseUIConfigToken, NgxAuthFirebaseUIModule, NgxAuthFirebaseuiAvatarComponent, NgxAuthFirebaseuiLoginComponent, NgxAuthFirebaseuiRegisterComponent, PHONE_NUMBER_REGEX, Theme, UserComponent, UserProvidedConfigToken, appleAuthProvider, collections, confirmPasswordValidator, defaultAuthFirebaseUIConfig, facebookAuthProvider, githubAuthProvider, googleAuthProvider, microsoftAuthProvider, ngxAuthFirebaseUIConfigFactory, twitterAuthProvider, yahooAuthProvider, defaultAuthFirebaseUIConfig as ɵa, ngxAuthFirebaseUIConfigFactory as ɵb, NgxAuthFirebaseuiAnimations as ɵd, EmailConfirmationComponent as ɵe };

//# sourceMappingURL=ngx-auth-firebaseui.js.map