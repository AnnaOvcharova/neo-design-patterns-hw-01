import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  public borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }

    copy.setIsAvailable(false);
    reader.addCopy(copy);
    return true;
  }

  public returnBook(reader: Reader, copy: Copy): void {
    copy.setIsAvailable(true);
    reader.removeCopy(copy);
  }
}