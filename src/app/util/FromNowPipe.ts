import {Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe {
  transform(value: any, args: Array<any>): string {
    return dataTransform(value);
  }
}
export const dataTransform = (value) => {
  moment.locale("pl")
  // console.log(moment().unix(), moment(new Date(1487970124), 'yyyyMMddHHmmssfff').unix());
  let diff = moment().unix() - moment(new Date(value * 1000), 'yyyyMMddHHmmssfff').unix();
  return moment.duration(diff * 1000, "milliseconds").humanize();
}

export var fromNowPipeInjectables: Array<any> = [
  FromNowPipe
];

