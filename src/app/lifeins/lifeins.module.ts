import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CancercareComponent } from './cancercare/cancercare.component';
import { ChildrenlifeComponent } from './childrenlife/childrenlife.component';
import { HigherstudylifeComponent } from './higherstudylife/higherstudylife.component';
import { MoneybackComponent } from './moneyback/moneyback.component';
import { PensionComponent } from './pension/pension.component';
import { RetirementlifeComponent } from './retirementlife/retirementlife.component';
import { TermComponent } from './term/term.component';
import { TaxsavinglifeComponent } from './taxsavinglife/taxsavinglife.component';
import { LifeinsComponent } from './lifeins.component';
import { WealthbuilderComponent } from './wealthbuilder/wealthbuilder.component';
import { ShortTermComponent } from './short-term/short-term.component';
import { MarketLinkedComponent } from './market-linked/market-linked.component';
import { HealthComponent } from './health/health.component';
import { MarriageComponent } from './marriage/marriage.component';


const lifeInsRoutes: Routes = [
  {path: 'lifeins', children:[
    { path: '', component: LifeinsComponent},
    { path: 'moneyback', component: MoneybackComponent },
    { path: 'childrenlife', component: ChildrenlifeComponent },
    { path: 'higherstudylife', component: HigherstudylifeComponent },
    { path: 'retirementlife', component: RetirementlifeComponent },
    { path: 'pension', component: PensionComponent },
    { path: 'term', component: TermComponent },
    { path: 'cancercare', component: CancercareComponent },
    { path: 'taxsavinglife', component: TaxsavinglifeComponent },
    { path: 'wealthbuilder', component: WealthbuilderComponent, },
    { path: 'short-term', component: ShortTermComponent },
    { path: 'market-linked', component: MarketLinkedComponent },
    { path: 'health', component: HealthComponent },
    { path: 'marriage', component: MarriageComponent },
  ]},
]

@NgModule({
  declarations: [
    MoneybackComponent,
    ChildrenlifeComponent,
    HigherstudylifeComponent,
    RetirementlifeComponent,
    PensionComponent,
    TermComponent,
    CancercareComponent,
    TaxsavinglifeComponent,
    WealthbuilderComponent,
    ShortTermComponent,
    MarketLinkedComponent,
    HealthComponent,
    MarriageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(lifeInsRoutes)
  ]
})
export class LifeinsModule { }
