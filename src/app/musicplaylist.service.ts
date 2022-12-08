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
        return this.http.get('/api/playlist/getallmusic');
    }
    addSongTOplaylist(data:any){
       return this.http.post('/api/playlist/create',data);
    }
    updateSongToPlaylist(id:any,data:any){
      return this.http.put('/api/playlist/update/'+id,data);
    }
    deleteSongDB(id:any){
      return this.http.delete('/api/playlist/delete/'+id);
    }
    createSongDB(data:any){
      return this.http.post('/api/playlist/create',data);
    }


}
