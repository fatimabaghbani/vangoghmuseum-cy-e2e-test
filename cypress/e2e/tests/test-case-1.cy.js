import HomePage from "../pages/homePage";
import CollectionPage from "../pages/collectionPage";

describe("visit collection page ", () => {
  it("should go to collection page by clicking on Ontdek de collectie link", () => {
    HomePage.open();
    HomePage.goToCollectionPage();
    cy.url().should("eq", CollectionPage.pageUrl);
    CollectionPage.element.headingOne().should("have.text", "Collectie");
    CollectionPage.element.listFiltersBox().should("to.be.visible");
    CollectionPage.element.resultBox().should("to.be.visible");
    CollectionPage.element.listContainer().should("to.be.visible");
  });
});
