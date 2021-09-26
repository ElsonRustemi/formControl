import { Component, OnInit } from '@angular/core';


interface Gender {
  name: string,
  code: string
}

@Component({
  selector: 'app-form-paziente',
  templateUrl: './form-paziente.component.html',
  styleUrls: ['./form-paziente.component.scss']
})
export class FormPazienteComponent implements OnInit {

  gender: Gender[];

  selectedGender: Gender;

  constructor() { 
    this.gender = [
      {name: "Female", code: "FE"},
      {name: "Male", code: "MA"}
    ]
  }

  ngOnInit(): void {
  }

}
