/// <reference types="cypress" />

describe("Environment Connections", () => {
  it("Can access current environment connections", () => {
    cy.visit("/"); // This test will fail if we have no connection
    // So no assertion is needed.
  });
});