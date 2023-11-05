import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TamsuComponent } from './tamsu/tamsu.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { TrangchuComponent } from './trangchu/trangchu.component';

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    GiaitriComponent,
    KinhdoanhComponent,
    LamdepComponent,
    NavbarComponent,
    TamsuComponent,
    ThoisuComponent,
    TrangchuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
