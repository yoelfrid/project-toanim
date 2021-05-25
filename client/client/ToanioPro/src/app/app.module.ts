import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListToanimComponent } from './comps/list-toanim/list-toanim.component';
import { AddListComponent } from './comps/add-list/add-list.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PiskyDinComponent } from './comps/pisky-din/pisky-din.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './comps/profile/profile.component';
import { OdotComponent } from './comps/odot/odot.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './comps/new-user/new-user.component';
import { EditUserComponent } from './comps/edit-user/edit-user.component';
import { AdminComponent } from './comps/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ListToanimComponent,
    AddListComponent,
    PiskyDinComponent,
    ProfileComponent,
    OdotComponent,
    NavbarComponent,
    HomeComponent,
    NewUserComponent,
    EditUserComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
