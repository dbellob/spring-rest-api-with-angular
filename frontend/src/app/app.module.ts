import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule,MatListModule,MatTreeModule, MatMenuModule, MatButtonModule, 
  MatExpansionModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ImageComponent } from './components/image/image.component';
import { TextContainerComponent } from './components/text-container/text-container.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { MyStatusComponent } from './components/my-status/my-status.component';
import { FooterComponent } from './components/footer/footer.component';
import { SponsorshipLettersComponent } from './components/sponsorship-letters/sponsorship-letters.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageComponent,
    TextContainerComponent,
    DateTimeComponent,
    MyStatusComponent,
    FooterComponent,
    SponsorshipLettersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
