import { MilestonePage } from './app.po';

describe('milestone App', () => {
  let page: MilestonePage;

  beforeEach(() => {
    page = new MilestonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
