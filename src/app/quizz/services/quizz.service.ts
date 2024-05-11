import { Injectable } from '@angular/core';
import { questions } from '../questions'

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private _questions = questions;

  constructor() { }

  getQuestions() {
    return {...this._questions}
  }
}
