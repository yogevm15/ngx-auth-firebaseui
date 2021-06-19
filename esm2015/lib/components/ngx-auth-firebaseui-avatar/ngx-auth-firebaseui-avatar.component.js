import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { take } from 'rxjs/operators';
import { MatDialog } from "@angular/material/dialog";
import { UserComponent } from "..";
import { AuthProcessService } from "../../services/auth-process.service";
export class NgxAuthFirebaseuiAvatarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDbkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFjekUsTUFBTSxPQUFPLGdDQUFnQztJQWlDM0MsWUFBbUIsR0FBb0IsRUFBUyxNQUFpQixFQUFVLFdBQStCO1FBQXZGLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQS9CMUcsV0FBTSxHQUF5QixTQUFTLENBQUM7UUFHekMsY0FBUyxHQUFHLElBQUksQ0FBQztRQU1qQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUd0QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFHeEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFHdEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFHeEIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7UUFFekIsK0NBQStDO1FBRS9DLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU0wRCxDQUFDO0lBRTlHLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJO2dCQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxXQUEwQjtRQUMvQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLGNBQWMsR0FBcUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUUsTUFBTSxRQUFRLEdBQUcsQ0FDZixDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDOUQsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3QyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2xELFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM5QyxRQUFRO2FBQ1AsU0FBUzthQUNULElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDM0UsUUFBUTthQUNQLGVBQWU7YUFDZixJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUMsZ0NBQWdDO0lBQzlJLENBQUM7SUFFSyxPQUFPOztZQUNYLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6Qix1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixxQkFBcUI7Z0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDO0tBQUE7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsKzNEQUEwRDs7YUFFM0Q7OztZQW5CUSxlQUFlO1lBSWYsU0FBUztZQUVULGtCQUFrQjs7O3FCQWV4QixLQUFLO3dCQUdMLEtBQUs7b0JBR0wsS0FBSzs2QkFHTCxLQUFLOytCQUdMLEtBQUs7NkJBR0wsS0FBSzswQkFHTCxLQUFLOzBCQUdMLEtBQUs7d0JBSUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IEF1dGhQcm9jZXNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtNZW51SXRlbSB7XG4gIHRleHQ6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi10eXBlc1xuICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9uZ3gtYXV0aC1maXJlYmFzZXVpLWF2YXRhci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEF1dGhGaXJlYmFzZXVpQXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbGF5b3V0OiBcImRlZmF1bHRcIiB8IFwic2ltcGxlXCIgPSBcImRlZmF1bHRcIjtcblxuICBASW5wdXQoKVxuICBjYW5Mb2dvdXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGxpbmtzOiBMaW5rTWVudUl0ZW1bXTtcblxuICBASW5wdXQoKVxuICBjYW5WaWV3QWNjb3VudCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgY2FuRGVsZXRlQWNjb3VudCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgY2FuRWRpdEFjY291bnQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHRleHRQcm9maWxlID0gXCJQcm9maWxlXCI7XG5cbiAgQElucHV0KClcbiAgdGV4dFNpZ25PdXQgPSBcIlNpZ24gT3V0XCI7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpXG4gIG9uU2lnbk91dDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHVzZXI6IGZpcmViYXNlLlVzZXI7XG4gIHVzZXIkOiBPYnNlcnZhYmxlPGZpcmViYXNlLlVzZXIgfCBudWxsPjtcbiAgZGlzcGxheU5hbWVJbml0aWFsczogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWZhOiBBbmd1bGFyRmlyZUF1dGgsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZywgcHJpdmF0ZSBhdXRoUHJvY2VzczogQXV0aFByb2Nlc3NTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciQgPSB0aGlzLmFmYS51c2VyO1xuICAgIHRoaXMudXNlciQuc3Vic2NyaWJlKCh1c2VyOiBmaXJlYmFzZS5Vc2VyKSA9PiB7XG4gICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgdGhpcy5kaXNwbGF5TmFtZUluaXRpYWxzID0gdXNlclxuICAgICAgICA/IHRoaXMuZ2V0RGlzcGxheU5hbWVJbml0aWFscyh1c2VyLmRpc3BsYXlOYW1lKVxuICAgICAgICA6IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBnZXREaXNwbGF5TmFtZUluaXRpYWxzKGRpc3BsYXlOYW1lOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCFkaXNwbGF5TmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxzUmVnRXhwOiBSZWdFeHBNYXRjaEFycmF5ID0gZGlzcGxheU5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcbiAgICBjb25zdCBpbml0aWFscyA9IChcbiAgICAgIChpbml0aWFsc1JlZ0V4cC5zaGlmdCgpIHx8IFwiXCIpICsgKGluaXRpYWxzUmVnRXhwLnBvcCgpIHx8IFwiXCIpXG4gICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBpbml0aWFscztcbiAgfVxuXG4gIG9wZW5Qcm9maWxlKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXNlckNvbXBvbmVudCk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaW5zdGFuY2UuY2FuRGVsZXRlQWNjb3VudCA9IHRoaXMuY2FuRGVsZXRlQWNjb3VudDtcbiAgICBpbnN0YW5jZS5jYW5FZGl0QWNjb3VudCA9IHRoaXMuY2FuRWRpdEFjY291bnQ7XG4gICAgaW5zdGFuY2VcbiAgICAub25TaWduT3V0XG4gICAgLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgICApLnN1YnNjcmliZShfID0+IHRoaXMub25TaWduT3V0LmVtaXQoKSk7IC8vIHByb3BhZ2F0ZSB0aGUgb25TaWdub3V0IGV2ZW50XG4gICAgaW5zdGFuY2VcbiAgICAub25BY2NvdW50RWRpdGVkXG4gICAgLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgKS5zdWJzY3JpYmUoXyA9PiB0aGlzLmRpc3BsYXlOYW1lSW5pdGlhbHMgPSB0aGlzLmdldERpc3BsYXlOYW1lSW5pdGlhbHModGhpcy5hdXRoUHJvY2Vzcy51c2VyLmRpc3BsYXlOYW1lKSkgLy8gdXBkYXRlIGRpc3BsYXkgbmFtZSBpbml0aWFscz9cbiAgfVxuXG4gIGFzeW5jIHNpZ25PdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuYWZhLnNpZ25PdXQoKTtcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXG4gICAgICB0aGlzLm9uU2lnbk91dC5lbWl0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3IgaGFwcGVuZWQgd2hpbGUgc2lnbmluZyBvdXQhXCIsIGUpO1xuICAgIH1cbiAgfVxufVxuIl19