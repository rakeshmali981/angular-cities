import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinationDetails: FormGroup;
  nameCtrl = new FormControl();
  imageCtrl = new FormControl();
  priceCtrl = new FormControl();
  descCtrl = new FormControl();
  offerCtrl = new FormControl(false);

  durationInSeconds = 5;

  constructor(fb : FormBuilder, private ds:DataService, private _snackBar: MatSnackBar) {
    this.destinationDetails = fb.group({
      name: this.nameCtrl,
      image: this.imageCtrl,
      price: this.priceCtrl,
      desc: this.descCtrl,
      offer: this.offerCtrl

    })
  }

  ngOnInit(): void {

  }

  addCity(){
    console.log(this.destinationDetails);
    const body = {
      city : this.destinationDetails.value.name,
      img : 'dummy',
      price : this.destinationDetails.value.price,
      details : this.destinationDetails.value.desc,
      offer : this.destinationDetails.value.offer,

    };
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar', 'Content-type' : 'application/json'};
    this.ds.restApiCallPostText("http://localhost:9000/destinations/addCity", body).subscribe(data => {
      let x = JSON.parse(JSON.stringify(data, null, 2));
      console.log(x);
      if(x.status == 201){
        this.destinationDetails.reset();
        let results = x.result.results;
        this._snackBar.openFromComponent(PizzaPartyComponent, {
          duration: this.durationInSeconds * 1000,
        });

      }else{

      }
    });
  }



}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party">
              City added successfully!
            </span>`,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
