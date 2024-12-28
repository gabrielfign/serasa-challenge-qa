const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    trelloApiKey: 'cc81d8096938ceb74c98ef4c9e79f5e1',
    trelloApiToken: '9cae375151fbb45346cc427c81d46997fafa6497a34918ff4fc5e48744d29530',
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://api.trello.com/',
  },
});
