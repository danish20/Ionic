import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import {EliteApiProvider} from "../../providers/elite-api/elite-api";
import {TeamHomePage} from "../team-home/team-home";
import {UserSettingsProvider} from "../../providers/user-settings/user-settings";

/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  public favTeams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loadingController:LoadingController, private eliteApi:EliteApiProvider, private userSettings:UserSettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  ionViewDidEnter()
  {
    this.favTeams = this.userSettings.getAllFavorites();
  }

  goToTournaments()
  {
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentsData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
  }
}
