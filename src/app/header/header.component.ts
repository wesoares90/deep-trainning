import { Component, Input} from '@angular/core';

interface Menu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu: Menu[] = [
    {
      title: 'Home',
      link:'/'
    },
    {
      title: 'Exercicíos',
      link:'/lista-de-exercicios'
    },
    {
      title: 'Ranking',
      link:'/ranking'
    },
    {
      title: 'Treinos',
      link:'/treinos'
    }
  ];

  @Input() active = '';

}
