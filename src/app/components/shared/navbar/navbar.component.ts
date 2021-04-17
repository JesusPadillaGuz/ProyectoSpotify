import { SpotifyService } from './../../../services/spotify.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 // @Input() items: any[] = [];
 artistas: any[] = [];
 bandera: boolean;
 bandera2: boolean;
 artistaId: string;
  constructor(private router: Router, private spotify: SpotifyService) {
  }

  buscar(termino: string){
    this.bandera = true;
    this.bandera2 = true;
    console.log(termino);
    this.spotify.getArtistas(termino).subscribe ( (data: any) => {
    console.log(data);
    this.bandera = false;
    if (data[0].name === termino ){
     console.log(1);
     this.artistaId = data[0].id;
     this.bandera2 = false;
     this.router.navigate(['/artist', this.artistaId]);
    }
    else{
      alert('Artista no encontrado');
    }
   });
  }

  ngOnInit(): void {
  }

}
