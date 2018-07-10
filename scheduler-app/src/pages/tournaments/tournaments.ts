import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import {EliteApiProvider} from "../../providers/elite-api/elite-api";


@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  public tournaments:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi:EliteApiProvider,
    public loadingController:LoadingController) {
  }

  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content:'Getting Tournaments...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data =>
      {
        this.tournaments=data;
        loader.dismiss();
      });
    });


  }

  itemClicked($event,tournament)
  {
    this.navCtrl.push(TeamsPage,tournament);
  }

}
