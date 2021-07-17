import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SipComponent } from './MyComponents/sip/sip.component';
import { BluechipComponent } from './MyComponents/bluechip/bluechip.component';
import { EquityComponent } from './MyComponents/equity/equity.component';
import { DebtComponent } from './MyComponents/debt/debt.component';
import { BalanceComponent } from './MyComponents/balance/balance.component';
import { ChildrenComponent } from './MyComponents/children/children.component';
import { TaxsavingComponent } from './MyComponents/taxsaving/taxsaving.component';
import { SavingsComponent } from './MyComponents/savings/savings.component';
import { UlipComponent } from './MyComponents/ulip/ulip.component';
import { RetirementComponent } from './MyComponents/retirement/retirement.component';
import { RegularComponent } from './MyComponents/regular/regular.component';
import { HybridComponent } from './MyComponents/hybrid/hybrid.component';
import { HigherstudyComponent } from './MyComponents/higherstudy/higherstudy.component';
import { GoldfundComponent } from './MyComponents/goldfund/goldfund.component';
import { WealthcreationComponent } from './MyComponents/wealthcreation/wealthcreation.component';
import { EndowmentComponent } from './MyComponents/endowment/endowment.component';
import { MoneybackComponent } from './MyComponents/moneyback/moneyback.component';
import { ChildrenlifeComponent } from './MyComponents/childrenlife/childrenlife.component';
import { HigherstudylifeComponent } from './MyComponents/higherstudylife/higherstudylife.component';
import { RetirementlifeComponent } from './MyComponents/retirementlife/retirementlife.component';
import { PensionComponent } from './MyComponents/pension/pension.component';
import { TermComponent } from './MyComponents/term/term.component';
import { CancercareComponent } from './MyComponents/cancercare/cancercare.component';
import { TaxsavinglifeComponent } from './MyComponents/taxsavinglife/taxsavinglife.component';
import { IndividualhealthComponent } from './MyComponents/individualhealth/individualhealth.component';
import { FamilyfloaterComponent } from './MyComponents/familyfloater/familyfloater.component';
import { DiabetesComponent } from './MyComponents/diabetes/diabetes.component';
import { ArogyaComponent } from './MyComponents/arogya/arogya.component';
import { CardiacComponent } from './MyComponents/cardiac/cardiac.component';
import { CriticalcareComponent } from './MyComponents/criticalcare/criticalcare.component';
import { GrouphealthComponent } from './MyComponents/grouphealth/grouphealth.component';
import { CorporatehealthComponent } from './MyComponents/corporatehealth/corporatehealth.component';
import { TaxsavinghealthComponent } from './MyComponents/taxsavinghealth/taxsavinghealth.component';
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

const routes: Routes = [
  {
    path:"**",
    redirectTo : "home",
    pathMatch: "full",
  },
  { path: 'home', component: HeaderComponent },
  { path: 'sip', component: SipComponent },
  { path: 'bluechip', component: BluechipComponent },
  { path: 'equity', component: EquityComponent },
  { path: 'debt', component: DebtComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'taxsaving', component: TaxsavingComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'ulip', component: UlipComponent },
  { path: 'retirement', component: RetirementComponent },
  { path: 'regular', component: RegularComponent },
  { path: 'hybrid', component: HybridComponent },
  { path: 'higherstudy', component: HigherstudyComponent },
  { path: 'goldfund', component: GoldfundComponent },
  { path: 'wealthcreation', component: WealthcreationComponent },
  { path: 'endowment', component: EndowmentComponent },
  { path: 'moneyback', component: MoneybackComponent },
  { path: 'childrenlife', component: ChildrenlifeComponent },
  { path: 'higherstudylife', component: HigherstudylifeComponent },
  { path: 'retirementlife', component: RetirementlifeComponent },
  { path: 'pension', component: PensionComponent },
  { path: 'term', component: TermComponent },
  { path: 'cancercare', component: CancercareComponent },
  { path: 'taxsavinglife', component: TaxsavinglifeComponent },
  { path: 'individualhealth', component: IndividualhealthComponent },
  { path: 'familyfloater', component: FamilyfloaterComponent },
  { path: 'diabetes', component: DiabetesComponent },
  { path: 'arogya', component: ArogyaComponent },
  { path: 'cardiac', component: CardiacComponent },
  { path: 'criticalcare', component: CriticalcareComponent },
  { path: 'grouphealth', component: GrouphealthComponent },
  { path: 'corporatehealth', component: CorporatehealthComponent },
  { path: 'taxsavinghealth', component: TaxsavinghealthComponent },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
