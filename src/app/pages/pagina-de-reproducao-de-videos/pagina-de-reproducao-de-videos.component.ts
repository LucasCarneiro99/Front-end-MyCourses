import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-de-reproducao-de-videos',
  templateUrl: './pagina-de-reproducao-de-videos.component.html',
  styleUrls: ['./pagina-de-reproducao-de-videos.component.scss'],
})
export class PaginaDeReproducaoDeVideosComponent implements OnInit {
  videoId: any;
  videoParaInput: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.videoId = params['videoId'];
      this.videoParaInput = params['videoParaInput'];
      console.log('Video ID recebido:', this.videoId);
      console.log(this.videoParaInput);
    });
    this.loadVideo(this.videoId);
  }

  loadVideo(videoId: any) {
    // Verificar se o elemento existe antes de manipulá-lo
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      var iframeCode =
        '<iframe class = "w-100" style="height: 720px" src="https://www.youtube.com/embed/' +
        videoId +
        '" frameborder="0" allowfullscreen></iframe>';
      videoContainer.innerHTML = iframeCode;
    } else {
      console.error("Elemento 'video-container' não encontrado no DOM.");
    }
  }
}
