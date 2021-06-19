(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@firebase/auth'), require('@angular/fire/auth'), require('@angular/material/snack-bar'), require('firebase/app'), require('rxjs'), require('rxjs/operators'), require('@angular/fire/firestore'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/forms'), require('@angular/material/tabs'), require('@angular-material-extensions/password-strength'), require('@angular/animations'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/fire'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/divider'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/tooltip'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-auth-firebaseui', ['exports', '@angular/core', '@angular/router', '@firebase/auth', '@angular/fire/auth', '@angular/material/snack-bar', 'firebase/app', 'rxjs', 'rxjs/operators', '@angular/fire/firestore', '@angular/material/dialog', '@angular/common', '@angular/forms', '@angular/material/tabs', '@angular-material-extensions/password-strength', '@angular/animations', '@angular/common/http', '@angular/flex-layout', '@angular/fire', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/divider', '@angular/material/icon', '@angular/material/input', '@angular/material/menu', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/tooltip', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-auth-firebaseui'] = {}, global.ng.core, global.ng.router, null, global.ng.fire.auth, global.ng.material.snackBar, global.firebase, global.rxjs, global.rxjs.operators, global.ng.fire.firestore, global.ng.material.dialog, global.ng.common, global.ng.forms, global.ng.material.tabs, global.passwordStrength, global.ng.animations, global.ng.common.http, global.ng.flexLayout, global.ng.fire, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.divider, global.ng.material.icon, global.ng.material.input, global.ng.material.menu, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.tooltip, global.ng.platformBrowser));
}(this, (function (exports, i0, i2, auth, i1$1, i3, firebase, rxjs, operators, i1, dialog, common, forms, tabs, passwordStrength, animations, http, flexLayout, fire, button, card, checkbox, chips, divider, icon, input, menu, progressBar, progressSpinner, tooltip, platformBrowser) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    (function (Accounts) {
        Accounts["NONE"] = "account";
        Accounts["CHECK"] = "account-check";
        Accounts["EDIT"] = "account-edit";
        Accounts["OFF"] = "account-off";
        Accounts["REMOVE"] = "account-remove";
    })(exports.Accounts || (exports.Accounts = {}));

    // This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
    var NgxAuthFirebaseUIConfigToken = new i0.InjectionToken('NgxAuthFirebaseUIConfigToken');
    // This is an intermediate token containing only user-provided configuration
    var UserProvidedConfigToken = new i0.InjectionToken('UserProvidedConfigToken');

    var collections = {
        users: "users",
    };
    var FirestoreSyncService = /** @class */ (function () {
        function FirestoreSyncService(afs) {
            this.afs = afs;
            // this.afs.firestore.settings({timestampsInSnapshots: true});
        }
        // get timestamp() {
        //     return firebase.firestore.FieldValue.serverTimestamp();
        // }
        FirestoreSyncService.prototype.getUserDocRefByUID = function (uid) {
            return this.afs.doc(collections.users + "/" + uid);
        };
        FirestoreSyncService.prototype.deleteUserData = function (uid) {
            var userRef = this.getUserDocRefByUID(uid);
            return userRef.delete();
        };
        FirestoreSyncService.prototype.updateUserData = function (user) {
            // Sets user$ data to firestore on login
            var userRef = this.getUserDocRefByUID(user.uid);
            var data = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                phoneNumber: user.phoneNumber,
                providerId: user.providerId,
            };
            return userRef.set(data, { merge: true });
        };
        return FirestoreSyncService;
    }());
    FirestoreSyncService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FirestoreSyncService_Factory() { return new FirestoreSyncService(i0.ɵɵinject(i1.AngularFirestore)); }, token: FirestoreSyncService, providedIn: "root" });
    FirestoreSyncService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root",
                },] }
    ];
    FirestoreSyncService.ctorParameters = function () { return [
        { type: i1.AngularFirestore }
    ]; };

    var facebookAuthProvider = new firebase__default['default'].auth.FacebookAuthProvider();
    var googleAuthProvider = new firebase__default['default'].auth.GoogleAuthProvider();
    var appleAuthProvider = new firebase__default['default'].auth.OAuthProvider("apple.com");
    var twitterAuthProvider = new firebase__default['default'].auth.TwitterAuthProvider();
    var githubAuthProvider = new firebase__default['default'].auth.GithubAuthProvider();
    var microsoftAuthProvider = new firebase__default['default'].auth.OAuthProvider("microsoft.com");
    var yahooAuthProvider = new firebase__default['default'].auth.OAuthProvider("yahoo.com");
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
    })(exports.AuthProvider || (exports.AuthProvider = {}));
    var AuthProcessService = /** @class */ (function () {
        function AuthProcessService(afa, config, snackBar, fireStoreService, matSnackBarConfig) {
            this.afa = afa;
            this.config = config;
            this.snackBar = snackBar;
            this.fireStoreService = fireStoreService;
            this.matSnackBarConfig = matSnackBarConfig;
            this.onSuccessEmitter = new i0.EventEmitter();
            this.onErrorEmitter = new i0.EventEmitter();
            // Useful to know about auth state even between reloads.
            // Replace emailConfirmationSent and emailToConfirm.
            this._user$ = new rxjs.BehaviorSubject(null);
        }
        Object.defineProperty(AuthProcessService.prototype, "user$", {
            get: function () {
                return this._user$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        AuthProcessService.prototype.listenToUserEvents = function () {
            var _this = this;
            this.afa.user.subscribe(function (user) {
                _this._user$.next(user);
                _this.user = user;
            });
        };
        /**
         * Reset the password of the ngx-auth-firebaseui-user via email
         *
         * @param email - the email to reset
         */
        AuthProcessService.prototype.resetPassword = function (email) {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            console.log("Password reset email sent");
                            return [4 /*yield*/, this.afa.sendPasswordResetEmail(email)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            error_1 = _a.sent();
                            return [2 /*return*/, this.notifyError(error_1)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * General sign in mechanism to authenticate the users with a firebase project
         * using a traditional way, via username and password or by using an authentication provider
         * like google, facebook, twitter and github
         *
         * @param provider - the provider to authenticate with (google, facebook, twitter, github)
         * @param credentials optional email and password
         */
        AuthProcessService.prototype.signInWith = function (provider, credentials) {
            return __awaiter(this, void 0, void 0, function () {
                var signInResult, _a, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 23, , 24]);
                            signInResult = void 0;
                            _a = provider;
                            switch (_a) {
                                case exports.AuthProvider.ANONYMOUS: return [3 /*break*/, 1];
                                case exports.AuthProvider.EmailAndPassword: return [3 /*break*/, 3];
                                case exports.AuthProvider.Google: return [3 /*break*/, 5];
                                case exports.AuthProvider.Apple: return [3 /*break*/, 7];
                                case exports.AuthProvider.Facebook: return [3 /*break*/, 9];
                                case exports.AuthProvider.Twitter: return [3 /*break*/, 11];
                                case exports.AuthProvider.Github: return [3 /*break*/, 13];
                                case exports.AuthProvider.Microsoft: return [3 /*break*/, 15];
                                case exports.AuthProvider.Yahoo: return [3 /*break*/, 17];
                                case exports.AuthProvider.PhoneNumber: return [3 /*break*/, 19];
                            }
                            return [3 /*break*/, 20];
                        case 1: return [4 /*yield*/, this.afa.signInAnonymously()];
                        case 2:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 3: return [4 /*yield*/, this.afa.signInWithEmailAndPassword(credentials.email, credentials.password)];
                        case 4:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 5: return [4 /*yield*/, this.afa.signInWithPopup(googleAuthProvider)];
                        case 6:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 7: return [4 /*yield*/, this.afa.signInWithPopup(appleAuthProvider)];
                        case 8:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 9: return [4 /*yield*/, this.afa.signInWithPopup(facebookAuthProvider)];
                        case 10:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 11: return [4 /*yield*/, this.afa.signInWithPopup(twitterAuthProvider)];
                        case 12:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 13: return [4 /*yield*/, this.afa.signInWithPopup(githubAuthProvider)];
                        case 14:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 15: return [4 /*yield*/, this.afa.signInWithPopup(microsoftAuthProvider)];
                        case 16:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 17: return [4 /*yield*/, this.afa.signInWithPopup(yahooAuthProvider)];
                        case 18:
                            signInResult = (_b.sent());
                            return [3 /*break*/, 21];
                        case 19: 
                        // coming soon - see feature/sms branch
                        return [3 /*break*/, 21];
                        case 20: throw new Error(exports.AuthProvider[provider] + " is not available as auth provider");
                        case 21: return [4 /*yield*/, this.handleSuccess(signInResult)];
                        case 22:
                            _b.sent();
                            return [3 /*break*/, 24];
                        case 23:
                            err_1 = _b.sent();
                            this.handleError(err_1);
                            return [3 /*break*/, 24];
                        case 24: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Sign up new users via email and password.
         * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
         *
         * @param displayName - the displayName if the new ngx-auth-firebaseui-user
         * @param credentials email and password
         * @returns -
         */
        AuthProcessService.prototype.signUp = function (displayName, credentials) {
            return __awaiter(this, void 0, void 0, function () {
                var userCredential, user, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 8, , 9]);
                            return [4 /*yield*/, this.afa.createUserWithEmailAndPassword(credentials.email, credentials.password)];
                        case 1:
                            userCredential = _a.sent();
                            user = userCredential.user;
                            return [4 /*yield*/, this.updateProfile(displayName, user.photoURL)];
                        case 2:
                            _a.sent();
                            if (!this.config.enableFirestoreSync) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.fireStoreService.getUserDocRefByUID(user.uid).set({
                                    uid: user.uid,
                                    displayName: displayName,
                                    email: user.email,
                                    photoURL: user.photoURL,
                                })];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            if (!this.config.enableEmailVerification) return [3 /*break*/, 6];
                            return [4 /*yield*/, user.sendEmailVerification()];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6:
                            // Legacy fields
                            this.emailConfirmationSent = true;
                            this.emailToConfirm = credentials.email;
                            return [4 /*yield*/, this.handleSuccess(userCredential)];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 8:
                            err_2 = _a.sent();
                            this.handleError(err_2);
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        AuthProcessService.prototype.sendNewVerificationEmail = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.user) {
                        return [2 /*return*/, Promise.reject(new Error("No signed in user"))];
                    }
                    return [2 /*return*/, this.user.sendEmailVerification()];
                });
            });
        };
        AuthProcessService.prototype.signOut = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.afa.signOut()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            this.notifyError(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
         * firebase authentication feature (not in firestore)
         *
         * @param name - the new name of the authenticated ngx-auth-firebaseui-user
         * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
         * @returns -
         */
        AuthProcessService.prototype.updateProfile = function (name, photoURL) {
            return this.afa.currentUser.then(function (user) {
                if (!photoURL) {
                    return user.updateProfile({ displayName: name });
                }
                else {
                    return user.updateProfile({ displayName: name, photoURL: photoURL });
                }
            });
        };
        AuthProcessService.prototype.parseUserInfo = function (user) {
            return {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL,
                providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null,
            };
        };
        AuthProcessService.prototype.getUserPhotoUrl = function () {
            var _this = this;
            return this._user$.pipe(operators.map(function (user) {
                if (!user) {
                    return null;
                }
                else if (user.photoURL) {
                    return user.photoURL;
                }
                else if (user.emailVerified) {
                    return _this.getPhotoPath(exports.Accounts.CHECK);
                }
                else if (user.isAnonymous) {
                    return _this.getPhotoPath(exports.Accounts.OFF);
                }
                else {
                    return _this.getPhotoPath(exports.Accounts.NONE);
                }
            }));
        };
        AuthProcessService.prototype.getPhotoPath = function (image) {
            return "assets/user/" + image + ".svg";
        };
        AuthProcessService.prototype.signInWithPhoneNumber = function () {
            // todo: 3.1.18
        };
        AuthProcessService.prototype.handleSuccess = function (userCredential) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1, fallbackMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.config.useRawUserCredential) {
                                this.onSuccessEmitter.next(userCredential);
                            }
                            else {
                                this.onSuccessEmitter.next(userCredential.user);
                            }
                            if (!this.config.enableFirestoreSync) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.fireStoreService.updateUserData(this.parseUserInfo(userCredential.user))];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            console.error("Error occurred while updating user data with firestore: " + e_1);
                            return [3 /*break*/, 4];
                        case 4:
                            if (this.config.toastMessageOnAuthSuccess) {
                                fallbackMessage = "Hello " + (userCredential.user.displayName ? userCredential.user.displayName : "") + "!";
                                this.showToast(this.messageOnAuthSuccess || fallbackMessage);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthProcessService.prototype.handleError = function (error) {
            this.notifyError(error);
            console.error(error);
        };
        // Refresh user info. Can be useful for instance to get latest status regarding email verification.
        AuthProcessService.prototype.reloadUserInfo = function () {
            return this._user$
                .pipe(operators.take(1))
                .subscribe(function (user) { return user && user.reload(); });
        };
        // Search for an error message.
        // Consumers of this library are given the possibility to provide a
        // function in case they want to instrument message based on error properties.
        AuthProcessService.prototype.getMessageOnAuthError = function (error) {
            // tslint:disable-next-line:no-bitwise
            return (error.toString() || "Sorry, something went wrong. Please retry later.");
        };
        // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
        // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
        // If that's the case, an action button is added to allow the end-user to dismiss the toast.
        AuthProcessService.prototype.showToast = function (message) {
            if (message) {
                this.snackBar.open(message, this.matSnackBarConfig.duration ? null : "OK");
            }
        };
        AuthProcessService.prototype.showErrorToast = function (error) {
            if (this.config.toastMessageOnAuthError) {
                this.showToast(this.getMessageOnAuthError(error));
            }
        };
        AuthProcessService.prototype.notifyError = function (error) {
            this.onErrorEmitter.emit(error);
            this.showErrorToast(error);
        };
        return AuthProcessService;
    }());
    AuthProcessService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthProcessService_Factory() { return new AuthProcessService(i0.ɵɵinject(i1$1.AngularFireAuth), i0.ɵɵinject(NgxAuthFirebaseUIConfigToken), i0.ɵɵinject(i3.MatSnackBar), i0.ɵɵinject(FirestoreSyncService), i0.ɵɵinject(i3.MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: AuthProcessService, providedIn: "root" });
    AuthProcessService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root",
                },] }
    ];
    AuthProcessService.ctorParameters = function () { return [
        { type: i1$1.AngularFireAuth },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgxAuthFirebaseUIConfigToken; }),] }] },
        { type: i3.MatSnackBar },
        { type: FirestoreSyncService },
        { type: i3.MatSnackBarConfig, decorators: [{ type: i0.Inject, args: [i3.MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
    ]; };

    var defaultTranslations = {
        verifyEmailTitleText: 'Confirm your e-mail address!',
        verifyEmailConfirmationText: 'A confirmation e-mail has been sent.' +
            ' Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.',
        verifyEmailGoBackText: 'Go back',
        sendNewVerificationEmailText: 'Send new confirmation e-mail',
        signOutText: 'Sign out',
        messageOnEmailConfirmationSuccess: 'A new confirmation e-mail has been sent. Please check your inbox.',
    };
    var EmailConfirmationComponent = /** @class */ (function () {
        function EmailConfirmationComponent(authProcess, router, changeDetectorRef) {
            this.authProcess = authProcess;
            this.router = router;
            this.changeDetectorRef = changeDetectorRef;
            this.signOut = new i0.EventEmitter();
        }
        EmailConfirmationComponent.prototype.ngOnChanges = function (changes) {
            if (changes.verifyEmailTemplate && changes.verifyEmailTemplate.currentValue == null) {
                this.verifyEmailTemplate = this.defaultTemplate;
                console.log('ngOnChanges - defaultTemplate:', this.verifyEmailTemplate);
            }
            this.verifyEmailContext = this.createTemplateContext();
        };
        EmailConfirmationComponent.prototype.ngOnInit = function () {
            if (!this.verifyEmailTemplate) {
                console.log('ngOnInit - defaultTemplate');
                this.verifyEmailTemplate = this.defaultTemplate;
            }
            this.verifyEmailContext = this.createTemplateContext();
            console.log('verifyEmailTemplate:', this.verifyEmailTemplate);
            console.log('verifyEmailContext:', this.verifyEmailContext);
        };
        EmailConfirmationComponent.prototype.continue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.authProcess.reloadUserInfo()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.router.navigate([this.goBackURL])];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.authProcess.notifyError(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        EmailConfirmationComponent.prototype.sendNewVerificationEmail = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            this.isLoading = true;
                            this.changeDetectorRef.markForCheck();
                            return [4 /*yield*/, this.authProcess.sendNewVerificationEmail()];
                        case 1:
                            _a.sent();
                            this.authProcess.showToast(this.verifyEmailContext.messageOnEmailConfirmationSuccess);
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _a.sent();
                            this.authProcess.notifyError(error_2);
                            return [3 /*break*/, 4];
                        case 3:
                            this.isLoading = false;
                            this.changeDetectorRef.markForCheck();
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        EmailConfirmationComponent.prototype.createTemplateContext = function () {
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
        };
        return EmailConfirmationComponent;
    }());
    EmailConfirmationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-auth-firebaseui-email-confirmation',
                    template: "<ng-container *ngTemplateOutlet=\"verifyEmailTemplate; context: verifyEmailContext\"></ng-container>\n<ng-template #defaultVerifyEmail let-email=\"email\" let-goBackURL=\"goBackURL\"\n             let-sendNewVerificationEmailText=\"sendNewVerificationEmailText\"\n             let-signOutText=\"signOutText\"\n             let-verifyEmailConfirmationText=\"verifyEmailConfirmationText\" let-verifyEmailGoBackText=\"verifyEmailGoBackText\"\n             let-verifyEmailTitleText=\"verifyEmailTitleText\">\n  <mat-card class=\"verify-email\">\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-icon>email</mat-icon>\n      <p class=\"title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span class=\"mat-subheading-2\">{{ verifyEmailTitleText }}</span>\n        <span class=\"mat-body-2\">{{ email }}</span>\n      </p>\n      <p class=\"subtitle\">{{ verifyEmailConfirmationText }}</p>\n      <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    </mat-card-content>\n    <mat-card-actions fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <button (click)=\"continue()\" *ngIf=\"goBackURL\" class=\"go-back-button action-button\" mat-stroked-button>\n        {{ verifyEmailGoBackText }}\n      </button>\n      <button (click)=\"sendNewVerificationEmail()\" class=\"send-new-mail-button action-button\"\n              mat-stroked-button>{{ sendNewVerificationEmailText }}</button>\n      <button (click)=\"this.signOut.emit()\" class=\"sign-out-button action-button\" color=\"warn\"\n              mat-stroked-button>{{ signOutText }}</button>\n    </mat-card-actions>\n  </mat-card>\n</ng-template>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: [".material-icons{font-size:4rem}.verify-email{width:360px}.verify-email .mat-icon{color:#444;height:4rem;width:4rem}.verify-email .title{margin-top:16px}.verify-email .title .mat-subheading-2{margin-bottom:0}.verify-email .subtitle{margin:16px auto;text-align:justify}.verify-email p{-webkit-margin-after:1em;-webkit-margin-before:1em;-webkit-margin-end:0;-webkit-margin-start:0;display:block}.verify-email mat-card-actions{margin-top:1rem;text-align:center}.verify-email mat-card-actions .action-button{width:100%}.verify-email mat-card-actions .action-button+.action-button{margin-top:1rem}"]
                },] }
    ];
    EmailConfirmationComponent.ctorParameters = function () { return [
        { type: AuthProcessService },
        { type: i2.Router },
        { type: i0.ChangeDetectorRef }
    ]; };
    EmailConfirmationComponent.propDecorators = {
        email: [{ type: i0.Input }],
        goBackURL: [{ type: i0.Input }],
        verifyEmailTitleText: [{ type: i0.Input }],
        verifyEmailConfirmationText: [{ type: i0.Input }],
        verifyEmailGoBackText: [{ type: i0.Input }],
        sendNewVerificationEmailText: [{ type: i0.Input }],
        signOutText: [{ type: i0.Input }],
        messageOnEmailConfirmationSuccess: [{ type: i0.Input }],
        template: [{ type: i0.Input }],
        signOut: [{ type: i0.Output }],
        defaultTemplate: [{ type: i0.ViewChild, args: ['defaultVerifyEmail', { static: true },] }]
    };

    var LegalityDialogComponent = /** @class */ (function () {
        function LegalityDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            // tslint:disable-next-line:variable-name
            this._disableConfirmActionButton = false;
        }
        Object.defineProperty(LegalityDialogComponent.prototype, "disableConfirmActionButton", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        LegalityDialogComponent.prototype.closeDialog = function () {
            var result = {
                checked: !this.disableConfirmActionButton,
                authProvider: this.data.authProvider
            };
            this.dialogRef.close(result);
        };
        return LegalityDialogComponent;
    }());
    LegalityDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-auth-firebaseui-legality-dialog',
                    template: "<h1 matDialogTitle>Legal requirements</h1>\n\n<mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start\">\n    <mat-checkbox *ngIf=\"this.data.tosUrl\" [(ngModel)]=\"checkTOS\">\n      I agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.tosUrl\"\n         target=\"_blank\">\n        Terms of Service and Conditions\n      </a>\n    </mat-checkbox>\n\n    <mat-checkbox *ngIf=\"this.data.privacyPolicyUrl\"\n                  [(ngModel)]=\"checkPrivacyPolicy\">\n      I have read and agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.privacyPolicyUrl\"\n         target=\"_blank\">\n        Privacy\n      </a>\n    </mat-checkbox>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button color=\"warn\"\n          id=\"decline-action\"\n          mat-raised-button\n          matDialogClose>Decline\n  </button>\n  <button (click)=\"closeDialog()\"\n          [disabled]=\"disableConfirmActionButton\"\n          color=\"primary\"\n          id=\"confirm-action\"\n          mat-raised-button>Confirm\n  </button>\n</mat-dialog-actions>\n\n",
                    styles: ["::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content div{margin-top:1.5rem}mat-dialog-actions{margin-top:1rem}"]
                },] }
    ];
    LegalityDialogComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };

    var customAnimation = animations.animation([
        animations.style({
            opacity: '{{opacity}}',
            transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
        }),
        animations.animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', animations.style('*'))
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
    var NgxAuthFirebaseuiAnimations = [
        animations.trigger('animate', [animations.transition('void => *', [animations.useAnimation(customAnimation)])]),
        animations.trigger('animateStagger', [
            animations.state('50', animations.style('*')),
            animations.state('100', animations.style('*')),
            animations.state('200', animations.style('*')),
            animations.transition('void => 50', animations.query('@*', [animations.stagger('50ms', [animations.animateChild()])], { optional: true })),
            animations.transition('void => 100', animations.query('@*', [animations.stagger('100ms', [animations.animateChild()])], { optional: true })),
            animations.transition('void => 200', animations.query('@*', [animations.stagger('200ms', [animations.animateChild()])], { optional: true }))
        ]),
    ];

    var EMAIL_REGEX = new RegExp([
        '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
        "[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+",
        "[a-zA-Z]{2,}))$",
    ].join(""));
    // tslint:disable-next-line:max-line-length
    var PHONE_NUMBER_REGEX = new RegExp([
        "^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{4,12}$",
    ].join(""));
    var AuthComponent = /** @class */ (function () {
        function AuthComponent(
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
            this.providers = exports.AuthProvider.ALL;
            this.registrationEnabled = true;
            this.resetPasswordEnabled = true;
            this.guestEnabled = true;
            this.selectedTabChange = new i0.EventEmitter();
            // Password strength api
            this.enableLengthRule = true;
            this.enableLowerCaseLetterRule = true;
            this.enableUpperCaseLetterRule = true;
            this.enableDigitRule = true;
            this.enableSpecialCharRule = true;
            // tslint:disable-next-line:no-output-on-prefix
            this.onStrengthChanged = new i0.EventEmitter();
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
            this.emailConfirmationText = "A confirmation e-mail has been sent to you. Check your inbox and click on the link \"Confirm my e-mail\" to confirm your e-mail address.";
            this.authProvider = exports.AuthProvider;
            this.authenticationError = false;
            this.passReset = false;
            this.authProviders = exports.AuthProvider;
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        Object.defineProperty(AuthComponent.prototype, "color", {
            get: function () {
                return this.authenticationError ? "warn" : "primary";
            },
            enumerable: false,
            configurable: true
        });
        AuthComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.onErrorSubscription = this.onError.subscribe(function () { return (_this.authenticationError = true); });
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
        };
        AuthComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.passwordStrength) {
                this.passwordStrength.onStrengthChanged.subscribe(function (strength) {
                    _this.onStrengthChanged.emit(strength);
                });
            }
        };
        AuthComponent.prototype.ngOnChanges = function (changes) {
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
        };
        AuthComponent.prototype.ngOnDestroy = function () {
            if (this.onErrorSubscription) {
                this.onErrorSubscription.unsubscribe();
            }
        };
        AuthComponent.prototype.onTabChange = function (event) {
            this.selectedTabChange.emit(event);
            this.tabIndex = event.index;
        };
        AuthComponent.prototype.signOut = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            this.isLoading = true;
                            this.changeDetectorRef.markForCheck();
                            return [4 /*yield*/, this.authProcess.signOut()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            this.isLoading = false;
                            this.tabIndex = 0;
                            this.changeDetectorRef.markForCheck();
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        AuthComponent.prototype.signIn = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.signInFormGroup.valid) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            this.isLoading = true;
                            this.changeDetectorRef.markForCheck();
                            return [4 /*yield*/, this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                                    email: this.signInFormGroup.value.email,
                                    password: this.signInFormGroup.value.password,
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.isLoading = false;
                            this.changeDetectorRef.markForCheck();
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AuthComponent.prototype.updateAuthSnackbarMessages = function () {
            this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
            this.authProcess.messageOnAuthError = this.messageOnAuthError;
        };
        AuthComponent.prototype.createForgotPasswordTab = function () {
            this.passwordResetWished = true;
            this.tabIndex = 2;
            this.changeDetectorRef.markForCheck();
        };
        AuthComponent.prototype.processLegalSignUP = function (authProvider) {
            var _this = this;
            if (this.tosUrl || this.privacyPolicyUrl) {
                var params = {
                    tosUrl: this.tosUrl,
                    privacyPolicyUrl: this.privacyPolicyUrl,
                    authProvider: authProvider,
                };
                this.dialogRef = this.dialog.open(LegalityDialogComponent, {
                    data: params,
                });
                this.dialogRef.afterClosed().subscribe(function (result) {
                    if (result && result.checked) {
                        _this._afterSignUpMiddleware(result.authProvider).then(function () { return _this.signUpFormGroup.reset(); });
                    }
                    _this.dialogRef = null;
                });
            }
            else {
                this._afterSignUpMiddleware(authProvider).then(function () { return _this.signUpFormGroup.reset(); });
            }
        };
        AuthComponent.prototype.signUp = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            this.isLoading = true;
                            this.changeDetectorRef.markForCheck();
                            return [4 /*yield*/, this.authProcess.signUp(this.signUpFormGroup.value.name, {
                                    email: this.signUpFormGroup.value.email,
                                    password: this.signUpFormGroup.value.password,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            this.isLoading = false;
                            this.changeDetectorRef.markForCheck();
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        AuthComponent.prototype.signUpAnonymously = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            this.isLoading = true;
                            this.changeDetectorRef.markForCheck();
                            return [4 /*yield*/, this.authProcess.signInWith(this.authProvider.ANONYMOUS)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            this.isLoading = false;
                            this.changeDetectorRef.markForCheck();
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        AuthComponent.prototype.resetPassword = function () {
            var _this = this;
            this.authProcess
                .resetPassword(this.resetPasswordEmailFormControl.value)
                .then(function () {
                _this.passReset = true;
                // this.tabIndex = 2;
                _this.changeDetectorRef.markForCheck();
            });
        };
        AuthComponent.prototype.chooseBackUrl = function () {
            return (this.activatedRoute.snapshot.queryParams.redirectUrl ||
                this.goBackURL ||
                "/");
        };
        AuthComponent.prototype._initSignInFormGroupBuilder = function () {
            this.signInFormGroup = new forms.FormGroup({});
            this.signInFormGroup.registerControl("email", (this.signInEmailFormControl = new forms.FormControl("", [
                forms.Validators.required,
                forms.Validators.pattern(EMAIL_REGEX),
            ])));
            this.signInFormGroup.registerControl("password", (this.sigInPasswordFormControl = new forms.FormControl("", [
                forms.Validators.required,
                forms.Validators.minLength(this.min),
                forms.Validators.maxLength(this.max),
            ])));
        };
        AuthComponent.prototype._initSignUpFormGroupBuilder = function () {
            this.signUpFormGroup = new forms.FormGroup({
                name: this.sigUpNameFormControl = new forms.FormControl("", [
                    forms.Validators.required,
                    forms.Validators.minLength(this.config.nameMinLength),
                    forms.Validators.maxLength(this.config.nameMaxLength),
                ]),
                email: this.sigUpEmailFormControl = new forms.FormControl("", [
                    forms.Validators.required,
                    forms.Validators.pattern(EMAIL_REGEX),
                ]),
                password: this.sigUpPasswordFormControl = new forms.FormControl("", [
                    forms.Validators.required,
                    forms.Validators.minLength(this.min),
                    forms.Validators.maxLength(this.max),
                ]),
            });
        };
        AuthComponent.prototype._initResetPasswordFormGroupBuilder = function () {
            this.resetPasswordFormGroup = new forms.FormGroup({
                email: this.resetPasswordEmailFormControl = new forms.FormControl("", [
                    forms.Validators.required,
                    forms.Validators.pattern(EMAIL_REGEX),
                ]),
            });
        };
        AuthComponent.prototype._afterSignUpMiddleware = function (authProvider) {
            if (authProvider === this.authProvider.ANONYMOUS) {
                return this.signUpAnonymously();
            }
            return this.signUp();
        };
        return AuthComponent;
    }());
    AuthComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: "ngx-auth-firebaseui",
                    template: "<ng-container *ngIf=\"authProcess.user$ | async as user; else showForm\">\n\n  <!-- This component will be shown when:\n    - we just sent a verification mail (notably after sign up)\n    - we arrived from the guard after trying to access a protected route even though we are connected\n    - config.enableEmailVerification is undefined, null or true\n  -->\n  <div\n    *ngIf=\"(config.enableEmailVerification !== false) && (\n     (config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) || (authProcess.emailConfirmationSent && !user.emailVerified)\n     ); else signedInUser\"\n    fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <ngx-auth-firebaseui-email-confirmation\n      (signOut)=\"signOut()\"\n      [email]=\"user.email\"\n      [goBackURL]=\"goBackURL\"\n      [messageOnEmailConfirmationSuccess]=\"messageOnEmailConfirmationSuccess\"\n      [sendNewVerificationEmailText]=\"sendNewVerificationEmailText\"\n      [signOutText]=\"signOutText\"\n      [template]=\"verifyEmailTemplate\"\n      [verifyEmailConfirmationText]=\"verifyEmailConfirmationText\"\n      [verifyEmailGoBackText]=\"verifyEmailGoBackText\"\n      [verifyEmailTitleText]=\"verifyEmailTitleText\">\n    </ngx-auth-firebaseui-email-confirmation>\n  </div>\n\n  <ng-template #signedInUser>\n    <div class=\"signed-in-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img *ngIf=\"user?.photoURL; else noPhoto\" [src]=\"user?.photoURL\" class=\"account-circle\">\n      <ng-template #noPhoto>\n        <mat-icon class=\"account-circle\">account_circle</mat-icon>\n      </ng-template>\n      <div class=\"user-display-name mat-title\">{{ user?.displayName }}</div>\n      <div class=\"user-email mat-body-2\">{{ user?.email }}</div>\n      <div class=\"actions\">\n        <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n        <a *ngIf=\"verifyEmailGoBackText\" [routerLink]=\"goBackURL\" class=\"go-back-button action-button\" color=\"primary\"\n           mat-stroked-button>{{ verifyEmailGoBackText }}</a>\n        <button (click)=\"signOut()\" class=\"sign-out-button action-button\" color=\"warn\"\n                mat-stroked-button>{{ signOutText }}</button>\n      </div>\n    </div>\n  </ng-template>\n\n</ng-container>\n\n<ng-template #showForm>\n  <mat-tab-group (selectedTabChange)=\"onTabChange($event)\" [color]=\"color\" [selectedIndex]=\"tabIndex\">\n    <!--Sign in tab-->\n    <mat-tab [label]=\"signInTabText\">\n      <mat-card>\n        <mat-card-title>{{signInCardTitleText}}</mat-card-title>\n        <mat-card-content>\n          <form (ngSubmit)=\"signIn()\"\n                [@animateStagger]=\"{ value: '50' }\"\n                [formGroup]=\"signInFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input formControlName=\"email\"\n                       matInput\n                       required\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{passwordText}}</mat-label>\n                <input [maxlength]=\"max\" [minlength]=\"min\" [type]=\"togglePass?.type\" formControlName=\"password\"\n                       autocomplete=\"current-password\" matInput\n                       required/>\n                <mat-pass-toggle-visibility #togglePass matSuffix></mat-pass-toggle-visibility>\n                <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signInFormGroup.value.password.length }}\n                  / {{ max }} </mat-hint>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('required')\">\n                  {{passwordErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('minlength')\">\n                  {{ passwordErrorMinLengthText }}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('maxlength')\">\n                  {{ passwordErrorMaxLengthText }}\n                </mat-error>\n              </mat-form-field>\n\n              <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signInFormGroup.invalid\"\n                      class=\"space-top\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{loginButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"createForgotPasswordTab()\"\n                    *ngIf=\"resetPasswordEnabled\"\n                    [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                    [color]=\"color\"\n                    class=\"space-top\"\n                    mat-button>\n              {{forgotPasswordButtonText}}\n            </button>\n          </div>\n\n        </mat-card-content>\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n      </mat-card>\n    </mat-tab>\n\n    <!--tab register-->\n    <mat-tab *ngIf=\"registrationEnabled\" [label]=\"registerTabText\">\n      <mat-card>\n        <mat-card-title>{{registerCardTitleText}}</mat-card-title>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n          <form (ngSubmit)=\"signUpFormGroup.valid &&\n            processLegalSignUP(authProvider.EmailAndPassword)\"\n                [@animateStagger]=\"{ value: '50' }\" [formGroup]=\"signUpFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <!--name-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <!--labels will work only with @angular/material@6.2.0 -->\n                <mat-label>{{nameText}}</mat-label>\n                <input\n                  [formControl]=\"sigUpNameFormControl\"\n                  [maxlength]=\"config.nameMaxLength\"\n                  [minlength]=\"config.nameMinLength\"\n                  matInput\n                  required\n                />\n                <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signUpFormGroup.value.name?.length }}\n                  / {{ config.nameMaxLength }} </mat-hint>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('required')\">\n                  {{nameErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('minlength')\">\n                  {{nameErrorMinLengthText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('maxlength')\">\n                  {{nameErrorMaxLengthText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--email-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input [formControl]=\"sigUpEmailFormControl\"\n                       matInput\n                       required\n                       type=\"email\"\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--password-->\n              <div fxLayout=\"column\">\n                <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                [appearance]=\"appearance\">\n                  <mat-label>{{passwordText}}</mat-label>\n                  <input\n                    [formControl]=\"sigUpPasswordFormControl\"\n                    [maxlength]=\"max\"\n                    [minlength]=\"min\"\n                    [type]=\"toggle.type\"\n                    matInput\n                    name=\"password\"\n                    autocomplete=\"new-password\"\n                    required\n                  />\n                  <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>\n\n                  <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n\n                  <mat-hint align=\"end\" aria-live=\"polite\">\n                    {{signUpFormGroup.value.password?.length}} / {{ max }}\n                  </mat-hint>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('required')\" class=\"cut-text\">\n                    {{passwordErrorRequiredText}}\n                  </mat-error>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('minlength')\" class=\"cut-text\">\n                    {{ passwordErrorMinLengthText }}\n                  </mat-error>\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('maxlength')\" class=\"cut-text\">\n                    {{ passwordErrorMaxLengthText }}\n                  </mat-error>\n\n                </mat-form-field>\n\n                <mat-password-strength #passwordStrength\n                                       [customValidator]=\"customValidator\"\n                                       [enableDigitRule]=\"enableDigitRule\"\n                                       [enableLengthRule]=\"enableLengthRule\"\n                                       [enableLowerCaseLetterRule]=\"enableLowerCaseLetterRule\"\n                                       [enableSpecialCharRule]=\"enableSpecialCharRule\"\n                                       [enableUpperCaseLetterRule]=\"enableUpperCaseLetterRule\"\n                                       [externalError]=\"sigUpPasswordFormControl.dirty\"\n                                       [max]=\"max\"\n                                       [min]=\"min\"\n                                       [password]=\"signUpFormGroup.value.password\">\n                </mat-password-strength>\n\n              </div>\n\n              <button [@animate]=\"{ value: '*', params: { x: '100px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signUpFormGroup.invalid\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{registerButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <button (click)=\"processLegalSignUP(authProvider.ANONYMOUS)\"\n                  *ngIf=\"guestEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                  [color]=\"color\"\n                  mat-button\n                  style=\"margin-top: 20px\">\n            <mat-icon>fingerprint</mat-icon>\n            {{guestButtonText}}\n          </button>\n\n        </mat-card-content>\n\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n\n      </mat-card>\n    </mat-tab>\n\n    <!--Reset password tab-->\n    <mat-tab *ngIf=\"passwordResetWished\" class=\"reset-password-tab\">\n      <ng-template mat-tab-label>\n        <button (click)=\"passwordResetWished = false\" class=\"reset-password-tab__close-button\" mat-icon-button>\n          {{ resetPasswordTabText }}\n          <mat-icon>close</mat-icon>\n        </button>\n      </ng-template>\n      <form (ngSubmit)=\"resetPasswordFormGroup.valid && resetPassword()\"\n            [@animateStagger]=\"{ value: '50' }\"\n            [formGroup]=\"resetPasswordFormGroup\">\n        <mat-card class=\"reset-password-card\">\n          <mat-card-content>\n            <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [appearance]=\"appearance\"\n                            class=\"full-width\">\n              <mat-label> {{ resetPasswordInputText }} </mat-label>\n              <input [title]=\"resetPasswordInputText\"\n                     formControlName=\"email\"\n                     matInput\n                     required>\n              <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('required')\">\n                {{resetPasswordErrorRequiredText}}\n              </mat-error>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('pattern')\">\n                {{resetPasswordErrorPatternText}}\n              </mat-error>\n            </mat-form-field>\n            <p *ngIf=\"passReset\">{{resetPasswordInstructionsText}}</p>\n          </mat-card-content>\n          <mat-card-actions fxLayoutAlign=\"center\">\n            <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n            <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                    [color]=\"color\"\n                    mat-raised-button\n                    type=\"submit\">\n              {{resetPasswordActionButtonText}}\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </mat-tab>\n\n  </mat-tab-group>\n  <mat-divider></mat-divider>\n  <ngx-auth-firebaseui-providers *ngIf=\"tabIndex !== 2\"\n                                 [providers]=\"providers\"\n                                 [theme]=\"providersTheme\"\n                                 [tosUrl]=\"tosUrl\"\n                                 [privacyPolicyUrl]=\"privacyPolicyUrl\">\n  </ngx-auth-firebaseui-providers>\n</ng-template>\n",
                    animations: NgxAuthFirebaseuiAnimations,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: [".mat-card{margin:2rem}.space-top{margin-top:.5rem}.full-width{width:100%}.cut-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.signed-in-container .account-circle{font-size:12rem;height:12rem;width:12rem}.signed-in-container img.account-circle{-o-object-fit:cover;border-radius:50%;object-fit:cover}.signed-in-container .sign-out-button{margin-top:2rem}.signed-in-container .user-display-name{margin-top:1rem}.signed-in-container .user-email{margin-top:-1rem}.signed-in-container .actions{margin-top:2rem}.signed-in-container .actions .action-button,.signed-in-container .actions mat-progress-bar{width:100%}.signed-in-container .actions .action-button{margin-top:1rem}.reset-password-tab mat-progress-bar{margin-bottom:1rem}.reset-password-tab__close-button{align-items:center;display:flex;justify-content:space-between;width:100%}.reset-password-tab__close-button mat-icon{font-size:18px;position:relative;top:-1px}"]
                },] }
    ];
    AuthComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgxAuthFirebaseUIConfigToken; }),] }] },
        { type: i1$1.AngularFireAuth },
        { type: AuthProcessService },
        { type: dialog.MatDialog },
        { type: i2.ActivatedRoute },
        { type: i0.ChangeDetectorRef }
    ]; };
    AuthComponent.propDecorators = {
        matTabGroup: [{ type: i0.ViewChild, args: [tabs.MatTabGroup, { static: false },] }],
        passwordStrength: [{ type: i0.ViewChild, args: [passwordStrength.MatPasswordStrengthComponent, { static: false },] }],
        providers: [{ type: i0.Input }],
        providersTheme: [{ type: i0.Input }],
        appearance: [{ type: i0.Input }],
        tabIndex: [{ type: i0.Input }],
        registrationEnabled: [{ type: i0.Input }],
        resetPasswordEnabled: [{ type: i0.Input }],
        guestEnabled: [{ type: i0.Input }],
        tosUrl: [{ type: i0.Input }],
        privacyPolicyUrl: [{ type: i0.Input }],
        goBackURL: [{ type: i0.Input }],
        messageOnAuthSuccess: [{ type: i0.Input }],
        messageOnAuthError: [{ type: i0.Input }],
        messageOnEmailConfirmationSuccess: [{ type: i0.Input }],
        onSuccess: [{ type: i0.Output }],
        onError: [{ type: i0.Output }],
        selectedTabChange: [{ type: i0.Output }],
        enableLengthRule: [{ type: i0.Input }],
        enableLowerCaseLetterRule: [{ type: i0.Input }],
        enableUpperCaseLetterRule: [{ type: i0.Input }],
        enableDigitRule: [{ type: i0.Input }],
        enableSpecialCharRule: [{ type: i0.Input }],
        min: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        customValidator: [{ type: i0.Input }],
        onStrengthChanged: [{ type: i0.Output }],
        verifyEmailTemplate: [{ type: i0.Input }],
        verifyEmailTitleText: [{ type: i0.Input }],
        verifyEmailConfirmationText: [{ type: i0.Input }],
        verifyEmailGoBackText: [{ type: i0.Input }],
        sendNewVerificationEmailText: [{ type: i0.Input }],
        signOutText: [{ type: i0.Input }],
        resetPasswordTabText: [{ type: i0.Input }],
        resetPasswordInputText: [{ type: i0.Input }],
        resetPasswordErrorRequiredText: [{ type: i0.Input }],
        resetPasswordErrorPatternText: [{ type: i0.Input }],
        resetPasswordActionButtonText: [{ type: i0.Input }],
        resetPasswordInstructionsText: [{ type: i0.Input }],
        signInTabText: [{ type: i0.Input }],
        signInCardTitleText: [{ type: i0.Input }],
        loginButtonText: [{ type: i0.Input }],
        forgotPasswordButtonText: [{ type: i0.Input }],
        nameText: [{ type: i0.Input }],
        nameErrorRequiredText: [{ type: i0.Input }],
        nameErrorMinLengthText: [{ type: i0.Input }],
        nameErrorMaxLengthText: [{ type: i0.Input }],
        emailText: [{ type: i0.Input }],
        emailErrorRequiredText: [{ type: i0.Input }],
        emailErrorPatternText: [{ type: i0.Input }],
        passwordText: [{ type: i0.Input }],
        passwordErrorRequiredText: [{ type: i0.Input }],
        passwordErrorMinLengthText: [{ type: i0.Input }],
        passwordErrorMaxLengthText: [{ type: i0.Input }],
        registerTabText: [{ type: i0.Input }],
        registerCardTitleText: [{ type: i0.Input }],
        registerButtonText: [{ type: i0.Input }],
        guestButtonText: [{ type: i0.Input }],
        emailConfirmationTitle: [{ type: i0.Input }],
        emailConfirmationText: [{ type: i0.Input }]
    };

    var NgxAuthFirebaseuiAvatarComponent = /** @class */ (function () {
        function NgxAuthFirebaseuiAvatarComponent(afa, dialog, authProcess) {
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
            this.onSignOut = new i0.EventEmitter();
        }
        NgxAuthFirebaseuiAvatarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.user$ = this.afa.user;
            this.user$.subscribe(function (user) {
                _this.user = user;
                _this.displayNameInitials = user
                    ? _this.getDisplayNameInitials(user.displayName)
                    : null;
            });
        };
        NgxAuthFirebaseuiAvatarComponent.prototype.getDisplayNameInitials = function (displayName) {
            if (!displayName) {
                return null;
            }
            var initialsRegExp = displayName.match(/\b\w/g) || [];
            var initials = ((initialsRegExp.shift() || "") + (initialsRegExp.pop() || "")).toUpperCase();
            return initials;
        };
        NgxAuthFirebaseuiAvatarComponent.prototype.openProfile = function () {
            var _this = this;
            var dialogRef = this.dialog.open(UserComponent);
            var instance = dialogRef.componentInstance;
            instance.canDeleteAccount = this.canDeleteAccount;
            instance.canEditAccount = this.canEditAccount;
            instance
                .onSignOut
                .pipe(operators.take(1)).subscribe(function (_) { return _this.onSignOut.emit(); }); // propagate the onSignout event
            instance
                .onAccountEdited
                .pipe(operators.take(1)).subscribe(function (_) { return _this.displayNameInitials = _this.getDisplayNameInitials(_this.authProcess.user.displayName); }); // update display name initials?
        };
        NgxAuthFirebaseuiAvatarComponent.prototype.signOut = function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.afa.signOut()];
                        case 1:
                            _a.sent();
                            // Sign-out successful.
                            this.onSignOut.emit();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            // An error happened.
                            console.error("An error happened while signing out!", e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return NgxAuthFirebaseuiAvatarComponent;
    }());
    NgxAuthFirebaseuiAvatarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: "ngx-auth-firebaseui-avatar",
                    template: "<button *ngIf=\"user\"\n        class=\"ngx-auth-firebaseui-avatar-button\"\n        [matMenuTriggerFor]=\"posXMenu\"\n        [matTooltip]=\"user?.displayName\"\n        [style.background-image]=\"'url(' + user?.photoURL + ')'\"\n        aria-label=\"Open x-positioned menu\"\n        mat-mini-fab\n        style=\"background-size: cover\">\n  <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n</button>\n\n<mat-menu #posXMenu=\"matMenu\" class=\"before ngx-auth-firebaseui-avatar-menu\" xPosition=\"before\" >\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding-left: 10px; padding-right: 10px\" [ngStyle]=\"{ 'padding-top.px': layout === 'default' ? 0 : 10 }\">\n    <button [style.background-image]=\"user?.photoURL ? 'url(' + user?.photoURL + ')' : ''\"\n            mat-fab\n            style=\"background-size: cover\"\n            *ngIf=\"layout === 'default'\">\n      <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n    </button>\n    <div fxLayout=\"column\" style=\"padding-left: 10px; padding-right: 10px\">\n      <strong mat-card-title>{{user?.displayName}}</strong>\n      <em mat-card-subtitle style=\"font-style: italic\">{{user?.email}}</em>\n    </div>\n  </div>\n\n  <div fxFlex=\"100\" fxLayout=\"column\" [ngStyle]=\"{ 'padding-bottom.px': layout === 'default' ? 0 : 10 } \">\n    <div *ngFor=\"let menuItem of links\" class=\"links-menu\">\n      <button (click)=\"menuItem?.callback()\" mat-menu-item>\n        <mat-icon>{{menuItem?.icon}}</mat-icon>\n        {{menuItem?.text}}</button>\n    </div>\n    <button *ngIf=\"canViewAccount\" (click)=\"openProfile()\" color=\"primary\" fxLayoutAlign=\"center\" mat-raised-button>{{ textProfile }}\n    </button>\n    <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"warn\" fxLayoutAlign=\"center\" mat-raised-button>{{ textSignOut }}\n    </button>\n  </div>\n</mat-menu>\n",
                    styles: [".mat-raised-button{margin:.2rem 1rem}.links-menu{text-align:center}"]
                },] }
    ];
    NgxAuthFirebaseuiAvatarComponent.ctorParameters = function () { return [
        { type: i1$1.AngularFireAuth },
        { type: dialog.MatDialog },
        { type: AuthProcessService }
    ]; };
    NgxAuthFirebaseuiAvatarComponent.propDecorators = {
        layout: [{ type: i0.Input }],
        canLogout: [{ type: i0.Input }],
        links: [{ type: i0.Input }],
        canViewAccount: [{ type: i0.Input }],
        canDeleteAccount: [{ type: i0.Input }],
        canEditAccount: [{ type: i0.Input }],
        textProfile: [{ type: i0.Input }],
        textSignOut: [{ type: i0.Input }],
        onSignOut: [{ type: i0.Output }]
    };

    var NgxAuthFirebaseuiLoginComponent = /** @class */ (function () {
        function NgxAuthFirebaseuiLoginComponent(
        // tslint:disable-next-line:ban-types
        platformId, authProcess, formBuilder) {
            this.platformId = platformId;
            this.authProcess = authProcess;
            this.formBuilder = formBuilder;
            this.providers = exports.AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
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
            this.onCreateAccountRequested = new i0.EventEmitter();
            // tslint:disable-next-line:no-output-on-prefix
            this.onResetPasswordRequested = new i0.EventEmitter();
            this.onLoginButtonClicked = new i0.EventEmitter();
            this.authProviders = exports.AuthProvider;
            this.authenticationError = false;
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        Object.defineProperty(NgxAuthFirebaseuiLoginComponent.prototype, "color", {
            get: function () {
                return this.authenticationError ? 'warn' : 'primary';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxAuthFirebaseuiLoginComponent.prototype, "colorAccent", {
            get: function () {
                return this.authenticationError ? 'warn' : 'accent';
            },
            enumerable: false,
            configurable: true
        });
        NgxAuthFirebaseuiLoginComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.onErrorSubscription = this.onError.subscribe(function () { return _this.authenticationError = true; });
            }
            this.updateAuthSnackbarMessages();
            this.loginForm = this.formBuilder.group({
                email: ['', [forms.Validators.required, forms.Validators.email]],
                password: ['', forms.Validators.required]
            });
        };
        NgxAuthFirebaseuiLoginComponent.prototype.updateAuthSnackbarMessages = function () {
            this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
            this.authProcess.messageOnAuthError = this.messageOnAuthError;
        };
        NgxAuthFirebaseuiLoginComponent.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Emit event for button click
                            this.onLoginButtonClicked.emit();
                            return [4 /*yield*/, this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                                    email: this.loginForm.controls.email.value,
                                    password: this.loginForm.controls.password.value
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return NgxAuthFirebaseuiLoginComponent;
    }());
    NgxAuthFirebaseuiLoginComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-auth-firebaseui-login',
                    template: "<div fxLayout=\"column\" id=\"login\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"login-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"login-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"loginForm\" name=\"loginForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\">\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"loginForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"!loginForm.get('email')?.hasError('required') &&\n                                loginForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"current-password\">\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error>\n            {{passwordErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n             class=\"remember-forgot-password\" fxLayout=\"row\"\n             fxLayout.xs=\"column\"\n             fxLayoutAlign=\"space-between center\">\n          <!--          <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">-->\n          <!--            {{rememberMeText}}-->\n          <!--          </mat-checkbox>-->\n\n          <button (click)=\"onResetPasswordRequested.emit()\"\n                  *ngIf=\"resetPasswordEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                  [color]=\"color\"\n                  class=\"forgot-password\"\n                  mat-button\n                  type=\"button\">\n            {{forgotPasswordText}}\n          </button>\n        </div>\n\n        <button (click)=\"login()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"loginForm.invalid\"\n                aria-label=\"LOG IN\"\n                class=\"submit-button\"\n                id=\"loginButton\"\n                mat-raised-button>\n          {{loginButtonText}}\n        </button>\n\n      </form>\n\n      <div *ngIf=\"providers.length > 0\"\n           [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n           class=\"separator\">\n        <span class=\"text\">{{orLabelText}}</span>\n      </div>\n\n      <ngx-auth-firebaseui-providers [providers]=\"providers\"\n                                     fxLayoutAlign=\"center center\"\n                                     layout=\"column\"\n                                     theme=\"raised\"></ngx-auth-firebaseui-providers>\n\n      <div *ngIf=\"registrationEnabled\"\n           [@animateStagger]=\"{ value: '100' }\"\n           class=\"register\"\n           fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{dontHaveAnAccountText}}\n        </span>\n        <button (click)=\"onCreateAccountRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"color\"\n                id=\"createAccountButton\"\n                mat-button\n                type=\"button\">{{createAccountButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    animations: NgxAuthFirebaseuiAnimations,
                    styles: ["ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{height:150px;margin:32px auto;width:150px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{text-align:left;width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.apple-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{color:#fff;font-size:13px;margin-bottom:8px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}"]
                },] }
    ];
    NgxAuthFirebaseuiLoginComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: AuthProcessService },
        { type: forms.FormBuilder }
    ]; };
    NgxAuthFirebaseuiLoginComponent.propDecorators = {
        logoUrl: [{ type: i0.Input }],
        providers: [{ type: i0.Input }],
        appearance: [{ type: i0.Input }],
        registrationEnabled: [{ type: i0.Input }],
        resetPasswordEnabled: [{ type: i0.Input }],
        messageOnAuthSuccess: [{ type: i0.Input }],
        messageOnAuthError: [{ type: i0.Input }],
        titleText: [{ type: i0.Input }],
        rememberMeText: [{ type: i0.Input }],
        loginButtonText: [{ type: i0.Input }],
        orLabelText: [{ type: i0.Input }],
        forgotPasswordText: [{ type: i0.Input }],
        dontHaveAnAccountText: [{ type: i0.Input }],
        createAccountButtonText: [{ type: i0.Input }],
        emailText: [{ type: i0.Input }],
        emailErrorRequiredText: [{ type: i0.Input }],
        emailErrorPatternText: [{ type: i0.Input }],
        passwordText: [{ type: i0.Input }],
        passwordErrorRequiredText: [{ type: i0.Input }],
        onSuccess: [{ type: i0.Output }],
        onError: [{ type: i0.Output }],
        onCreateAccountRequested: [{ type: i0.Output }],
        onResetPasswordRequested: [{ type: i0.Output }],
        onLoginButtonClicked: [{ type: i0.Output }]
    };

    var confirmPasswordValidator = function (control) {
        if (!control.parent || !control) {
            return null;
        }
        var password = control.parent.get('password');
        var passwordConfirm = control.parent.get('passwordConfirm');
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
    var NgxAuthFirebaseuiRegisterComponent = /** @class */ (function () {
        // tslint:disable-next-line:ban-types
        function NgxAuthFirebaseuiRegisterComponent(platformId, config, formBuilder, authProcess) {
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
            this.onLoginRequested = new i0.EventEmitter();
            this.onCreateAccountButtonClicked = new i0.EventEmitter();
            this.authenticationError = false;
            // Set the private defaults
            this.unsubscribeAll = new rxjs.Subject();
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        Object.defineProperty(NgxAuthFirebaseuiRegisterComponent.prototype, "color", {
            get: function () {
                return this.authenticationError ? 'warn' : 'primary';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxAuthFirebaseuiRegisterComponent.prototype, "colorAccent", {
            get: function () {
                return this.authenticationError ? 'warn' : 'accent';
            },
            enumerable: false,
            configurable: true
        });
        NgxAuthFirebaseuiRegisterComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.onErrorSubscription = this.onError.subscribe(function () { return _this.authenticationError = true; });
            }
            this.registerForm = this.formBuilder.group({
                name: ['', forms.Validators.required],
                email: ['', [forms.Validators.required, forms.Validators.email]],
                password: ['', [forms.Validators.required,
                        forms.Validators.minLength(this.config.passwordMinLength),
                        forms.Validators.maxLength(this.config.passwordMaxLength)]],
                passwordConfirm: ['', [forms.Validators.required, confirmPasswordValidator]],
                tos: [''],
                privacyPolicy: ['']
            });
            // If tos or privacy policy url set, ensure that the two form items are required
            if (this.tosUrl) {
                this.registerForm.controls.tos.setValidators(forms.Validators.requiredTrue);
            }
            if (this.privacyPolicyUrl) {
                this.registerForm.controls.privacyPolicy.setValidators(forms.Validators.requiredTrue);
            }
            // Update the validity of the 'passwordConfirm' field
            // when the 'password' field changes
            this.registerForm
                .controls
                .password
                .valueChanges.pipe(operators.takeUntil(this.unsubscribeAll))
                .subscribe(function () {
                _this.registerForm.controls.passwordConfirm.updateValueAndValidity();
            });
        };
        /**
         * On destroy
         */
        NgxAuthFirebaseuiRegisterComponent.prototype.ngOnDestroy = function () {
            // Unsubscribe from all subscriptions
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
        };
        NgxAuthFirebaseuiRegisterComponent.prototype.createAccount = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Emit the create account clicked event.
                            this.onCreateAccountButtonClicked.emit();
                            return [4 /*yield*/, this.authProcess.signUp(this.registerForm.controls.name.value, {
                                    email: this.registerForm.controls.email.value,
                                    password: this.registerForm.controls.password.value
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return NgxAuthFirebaseuiRegisterComponent;
    }());
    NgxAuthFirebaseuiRegisterComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-auth-firebaseui-register',
                    template: "<div fxLayout=\"column\" id=\"register\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"register-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"register-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"registerForm\" name=\"registerForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"nameText\" formControlName=\"name\" matInput/>\n          <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n          <mat-error>\n            {{nameErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\"/>\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('required')\">\n            {{passwordErrorRequiredText}}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('minlength')\">\n            {{ passwordErrorMinLengthText }}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('maxlength')\">\n            {{ passwordErrorMaxLengthText }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordConfirmationText\" formControlName=\"passwordConfirm\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('passwordConfirm')?.hasError('required')\">\n            {{passwordConfirmationErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"\n              !registerForm.get('passwordConfirm')?.hasError('required') &&\n              registerForm.get('passwordConfirm')?.hasError('passwordsNotMatching')\n            \">\n            {{passwordErrorMatchText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div *ngIf=\"this.tosUrl\">\n          <mat-checkbox aria-label=\"{{termsAndConditionsText}}\" formControlName=\"tos\" required>\n            <span>{{termsAndConditionsText}}</span>\n            <a target=\"_blank\" [href]=\"this.tosUrl\">\n                {{termsAndConditionsLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <div *ngIf=\"this.privacyPolicyUrl\">\n          <mat-checkbox aria-label=\"{{privacyPolicyText}}\" formControlName=\"privacyPolicy\" required>\n            <span>{{privacyPolicyText}}</span>\n            <a target=\"_blank\" [href]=\"this.privacyPolicyUrl\">\n                {{privacyPolicyLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <button (click)=\"createAccount()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"registerForm.invalid\"\n                aria-label=\"CREATE AN ACCOUNT\"\n                class=\"submit-button\"\n                id=\"createAccountButton\"\n                mat-raised-button>\n          {{createAccountButtonText}}\n        </button>\n      </form>\n\n      <div [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" class=\"register\" fxLayout=\"column\"\n           fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{alreadyHaveAccountText}}\n        </span>\n        <button (click)=\"onLoginRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"colorAccent\"\n                id=\"loginButton\"\n                mat-button\n                type=\"button\">\n          {{loginButtonText}}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    animations: NgxAuthFirebaseuiAnimations,
                    styles: ["ngx-auth-firebaseui-register #register{background-size:cover;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{max-width:384px;padding:32px;text-align:center;width:384px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{margin:32px auto;width:128px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{text-align:left;width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{display:block;margin:16px auto;width:220px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{font-weight:500;margin:32px auto 24px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;overflow:hidden;position:relative;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;padding:0 8px;position:relative;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{border-top:1px solid;content:\"\";display:block;position:absolute;top:10px;width:30px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{color:#fff;font-size:13px;text-transform:none;width:192px}@media screen and (max-width:599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}"]
                },] }
    ];
    NgxAuthFirebaseuiRegisterComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgxAuthFirebaseUIConfigToken; }),] }] },
        { type: forms.FormBuilder },
        { type: AuthProcessService }
    ]; };
    NgxAuthFirebaseuiRegisterComponent.propDecorators = {
        logoUrl: [{ type: i0.Input }],
        appearance: [{ type: i0.Input }],
        tosUrl: [{ type: i0.Input }],
        privacyPolicyUrl: [{ type: i0.Input }],
        titleText: [{ type: i0.Input }],
        termsAndConditionsText: [{ type: i0.Input }],
        termsAndConditionsLinkText: [{ type: i0.Input }],
        privacyPolicyText: [{ type: i0.Input }],
        privacyPolicyLinkText: [{ type: i0.Input }],
        createAccountButtonText: [{ type: i0.Input }],
        alreadyHaveAccountText: [{ type: i0.Input }],
        loginButtonText: [{ type: i0.Input }],
        nameText: [{ type: i0.Input }],
        nameErrorRequiredText: [{ type: i0.Input }],
        emailText: [{ type: i0.Input }],
        emailErrorRequiredText: [{ type: i0.Input }],
        emailErrorPatternText: [{ type: i0.Input }],
        passwordText: [{ type: i0.Input }],
        passwordErrorRequiredText: [{ type: i0.Input }],
        passwordConfirmationText: [{ type: i0.Input }],
        passwordConfirmationErrorRequiredText: [{ type: i0.Input }],
        passwordErrorMatchText: [{ type: i0.Input }],
        passwordErrorMinLengthText: [{ type: i0.Input }],
        passwordErrorMaxLengthText: [{ type: i0.Input }],
        onSuccess: [{ type: i0.Output }],
        onError: [{ type: i0.Output }],
        onLoginRequested: [{ type: i0.Output }],
        onCreateAccountButtonClicked: [{ type: i0.Output }]
    };

    var UserComponent = /** @class */ (function () {
        function UserComponent(auth, authProcess, fireStoreService, config) {
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
            this.phoneHintText = "\n    The phone number is international. Therefore, it should start with a + sign or 00,\n    followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890\n\n      NOTE : the phone number must be a valid phone credential !!";
            this.phoneErrorPatternText = "Please enter a valid phone number";
            // tslint:disable-next-line:no-output-on-prefix
            this.onSignOut = new i0.EventEmitter();
            // tslint:disable-next-line:no-output-on-prefix
            this.onAccountEdited = new i0.EventEmitter();
            // tslint:disable-next-line:no-output-on-prefix
            this.onAccountDeleted = new i0.EventEmitter();
        }
        UserComponent.prototype.changeEditMode = function () {
            var _this = this;
            if (this.editMode) {
                this.reset();
                this.editMode = false;
            }
            else {
                this.initUpdateFormGroup().subscribe(function (updateFormGroup) {
                    _this.updateFormGroup = updateFormGroup;
                    _this.editMode = true;
                });
            }
        };
        UserComponent.prototype.reset = function () {
            this.updateFormGroup.reset();
            this.updateFormGroup.disable();
            this.updateFormGroup = null;
        };
        UserComponent.prototype.save = function () {
            return __awaiter(this, void 0, void 0, function () {
                var user, snackBarMsg, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.updateFormGroup.dirty) return [3 /*break*/, 12];
                            this.editMode = false;
                            user = this.authProcess.user;
                            snackBarMsg = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 10, , 11]);
                            if (!this.updateNameFormControl.dirty) return [3 /*break*/, 3];
                            return [4 /*yield*/, user.updateProfile({
                                    displayName: this.updateNameFormControl.value,
                                })];
                        case 2:
                            _a.sent();
                            snackBarMsg.push("your name has been updated to " + user.displayName);
                            _a.label = 3;
                        case 3:
                            if (!this.updateEmailFormControl.dirty) return [3 /*break*/, 5];
                            return [4 /*yield*/, user.updateEmail(this.updateEmailFormControl.value)];
                        case 4:
                            _a.sent();
                            snackBarMsg.push("your email has been updated to " + user.email);
                            _a.label = 5;
                        case 5:
                            if (!this.updatePhoneNumberFormControl.dirty) return [3 /*break*/, 7];
                            return [4 /*yield*/, user.updatePhoneNumber(this.updatePhoneNumberFormControl.value)];
                        case 6:
                            _a.sent();
                            console.log("phone number = ", this.updatePhoneNumberFormControl.value);
                            snackBarMsg.push("your phone number has been updated to " + user.phoneNumber);
                            _a.label = 7;
                        case 7:
                            if (!this.config.enableFirestoreSync) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.fireStoreService.updateUserData(this.authProcess.parseUserInfo(user))];
                        case 8:
                            _a.sent();
                            _a.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            error_1 = _a.sent();
                            this.authProcess.showToast(error_1 && error_1.message ? error_1.message : error_1);
                            console.error(error_1);
                            return [3 /*break*/, 11];
                        case 11:
                            if (snackBarMsg.length > 0) {
                                this.authProcess.showToast(snackBarMsg.join("\\n"));
                            }
                            this.onAccountEdited.emit(); // emit event if the form was dirty
                            this.updateFormGroup.reset();
                            _a.label = 12;
                        case 12: return [2 /*return*/];
                    }
                });
            });
        };
        UserComponent.prototype.signOut = function () {
            var _this = this;
            this.auth
                .signOut()
                .then(function () { return _this.onSignOut.emit(); })
                .catch(function (e) { return console.error("An error happened while signing out!", e); });
        };
        /**
         * Delete the account of the current firebase ngx-auth-firebaseui-user
         *
         * On Success, emit the <onAccountDeleted> event and toast a msg!#
         * Otherwise, log the and toast and error msg!
         *
         */
        UserComponent.prototype.deleteAccount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var user, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            user = this.authProcess.user;
                            // await this.authProcess.deleteAccount();
                            return [4 /*yield*/, this.authProcess.user.delete()];
                        case 1:
                            // await this.authProcess.deleteAccount();
                            _a.sent();
                            // if (this.config.enableFirestoreSync) {
                            return [4 /*yield*/, this.fireStoreService.deleteUserData(user.uid)];
                        case 2:
                            // if (this.config.enableFirestoreSync) {
                            _a.sent();
                            // }
                            this.onAccountDeleted.emit();
                            this.editMode = false;
                            console.log("Your account has been successfully deleted!");
                            this.authProcess.showToast("Your account has been successfully deleted!");
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            console.log("Error while delete user account", error_2);
                            this.authProcess.showToast("Error occurred while deleting your account: " + error_2.message);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        UserComponent.prototype.initUpdateFormGroup = function () {
            var _this = this;
            return this.authProcess.user$.pipe(operators.take(1), operators.map(function (currentUser) {
                var updateFormGroup = new forms.FormGroup({
                    name: _this.updateNameFormControl = new forms.FormControl({ value: currentUser.displayName, disabled: _this.editMode }, [
                        forms.Validators.required,
                        forms.Validators.minLength(_this.config.nameMinLength),
                        forms.Validators.maxLength(_this.config.nameMaxLength),
                    ]),
                    email: _this.updateEmailFormControl = new forms.FormControl({ value: currentUser.email, disabled: _this.editMode }, [forms.Validators.required, forms.Validators.pattern(EMAIL_REGEX)]),
                    phoneNumber: _this.updatePhoneNumberFormControl = new forms.FormControl({ value: currentUser.phoneNumber, disabled: _this.editMode }, [forms.Validators.pattern(PHONE_NUMBER_REGEX)]),
                });
                updateFormGroup.enable();
                return updateFormGroup;
            }));
        };
        return UserComponent;
    }());
    UserComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: "ngx-auth-firebaseui-user",
                    template: "<div *ngIf=\"auth.authState| async; then authenticated else none\">\n\n</div>\n\n<ng-template #authenticated>\n  <mat-card *ngIf=\"auth.user | async as user\">\n    <!--<form [formGroup]=\"updateFormGroup\" >-->\n    <!--card header-->\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <img *ngIf=\"authProcess?.getUserPhotoUrl() | async as photoUrl\" [src]=\"photoUrl\" mat-card-avatar>\n\n      <div *ngIf=\"user.emailVerified; then emailVerified else emailNotVerified\"></div>\n      <ng-template #emailVerified>\n        <mat-icon color=\"primary\"\n                  [matTooltip]=\"emailVerifiedText\"\n                  matTooltipPosition=\"after\">\n          verified_user\n        </mat-icon>\n      </ng-template>\n      <ng-template #emailNotVerified>\n        <mat-icon color=\"warn\"\n                  [matTooltip]=\"emailNotVerifiedText\"\n                  matTooltipPosition=\"after\">\n          warning\n        </mat-icon>\n      </ng-template>\n\n    </mat-card-header>\n\n    <!--card content-->\n    <mat-card-content *ngIf=\"editMode; then edit else readonly\">\n    </mat-card-content>\n\n    <ng-template #edit>\n      <form (submit)=\"save()\" [formGroup]=\"updateFormGroup\">\n\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"changeEditMode()\" class=\"edit-button\" color=\"warn\"\n                    mat-raised-button>\n              {{cancelButtonText}}\n            </button>\n          </div>\n\n          <!--name-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{nameText}}</mat-label>\n            <input [formControl]=\"updateNameFormControl\"\n                   matInput\n                   [placeholder]=\"nameText\">\n            <mat-icon matSuffix>person</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\"> {{ updateNameFormControl.value?.length }}\n              / {{ config.nameMaxLength }} </mat-hint>\n            <mat-error *ngIf=\"updateNameFormControl.hasError('required')\">\n              {{nameErrorRequiredText}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--email-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{emailText}}</mat-label>\n            <input [formControl]=\"updateEmailFormControl\"\n                   matInput\n                   [placeholder]=\"emailText\">\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('required')\">\n              {{emailErrorRequiredText}} {{updateEmailFormControl.value}}\n            </mat-error>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('pattern')\">\n              {{emailErrorPatternText}} {{updateEmailFormControl.value}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--phone number-->\n          <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{phoneText}}</mat-label>\n            <input [formControl]=\"updatePhoneNumberFormControl\"\n                   matInput\n                   [placeholder]=\"phoneText\"\n                   type=\"tel\">\n            <mat-icon matSuffix>phone</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\">\n              {{phoneHintText}}\n            </mat-hint>\n            <mat-error *ngIf=\"updatePhoneNumberFormControl.hasError('pattern')\">\n              {{phoneErrorPatternText}}\n            </mat-error>\n          </mat-form-field>\n\n        </mat-card-content>\n\n        <mat-card-actions fxLayout=\"column\">\n          <button color=\"primary\"\n                  mat-button\n                  type=\"submit\">\n            {{saveChangesButtonText}}\n          </button>\n        </mat-card-actions>\n      </form>\n    </ng-template>\n\n    <ng-template #readonly>\n      <div fxLayoutAlign=\"center\">\n        <button *ngIf=\"canEditAccount\" (click)=\"changeEditMode()\" class=\"edit-button\" color=\"primary\"\n                mat-raised-button>\n          {{editButtonText}}\n        </button>\n      </div>\n\n      <!--name-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{nameText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.displayName\"\n               matInput\n               [placeholder]=\"nameText\">\n        <mat-icon color=\"primary\" matSuffix>person</mat-icon>\n      </mat-form-field>\n\n      <!--email-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{emailText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.email\" matInput\n               [placeholder]=\"emailText\">\n        <mat-icon color=\"primary\" matSuffix>email</mat-icon>\n      </mat-form-field>\n\n      <!--phone number-->\n      <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{phoneText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.phoneNumber\"\n               matInput\n               [placeholder]=\"phoneText\">\n        <mat-icon color=\"primary\" matSuffix>phone</mat-icon>\n      </mat-form-field>\n\n      <mat-card-actions fxLayout=\"column\">\n        <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"primary\" mat-button>{{signoutButtonText}}</button>\n        <button (click)=\"deleteAccount()\" *ngIf=\"canDeleteAccount\" color=\"warn\" mat-button>{{deleteAccountButtonText}}</button>\n      </mat-card-actions>\n\n    </ng-template>\n\n  </mat-card>\n\n</ng-template>\n\n\n<ng-template #none>\n  <mat-card class=\"none-card\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-icon color=\"accent\">warning</mat-icon>\n      <span>{{notLoggedInText}}</span>\n    </mat-card-content>\n  </mat-card>\n</ng-template>\n",
                    styles: [".edit-button{margin:1rem}.full-width{width:100%}.cut-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.none-card{min-height:430px}.none-card span{color:rgba(0,0,0,.54);font-size:24px;text-align:center}"]
                },] }
    ];
    UserComponent.ctorParameters = function () { return [
        { type: i1$1.AngularFireAuth },
        { type: AuthProcessService },
        { type: FirestoreSyncService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgxAuthFirebaseUIConfigToken; }),] }] }
    ]; };
    UserComponent.propDecorators = {
        editMode: [{ type: i0.Input }],
        canLogout: [{ type: i0.Input }],
        canEditAccount: [{ type: i0.Input }],
        canDeleteAccount: [{ type: i0.Input }],
        appearance: [{ type: i0.Input }],
        notLoggedInText: [{ type: i0.Input }],
        emailVerifiedText: [{ type: i0.Input }],
        emailNotVerifiedText: [{ type: i0.Input }],
        cancelButtonText: [{ type: i0.Input }],
        saveChangesButtonText: [{ type: i0.Input }],
        editButtonText: [{ type: i0.Input }],
        signoutButtonText: [{ type: i0.Input }],
        deleteAccountButtonText: [{ type: i0.Input }],
        nameText: [{ type: i0.Input }],
        nameErrorRequiredText: [{ type: i0.Input }],
        emailText: [{ type: i0.Input }],
        emailErrorRequiredText: [{ type: i0.Input }],
        emailErrorPatternText: [{ type: i0.Input }],
        phoneText: [{ type: i0.Input }],
        phoneHintText: [{ type: i0.Input }],
        phoneErrorPatternText: [{ type: i0.Input }],
        onSignOut: [{ type: i0.Output }],
        onAccountEdited: [{ type: i0.Output }],
        onAccountDeleted: [{ type: i0.Output }]
    };

    (function (Theme) {
        Theme["DEFAULT"] = "default";
        Theme["CLASSIC"] = "classic";
        Theme["STROKED"] = "stroked";
        Theme["FAB"] = "fab";
        Theme["MINI_FAB"] = "mini-fab";
        Theme["RAISED"] = "raised";
    })(exports.Theme || (exports.Theme = {}));
    (function (Layout) {
        Layout["ROW"] = "row";
        Layout["COLUMN"] = "column";
    })(exports.Layout || (exports.Layout = {}));
    var AuthProvidersComponent = /** @class */ (function () {
        function AuthProvidersComponent(authProcess, dialog) {
            this.authProcess = authProcess;
            this.dialog = dialog;
            this.layout = exports.Layout.ROW;
            this.providers = exports.AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo
            this.themes = exports.Theme;
            this.authProvider = exports.AuthProvider;
            this.onSuccess = authProcess.onSuccessEmitter;
            this.onError = authProcess.onErrorEmitter;
        }
        AuthProvidersComponent.prototype.processLegalSignUP = function (authProvider) {
            var _this = this;
            if (this.tosUrl || this.privacyPolicyUrl) {
                var params = {
                    tosUrl: this.tosUrl,
                    privacyPolicyUrl: this.privacyPolicyUrl,
                    authProvider: authProvider
                };
                this.dialogRef = this.dialog.open(LegalityDialogComponent, { data: params });
                this.dialogRef.afterClosed().subscribe(function (result) {
                    if (result && result.checked) {
                        // this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
                        _this.authProcess.signInWith(authProvider);
                    }
                    _this.dialogRef = null;
                });
            }
            else {
                // this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
                this.authProcess.signInWith(authProvider);
            }
        };
        return AuthProvidersComponent;
    }());
    AuthProvidersComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-auth-firebaseui-providers',
                    template: "<div [@animateStagger]=\"{ value: '50' }\" [ngSwitch]=\"theme\">\n\n  <!--default icon buttons-->\n  <div *ngSwitchDefault\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"google-colored\"></mat-icon>\n      Google\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n      Apple\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n      Yahoo\n    </button>\n  </div>\n\n  <!--classic-->\n  <div *ngSwitchCase=\"themes.CLASSIC\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--stroked-->\n  <div *ngSwitchCase=\"themes.STROKED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-stroked-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-stroked-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-stroked-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-stroked-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-stroked-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-stroked-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-stroked-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--raised-->\n  <div *ngSwitchCase=\"themes.RAISED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-raised\"\n            mat-raised-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-raised\"\n            mat-raised-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-raised\"\n            mat-raised-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-raised\"\n            mat-raised-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-raised\"\n            mat-raised-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-raised\"\n            mat-raised-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-raised\"\n            mat-raised-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--fab-->\n  <div *ngSwitchCase=\"themes.FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n\n  <!--mini-fab-->\n  <div *ngSwitchCase=\"themes.MINI_FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayoutAlign.xs=\"center center\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            fxFlexAlign=\"center\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-mini-fab>\n      <mat-icon class=\"icon-white\" svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n</div>\n",
                    animations: NgxAuthFirebaseuiAnimations,
                    styles: [":host{display:block}.space-full-xs{margin:.4rem;width:100%}.apple-filled mat-icon svg path{fill:#000}.facebook-filled mat-icon{fill:#385899}.twitter-filled mat-icon{fill:#1da1f2}.buttons-raised button{color:#fff!important}.buttons-raised .google-raised{background-color:#db4437}.buttons-raised .apple-raised{background-color:#000}.buttons-raised .facebook-raised{background-color:#385899}.buttons-raised .twitter-raised{background-color:#1da1f2}.buttons-raised .github-raised{background-color:#000}.buttons-raised .microsoft-raised{background-color:#0078d4}.buttons-raised .yahoo-raised{background-color:#720e9e}.buttons-raised .phone-raised{background-color:#02bd7e}.buttons-classic button.google-classic{color:#db4437!important}.buttons-classic button.apple-classic{color:#000!important}.buttons-classic .facebook-classic{color:#385899!important}.buttons-classic .twitter-classic{color:#1da1f2!important}.buttons-classic .github-classic{color:#000!important}.buttons-classic .microsoft-classic{color:#0078d4!important}.buttons-classic .yahoo-classic{color:#720e9e!important}.buttons-classic .phone-classic{color:#02bd7e}.icon-white{color:#fff}.icon-white mat-icon{fill:#fff}button.microsoft{background:#f8f9fa}"]
                },] }
    ];
    AuthProvidersComponent.ctorParameters = function () { return [
        { type: AuthProcessService },
        { type: dialog.MatDialog }
    ]; };
    AuthProvidersComponent.propDecorators = {
        theme: [{ type: i0.Input }],
        layout: [{ type: i0.Input }],
        providers: [{ type: i0.Input }],
        onSuccess: [{ type: i0.Output }],
        onError: [{ type: i0.Output }],
        tosUrl: [{ type: i0.Input }],
        privacyPolicyUrl: [{ type: i0.Input }]
    };

    // import * as firebase from 'firebase';
    var defaultAuthFirebaseUIConfig = {
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

    var LoggedInGuard = /** @class */ (function () {
        function LoggedInGuard(config, router, authProcess) {
            this.config = config;
            this.router = router;
            this.authProcess = authProcess;
        }
        LoggedInGuard.prototype.canActivate = function (route, state) {
            var _this = this;
            return this.authProcess.afa.user.pipe(operators.map(function (user) {
                if (user) {
                    if (_this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified && !user.isAnonymous) {
                        if (_this.config.authGuardFallbackURL) {
                            _this.router.navigate(["" + _this.config.authGuardFallbackURL], { queryParams: { redirectUrl: state.url } });
                        }
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (_this.config.authGuardFallbackURL) {
                        _this.router.navigate(["/" + _this.config.authGuardFallbackURL], { queryParams: { redirectUrl: state.url } });
                    }
                    return false;
                }
            }));
        };
        return LoggedInGuard;
    }());
    LoggedInGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoggedInGuard_Factory() { return new LoggedInGuard(i0.ɵɵinject(NgxAuthFirebaseUIConfigToken), i0.ɵɵinject(i2.Router), i0.ɵɵinject(AuthProcessService)); }, token: LoggedInGuard, providedIn: "root" });
    LoggedInGuard.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoggedInGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [NgxAuthFirebaseUIConfigToken,] }] },
        { type: i2.Router },
        { type: AuthProcessService }
    ]; };

    // @angular/*
    var NgxAuthFirebaseUIModule = /** @class */ (function () {
        function NgxAuthFirebaseUIModule(iconRegistry, sanitizer, auth) {
            this.iconRegistry = iconRegistry;
            this.sanitizer = sanitizer;
            auth.listenToUserEvents();
            this.registerProviderIcons();
        }
        NgxAuthFirebaseUIModule.forRoot = function (configFactory, appNameFactory, config) {
            if (appNameFactory === void 0) { appNameFactory = function () { return undefined; }; }
            if (config === void 0) { config = {}; }
            return {
                ngModule: NgxAuthFirebaseUIModule,
                providers: [
                    {
                        provide: fire.FIREBASE_OPTIONS,
                        useValue: configFactory
                    },
                    {
                        provide: fire.FIREBASE_APP_NAME,
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
        };
        NgxAuthFirebaseUIModule.prototype.registerProviderIcons = function () {
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
        };
        return NgxAuthFirebaseUIModule;
    }());
    NgxAuthFirebaseUIModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        // HTTP
                        i2.RouterModule,
                        http.HttpClientModule,
                        // FLEX_LAYOUT
                        flexLayout.FlexLayoutModule,
                        // FORMS
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        // MATERIAL2
                        tabs.MatTabsModule,
                        card.MatCardModule,
                        input.MatInputModule,
                        button.MatButtonModule,
                        icon.MatIconModule,
                        i3.MatSnackBarModule,
                        divider.MatDividerModule,
                        chips.MatChipsModule,
                        tooltip.MatTooltipModule,
                        dialog.MatDialogModule,
                        checkbox.MatCheckboxModule,
                        progressSpinner.MatProgressSpinnerModule,
                        progressBar.MatProgressBarModule,
                        dialog.MatDialogModule,
                        menu.MatMenuModule,
                        // ANGULAR MATERIAL EXTENSIONS
                        passwordStrength.MatPasswordStrengthModule,
                        // ANGULARFIRE2
                        i1$1.AngularFireAuthModule,
                        i1.AngularFirestoreModule,
                    ],
                    exports: [
                        AuthComponent,
                        UserComponent,
                        NgxAuthFirebaseuiAvatarComponent,
                        AuthProvidersComponent,
                        EmailConfirmationComponent,
                        // LoggedInGuard,
                        i1$1.AngularFireAuthModule,
                        i1.AngularFirestoreModule,
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
    NgxAuthFirebaseUIModule.ctorParameters = function () { return [
        { type: icon.MatIconRegistry },
        { type: platformBrowser.DomSanitizer },
        { type: AuthProcessService }
    ]; };

    /*
     * Public API Surface of ngx-auth-firebaseui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthComponent = AuthComponent;
    exports.AuthProcessService = AuthProcessService;
    exports.AuthProvidersComponent = AuthProvidersComponent;
    exports.EMAIL_REGEX = EMAIL_REGEX;
    exports.EmailConfirmationComponent = EmailConfirmationComponent;
    exports.FirestoreSyncService = FirestoreSyncService;
    exports.LegalityDialogComponent = LegalityDialogComponent;
    exports.LoggedInGuard = LoggedInGuard;
    exports.NgxAuthFirebaseUIConfigToken = NgxAuthFirebaseUIConfigToken;
    exports.NgxAuthFirebaseUIModule = NgxAuthFirebaseUIModule;
    exports.NgxAuthFirebaseuiAvatarComponent = NgxAuthFirebaseuiAvatarComponent;
    exports.NgxAuthFirebaseuiLoginComponent = NgxAuthFirebaseuiLoginComponent;
    exports.NgxAuthFirebaseuiRegisterComponent = NgxAuthFirebaseuiRegisterComponent;
    exports.PHONE_NUMBER_REGEX = PHONE_NUMBER_REGEX;
    exports.UserComponent = UserComponent;
    exports.UserProvidedConfigToken = UserProvidedConfigToken;
    exports.appleAuthProvider = appleAuthProvider;
    exports.collections = collections;
    exports.confirmPasswordValidator = confirmPasswordValidator;
    exports.defaultAuthFirebaseUIConfig = defaultAuthFirebaseUIConfig;
    exports.facebookAuthProvider = facebookAuthProvider;
    exports.githubAuthProvider = githubAuthProvider;
    exports.googleAuthProvider = googleAuthProvider;
    exports.microsoftAuthProvider = microsoftAuthProvider;
    exports.ngxAuthFirebaseUIConfigFactory = ngxAuthFirebaseUIConfigFactory;
    exports.twitterAuthProvider = twitterAuthProvider;
    exports.yahooAuthProvider = yahooAuthProvider;
    exports.ɵa = defaultAuthFirebaseUIConfig;
    exports.ɵb = ngxAuthFirebaseUIConfigFactory;
    exports.ɵd = NgxAuthFirebaseuiAnimations;
    exports.ɵe = EmailConfirmationComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-auth-firebaseui.umd.js.map
