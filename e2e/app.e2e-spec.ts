import { MerpesProjectPage } from './app.po';

describe('merpes-project App', () => {
  let page: MerpesProjectPage;

  beforeEach(() => {
    page = new MerpesProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
