import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiviteComponent } from './components/activite/activite.component';
import { AddActiviteComponent } from './components/add-activite/add-activite.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'add', component: AddContactComponent},
  { path: 'activite', component: ActiviteComponent},
  { path: 'addA', component: AddActiviteComponent},
  { path: 'update', component: UpdateComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
