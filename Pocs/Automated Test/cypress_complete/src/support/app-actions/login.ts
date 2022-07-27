/**
 * asd
 */
export const login = (email: string, password: string): void => {
  
  const elementIds = {
    emailInput: '#inputEmail',
    passwordInput: '#inputPassword',
    loginbutton: '[type="submit"]'
  };

  console.log(elementIds);

  //cy.visit("/login");
  cy.get(elementIds.emailInput)
    .focus()
    .type(email);
  
  cy.get(elementIds.passwordInput)
    .focus()
    .type(password);
  
  cy.intercept("POST", "oauth/token").as("loginCalls");
      
  cy.get(elementIds.loginbutton).click();

  cy.wait("@loginCalls");

  cy.request({
    method: 'POST',
    url: 'https://apiurl.com/oauth/token',
    body: {
      "grant_type": "password",
      "username": "email",
      "audience": "https://apiurl.com/",
      "client_id": "xxxxxxx",
      "client_secret": "yyyyyyy",
      "password": "xxxxxx",
      "scope": "offline_access profile email openid user"
    }
  })
    .its('body.access_token').should('not.be.empty')
    
};