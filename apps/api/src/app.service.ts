import { Injectable } from '@nestjs/common';
import { add } from '@autopark/sample-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + add(1, 5);
  }
}
