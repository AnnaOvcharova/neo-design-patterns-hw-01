import { Author } from './Author';

export abstract class AbstractBook {
  protected _title: string;
  protected _year: number;
  protected _author: Author;

  constructor(title: string, year: number, author: Author) {
    this._title = title;
    this._year = year;
    this._author = author;
    this._author.addBook(this);
  }

  public get title(): string {
    return this._title;
  }

  public get year(): number {
    return this._year;
  }

  public get author(): Author {
    return this._author;
  }

  public abstract getDescription(): string;
}