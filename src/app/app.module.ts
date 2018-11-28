import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { LeftComponent } from './common/left.component';
import { RightComponent } from './common/right.component';

/* Custom Modules */
import { SudokuModule } from './sudoku/sudoku.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent ,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SudokuModule
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
