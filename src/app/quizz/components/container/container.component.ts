import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Question } from '../../interfaces/questions.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {

  public questions: Question[] = [];
  public questionIndex: number = 0;
  public currentQuestion!: Question;

  constructor(
    private questionsService: QuizzService
  ) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
    this.currentQuestion = this.questions[0];
  }

}
