/// <reference types="cypress" />
import { login } from "@root/src/support/app-actions/login";

describe('Login', () => {

  it('test name | test description', () => {
    cy.visit('/login');
    
    login('asd', 'xxxxx');
    
  });
});