import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
  private _url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this._url = url;
  }

  public get url(): string {
    return this._url;
  }

  public getDescription(): string {
    return `E-book "${this._title}" by ${this._author.name} (${this._year}) - Available at: <${this._url}>`;
  }
}