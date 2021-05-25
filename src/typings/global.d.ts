export declare global {
  interface Window {
    // Cypress exists when cypress is run for testing
    Cypress?: unknown
  }
}
