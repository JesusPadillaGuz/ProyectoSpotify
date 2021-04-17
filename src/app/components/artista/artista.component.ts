import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  audio = '6F6t1c3J1JSV8FYVECOuZP';

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;

    this.router.params.subscribe( params => {
      this.getArtista(params.id);
      this.getTopTracks (params.id);
      console.log(params.id);
    });
  }

  getArtista(id: string){
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;

      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

  ngOnInit(): void {
  }

}
