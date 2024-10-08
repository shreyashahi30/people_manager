import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './core/guard/auth.guard';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { AddPersonComponent } from './people/add-person/add-person.component';
import { EditPersonComponent } from './people/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleListComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

