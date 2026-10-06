import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
  }

  public getDescription(): string {
    return `Physical book "${this._title}" by ${this._author.name} (${this._year})`;
  }
}
