import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SelectImageComponent } from '../select-image/select-image.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  imgData = {
    name: null,
    data: null
  };
  constructor(
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.modalRef = this.modalService.show(SelectImageComponent, {
      // this is how i get data back directly from SelectImageComponent
      initialState: {
        callback: (result) => {
          // console.log('xxxx', result);
          // const reader = new FileReader();
          // reader.readAsDataURL(result.data.base64);
          // reader.onload = () => {
          this.imgData.data = result.data;
          this.imgData.name = result.name;
          // };
        }
      }
    });
  }

}
