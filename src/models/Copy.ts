import { Book } from './Book';

export class Copy {
  private _book: Book;
  private _isAvailable: boolean;

  constructor(book: Book) {
    this._book = book;
    this._isAvailable = true;
  }

  public get book(): Book {
    return this._book;
  }

  public isCopyAvailable(): boolean {
    return this._isAvailable;
  }

  public setIsAvailable(status: boolean): void {
    this._isAvailable = status;
  }
}
