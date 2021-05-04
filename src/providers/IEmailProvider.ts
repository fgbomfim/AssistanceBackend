interface IAddress {
  name: string;
  email: string;
}

export interface IEmail {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IEmailProvider {
  sendMail(email: IEmail): Promise<void>;
}