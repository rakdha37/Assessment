import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}

  getRatingByOccupations(
    sumInsured: number,
    factor: number,
    age: number
  ): number {
    return (sumInsured * factor) / (100 * 12 * age);
  }
}
