import { environment } from "src/environments/environment";

export const SIGNUP_API = `/auth/create-account`;
export const LOGIN_API = `/${environment.apiSupportedVersions}/Account/Login`;

export const ABOUT_US_API = `/${environment.apiSupportedVersions}/AboutUsPage/get-aboutUs`;

//About-us APIs



//About-us APIs
export const ALERT_LIST = `/alert/get-all`;

//FAQs APIs
export const Get_FAQs_API = `/${environment.apiSupportedVersions}/FAQPage/get-FAQ`;


//ALL ORDERS APIs
export const ALL_ORDERS = `/${environment.apiSupportedVersions}/Orders/get-all`;
export const SINGLE_ORDER = `/${environment.apiSupportedVersions}/Orders/`;
export const SUBMIT_ORDERS = `/${environment.apiSupportedVersions}/Orders`;



