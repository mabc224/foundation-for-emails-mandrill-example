module.exports = {
  "link": "{{link}}",
  "logo": "{{email}}",
  "condition": [
      "{{#each items}}",
      "<li>",
      "{{agree_button}}",
      "</li>",
      "{{/each}}"
  ].join('\n')
}