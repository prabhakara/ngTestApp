'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {
  beforeEach(function () {
    browser.get('/#/login');
  });

  /*beforeEach(function () {
    browser.get('/ngTestApp/#/login');
  });*/

  it('should redirect to /login when location hash is login', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  }); 

  it('should show the signin panel on page load', function() {
    expect($('[ng-hide=isLoggedIn]').isDisplayed()).toBeTruthy();
    expect($('[ng-show=isLoggedIn]').isDisplayed()).toBeFalsy();
  }); 

  it('Should not authenticate a user when the credentials do not match', function() {
    var email = element(by.model('email'));
    var password = element(by.model('password'));
    email.sendKeys('admin@app.com');
    password.sendKeys('invalid');
    element(by.css('.btn')).click().then(function () {
        expect($('[ng-hide=isLoggedIn]').isDisplayed()).toBeTruthy();
        expect($('[ng-show=isLoggedIn]').isDisplayed()).toBeFalsy();
    });
  }); 
  

  it('Should successfully authenticate a user when the credentials match ', function() {
    var email = element(by.model('email'));
    var password = element(by.model('password'));
    email.sendKeys('admin@app.com');
    password.sendKeys('1234');
    element(by.css('.btn')).click().then(function () {
        expect($('[ng-show=isLoggedIn]').isDisplayed()).toBeTruthy();
        expect($('[ng-hide=isLoggedIn]').isDisplayed()).toBeFalsy();
    });
  }); 

});