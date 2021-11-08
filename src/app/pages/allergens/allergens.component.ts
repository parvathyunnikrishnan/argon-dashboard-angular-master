import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.scss']
})
export class AllergensComponent implements OnInit {

  formdata;
  constructor(private http: HttpClient, private modalService: NgbModal ) { }
  public allergens;
  closeModal: string;
  ngOnInit() {
    this.formdata = new FormGroup({
      allergensName: new FormControl(""),
      address: new FormControl(""),
      description:new FormControl(""),
      status:new FormControl(""),
      image:new FormControl("")
      
   });
    
    this.http
    .get('http://157.245.100.86:8080/allergens/get-all')
    .subscribe(
      (data: any) => {
        this.allergens = data
        console.log(data)
      },
      error => {
        
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }
  deleteAllergens() {
    console.log(1)
    this.http
    .put('http://157.245.100.86:8080/allergens/delete?id=120', {Id: 120})
    .subscribe(
      (data: any) => {
        
        console.log(data)
      },
      error => {
        
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }

    );
  }
  triggerModal(content, modalType?: string) {
    if(modalType) {
      this.http
      .get('http://157.245.100.86:8080/allergens/get?id=128')
      .subscribe(
        (data: any) => {
       
          console.log(data)
        },
        error => {
          
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
        }
      );
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });

   
  
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  updateAllergens(content) {
     this.http
    .put('http://157.245.100.86:8080/allergens/update', {})
    .subscribe(
      (data: any) => {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
          this.closeModal = `Closed with: ${res}`;
        }, (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
      },
      error => {
        
      },
      () => {
        
      }

    );
  }

  onClickSubmit(data){
    console.log(data)
    const datas = { allergensName: data.allergensName, address: data.address, description: data.description, status: data.status, image: data.image
    }
    this.http.post('http://157.245.100.86:8080/allergens/add', datas).subscribe(
      (status: any) => {

        console.log("This should be the response???: ", status);
        
      },
      err => {

        if (err.status == 200) {
         

        }
      });
  }
}


