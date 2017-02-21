import { ZrzutkaNaAutobusPage } from './app.po';

describe('zrzutka-na-autobus App', () => {
  let page: ZrzutkaNaAutobusPage;

  beforeEach(() => {
    page = new ZrzutkaNaAutobusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
