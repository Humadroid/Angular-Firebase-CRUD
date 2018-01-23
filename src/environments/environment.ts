// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: 'AIzaSyDg9k1U1sySYny6r3QszleQd5dP0bwOOrc',
    authDomain: 'angular-firebase-crud-demo.firebaseapp.com',
    databaseURL: 'https://angular-firebase-crud-demo.firebaseio.com',
    projectId: 'angular-firebase-crud-demo',
    storageBucket: '',
    messagingSenderId: '1024220049401'
  }
};
