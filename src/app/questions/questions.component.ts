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
  
  page: Page;
  question: Question = new Question();

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  	this.getQuestionsPage(0, 5000);
  }

  getQuestionsPage(pageNumber: number, size: number): void {
    console.log("Page number: " + pageNumber + ", size: " + size)
    this.questionService.getQuestionsPage(pageNumber, size)
		  .subscribe(page => this.page = page);
  }

  add(question: string, answer: number, distractors: string): void {
    question = question.trim();
    distractors = distractors.trim();

    if (!question || !answer || !distractors) { return; }

    this.question.question = question;
    this.question.answer = answer;
    this.question.distractors = distractors;

    this.questionService.addQuestion(this.question)
      .subscribe(question => {
         this.page.content.push(question);
      });
  }

  delete(question: Question): void {
    this.page.content = this.page.content.filter(q => q !== question);
    this.questionService.deleteQuestion(question).subscribe();
  }
}
