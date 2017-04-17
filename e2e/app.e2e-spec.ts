import { GametradeClientPage } from './app.po';

describe('gametrade-client App', () => {
  let page: GametradeClientPage;

  beforeEach(() => {
    page = new GametradeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
