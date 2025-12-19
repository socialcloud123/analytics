/**
 * Social Analytics MCP Server
 * Root entry point - re-exports the main server
 */

export { server } from './src/index.js';
export { InstagramClient } from './platforms/instagram/client.js';
export { FacebookClient } from './platforms/facebook/client.js';

// Re-export for convenience
export * from './src/tools.js';
export * from './src/prompts.js';
export * from './src/handlers.js';
