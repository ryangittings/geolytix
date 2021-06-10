const form = document.querySelector('#search');
const term = document.querySelector('#search-str');
const resultList = document.querySelector('#results');

const search = () => {
  let timeout = null;

  const process = async (searchString) => {
    const lowercase = searchString.toLowerCase();

    const res = await fetch('/api/search', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        term: lowercase,
      }),
    });

    return await res.json();
  };

  const fireSearch = async () => {
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
    fireSearch();
  });

  term.addEventListener('keyup', function (e) {
    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
      fireSearch();
    }, 200);
  });
};

search();
