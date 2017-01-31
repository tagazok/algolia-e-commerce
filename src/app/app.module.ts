import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MyAlgoliaModule } from './my-algolia/my-algolia.module';
import { AppComponent } from './app.component';
// import { AlgoliaService } from './my-algolia/algolia.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { AlgoliaModule, AlgoliaService } from '@tagazok/algolia-angular-components'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlgoliaModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [AlgoliaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
