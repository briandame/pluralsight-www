import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Page } from '../page'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  page: Page;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestionsPage();
  }

  getQuestionsPage(): void {
    this.questionService.getQuestionsPage(0, 8)
      .subscribe(page => this.page = page);
  }
}