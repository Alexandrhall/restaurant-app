export interface IValidate {
  emailErr?: string;
  usernameErr?: string;
  phoneErr?: string;
  timeErr?: string;
  dateErr?: string;
  personErr?: string;
}

export interface IvalChange {
  name: string;
  phone: string;
  email: string;
  persons: number;
}
