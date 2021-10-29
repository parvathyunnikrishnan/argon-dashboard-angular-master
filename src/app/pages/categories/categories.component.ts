/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: HttpClient ) { }
  public categories;

  ngOnInit() {
    const datas = { categoryName: 'Helloooo'}
  /*  this.http.post('http://157.245.100.86:8080/categories/add', datas).subscribe(
      (status: any) => {

        console.log("This should be the response???: ", status);
        
      },
      err => {

        if (err.status == 200) {
         

        }
      });*/
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

}

