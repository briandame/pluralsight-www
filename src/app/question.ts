export class Question {
  id: number;
  text: string;
  answer: number;
  distractors: number[];
  createdAt: Date;
  updatedAt: Date;
}