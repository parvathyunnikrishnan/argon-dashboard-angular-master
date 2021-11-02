
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  formdata;
  constructor(private http: HttpClient, private modalService: NgbModal ) { }
  public categories;
  closeModal: string;
  ngOnInit() {
    this.formdata = new FormGroup({
      categoryName: new FormControl(""),
      address: new FormControl("")
   });
    
    this.http
    .get('http://157.245.100.86:8080/categories/get-all')
    .subscribe(
      (data: any) => {
        this.categories = data
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
  deleteCategory() {
    console.log(1)
    this.http
    .put('http://157.245.100.86:8080/categories/delete?Id=112', {Id: 112})
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
  triggerModal(content) {
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


  updateCategory(content) {
    
    this.http
    .put('http://157.245.100.86:8080/categories/update', {})
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
    const datas = { categoryName: data.categoryName, address: data.address}
    this.http.post('http://157.245.100.86:8080/categories/add', datas).subscribe(
      (status: any) => {

        console.log("This should be the response???: ", status);
        
      },
      err => {

        if (err.status == 200) {
         

        }
      });
  }
}

