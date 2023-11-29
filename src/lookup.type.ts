export type SubmitRequest = {
  licenceNumber: string;
  driver: {
    name: string;
    age: number;
    license: {
      number: string;
      issuedDate: Date;
    };
  };
  personal: {
    address: {
      street: string;
      city: string;
      zipCode: string;
    }[];
    phoneNumber: string;
  };
  consent: {
    agreed: boolean;
    agreementDate: Date;
  };
  payment: {
    cardToken: string;
  };
};
type PaymentRequest = SubmitRequest["payment"];
type AddressRequest = SubmitRequest["personal"]["address"][0];

export function getPayment(): PaymentRequest {
  return {
    cardToken: "73hbdhufhdfgidyif7eoerero9er9eire8hbvbeu",
  };
}
