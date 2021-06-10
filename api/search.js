const lunrjs = require('lunr');
const fetch = require('isomorphic-fetch');

module.exports = async (req, res) => {
  const {
    body: { term },
  } = req;

  if (!term) {
    res.end('No term specified');
  }

  const result = await fetch(`${process.env.TEST_URL}/search.json`);
  const data = await result.json();

  const createIndex = (posts) => {
    return lunrjs(function () {
      this.ref('id');
      this.field('title');
      this.field('content');
      this.field('date');

      posts.forEach((p, idx) => {
        p.id = idx;
        this.add(p);
      });
    });
  };

  const index = createIndex(data);
  const results = index.search(term);

  results.forEach((r) => {
    r.title = data[r.ref].title;
    r.excerpt = data[r.ref].excerpt;
    r.content = data[r.ref].content;
    r.date = data[r.ref].date;
    r.url = data[r.ref].url;

    delete r.matchData;
    delete r.ref;
  });

  return res.send(JSON.stringify(results));
};
