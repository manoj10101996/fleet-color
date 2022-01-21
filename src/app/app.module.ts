import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorFleetComponent } from './color-fleet/color-fleet.component';
import { ColorToolsService } from './color-fleet/color-tools.service';

@NgModule({
  declarations: [AppComponent, ColorFleetComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ColorToolsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
