import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EliteApiProvider} from "../../providers/elite-api/elite-api";
import * as _ from 'lodash';

/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {

  public allStandings: any[];
  public standings: any[];
  public team:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi:EliteApiProvider) {
  }

  ionViewDidLoad() {

    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = _.chain(this.standings).groupBy('division').toPairs().map(item => _.zipObject(['divisionName', 'divisionStandings'],item)).value();

    console.log("All Standings",this.allStandings);

    console.log('ionViewDidLoad StandingsPage');
  }

}
