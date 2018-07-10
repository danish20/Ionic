///<reference path="../../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApiProvider {

  private baseUrl = "https://elite-schedule-database-fae1d.firebaseio.com/";
  private currentTourney:any={};

  constructor(public http: Http) {
  }

  getTournaments()
  {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res=>resolve(res.json()));
    })
  }

  getTournamentsData(TournamentId):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tournaments-data/${TournamentId}.json`).map(response=>
    {
      this.currentTourney = response.json();
      return this.currentTourney;
    });
  }

  getCurrentTourney()
  {
    return this.currentTourney;
  }

}
