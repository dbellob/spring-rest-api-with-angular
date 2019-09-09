import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule,MatListModule,MatTreeModule, MatMenuModule, MatButtonModule, 
  MatExpansionModule, MatToolbarModule, MatIconModule, MatCardModule, MatRadioModule,
MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ImageComponent } from './components/image/image.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { SponsorshipLettersComponent } from './components/sponsorship-letters/sponsorship-letters.component';
import { TextComponent } from './components/text/text.component';
import { LettersByLanguageComponent } from './components/letters-by-language/letters-by-language.component';
import { LanguageService } from './service/language.service';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageComponent,
    CardContainerComponent,
    SponsorshipLettersComponent,
    TextComponent,
    LettersByLanguageComponent,
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
    MatCardModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
