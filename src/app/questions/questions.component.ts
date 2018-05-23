import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Page } from '../page'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  questions: Question[];
  page: Page;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  	this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestionsPage()
		.subscribe(page => this.page = page);
  }
}
