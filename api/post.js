const fetch = require('isomorphic-fetch');

module.exports = async (req, res) => {
  const { body } = req;
  const { formID } = body;

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/7361526/${formID}`;

  const fields = Object.keys(body)
    .flatMap((key) => {
      if (key !== 'formID') {
        return {
          name: key,
          value: body[key],
        };
      }
    })
    .filter(Boolean);

  const payload = {
    fields,
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

  const json = await data.json();
  // console.log(json);

  res.writeHead(302, {
    Location: '/thanks/',
  });

  return res.end();
};
