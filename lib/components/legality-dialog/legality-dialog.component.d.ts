import { MatDialogRef } from '@angular/material/dialog';
import { LegalityDialogParams } from '../../interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class LegalityDialogComponent {
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    data: LegalityDialogParams;
    checkTOS: boolean;
    checkPrivacyPolicy: boolean;
    constructor(dialogRef: MatDialogRef<LegalityDialogComponent>, data: LegalityDialogParams);
    private _disableConfirmActionButton;
    get disableConfirmActionButton(): boolean;
    closeDialog(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<LegalityDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<LegalityDialogComponent, "ngx-auth-firebaseui-legality-dialog", never, {}, {}, never, never>;
}

//# sourceMappingURL=legality-dialog.component.d.ts.map