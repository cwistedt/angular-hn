import { Angular2Hn2Page } from './app.po';

describe('angular2-hn2 App', () => {
  let page: Angular2Hn2Page;

  beforeEach(() => {
    page = new Angular2Hn2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
