import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '../shared/dynmic-form/dynamic-form.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FileDownloadService } from '../core/file.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    HttpClientModule,
  ],
  providers: [
    FileDownloadService
  ]
})
export class AuthModule { }
