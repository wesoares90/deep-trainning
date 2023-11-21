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

  btnMobile = false;

  menu: Menu[] = [
    {
      title: 'Início',
      link:'/'
    },
    {
      title: 'Treinos',
      link:'/grupo-muscular'
    },
    {
      title: 'Nossa equipe',
      link:'/ranking'
    },
    {
      title: 'Contrate um personal',
      link:'/treinos'
    }
  ];

  @Input() active = '';
  @Input() btnback =  '';

}
