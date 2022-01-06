module.exports = {
  helpers: {
    raw: function (options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js + Netlify CMS project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  skipInterpolation: [
    "**/*.vue",
    "app.html"
  ],
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
