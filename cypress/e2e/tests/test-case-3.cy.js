import CollectionPage from "../pages/collectionPage";
import ItemPage from "../pages/itemPage";

describe("item's page", () => {
  it("should open item's page by clicking on an items in collection page", () => {
    CollectionPage.open();
    CollectionPage.search("Het Gele Huis");
    cy.wait(500);
    CollectionPage.element.firstResultItem().click();
    cy.url().should("include", "/nl/collectie/s0032V1962");
    ItemPage.element.headingOne().should("contain.text", "Het Gele Huis");
    ItemPage.element.accrodionButton(0).should("have.text", "Objectgegevens");
    ItemPage.openAccrodionTab(0);
    ItemPage.element
      .definitionLabel()
      .contains("F-nummer")
      .should("to.be.visible");

    ItemPage.element
      .definitionValue()
      .contains("F0464")
      .should("to.be.visible");

    ItemPage.element
      .definitionLabel()
      .contains("JH-nummer")
      .should("be.visible");

    ItemPage.element
      .definitionValue()
      .contains("JH1589")
      .should("to.be.visible");

    ItemPage.element
      .definitionLabel()
      .contains("Inventarisnummer")
      .should("be.visible");

    ItemPage.element
      .definitionValue()
      .contains("s0032V1962")
      .should("to.be.visible");
  });
});
