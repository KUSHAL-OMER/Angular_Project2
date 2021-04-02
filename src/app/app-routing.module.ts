import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'ContactUs', component: ContactComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
