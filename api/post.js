const fetch = require('isomorphic-fetch');

module.exports = async (req, res) => {
  const { body } = req;

  // Create the new request
  var url = 'https://api.hsforms.com/submissions/v3/integration/submit/7361526/75c9a40b-490c-4e20-9fa9-ffccf3cf0d40';

  // Example request JSON:
  var payload = {
    fields: Object.keys(body).map((key) => ({
      name: key,
      value: body[key],
    })),
    legalConsentOptions: {
      // Include this object when GDPR options are enabled
      consent: {
        consentToProcess: true,
        text: 'I agree to allow Geolytix to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: 'I agree to receive marketing communications.',
          },
        ],
      },
    },
  };

  const data = await fetch(url, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  await data.json();

  res.writeHead(302, {
    Location: '/thanks/',
  });

  return res.end();
};
