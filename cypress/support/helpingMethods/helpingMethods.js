export default class helpers{
  navigateToPath(path) {
    const url = `/${path}`; 
    cy.visit(url);
  }
  click(locator){
    cy.get(locator).click()
  }
  type(locator,inputText){
    cy.get(locator).clear().type(inputText)
  }
  verifyTextPresent(locator,PassRequiredText){
    cy.get(locator).invoke('text').then((text)=>{
      expect(text).to.equal(PassRequiredText)
    })
  }
  verifyTextPresentIndexing(locator,PassRequiredText,index){
    cy.get(locator).eq(index).invoke('text').then((text)=>{
      expect(text).to.equal(PassRequiredText)
    })
  }
  verifyElementVisiblity(locator){
    cy.get(locator).should('be.visible')
  }
  shouldBeDisabled(locator){
    cy.get(locator).should('be.disabled');
  }
  typeIndex(locator,index,text){
    cy.get(locator).eq(index).type(text)
  }
  clickWithIndex(locator,index){
    cy.get(locator).eq(index).click()
  }
  verifyElementNotVisible(locator){
    cy.get(locator).should('not.be.visible');
  }
}

