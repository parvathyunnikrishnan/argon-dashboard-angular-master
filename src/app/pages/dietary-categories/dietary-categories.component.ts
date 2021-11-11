import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dietary-categories',
  templateUrl: './dietary-categories.component.html',
  styleUrls: ['./dietary-categories.component.scss']
})
export class DietaryCategoriesComponent implements OnInit {

  formdata;
  constructor(private http: HttpClient, private modalService: NgbModal ) { }
  public dietaryCategories;
  closeModal: string;
  ngOnInit() {
    this.formdata = new FormGroup({
      dietaryCategoryName: new FormControl(""),
      address: new FormControl(""),
      description:new FormControl(""),
      status:new FormControl(""),
      image:new FormControl("")
     
   });
    
    this.http
    .get('http://157.245.100.86:8080/dietary-categories/get-all')
    .subscribe(
      (data: any) => {
        this.dietaryCategories = data
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
  deleteDietaryCategory() {
    console.log(1)
    this.http
    .put('http://157.245.100.86:8080/dietary-categories/delete?id=126', {Id: 126})
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
      .get('http://157.245.100.86:8080/dietary-categories/get?id=112')
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


  updateDietaryCategory(content) {
     this.http
    .put('http://157.245.100.86:8080/dietary-categories/update?id=126', {Id: 126})
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
    const datas = { dietaryCategoryName: data.dietaryCategoryName, address: data.address, description: data.description, status: data.status, image: data.image
    }
    this.http.post('http://157.245.100.86:8080/dietary-categories/add', datas).subscribe(
      (status: any) => {

        console.log("This should be the response???: ", status);
        
      },
      err => {

        if (err.status == 200) {
         

        }
      });
  }
}

