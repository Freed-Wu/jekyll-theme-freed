---
layout: null
---
document.addEventListener("DOMContentLoaded", function () {
  SimpleJekyllSearch({
    json: '/assets/json/search.json',
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container')
  });
});
