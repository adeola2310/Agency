import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SanitizeHtmlPipe} from './shared/pipes/sanitize-html.pipe';
import {CoreModule} from './shared/modules/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
      SanitizeHtmlPipe,
      HomeComponent,
      ContactComponent,
      GalleryComponent,
      ProductComponent,
       FooterComponent,
        HeaderComponent,
  ],
  imports: [
    BrowserModule,
      CoreModule.forRoot(),
  ],
  providers: [SanitizeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
