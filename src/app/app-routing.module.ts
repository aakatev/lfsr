import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LfsrComponent } from './components/lfsr/lfsr.component';


const routes: Routes = [
  { path: '', component: LfsrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
