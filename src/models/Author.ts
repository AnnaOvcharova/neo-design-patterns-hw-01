import { AbstractBook } from './AbstractBook';

export class Author {
  private _name: string;
  private _books: AbstractBook[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public get books(): AbstractBook[] {
    return [...this._books];
  }

  public addBook(book: AbstractBook): void {
    if (!this._books.includes(book)) {
      this._books.push(book);
    }
  }
}
