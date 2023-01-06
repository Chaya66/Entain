import { ifError } from "assert";
import { RACING_CATEGORIES } from "../config/constants";

describe('Category Filters', () => {
 //1 it.skip('Insert test here');
  it('Uncheck Filters', () => {
    cy.visit('');
    
    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => 
        {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
          cy.get('[data-testid=category-filter-checkbox]').uncheck();                    
        })
      });
    })
  });
  
  it('Check Filters', () => { 
     cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
          cy.get('[data-testid=category-filter-checkbox]').uncheck();          
          if(cy.get('[data-testid=category-filter-checkbox]').should('be.not.checked')) 
          {
            cy.get('[data-testid=category-filter-checkbox]').check();
            
          }           
        })
      });
    })
  });
});
