import { Component } from '@angular/core';

interface Exercise {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  exercises: Exercise[] = [
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Back squad',
      description: 'Exercicio de agachamento voltado para forca'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Squad',
      description: 'Exercicio de agachamento voltado para forca'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Agachamento',
      description: 'Exercicio de agachamento voltado para forca'
    },
    {
      image: 'https://capitalavista.cappta.com.br/wp-content/uploads/2021/10/montar-aula-crossfit-5.jpg',
      title: 'Supino',
      description: 'Exercicio de agachamento voltado para forca'
    }
  ];

  searchText: string = '';
  filteredExercises: Exercise[] = this.exercises;

  filterList(): void {
    this.filteredExercises = this.exercises.filter(exercise =>
      exercise.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      exercise.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  checkInputLength(): void {
    this.filterList();
  }
}
