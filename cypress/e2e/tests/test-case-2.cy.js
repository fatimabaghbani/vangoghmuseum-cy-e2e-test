import CollectionPage from "../pages/collectionPage";

describe("search", () => {
  it("should get search results by doing search using search input and button", () => {
    CollectionPage.open();
    CollectionPage.search("Het Gele Huis");
    CollectionPage.getResultCount().then((count) =>
      expect(count).to.be.greaterThan(700)
    );
  });
});
