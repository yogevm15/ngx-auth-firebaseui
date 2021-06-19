import { AuthProcessService, AuthProvider } from '../../services/auth-process.service';
import { LegalityDialogComponent } from '..';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as ɵngcc0 from '@angular/core';
export declare enum Theme {
    DEFAULT = "default",
    CLASSIC = "classic",
    STROKED = "stroked",
    FAB = "fab",
    MINI_FAB = "mini-fab",
    RAISED = "raised"
}
export declare enum Layout {
    ROW = "row",
    COLUMN = "column"
}
export declare class AuthProvidersComponent {
    authProcess: AuthProcessService;
    dialog: MatDialog;
    theme: Theme;
    layout: string;
    providers: AuthProvider[] | AuthProvider;
    onSuccess: any;
    onError: any;
    tosUrl: string;
    privacyPolicyUrl: string;
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    themes: typeof Theme;
    authProvider: typeof AuthProvider;
    constructor(authProcess: AuthProcessService, dialog: MatDialog);
    processLegalSignUP(authProvider?: AuthProvider): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AuthProvidersComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<AuthProvidersComponent, "ngx-auth-firebaseui-providers", never, { "layout": "layout"; "providers": "providers"; "theme": "theme"; "tosUrl": "tosUrl"; "privacyPolicyUrl": "privacyPolicyUrl"; }, { "onSuccess": "onSuccess"; "onError": "onError"; }, never, never>;
}

//# sourceMappingURL=auth.providers.component.d.ts.map