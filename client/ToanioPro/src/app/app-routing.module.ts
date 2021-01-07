import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListToanimComponent } from './comps/list-toanim/list-toanim.component';
import { AddListComponent } from './comps/add-list/add-list.component';
import { PiskyDinComponent } from './comps/pisky-din/pisky-din.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { OdotComponent } from './comps/odot/odot.component';
import { HomeComponent } from './comps/home/home.component';
import { NewUserComponent } from './comps/new-user/new-user.component';
import { EditUserComponent } from './comps/edit-user/edit-user.component';
import { AdminComponent } from './comps/admin/admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'odot', component: OdotComponent },

  { path: 'List', component: ListToanimComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'AddList', component: AddListComponent },
  { path: 'newUser', component: NewUserComponent },

  { path: 'PiskyDin', component: PiskyDinComponent },
  { path: 'EditUser', component: EditUserComponent },
  { path: 'Admin', component: AdminComponent },

  
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

//  const routes: Routes = [
//   { path:'App',   component:AppComponent , children:[
//     { path:'List',   component:ListToanimComponent},
//     { path:'AddList',   component:AddListComponent},
//     { path:'PiskyDin',   component:PiskyDinComponent},
//     { path:'', redirectTo:'', pathMatch: 'full'},
//     { path:'**', redirectTo:'', pathMatch: 'full'},
//   ]},
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
