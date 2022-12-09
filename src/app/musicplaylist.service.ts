import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MusicplaylistService {

 constructor(private http:HttpClient) {}

    getPlaylist() {
        return this.http.get('http://18.223.29.55:8000/playlist/getallmusic');
    }
    addSongTOplaylist(data:any){
       return this.http.post('http://18.223.29.55:8000/playlist/create',data);
    }
    updateSongToPlaylist(id:any,data:any){
      return this.http.put('http://18.223.29.55:8000/playlist/update/'+id,data);
    }
    deleteSongDB(id:any){
      return this.http.delete('http://18.223.29.55:8000/playlist/delete/'+id);
    }
    createSongDB(data:any){
      return this.http.post('http://18.223.29.55:8000/playlist/create',data);
    }


}
