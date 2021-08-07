import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './MyComponents/header/header.component';
import { SipComponent } from './MyComponents/sip/sip.component';
import { BalanceComponent } from './MyComponents/balance/balance.component';
import { SavingsComponent } from './MyComponents/savings/savings.component';
import { RegularComponent } from './MyComponents/regular/regular.component';
import { GolddepositsComponent } from './MyComponents/golddeposits/golddeposits.component';
import { BondsComponent } from './MyComponents/bonds/bonds.component';
import { FixdepositsComponent } from './MyComponents/fixdeposits/fixdeposits.component';
import { InsuranceplanComponent } from './MyComponents/insuranceplan/insuranceplan.component';
import { EducationplanComponent } from './MyComponents/educationplan/educationplan.component';
import { RetirementplanComponent } from './MyComponents/retirementplan/retirementplan.component';
import { FinancialplanComponent } from './MyComponents/financialplan/financialplan.component';
import { RecurringinvestComponent } from './MyComponents/recurringinvest/recurringinvest.component';
import { RiskmanageComponent } from './MyComponents/riskmanage/riskmanage.component';
import { LiquiditysolComponent } from './MyComponents/liquiditysol/liquiditysol.component';
import { LiquidinvestComponent } from './MyComponents/liquidinvest/liquidinvest.component';
import { TaxmanagementComponent } from './MyComponents/taxmanagement/taxmanagement.component';
import { InvestmentmanageComponent } from './MyComponents/investmentmanage/investmentmanage.component';
import { OnlinetransactComponent } from './MyComponents/onlinetransact/onlinetransact.component';
import { ClaimsComponent } from './MyComponents/claims/claims.component';
import { KycComponent } from './MyComponents/kyc/kyc.component';
import { GoalplanComponent } from './MyComponents/goalplan/goalplan.component';
import { PortfolioserviceComponent } from './MyComponents/portfolioservice/portfolioservice.component';
import { KnowledgeComponent } from './MyComponents/knowledge/knowledge.component';
import { DownloadsComponent } from './MyComponents/downloads/downloads.component';
import { BlogComponent } from './MyComponents/blog/blog.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { AboutusComponent } from './MyComponents/aboutus/aboutus.component';
import { CareersComponent } from './MyComponents/careers/careers.component';
import { TcComponent } from './MyComponents/tc/tc.component';
import { PrivacypolicyComponent } from './MyComponents/privacypolicy/privacypolicy.component';
import { FaqComponent } from './MyComponents/faq/faq.component';
import { ClaimIntimationComponent } from './MyComponents/claim-intimation/claim-intimation.component';
import { SipcalcComponent } from './MyComponents/sipcalc/sipcalc.component';
import { GoalsipcalcComponent } from './MyComponents/goalsipcalc/goalsipcalc.component';
import { InsurancecalcComponent } from './MyComponents/insurancecalc/insurancecalc.component';
import { InflationcalcComponent } from './MyComponents/inflationcalc/inflationcalc.component';
import { IncometaxcalcComponent } from './MyComponents/incometaxcalc/incometaxcalc.component';
import { IntroMfComponent } from './MyComponents/intro-mf/intro-mf.component';

const routes: Routes = [
  {
    path:"",
    redirectTo : "home",
    pathMatch: "full",
  },
  { path: 'home', component: HeaderComponent },
  { path: 'sip', component: SipComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'regular', component: RegularComponent },
  { path: 'golddeposits', component: GolddepositsComponent },
  { path: 'bonds', component: BondsComponent },
  { path: 'fixdeposits', component: FixdepositsComponent },
  { path: 'insuranceplan', component: InsuranceplanComponent },
  { path: 'educationplan', component: EducationplanComponent },
  { path: 'retirementplan', component: RetirementplanComponent },
  { path: 'financialplan', component: FinancialplanComponent },
  { path: 'recurringinvest', component: RecurringinvestComponent },
  { path: 'riskmanage', component: RiskmanageComponent },
  { path: 'liquiditysol', component: LiquiditysolComponent },
  { path: 'liquidinvest', component: LiquidinvestComponent },
  { path: 'taxmanagement', component: TaxmanagementComponent },
  { path: 'investmentmanage', component: InvestmentmanageComponent },
  { path: 'onlinetransact', component: OnlinetransactComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'kyc', component: KycComponent },
  { path: 'goalplan', component: GoalplanComponent },
  { path: 'portfolioservice', component: PortfolioserviceComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'tc', component: TcComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'claim-intimation', component: ClaimIntimationComponent },
  { path: 'sipcalc', component: SipcalcComponent },
  { path: 'goalsipcalc', component: GoalsipcalcComponent },
  { path: 'insurancecalc', component: InsurancecalcComponent },
  { path: 'inflationcalc', component: InflationcalcComponent },
  { path: 'incometaxcalc', component: IncometaxcalcComponent },
  { path: 'intro-mf', component: IntroMfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
