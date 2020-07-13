import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import { Docuser } from 'src/app/shared/core/docuser';
import { element } from 'protractor';

@Component({
  selector: 'apa-foldercard',
  templateUrl: './foldercard.component.html',
  styleUrls: ['./foldercard.component.scss']
})
export class FoldercardComponent implements OnInit {

  uploadForm: FormGroup;
  doc : File;
  docUser: Docuser;

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  uploadSubmit() {
    for (let i = 0; i < this.uploader.queue.length; i++) {
      let fileItem = this.uploader.queue[i]._file;
      if (fileItem.size > 10000000) {
        alert("Each File should be less than 10 MB of size.");
        return;
      }
    }
    for (let j = 0; j < this.uploader.queue.length; j++) {
      let data = new FormData();
      let fileItem = this.uploader.queue[j]._file;
      console.log("nom du file item"+ fileItem);
      data.append('file', fileItem);
      data.append('fileSeq', 'seq' + j);
      data.append('dataType', this.uploadForm.controls.type.value);
      console.log("data avec 3 append"+ data);
      this.uploadFile(data).subscribe(element =>{

        console.log("element " + element)});


    }
    this.uploader.clearQueue();
  }

  uploadFile(data: FormData): Observable<Docuser> {

    console.log("data" + data);
//    this.docUser = new Docuser()

// transfomer le data en docUSER


    return this.http.post<Docuser>('http://localhost:8080/documents', data);
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      doc: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }
}
