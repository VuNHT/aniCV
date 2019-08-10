import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule, ButtonsModule, WavesModule, CardsModule,
   IconsModule, CollapseModule, InputsModule, ModalModule   } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderAbsoluteComponent } from './home/header-absolute/header-absolute.component';
import { LoadingComponent } from './loading/loading.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { SkillComponent } from './home/skill/skill.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { InterestComponent } from './home/interest/interest.component';
import { ContactComponent } from './home/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { ColorBgComponent } from './color-bg/color-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderAbsoluteComponent,
    LoadingComponent,
    TimelineComponent,
    SkillComponent,
    ExperienceComponent,
    InterestComponent,
    ContactComponent,
    DialogComponent,
    NavbarLeftComponent,
    ColorBgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    ButtonsModule, WavesModule, CardsModule, IconsModule, CollapseModule,
     InputsModule, ModalModule,
     BrowserAnimationsModule,
     MatDialogModule, MatButtonModule,
     MatFormFieldModule,
     MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
