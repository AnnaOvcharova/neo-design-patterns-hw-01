import { Author } from './Author';
import { AbstractBook } from './AbstractBook';
import { Copy } from './Copy';
import { Reader } from './Reader';

export class Library {
  private _authors: Author[] = [];
  private _books: AbstractBook[] = [];
  private _copies: Copy[] = [];
  private _readers: Reader[] = [];

  public addAuthor(author: Author): void {
    if (!this._authors.includes(author)) {
      this._authors.push(author);
    }
  }

  public addBook(book: AbstractBook): void {
    if (!this._books.includes(book)) {
      this._books.push(book);
    }
  }

  public addCopy(copy: Copy): void {
    this._copies.push(copy);
  }

  public addReader(reader: Reader): void {
    if (!this._readers.includes(reader)) {
      this._readers.push(reader);
    }
  }

  public getAvailableCopies(): Copy[] {
    return this._copies.filter((copy) => copy.isCopyAvailable());
  }

  public findBooksByAuthor(author: Author): AbstractBook[] {
    return this._books.filter((book) => book.author === author);
  }
}
