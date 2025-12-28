
export enum FormType {
  BRAND = 'Brand / Enterprise',
  DESIGNER = 'Designer',
  PARTNER = 'Partner / Institution',
  MEDIA = 'Media'
}

export interface ContactFormData {
  name: string;
  email: string;
  type: FormType;
  organization: string;
  message: string;
}
