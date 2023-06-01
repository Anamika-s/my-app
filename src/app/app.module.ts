import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { FourthCompComponent } from './fourth-comp/fourth-comp.component';

import { SixthCom } from 'src/sixth-comp';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyErrorDirective } from './my-error.directive';
import { TestComponent } from './test/test.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { GenderPipe } from './gender.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    ThirdCompComponent,
    FourthCompComponent,
    SixthCom,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    MyErrorDirective,
    TestComponent,
    PipesdemoComponent,
    GenderPipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
