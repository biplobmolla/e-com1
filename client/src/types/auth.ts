export interface SignupPropsType {
  name: string;
  email: string;
  phone: string;
  password: string;
}
export interface SigninPropsType {
  email: string;
  password: string;
}

export interface APIResponsePropsType {
  status: number;
  message: string;
  token: any;
}
