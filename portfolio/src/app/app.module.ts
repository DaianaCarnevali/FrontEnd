import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResumenComponent } from './resumen/resumen.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ResumenComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ContactoComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
