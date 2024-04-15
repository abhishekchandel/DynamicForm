import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { signUpForm } from 'src/app/core/config/form.constant';
import { FileDownloadService } from 'src/app/core/file.service';
import { FieldConfig } from 'src/app/core/models/field-config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('form') form: any;
  config: FieldConfig[] = signUpForm;

  constructor(private router: Router, private fileDownloadService: FileDownloadService) { }

  signUp(): void {
    if (this.form.form.invalid) {
      this.form.form.markAllAsTouched();
    } else {
      console.log(this.form);
      // here is the logic for sign in user.
    }
  }

  // tslint:disable-next-line:typedef
  downloadFile() {
    const filePath = 'assets/Free_Test_Data_100KB_XLSX.xlsx';
    this.fileDownloadService.downloadFile(filePath)
      .subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'example.xlsx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
