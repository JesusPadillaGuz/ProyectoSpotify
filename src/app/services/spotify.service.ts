import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery(query: string){
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({Authorization: 'Bearer BQBisVaIIsvFR8a-LUjs94PXeZT--0NN_NK_qdMuDMZnMm6mIDwhB1xY6eWCoOkh4Jk3TbDis8RO5cKIk46FVYW7HpgYsjOBjvD3zd3FFCv-TJux2R1p-52r_G_picy-tJggC_pz5DZOFrR5-36DK-H9CRz6TZQ'});
     return this.http.get(url, { headers });
    }

   getNewRelease(){
     return this.getQuery('browse/new-releases')
     .pipe( map ( (data: any) => data.albums.items ));
   }

   getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
    .pipe( map ( (data: any) => data.artists.items ));
   }

   getArtista(id: string){
    return this.getQuery(`artists/${id}`);
    // return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
    // .pipe( map ( (data: any) => data.artists.items ));
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map ( (data: any) => data.tracks));
  }
}
