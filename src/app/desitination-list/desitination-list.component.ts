import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-desitination-list',
  templateUrl: './desitination-list.component.html',
  styleUrls: ['./desitination-list.component.css']
})
export class DesitinationListComponent implements OnInit {

  constructor(private ds:DataService) { }
  cities: any;
  ngOnInit(): void {
    this.getAllCities();
  }

  getAllCities(){
    this.ds.restApiCallGet("http://localhost:9000/destinations/getAllCities").subscribe(data => {
      console.log(data);
      this.cities = data;
    })
  }

  deleteCity(city : any, i :any){
    const cityName = this.cities[i].city;
    console.log('Delete City '+cityName)
    this.ds.deleteApiCall("http://localhost:9000/destinations/"+cityName).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
