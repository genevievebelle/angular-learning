'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should display an input field', function() {
    browser.get('index.html');
    var input = ptor.findElement(protractor.By.className('input-lg '));
    expect(input.isDisplayed()).toBe(true);
  });

});
