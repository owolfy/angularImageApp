import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent implements OnInit {
  public imagePath;
  myForm: FormGroup;
  imgUrl = '';  // this one is in order to show the image in the html
  public message: string;
  imgData = new FileReader();

  constructor(
    private fb: FormBuilder,
    public modalRef: BsModalRef,
  ) { }

  ngOnInit() {
    // used group in case we will want to add more inputs in the future
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  handleFileInput(files) {
    if (files.length !== 1) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'File format invalid. Must be of an image type.';
      this.imgUrl = '';
      return;
    }
    this.message = '';
    const reader = new FileReader();
    this.imagePath = files;
    this.imgData = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.myForm.addControl('data', new FormControl());
      this.imgUrl = JSON.parse(JSON.stringify(reader.result));
    };
  }

  submitHandler() {
    const imgObj = {
      name: this.myForm.value.name,
      data: this.imgData
    };
    this.modalRef.content.callback(imgObj);
    this.closeModal();
  }

  closeModal() {
    this.modalRef.hide();
  }
}
