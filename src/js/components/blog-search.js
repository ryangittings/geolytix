const form = document.querySelector('#search');
const term = document.querySelector('#search-str');
const resultList = document.querySelector('#results');

const process = async (searchString) => {
  const results = [];

  return await fetch('/search.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      response.search.forEach((item) => {
        const found = item.text.indexOf(searchString);

        if (found != -1) {
          results.push(item);
        }
      });

      return results;
    });
};

const search = async () => {
  if (term.value.length == 0) {
    resultList.innerHTML = '';
    return;
  }

  const results = await process(term.value);
  resultList.innerHTML = '';

  if (results.length > 0) {
    results.forEach((result) => {
      const e = document.createElement('li');
      e.classList = 'search-result';
      e.innerHTML = `<a href="${result.url}">${result.title}</a>`;

      resultList.appendChild(e);
    });
  } else {
    const e = document.createElement('li');
    e.classList = 'search-result';
    e.innerHTML = `<a href="#">No results.</a>`;

    resultList.appendChild(e);
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  search();
});

term.addEventListener('input', function (e) {
  search();
});

search();
