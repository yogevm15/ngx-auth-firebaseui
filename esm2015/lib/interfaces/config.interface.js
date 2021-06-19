// import * as firebase from 'firebase';
export const defaultAuthFirebaseUIConfig = {
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
export function ngxAuthFirebaseUIConfigFactory(userProvidedConfig) {
    return Object.assign({}, defaultAuthFirebaseUIConfig, userProvidedConfig);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXRoLWZpcmViYXNldWkvc3JjL2xpYi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBb0N4QyxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBNEI7SUFDbEUsMEJBQTBCO0lBQzFCLDhIQUE4SDtJQUM5SCxtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLHlCQUF5QixFQUFFLElBQUk7SUFDL0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLG9CQUFvQixFQUFFLEdBQUc7SUFFekIsNkVBQTZFO0lBQzdFLHdFQUF3RTtJQUN4RSxpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLGlCQUFpQixFQUFFLENBQUM7SUFFcEIsb0NBQW9DO0lBQ3BDLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLGFBQWEsRUFBRSxDQUFDO0lBRWhCLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0Usd0NBQXdDLEVBQUUsSUFBSTtJQUU5QyxtQ0FBbUM7SUFDbkMsdUJBQXVCLEVBQUUsSUFBSTtJQUU3Qiw4REFBOEQ7SUFDOUQsb0JBQW9CLEVBQUUsS0FBSztDQUM1QixDQUFDO0FBRUYsa0RBQWtEO0FBQ2xELE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxrQkFBMkM7SUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4QXV0aEZpcmViYXNlVUlDb25maWcge1xuICAvLyBhdXRoTmV4dFVSTD86IHN0cmluZywgLy8gcG9wdXAgb3IgcmVkaXJlY3RcbiAgLy8gdG9zVXJsPzogc3RyaW5nLCAvLyB0ZXJtIG9mIHNlcnZpY2VzIHVybFxuICAvLyBwcFVybD86IHN0cmluZywgLy8gcHJpdmFjeSBwb2xpY3kgdXJsXG4gIC8vIGF1dGhQcm92aWRlcnM/OiBBcnJheTxBdXRoUHJvdmlkZXI+LFxuICAvLyBsYW5ndWFnZUNvZGU/OiBzdHJpbmcsIC8vIHRvZG86IDI4LjMuMThcbiAgYXV0aEd1YXJkRmFsbGJhY2tVUkw/OiBzdHJpbmc7XG4gIGF1dGhHdWFyZExvZ2dlZEluVVJMPzogc3RyaW5nO1xuICBlbmFibGVGaXJlc3RvcmVTeW5jPzogYm9vbGVhbjtcblxuICAvLyBUb2FzdHNcbiAgdG9hc3RNZXNzYWdlT25BdXRoU3VjY2Vzcz86IGJvb2xlYW47XG4gIHRvYXN0TWVzc2FnZU9uQXV0aEVycm9yPzogYm9vbGVhbjtcblxuICAvLyBQYXNzd29yZCBsZW5ndGggbWluL21heCBpbiBmb3JtcyBpbmRlcGVuZGVudGx5IG9mIGVhY2ggY29tcG9uZW5ldCBtaW4vbWF4LlxuICAvLyBgbWluL21heGAgaW5wdXQgcGFyYW1ldGVycyBpbiBjb21wb25lbnRzIHNob3VsZCBiZSB3aXRoaW4gdGhpcyByYW5nZS5cbiAgcGFzc3dvcmRNYXhMZW5ndGg/OiBudW1iZXI7XG4gIHBhc3N3b3JkTWluTGVuZ3RoPzogbnVtYmVyO1xuXG4gIC8vIFNhbWUgYXMgcGFzc3dvcmQgYnV0IGZvciB0aGUgbmFtZVxuICBuYW1lTWF4TGVuZ3RoPzogbnVtYmVyO1xuICBuYW1lTWluTGVuZ3RoPzogbnVtYmVyO1xuXG4gIC8vIElmIHNldCwgc2lnbi1pbi91cCBmb3JtIGlzIG5vdCBhdmFpbGFibGUgdW50aWwgZW1haWwgaGFzIGJlZW4gdmVyaWZpZWQuXG4gIC8vIFBsdXMgcHJvdGVjdGVkIHJvdXRlcyBhcmUgc3RpbGwgcHJvdGVjdGVkIGV2ZW4gdGhvdWdoIHVzZXIgaXMgY29ubmVjdGVkLlxuICBndWFyZFByb3RlY3RlZFJvdXRlc1VudGlsRW1haWxJc1ZlcmlmaWVkPzogYm9vbGVhbjtcblxuICAvLyBDb250cm9sIHdoZXRoZXIgb3Igbm90IGVtYWlsIHZlcmlmaWNhdGlvbiBpcyB1c2VkXG4gIGVuYWJsZUVtYWlsVmVyaWZpY2F0aW9uPzogYm9vbGVhbjtcblxuICAvLyBJZiBzZXQgdG8gdHJ1ZSBvdXRwdXRzIHRoZSBVc2VyQ3JlZGVudGlhbCBvYmplY3QgaW5zdGVhZCBvZiBmaXJlYmFzZS5Vc2VyIGFmdGVyIGxvZ2luIGFuZCBzaWdudXBcbiAgdXNlUmF3VXNlckNyZWRlbnRpYWw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QXV0aEZpcmViYXNlVUlDb25maWc6IE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnID0ge1xuICAvLyBhdXRoTWV0aG9kOiAncmVkaXJlY3QnLFxuICAvLyBhdXRoUHJvdmlkZXJzOiBbbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpLCBuZXcgRmFjZWJvb2tBdXRoUHJvdmlkZXIoKSwgbmV3IFR3aXR0ZXJBdXRoUHJvdmlkZXIoKSwgbmV3IEdpdGh1YkF1dGhQcm92aWRlcigpXSxcbiAgZW5hYmxlRmlyZXN0b3JlU3luYzogdHJ1ZSxcbiAgdG9hc3RNZXNzYWdlT25BdXRoU3VjY2VzczogdHJ1ZSxcbiAgdG9hc3RNZXNzYWdlT25BdXRoRXJyb3I6IHRydWUsXG4gIGF1dGhHdWFyZEZhbGxiYWNrVVJMOiAnLycsXG4gIGF1dGhHdWFyZExvZ2dlZEluVVJMOiAnLycsXG5cbiAgLy8gUGFzc3dvcmQgbGVuZ3RoIG1pbi9tYXggaW4gZm9ybXMgaW5kZXBlbmRlbnRseSBvZiBlYWNoIGNvbXBvbmVuZXQgbWluL21heC5cbiAgLy8gYG1pbi9tYXhgIGlucHV0IHBhcmFtZXRlcnMgaW4gY29tcG9uZW50cyBzaG91bGQgYmUgd2l0aGluIHRoaXMgcmFuZ2UuXG4gIHBhc3N3b3JkTWF4TGVuZ3RoOiA2MCxcbiAgcGFzc3dvcmRNaW5MZW5ndGg6IDgsXG5cbiAgLy8gU2FtZSBhcyBwYXNzd29yZCBidXQgZm9yIHRoZSBuYW1lXG4gIG5hbWVNYXhMZW5ndGg6IDUwLFxuICBuYW1lTWluTGVuZ3RoOiAyLFxuXG4gIC8vIElmIHNldCwgc2lnbi1pbi91cCBmb3JtIGlzIG5vdCBhdmFpbGFibGUgdW50aWwgZW1haWwgaGFzIGJlZW4gdmVyaWZpZWQuXG4gIC8vIFBsdXMgcHJvdGVjdGVkIHJvdXRlcyBhcmUgc3RpbGwgcHJvdGVjdGVkIGV2ZW4gdGhvdWdoIHVzZXIgaXMgY29ubmVjdGVkLlxuICBndWFyZFByb3RlY3RlZFJvdXRlc1VudGlsRW1haWxJc1ZlcmlmaWVkOiB0cnVlLFxuXG4gIC8vIERlZmF1bHQgdG8gZW1haWwgdmVyaWZpY2F0aW9uIG9uXG4gIGVuYWJsZUVtYWlsVmVyaWZpY2F0aW9uOiB0cnVlLFxuXG4gIC8vIERlZmF1bHQgdG8gZmFsc2UgdG8ga2VlcCB0aGUgY3VycmVudCBwcm9qZWN0cyB3b3JraW5nIGFzIGlzXG4gIHVzZVJhd1VzZXJDcmVkZW50aWFsOiBmYWxzZVxufTtcblxuLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIHByb3ZpZGVkIGNvbmZpZy5cbmV4cG9ydCBmdW5jdGlvbiBuZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ0ZhY3RvcnkodXNlclByb3ZpZGVkQ29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyk6IE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRBdXRoRmlyZWJhc2VVSUNvbmZpZywgdXNlclByb3ZpZGVkQ29uZmlnKTtcbn1cbiJdfQ==