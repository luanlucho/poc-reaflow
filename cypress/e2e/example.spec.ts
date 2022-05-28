describe("Home page", () => {
  it("send me to trade's good coding practices manifest on click", () => {
    cy.visit("/").get(".Intro__link").click();
  });
});

export {};
