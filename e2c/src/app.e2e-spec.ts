import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('People Manager App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to People Manager!');
  });

  it('should display people list', () => {
    page.navigateTo();
    const peopleList = element.all(by.css('.people-list-item'));
    expect(peopleList.count()).toBeGreaterThan(0);
  });

  it('should navigate to login page', () => {
    element(by.css('.login-button')).click();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should log in successfully', () => {
    element(by.css('input[name="email"]')).sendKeys('admin@example.com');
    element(by.css('input[name="password"]')).sendKeys('password123');
    element(by.css('.submit-button')).click();
    expect(browser.getCurrentUrl()).toContain('/people');
  });

  it('should add a new person', () => {
    element(by.css('.add-person-button')).click();
    element(by.css('input[name="firstName"]')).sendKeys('John');
    element(by.css('input[name="lastName"]')).sendKeys('Doe');
    element(by.css('.save-button')).click();
    const peopleList = element.all(by.css('.people-list-item'));
    expect(peopleList.count()).toBeGreaterThan(0);
  });
});
