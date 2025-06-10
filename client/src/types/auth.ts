export interface SignupPropsType {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignupReturnPropsType {
  status: number;
  message: string;
  data: any;
}
