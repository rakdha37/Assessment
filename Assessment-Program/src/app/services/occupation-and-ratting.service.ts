import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Occupation } from '../Interface/occupation';
import { Ratings } from '../Interface/ratings';
import { States } from '../Interface/states';

@Injectable({
  providedIn: 'root',
})
export class OccupationAndRattingService {
  constructor() {}

  getOccupations(): Occupation[] {
    let occupationsList: Occupation[] = [
      { occupation: 'Cleaner', rating: 'Light Manual' },
      { occupation: 'Doctor', rating: 'Professional' },
      { occupation: 'Author', rating: 'White Collar' },
      { occupation: 'Farmer', rating: 'Heavy Manual' },
      { occupation: 'Mechanic', rating: 'Heavy Manual' },
      { occupation: 'Florist', rating: 'Light Manual' },
    ];

    return occupationsList;
  }

  getStates(): States[] {
    let statesList: States[] = [
      { stateName: 'State 1', stateCode:1},
      { stateName: 'State 2', stateCode:2}
    ];
    return statesList;
  }

  getRating(): Ratings[] {
    let ratingList: Ratings[] = [
      { rating: 'Professional', factor: 1.1 },
      { rating: 'White Collar', factor: 1.45 },
      { rating: 'Light Manual', factor: 1.7 },
      { rating: 'Heavy Manual', factor: 2.1 },
    ];
    return ratingList;
  }

  getRatingByOccupations(occ: string): number {
    let ratings = this.getRating();
    let occupations = this.getOccupations();

    let filterdRating = occupations.find((e) => e.occupation === occ);
    let filterd = ratings.find((e) => e.rating === filterdRating?.rating);
    return filterd?.rating != undefined ? filterd?.factor : 0;
  }
}
