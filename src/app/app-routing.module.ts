import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RecPageComponent } from './rec-page/rec-page.component';
import { RecPage2Component } from './rec-page2/rec-page2.component';
import { RecPage3Component } from './rec-page3/rec-page3.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'most-watched', component: RecPageComponent},
  {path: 'year-born', component: RecPage2Component},
  {path: 'key-search', component: RecPage3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
