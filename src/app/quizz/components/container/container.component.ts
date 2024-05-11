import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Question } from '../../interfaces/questions.interface';
import { delay } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {

  public questions: Question[] = [];
  public questionIndex: number = 0;
  public currentQuestion!: Question;
  public isError: boolean = false;
  public hasStarted: boolean = false;
  public timeLeft: number = 10;
  public interval!: any;
  public feedbackMessage: string = "";

  constructor(
    private questionsService: QuizzService
  ) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
    this.currentQuestion = this.questions[0];
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        console.log("Log")
        this.feedbackMessage = "Te has quedado sin tiempo!";
        this.isError = true;
        this.hasStarted = false;
        this.timeLeft = 10;
        this.pauseTimer();
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  start() {
    this.hasStarted = true;
    this.feedbackMessage = "";
    this.startTimer();
  }

  getAnswer(answer: string) {
    if( this.hasStarted == false ) return;
    this.pauseTimer();
    this.timeLeft = 10;
    if( this.currentQuestion.answer == answer ) {
      this.isError = false;
      this.feedbackMessage = "Respuesta correcta!";
      this.questionIndex = this.questionIndex + 1;
      setTimeout(() => {
        this.feedbackMessage = "";
        this.currentQuestion = this.questions[this.questionIndex];
        this.startTimer();
        return;
      }, 3000);
      return;
    };
    this.isError = true;
    this.feedbackMessage = "Respuesta incorrecta!";
    this.hasStarted = false;
    this.questionIndex = 0;
    this.currentQuestion = this.questions[this.questionIndex];
    this.pauseTimer();
  }

}
