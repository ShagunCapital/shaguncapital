import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChildrenComponent } from './children/children.component';
import { HigherstudyComponent } from './higherstudy/higherstudy.component';
import { RetirementComponent } from './retirement/retirement.component';
import { TaxsavingComponent } from './taxsaving/taxsaving.component';
import { WealthcreationComponent } from './wealthcreation/wealthcreation.component';
import { MfComponent } from './mf.component';
import { GoldfundComponent } from './goldfund/goldfund.component';
import { PensionfundComponent } from './pensionfund/pensionfund.component';
import { DreamHouseFundComponent } from './dream-house-fund/dream-house-fund.component';
import { RegularpayComponent } from './regularpay/regularpay.component';
import { RegularSavingComponent } from './regular-saving/regular-saving.component';
import { SipUtilComponent } from '../Calculators/sip-util/sip-util.component';


const mfRoutes: Routes = [
  {path: 'mf', children:[
    { path: '', component: MfComponent},
    { path: 'children', component: ChildrenComponent },
    { path: 'retirement', component: RetirementComponent },
    { path: 'higherstudy', component: HigherstudyComponent },
    { path: 'taxsaving', component: TaxsavingComponent },
    { path: 'wealthcreation', component: WealthcreationComponent },
    { path: 'goldfund', component: GoldfundComponent },
    { path: 'pensionfund', component: PensionfundComponent },
    { path: 'dream-house-fund', component: DreamHouseFundComponent },
    { path: 'regularpay', component: RegularpayComponent },
    { path: 'regular-saving', component: RegularSavingComponent },
  ]},
]

@NgModule({
  declarations: [
    ChildrenComponent,
    TaxsavingComponent,
    RetirementComponent,
    HigherstudyComponent,
    WealthcreationComponent,
    GoldfundComponent,
    PensionfundComponent,
    DreamHouseFundComponent,
    RegularpayComponent,
    RegularSavingComponent,
    SipUtilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mfRoutes)
  ]
})
export class MfModule { }
