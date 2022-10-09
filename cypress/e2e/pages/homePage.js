class HomePage {
  pageUrl = "https://www.vangoghmuseum.nl";
  // page elements
  element = {
    collectionPageLink: () => cy.contains("Ontdek de collectie"),
  };
  // page methods
  open() {
    cy.visit(this.pageUrl);
  }
  goToCollectionPage() {
    this.element.collectionPageLink().click();
  }
}
module.exports = new HomePage();
