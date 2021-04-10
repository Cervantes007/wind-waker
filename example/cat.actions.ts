import { Action, Input, useService, Headers } from '../src';
import { b } from './pipes';
import { CatService } from './cat.service';

export class CatActions {
  catService = useService(CatService);

  @Action(b)
  async getCats(@Input() body) {
    return body;
  }

  @Action()
  async getCat(@Input('title') input: string) {
    return input;
  }
}
