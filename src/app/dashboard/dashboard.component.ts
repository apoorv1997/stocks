import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stockData=[];
  p: number = 1;
  limit;
  constructor(private http:HttpServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.limit = 19;
    this.http.getAllStocks(this.limit).toPromise().then(res => {
      this.stockData = res['data']                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ;
    }).catch(err => {
      console.log(err.message);
    })
  }

  pageChanged(e) {
    this.p=e;
    if(this.p == e) {
      this.limit+=18;
      this.http.getAllStocks(this.limit).toPromise().then(res => {
        this.stockData = res['data'];
      }).catch(err => {
        console.log(err.message);
      })
    } else if(this.p!=e) {
      this.limit-=18;
      this.http.getAllStocks(this.limit).toPromise().then(res => {
        this.stockData = res['data'];
      }).catch(err => {
        console.log(err.message);
      })
    }
  }

  selectRange(e) {
    console.log(this.stockData);
    this.stockData.sort(this.compareValues(e));
    console.log(this.stockData);
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000
    });
  }

  getSymbol(symbol) {
    console.log(symbol);
    this.http.getBySymbol(symbol,this.limit).toPromise().then(res => {
      this.stockData = res['data'];
    }).catch(err => {
      console.log(err.message);
    })
  }

  compareValues(key, order='desc') {
    console.log(key);
    return function(a, b) {
      const varA = a[key];
      const varB = b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
