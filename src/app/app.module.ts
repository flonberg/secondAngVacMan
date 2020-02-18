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
import { DatePipe } from '@angular/common';
import { NavBarVMComponent } from './nav-bar-vm/nav-bar-vm.component';

import { MatTabsModule } from '@angular/material';
import { MonthViewComponent } from './month-view/month-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DoseFxComponent,
    AutocompleteFilterExample,
    TimeLineComponent,
    NavBarVMComponent,
    MonthViewComponent,

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
      { path: 'Monthview', component: MonthViewComponent },
      { path: 'WWD/:docidx', component: DoseFxComponent},
      { path: 'VacMan**', component: TimeLineComponent},
      { path: '**', component: TimeLineComponent}
    ])

  ],
  providers: [DatePipe, TimeLineComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
