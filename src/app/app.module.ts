import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule, MatInput} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { DoseFxComponent } from './dose-fx/dose-fx.component';
import { AutocompleteFilterExample } from './autocomplete-filter-example/autocomplete-filter-example.component';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimeLineComponent } from './time-line/time-line.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, Location, CommonModule } from '@angular/common';
import { NavBarVMComponent } from './nav-bar-vm/nav-bar-vm.component';

import { MatTabsModule } from '@angular/material';
import { MonthViewComponent } from './month-view/month-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WINDOW_PROVIDERS } from './window.provider';
import { NoticeComponent } from './notice/notice.component';
import { MyDutiesComponent } from './my-duties/my-duties.component';
import { HelpComponent } from './help/help.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { ProtonmonthComponent } from './protonmonth/protonmonth.component';
import { DosimAssignmentsComponent } from './dosim-assignments/dosim-assignments.component';
//import { PhysicsCoverageComponent } from './physics-coverage/physics-coverage.component';

@NgModule({
  declarations: [
    AppComponent,
    DoseFxComponent,
    AutocompleteFilterExample,
    TimeLineComponent,
    NavBarVMComponent,
    MonthViewComponent,
    MyDutiesComponent,
    NoticeComponent,
    HelpComponent,
    WeekViewComponent,
    ProtonmonthComponent,
    DosimAssignmentsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    RouterModule.forRoot([
      { path: 'MonthView', component: MonthViewComponent },
      { path: 'ProtonMonth', component: ProtonmonthComponent },
      { path: 'VacMan**', component: TimeLineComponent},
      { path: 'VacMan/:userid', component: TimeLineComponent},
      { path: 'MyDuties', component:MyDutiesComponent},
      { path: 'WeekView', component:WeekViewComponent},
      { path: 'DosimAssign', component:DosimAssignmentsComponent},

     { path: '**', component: TimeLineComponent}
    ])

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DatePipe, TimeLineComponent, Location,
    WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
