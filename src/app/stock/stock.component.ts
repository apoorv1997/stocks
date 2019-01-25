import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = ['High', 'Low', 'Open', 'Close'];
  public lineChartType:string = 'line';
  stockData = [];
  date: any;
  constructor(private router:ActivatedRoute, private http:HttpServiceService) { }

  ngOnInit() {
    this.date = this.router.snapshot.params['date'];
    this.http.getByDate(this.date).toPromise().then( res => {
      this.stockData = res['data'];
      this.lineChartData = [
        [this.stockData['high']],
        [this.stockData['low']],
        [this.stockData['open']],
        [this.stockData['close']]
      ]
      console.log(this.stockData);
    }).catch(err => {
      console.log(err);
    })
  }

}
