import * as moment from "moment";
describe('listingAction', () => {

  it('should have a single passing test', (done) => {
    'A'.should.eql('A');

    let eventTime: number = 1366549200;
    let currentTime: number = 1366547400;
    let leftTime: number = eventTime - currentTime;
    let duration = moment.duration(leftTime, 'seconds');
    let interval = 100;
    let loop = 0;

    setInterval(function () {
      duration = moment.duration(duration.asSeconds() - 1, 'seconds');
      loop++;
      if (loop == 5) {
        done()
      }
    }, interval);

  })
});
