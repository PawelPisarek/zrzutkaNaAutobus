import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AppActions {
  static LOAD_DATA = 'LOAD_DATA';
  static POST_DATA = 'POST_DATA';

  loadData() {
    return {
      type: AppActions.LOAD_DATA
    }
  }
  postData() {
    return {
      type: AppActions.POST_DATA
    }
  }
}
