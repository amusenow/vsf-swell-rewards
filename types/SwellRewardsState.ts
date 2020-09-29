import Customer from './Customer'
import RedemptionOption from './RedemptionOption'
import Redemption from './Redemption'
import VipTier from './VipTier'
import Campaign from './Campaign'
import ReferralsHistory from './ReferralsHistory'

export default interface SwellRewardsState {
  customerId: string,
  customer: Customer,
  redemptionOptions: RedemptionOption[],
  activeRedemption?: Redemption,
  campaigns: Campaign[],
  vipTiers: VipTier[],
  referralLink: string,
  referralsHistory: ReferralsHistory[]
}
