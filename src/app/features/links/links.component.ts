import { Component } from '@angular/core';

interface ILink {
  title: string;
  desc: string;
  link: string;
  icon: 'docs' | 'devlog' | 'youtube' | 'publi' | 'repo';
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  public get window(): Window {
    return window;
  }

  public items: ILink[] = [
    {
      title: 'Documentações',
      desc: 'Repositório do Github contento documentos referentes ao jogo.',
      link: 'https://github.com/ViniZap4/Vortex-Notation',
      icon: 'docs'
    },
    {
      title: 'Devlogs',
      desc: 'Informações sobre mecânicas e historia do jogo, comentários de jogadores, discussões, etc.',
      link: 'https://github.com/ViniZap4/Vortex-Notation/blob/main/notation/DevLogs/DevLogs.md',
      icon: 'devlog'
    },
    {
      title: 'Youtube',
      desc: 'Canal do projeto.',
      link: 'https://www.youtube.com/channel/UCvZFSOUdqKeCVwZQ7Bp34Xw',
      icon: 'youtube'
    },
    {
      title: 'Publicação',
      desc: 'Plataforma em que o jogo será lançado.',
      link: 'https://vinizap.itch.io/dog-adventure',
      icon: 'publi'
    },
    {
      title: 'Repositório',
      desc: 'Repositório que contém as versões e código do jogo.',
      link: 'https://github.com/ViniZap4/dog-adventure ',
      icon: 'repo'
    }
  ]

}
