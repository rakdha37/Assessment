import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';
import { OccupationAndRattingService } from '../../services/occupation-and-ratting.service';

@Component({
  selector: 'app-memberportal',
  templateUrl: './memberportal.component.html',
  styleUrls: ['./memberportal.component.css'],
})
export class MemberportalComponent implements OnInit {
  showStep: number = 0;
  occupation: any;
  states:any;
  constructor(private occupationAndRattingService: OccupationAndRattingService) {}

  ngOnInit(): void {
    this.showStep = 1;
    this.occupation= this.occupationAndRattingService.getOccupations();
    this.states=this.occupationAndRattingService.getStates();
  }

  showSheet1(): void {
    this.showStep = 1;
  }
  showSheet2(): void {
    this.showStep = 2;
  }
}
