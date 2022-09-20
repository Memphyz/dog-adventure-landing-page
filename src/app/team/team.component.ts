import { Component } from '@angular/core';

interface IMember {
  name: string;
  function: string;
  icon: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  public readonly members: IMember[] = [
    {
      name: 'Brenda Aryelle Silva',
      function: 'Líder do time de Arte, Game designer e Map Maker',
      icon: 'f_avatar_1'
    },
    {
      name: 'Felipe Moresqui',
      function: 'Líder do time de Designer, Game designer e Map Maker',
      icon: 'm_avatar_1'
    },
    {
      name: 'Kaue Alves Pereira',
      function: 'Programador',
      icon: 'm_avatar_2'
    },
    {
      name: 'Lucas Alves Ribeiro',
      function: 'Subgerente, Programador',
      icon: 'm_avatar_3'
    },
    {
      name: 'Pedro Dalla de Oliveira',
      function: 'Programador',
      icon: 'm_avatar_4'
    },
    {
      name: 'Vinicius Zapalá dos Santos',
      function: 'Gerente do projeto, Líder do time de Programação, Programador',
      icon: 'm_avatar_5'
    },
  ].sort();

}
