import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import {EliteApiProvider} from "../../providers/elite-api/elite-api";

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi:EliteApiProvider, private loadingController:LoadingController) {
  }

  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content:'Getting Teams...'
    });

    loader.present().then(()=>{
      this.eliteApi.getTournamentsData(this.navParams.data.id).subscribe(data => {
        this.teams = data.teams;
        loader.dismiss();
      });
    });
  }

  itemClicked($event,team)
  {
    this.navCtrl.push(TeamHomePage,team);
  }

}
