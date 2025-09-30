import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEndpoint1(): string {
    return 'congratulations you have accessed endpoint 1';
  }

  getJSONResponse(): any {
    return {'message': 'congratulations now you are receiving a JSON response'};
  }

  postRequest(body: any): any {
    return body;
  }
}
