import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import firebase from "firebase/app";
import * as ɵngcc0 from '@angular/core';
export declare const collections: {
    users: string;
};
export declare class FirestoreSyncService {
    afs: AngularFirestore;
    constructor(afs: AngularFirestore);
    getUserDocRefByUID(uid: string): AngularFirestoreDocument<firebase.UserInfo>;
    deleteUserData(uid: string): Promise<any>;
    updateUserData(user: firebase.UserInfo): Promise<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FirestoreSyncService, never>;
}

//# sourceMappingURL=firestore-sync.service.d.ts.map