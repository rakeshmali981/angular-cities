import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup= new FormGroup({});
  statements : any[] = [];
  climateQuestion = "";

  constructor(private _formBuilder: FormBuilder, private ds:DataService) { }


  ngOnInit(): void {

    this.firstFormGroup = new FormGroup({
      climateQues: new FormControl('')
    });
    this.secondFormGroup = new FormGroup({
      covidQues: new FormControl('')
    });

  }

  askQuestion(){
    const body = {
      question : "What are the causes of climate change?"
    };
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar', 'Content-type' : 'application/json'};
    this.ds.restApiCallPost("http://localhost:9000/climate", body).subscribe(data => {
      let x = JSON.parse(JSON.stringify(data, null, 2));
      console.log(x);
      if(x.status == 200){
        let results = x.result.results;
        this.statements = [];
        for(let i=0; i<results.length; i++){
          this.statements.push(results[i].text);
        }
      }
    });
  }

}
