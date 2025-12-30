
// Added MEDIA to FormType to fix property access error in Contact.tsx
export enum FormType {
  BRAND = 'Brand / Enterprise',
  DESIGNER = 'Designer',
  PARTNER = 'Partner / Institution',
  STRUCTURAL = 'International Structural Consultation',
  MEDIA = 'Media / Press'
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  assetRange: string; // Mandatory for screening
  familyStatus: string; // Mandatory for logic
  timeWindow: string; // Mandatory
  objectives: string;
}