import { PaidPlansType } from './enums';

export interface IPlanBenefits {
  blurb: string;
  icon: any;
  title: string;
}

export interface IPlanInfo {
  benefits: IPlanBenefits[];
  priceAnnuallyTotal: string;
  priceMonthlyAnnually: string;
  priceMonthlyBase: string;
  title: string;
  type: PaidPlansType;
}
