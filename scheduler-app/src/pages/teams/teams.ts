import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { TeamHomePage } from '../team-home/team-home';

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

  public teams = [
    {id:1, name:'Mumbai Indians'},
    {id:2, name:'Kings XI Punjab'},
    {id:3, name:'Chennai Superkings'},
    {id:4, name:'Pune Warriors'},
    {id:5, name:'Sunrisers Hyderabad'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  itemClicked($event,team)
  {
    this.navCtrl.push(TeamHomePage,team);
  }

}
