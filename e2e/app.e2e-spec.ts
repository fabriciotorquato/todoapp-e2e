import { browser} from 'protractor';

describe('todoapp App', () => {

  beforeEach(function() {
    browser.get('http://localhost:4200');
    browser.driver.manage().window().maximize();
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Todoapp');
  });
});
