import { Question } from './question';

export const QUESTIONS: Question[] = [
  { id: 11, text: 'What is 1 + 1?', answer: 2, distractors: [3,4,5,6], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 12, text: 'What is 1 - 1?', answer: 0, distractors: [1,6,12,14], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 13, text: 'What is 1 * 1?', answer: 2, distractors: [3,4,5,6], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 14, text: 'What is 1 / 1?', answer: 1, distractors: [10,25,17,321], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 15, text: 'What is 2 + 2?', answer: 4, distractors: [1,2,5], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 15, text: 'What is 2 - 2?', answer: 0, distractors: [7,8,9], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 17, text: 'What is 2 * 2?', answer: 4, distractors: [12,43,2,19], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') },
  { id: 18, text: 'What is 2 / 2?', answer: 1, distractors: [3,4,5,6], createdAt: new Date('2018-05-01'), updatedAt: new Date('2018-05-01') }
];