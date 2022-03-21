import { UserInfoInterceptor } from './user-info.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewFormDialogComponent } from './review-form-dialog/review-form-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientXsrfModule, HttpXsrfTokenExtractor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewFormComponent,
    ReviewFormDialogComponent,
    StarRatingComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'Set-Cookie'
      })
  ],
  // providers: [{provide:HTTP_INTERCEPTORS, useClass:UserInfoInterceptor, useExisting:HttpXsrfInterceptor, multi:true, }],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UserInfoInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
