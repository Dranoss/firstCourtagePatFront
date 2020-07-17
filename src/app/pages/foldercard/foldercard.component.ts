import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import { Docuser } from 'src/app/shared/core/classes/docuser';
import { element } from 'protractor';
import { UploadfileService } from 'src/app/shared/services/uploadfile/uploadfile.service';
import { Project } from 'src/app/shared/core/classes/project';

@Component({
  selector: 'apa-foldercard',
  templateUrl: './foldercard.component.html',
  styleUrls: ['./foldercard.component.scss']
})
export class FoldercardComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;


  project: Project;
  uploadForm: FormGroup;
  doc : File;
  docUser: Docuser;
  options=
  [{"id":1,"name":"Contrat"},{"id":1,"name":"Compromis"},{"id":1,"name":"Vente"}];

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });


  title: string = 'Docs Upload Patrimoine';
  constructor(private fb: FormBuilder,
     private uploadService: UploadfileService,
     @Inject(MAT_DIALOG_DATA) public data:any ) {

      this.project = data;
      }

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
      this.uploadFile(fileItem)
      this.uploader.clearQueue();
  }
  }

  uploadFile(fileToUpload: File) {
    this.progress = 0;

    this.docUser = new Docuser("","",fileToUpload,this.project,null)

    this.uploadService.upload(fileToUpload,this.docUser).subscribe(data=>{
      // event => {
      //   if (event.type === HttpEventType.UploadProgress) {
      //     this.progress = Math.round(100 * event.loaded / event.total);
      //   } else if (event instanceof HttpResponse) {
      //     this.message = event.body.message;
      //     this.fileInfos = this.uploadService.getFiles();
      //   }
      // },
      // err => {
      //   this.progress = 0;
      //   this.message = 'Could not upload the file!';

      console.log(data);


      });




  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      doc: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }
}
