class ItemPage {
  // page elements
  element = {
    headingOne: () => cy.get("h1.art-object-page-content-title"),
    accrodionButton: (item = 0) => cy.get(".accordion-item").eq(item),
    definitionLabel: () => cy.get(".definition-list-item-label"),
    definitionValue: () => cy.get(".definition-list-item-value"),
  };
  // page methods
  openAccrodionTab(item) {
    this.element.accrodionButton(item).click();
  }
}
module.exports = new ItemPage();
