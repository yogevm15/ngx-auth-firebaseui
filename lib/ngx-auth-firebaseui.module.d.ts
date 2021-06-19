import { ModuleWithProviders } from '@angular/core';
import { FirebaseAppConfig } from '@angular/fire';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxAuthFirebaseUIConfig } from './interfaces/config.interface';
import { AuthProcessService } from './services/auth-process.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/ngx-auth-firebaseui/auth.component';
import * as ɵngcc2 from './components/ngx-auth-firebaseui-user/user.component';
import * as ɵngcc3 from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import * as ɵngcc4 from './components/providers/auth.providers.component';
import * as ɵngcc5 from './components/email-confirmation/email-confirmation.component';
import * as ɵngcc6 from './components/legality-dialog/legality-dialog.component';
import * as ɵngcc7 from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
import * as ɵngcc8 from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
import * as ɵngcc9 from '@angular/common';
import * as ɵngcc10 from '@angular/router';
import * as ɵngcc11 from '@angular/common/http';
import * as ɵngcc12 from '@angular/flex-layout';
import * as ɵngcc13 from '@angular/forms';
import * as ɵngcc14 from '@angular/material/tabs';
import * as ɵngcc15 from '@angular/material/card';
import * as ɵngcc16 from '@angular/material/input';
import * as ɵngcc17 from '@angular/material/button';
import * as ɵngcc18 from '@angular/material/icon';
import * as ɵngcc19 from '@angular/material/snack-bar';
import * as ɵngcc20 from '@angular/material/divider';
import * as ɵngcc21 from '@angular/material/chips';
import * as ɵngcc22 from '@angular/material/tooltip';
import * as ɵngcc23 from '@angular/material/dialog';
import * as ɵngcc24 from '@angular/material/checkbox';
import * as ɵngcc25 from '@angular/material/progress-spinner';
import * as ɵngcc26 from '@angular/material/progress-bar';
import * as ɵngcc27 from '@angular/material/menu';
import * as ɵngcc28 from '@angular-material-extensions/password-strength';
import * as ɵngcc29 from '@angular/fire/auth';
import * as ɵngcc30 from '@angular/fire/firestore';
export { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
export { LinkMenuItem, NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
export { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
export { AuthProvidersComponent, Layout, Theme } from './components/providers/auth.providers.component';
export { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
export { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
export { LoggedInGuard } from './guards/logged-in.guard';
export { NgxAuthFirebaseUIConfig } from './interfaces/config.interface';
export { AuthProcessService, AuthProvider } from './services/auth-process.service';
export { FirestoreSyncService } from './services/firestore-sync.service';
export declare class NgxAuthFirebaseUIModule {
    private iconRegistry;
    private sanitizer;
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, auth: AuthProcessService);
    static forRoot(configFactory: FirebaseAppConfig, appNameFactory?: () => string | undefined, config?: NgxAuthFirebaseUIConfig): ModuleWithProviders<NgxAuthFirebaseUIModule>;
    registerProviderIcons(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxAuthFirebaseUIModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<NgxAuthFirebaseUIModule, [typeof ɵngcc1.AuthComponent, typeof ɵngcc2.UserComponent, typeof ɵngcc3.NgxAuthFirebaseuiAvatarComponent, typeof ɵngcc4.AuthProvidersComponent, typeof ɵngcc5.EmailConfirmationComponent, typeof ɵngcc6.LegalityDialogComponent, typeof ɵngcc7.NgxAuthFirebaseuiLoginComponent, typeof ɵngcc8.NgxAuthFirebaseuiRegisterComponent], [typeof ɵngcc9.CommonModule, typeof ɵngcc10.RouterModule, typeof ɵngcc11.HttpClientModule, typeof ɵngcc12.FlexLayoutModule, typeof ɵngcc13.FormsModule, typeof ɵngcc13.ReactiveFormsModule, typeof ɵngcc14.MatTabsModule, typeof ɵngcc15.MatCardModule, typeof ɵngcc16.MatInputModule, typeof ɵngcc17.MatButtonModule, typeof ɵngcc18.MatIconModule, typeof ɵngcc19.MatSnackBarModule, typeof ɵngcc20.MatDividerModule, typeof ɵngcc21.MatChipsModule, typeof ɵngcc22.MatTooltipModule, typeof ɵngcc23.MatDialogModule, typeof ɵngcc24.MatCheckboxModule, typeof ɵngcc25.MatProgressSpinnerModule, typeof ɵngcc26.MatProgressBarModule, typeof ɵngcc23.MatDialogModule, typeof ɵngcc27.MatMenuModule, typeof ɵngcc28.MatPasswordStrengthModule, typeof ɵngcc29.AngularFireAuthModule, typeof ɵngcc30.AngularFirestoreModule], [typeof ɵngcc1.AuthComponent, typeof ɵngcc2.UserComponent, typeof ɵngcc3.NgxAuthFirebaseuiAvatarComponent, typeof ɵngcc4.AuthProvidersComponent, typeof ɵngcc5.EmailConfirmationComponent, typeof ɵngcc29.AngularFireAuthModule, typeof ɵngcc30.AngularFirestoreModule, typeof ɵngcc7.NgxAuthFirebaseuiLoginComponent, typeof ɵngcc8.NgxAuthFirebaseuiRegisterComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<NgxAuthFirebaseUIModule>;
}

//# sourceMappingURL=ngx-auth-firebaseui.module.d.ts.map