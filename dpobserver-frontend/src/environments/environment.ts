// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  APIAuthBaseURL: "http://192.168.0.10:8060/api",
  APIbaseURL: "http://192.168.0.10:8061/api",
  localBaseUrl: "http://localhost:8080",
  newsApiBaseUrl: "https://jsonplaceholder.typicode.com/todos/",
  quotesApiBaseUrl: "",
  imagesBaseUrl: "",
  production: false,
  apiSupportedVersions: "v1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
