import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Exercise {
  image: string;
  title: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  exerciseGroupList: Exercise[] = [];
  allExercisesList: Exercise[] = [
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Supino reto com barra',
      description: '',
      type: 'peito'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Supino inclinado com barra',
      description: '',
      type: 'peito'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Supino declinado com barra',
      description: '',
      type: 'peito'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Crossover',
      description: '',
      type: 'peito'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Pack Deck',
      description: '',
      type: 'peito'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Pullover',
      description: '',
      type: 'costa'
    }
  ];



  filterList(): void {
    console.log('oi')
    this.filteredExercises = this.exerciseGroupList.filter(element =>
      element.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      element.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      element.type.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  checkInputLength(): void {
    this.filterList();
  }

  searchText: string = '';
  filteredExercises: Exercise[] = [];
  id:any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id === 'todos'){
      this.filteredExercises = this.allExercisesList;  
      this.exerciseGroupList = this.allExercisesList;  
    }
    else{
      this.allExercisesList.forEach(element => {  
        if (this.id === element.type) {
          console.log(this.id, element.type) 
          this.filteredExercises.push(element);  
          this.exerciseGroupList.push(element);        
        }
      });  
    }
  
    
  }

}
