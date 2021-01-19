var form = document.querySelector('#search');

const process = async (searchString) => {
  const results = [];

  return await fetch('/search.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (var item in response.search) {
        const found = response.search[item].text.indexOf(searchString);

        if (found != -1) {
          results.push(response.search[item]);
        }
      }

      return results;
    });
};

form.addEventListener('submit', async function (e) {
  // don't navigate to that page. Stay put.
  e.preventDefault();

  // make search magic happen instead...
  const term = e.target.querySelector('#search-str');
  const results = await process(term.value);
  console.log(results);
});
