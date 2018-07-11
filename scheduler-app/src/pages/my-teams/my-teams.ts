import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import {EliteApiProvider} from "../../providers/elite-api/elite-api";
import {TeamHomePage} from "../team-home/team-home";

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

  public favTeams = [
    {
      team: {id: 822, name: 'HC Elite', coach: 'Michelotti'},
      tournamentName: 'March Madness Tournament',
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63'
    },
    {
      team: { id: 812, name: 'Baltimore Stars', coach: 'James'},
      tournamentName: 'March Madness Tournament',
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63'
    },
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loadingController:LoadingController, private eliteApi:EliteApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
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
