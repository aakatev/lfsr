import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LfsrComponent } from './components/lfsr/lfsr.component';
import { EeaComponent } from './components/eea/eea.component';


const routes: Routes = [
  { path: '', component: LfsrComponent },
  { path: 'eea', component: EeaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
