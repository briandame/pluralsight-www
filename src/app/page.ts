import {Question} from './question';
import {Pageable} from './pageable'
import {Sort} from './sort'

export class Page {
  content: Question[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: Sort;
  numberOfElements: number;
  size: number;
  number: number;
}