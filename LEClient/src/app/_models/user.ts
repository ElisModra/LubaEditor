export interface User{
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface LoginDto{
  username: string;
  password: string;
}

export interface RegisterDto{
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RegisterUser extends RegisterDto{
  passwordControl: string;
}


