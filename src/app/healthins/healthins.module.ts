import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthinsComponent } from './healthins.component';
import { RouterModule, Routes } from '@angular/router';

import { ArogyaComponent } from './arogya/arogya.component';
import { CardiacComponent } from './cardiac/cardiac.component';
import { CorporatehealthComponent } from './corporatehealth/corporatehealth.component';
import { CriticalcareComponent } from './criticalcare/criticalcare.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { FamilyfloaterComponent } from './familyfloater/familyfloater.component';
import { GrouphealthComponent } from './grouphealth/grouphealth.component';
import { IndividualhealthComponent } from './individualhealth/individualhealth.component';
import { TaxsavinghealthComponent } from './taxsavinghealth/taxsavinghealth.component';




const healthInsRoutes: Routes = [
  {path: 'healthins', children:[
    { path: '', component: HealthinsComponent},
    { path: 'individualhealth', component: IndividualhealthComponent },
    { path: 'familyfloater', component: FamilyfloaterComponent },
    { path: 'diabetes', component: DiabetesComponent },
    { path: 'arogya', component: ArogyaComponent },
    { path: 'cardiac', component: CardiacComponent },
    { path: 'criticalcare', component: CriticalcareComponent },
    { path: 'grouphealth', component: GrouphealthComponent },
    { path: 'corporatehealth', component: CorporatehealthComponent },
    { path: 'taxsavinghealth', component: TaxsavinghealthComponent },
  ]},
]

@NgModule({
  declarations: [
    IndividualhealthComponent,
    FamilyfloaterComponent,
    DiabetesComponent,
    ArogyaComponent,
    CardiacComponent,
    CriticalcareComponent,
    GrouphealthComponent,
    CorporatehealthComponent,
    TaxsavinghealthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(healthInsRoutes)
  ]
})
export class HealthinsModule { }
