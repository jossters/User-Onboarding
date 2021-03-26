describe('My First Test',() => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
const nameInput = () => cy.get('input[name="name"]');
const emailInput = () => cy.get('input[name="email"]');
const passInput = () => cy.get('input[name="password"]');
const termInput = () => cy.get('input[name="terms"]');
const submitBtn = () => cy.get('#submitBtn');

it("all element on app are showing", () => {
  cy.get('input[name="0000"]').should("not.exist");
  nameInput().should("exist");
  emailInput().should("exist");
  passInput().should("exist");
  termInput().should("exist");
  submitBtn().should("exist");
});
it("can type into the inputs", () => {
  nameInput()
    .should("have.value", "")
    .type("Johnny")
    .should("have.value", "Johnny");

  emailInput()
    .should("have.value", "")
    .type("Johnny@gmail.com")
    .should("have.value", "Johnny@gmail.com");

  passInput()
    .should("have.value", "")
    .type("12345")
    .should("have.value", "12345");

  termInput()
    .check()  
})
it("submit button should be disabled when blank ", () => {
  nameInput().should("have.value", "")
  emailInput().should("have.value", "")
  passInput().should("have.value", "") 
  termInput().uncheck()
  submitBtn().should("be.disabled");          
})
it("submit button should be enabled until all filled", () => {
  termInput().check()
  submitBtn().should("be.disabled");
  passInput()
    .type("54321")
    .should("have.value", "54321")   
  submitBtn().should("be.disabled");
  emailInput()
    .type("ynnhoj@liamg.moc")
    .should("have.value", "ynnhoj@liamg.moc") 
  submitBtn().should("be.disabled");
  nameInput()
    .type("ynnhoj")
    .should("have.value", "ynnhoj")
  submitBtn().should("not.be.disabled")
})

it("can submit new user", () => {
  
  nameInput().type("Johnny");
  emailInput().type("Johnny@gmail.com");
  passInput().type("12345");
  termInput().check()
  submitBtn().click();
  cy.get(".user");
  cy.contains("Joh (0)").should("not.exist");
  cy.contains("Johnny Johnny@gmail.com").should("exist");
})
});