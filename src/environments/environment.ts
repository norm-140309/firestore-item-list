// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4NlzELk9M4ZDztMc-bSYy-q2f0U3vC60",
    authDomain: "firestore-item-list.firebaseapp.com",
    databaseURL: "https://firestore-item-list.firebaseio.com",
    projectId: "firestore-item-list",
    storageBucket: "firestore-item-list.appspot.com",
    messagingSenderId: "982472059173"
  }
};
