export interface IValidate {
  emailErr?: string;
  usernameErr?: string;
  phoneErr?: string;
  timeErr?: string;
  dateErr?: string;
}

export interface IvalChange {
  name: string;
  phone: string;
  email: string;
  persons: number;
}
