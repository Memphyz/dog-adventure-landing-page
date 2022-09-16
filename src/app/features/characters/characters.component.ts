import { Component } from '@angular/core';

interface Characters {
  name: string,
  desc: string,
  icon: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  public data: Characters[] = [
    {
      name: 'Oscar',
      icon: 'oscar',
      desc: 'Um bravo guerreiro, que adora se avennturar e enfrentar desafios, <strong>Oscar Shiba!</strong> o maior guerreiro já visto!'
    },
    {
      name: 'Slime',
      icon: 'slime',
      desc: 'Yech!, aquela coisa gelatinosa tem um olho?! que coisa bizarra!'
    },
    {
      name: 'Golem',
      icon: 'golem',
      desc: 'Reze para não enfretar essa coisa! devido ao seu aspecto rochoso, quando visto de longe pode ser confundido com uma pedra normal, ao se aproximar, ele pode se sentir ameaçado, e quando isso acontece, sebo nas canelas!'
    },
    {
      name: 'Chest',
      icon: 'chest',
      desc: 'Oh não, agora corremos o risco de sermos engolidos ao abrir o bau errado! definitivamente não devemos abaixar a guarda durante a jornada!'
    },
    {
      name: 'Espectador',
      icon: 'espectador',
      desc: 'Uma criatura que adora te observar, é dificil escapar do seu campo de visão, ficar cara a cara com essa coisa deve ser arrepiante!'
    },
  ]
}
