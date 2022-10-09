class CollectionPage {
  pageUrl = "https://www.vangoghmuseum.nl/nl/collectie";
  // page elements
  element = {
    headingOne: () => cy.get("h1.page-header-heading"),
    listFiltersBox: () => cy.get(".list-filters"),
    resultBox: () => cy.get(".collection-art-object-list-results"),
    listContainer: () => cy.get(".collection-art-object-list"),
    searchInput: () => cy.get(".search-field-input"),
    searchButton: () => cy.get(".search-field-search-button"),
    resultCount: () => cy.get(".results"),
    firstResultItem: () => cy.get(".collection-art-object-list-item").first(),
  };
  open() {
    cy.visit(this.pageUrl);
  }
  search(value) {
    cy.wait(1000);
    this.element
      .searchInput()
      .type(value, { delay: 100 })
      .should("have.value", value);
    this.element.searchButton().click();
  }
  getResultCount() {
    return this.element
      .resultCount()
      .invoke("text")
      .then((text) => Number(text));
  }
}
module.exports = new CollectionPage();
