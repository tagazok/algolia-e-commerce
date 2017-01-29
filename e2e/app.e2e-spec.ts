import { Angular2AlgoliaPage } from './app.po';

describe('angular2-algolia App', function() {
  let page: Angular2AlgoliaPage;

  beforeEach(() => {
    page = new Angular2AlgoliaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
