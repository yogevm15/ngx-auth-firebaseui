import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxAuthFirebaseUIConfig } from '../interfaces';
import { AuthProcessService } from '../services/auth-process.service';
import * as ɵngcc0 from '@angular/core';
export declare class LoggedInGuard implements CanActivate {
    private config;
    private router;
    private authProcess;
    constructor(config: NgxAuthFirebaseUIConfig, router: Router, authProcess: AuthProcessService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<LoggedInGuard, never>;
}

//# sourceMappingURL=logged-in.guard.d.ts.map