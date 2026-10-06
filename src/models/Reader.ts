import { Copy } from './Copy';

export class Reader {
  private _id: string;
  private _name: string;
  private _borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get borrowedCopies(): Copy[] {
    return [...this._borrowedCopies];
  }

  public addCopy(copy: Copy): void {
    this._borrowedCopies.push(copy);
  }

  public removeCopy(copy: Copy): void {
    this._borrowedCopies = this._borrowedCopies.filter((c) => c !== copy);
  }
}
