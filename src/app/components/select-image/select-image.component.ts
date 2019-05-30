import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent implements OnInit {
  myForm: FormGroup;
  imgUrl: any;  // local component: this one is in order to show the image in the html
  imgData = new FileReader(); // this one will be passed to the parent
  public errMessage: string;

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
      // if file type is invalid, the user wont be able to press save
      this.myForm.get('data').setErrors({
        required: true
      });
      this.errMessage = 'File format invalid. Must be of an image type.';
      // edge case: user selected valid file (image), image is displayed. afterwards the user selected invalid file type.
      // the following 2 lines are resetting the image data so it wont be displayed anymore
      this.imgUrl = '';
      this.imgData = null;
      return;
    }
    this.errMessage = '';
    const reader = new FileReader();
    this.imgData = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgUrl = reader.result; // what the html file will show
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
