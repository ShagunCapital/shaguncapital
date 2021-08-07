import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MfModule } from './mf/mf.module';
import { LifeinsModule } from './lifeins/lifeins.module';
import { HealthinsModule } from './healthins/healthins.module';

import { AppComponent } from './app.component';
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
import { FooterComponent } from './MyComponents/footer/footer.component';
import { IncometaxcalcComponent } from './MyComponents/incometaxcalc/incometaxcalc.component';
import { InflationcalcComponent } from './MyComponents/inflationcalc/inflationcalc.component';
import { AboutusComponent } from './MyComponents/aboutus/aboutus.component';
import { CareersComponent } from './MyComponents/careers/careers.component';
import { ClaimIntimationComponent } from './MyComponents/claim-intimation/claim-intimation.component';
import { FaqComponent } from './MyComponents/faq/faq.component';
import { GoalsipcalcComponent } from './MyComponents/goalsipcalc/goalsipcalc.component';
import { InsurancecalcComponent } from './MyComponents/insurancecalc/insurancecalc.component';
import { PrivacypolicyComponent } from './MyComponents/privacypolicy/privacypolicy.component';
import { SipcalcComponent } from './MyComponents/sipcalc/sipcalc.component';
import { TcComponent } from './MyComponents/tc/tc.component';
import { MfComponent } from './mf/mf.component';
import { LifeinsComponent } from './lifeins/lifeins.component';
import { HealthinsComponent } from './healthins/healthins.component';
import { IntroMfComponent } from './MyComponents/intro-mf/intro-mf.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SipComponent,
    BalanceComponent,
    SavingsComponent,
    RegularComponent,
    GolddepositsComponent,
    BondsComponent,
    FixdepositsComponent,
    InsuranceplanComponent,
    EducationplanComponent,
    RetirementplanComponent,
    FinancialplanComponent,
    RecurringinvestComponent,
    RiskmanageComponent,
    LiquiditysolComponent,
    LiquidinvestComponent,
    TaxmanagementComponent,
    InvestmentmanageComponent,
    OnlinetransactComponent,
    ClaimsComponent,
    KycComponent,
    GoalplanComponent,
    PortfolioserviceComponent,
    KnowledgeComponent,
    DownloadsComponent,
    BlogComponent,
    ContactusComponent,
    AboutusComponent,
    CareersComponent,
    TcComponent,
    PrivacypolicyComponent,
    FaqComponent,
    ClaimIntimationComponent,
    SipcalcComponent,
    GoalsipcalcComponent,
    InsurancecalcComponent,
    InflationcalcComponent,
    IncometaxcalcComponent,
    FooterComponent,
    MfComponent,
    LifeinsComponent,
    HealthinsComponent,
    IntroMfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfModule,
    LifeinsModule,
    HealthinsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
