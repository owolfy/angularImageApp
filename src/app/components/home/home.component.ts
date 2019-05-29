import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; // https://www.youtube.com/watch?v=Jm9q9Alva0M
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
      initialState: {
        callback: (result) => {
          const reader = new FileReader();
          reader.readAsDataURL(result.data);
          reader.onload = (event) => {
            this.imgData.data = reader.result;
            this.imgData.name = result.name;
          };
        }
      }
    });
  }

}
