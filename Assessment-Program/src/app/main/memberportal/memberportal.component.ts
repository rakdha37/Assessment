import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CalculationService } from '../../services/calculation.service';
import { OccupationAndRattingService } from '../../services/occupation-and-ratting.service';
import { PersonalDetails } from '../../Interface/PersonalDetails';
import { Quote } from '../../Interface/quote';

@Component({
  selector: 'app-memberportal',
  templateUrl: './memberportal.component.html',
  styleUrls: ['./memberportal.component.css'],
})
export class MemberportalComponent implements OnInit {
  showStep: number = 0;
  occupation: any;
  maxDate: Date;
  states: any;
  selectedAge: any;
  personalDetailFormObject: PersonalDetails;
  quoteFormObject: Quote;
  totalAmount: number;

  constructor(
    private occupationAndRattingService: OccupationAndRattingService,
    private calculationService: CalculationService
  ) {}

  personalDetailForm = new FormGroup({
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    age: new FormControl(''),
  });
  quoteForm = new FormGroup({
    occupation: new FormControl(''),
    sumInsured: new FormControl(''),
    monthlyExpenses: new FormControl(''),
    states: new FormControl(''),
    postCode: new FormControl(''),
    totalAmount: new FormControl(''),
  });

  ngOnInit(): void {
    this.showStep = 1;
    this.occupation = this.occupationAndRattingService.getOccupations();
    this.states = this.occupationAndRattingService.getStates();
    this.maxDate = new Date();
  }

  showSheet1(): void {
    this.showStep = 1;
  }
  showSheet2(): void {
    if (!this.personalDetailForm.invalid) this.showStep = 2;
  }

  calculateTotal(): void {
    let totalCalAmount: number;
    let occ = this.quoteForm.controls['occupation'].value;
    let factor = this.occupationAndRattingService.getRatingByOccupations(occ);
    let age = this.personalDetailForm.controls['age'].value;
    let sumInsured = this.quoteForm.controls['sumInsured'].value;

    if (!this.quoteForm.invalid) {
      totalCalAmount = this.calculationService.getRatingByOccupations(
        sumInsured,
        factor,
        age
      );
      this.totalAmount = totalCalAmount;
    }
  }

  addEvent(event: any) {
    let selectedDate = new Date(event.value).getFullYear();
    let currentDate = new Date().getFullYear();
    this.personalDetailForm.controls['age'].setValue(
      currentDate - selectedDate
    );

    // this.personalDetailForm.controls.["age"].setValue(this.personalDetailFormObject.Age);
  }
}
