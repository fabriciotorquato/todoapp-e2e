import { browser, element, by } from "protractor";

describe("Kanban app", () => {
  beforeEach(() => {
    browser.get("http://localhost:4200");
    browser.driver
      .manage()
      .window()
      .maximize();
  });

  it("SHOULD show title of page WHEN opening app", () => {
    expect(browser.getTitle()).toEqual("Kanban app");
  });

  it("SHOULD show error message WHEN submitting a submit with no information in the fields", () => {
    element(by.id("btn_submit")).click();
    var alert = element(by.id("div_alert")).getWebElement();
    expect(alert.getText()).toEqual("Invalid form");
  });

  it('SHOULD delete all form fields WHEN the data is correctly sent',function(){
    element(by.id('todo-title')).sendKeys("Protractor Tilte");
    element(by.id('todo-description')).sendKeys("Protractor Description");
    element(by.id('todo-due-date')).sendKeys("Protractor Date");

    element(by.id("btn_submit")).click();

    expect(element(by.id('todo-title')).getText()).toEqual("");
    expect(element(by.id('todo-description')).getText()).toEqual("");
    expect(element(by.id('todo-due-date')).getText()).toEqual("");
  });

});
