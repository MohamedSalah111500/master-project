export interface Api {
  errorCode: string;
  isActive: boolean;
  message: string;
  result?: any;
  success: boolean;
}

export interface SignupCredential {
  FullName: string;
  PhoneNumber: string;
  Password: string;
  IsAdmin: boolean;
  Email: string;
  version: string;
}

export interface LoginCredential {
  email: string;
  password: string;
}

export interface User {
  FullName: string;
  userId: string;
  isAdmin: boolean;
  success: boolean;
  accessToken?: string;
  errors: [];
}
