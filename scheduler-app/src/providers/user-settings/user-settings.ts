import { Injectable } from '@angular/core';
import { Storage} from "@ionic/storage";

@Injectable()
export class UserSettingsProvider {

  constructor(private storage:Storage) {
  }

  favoriteTeam(team,tournamentId,tournamentName)
  {
    let item = {team:team, tournamentId:tournamentId, tournamentName:tournamentName};
    this.storage.set(team.id.toString(), JSON.stringify(item));
  }

  unfavoriteTeam(team)
  {
    this.storage.remove(team.id.toString());
  }

  isFavorite(teamId:string) : Promise<boolean>
  {
    return this.storage.get(teamId).then(value => value?true:false);
  }

  getAllFavorites()
  {
    let result = [];
    this.storage.forEach(data=>{
      result.push(JSON.parse(data));
    });
    return result;
  }

}
