var request = require("request");
var _ = require("lodash");

module.exports = {
  getAlbums: function (req, res) {
    var url = getUrl(req.query);
    if (!url) {
      res.status(400);
      res.send("Bad request. Please check the query params and try again.");
      return;
    }
    request.get(url, null, (err, response, body) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else if (response.statusCode == 200) {
        res.send(processResult(body));
      } else {
        res.status(500);
        res.send("Internal server error: " + body);
      }
    });
  },
};

/**
 *
 * @param {*} query
 * @returns
 */
function getUrl(query) {
  if (!query || !query.search) return null;
  let url = "https://itunes.apple.com/search";
  url += `?term=${query.search}&entity=album`;
  if (query.limit) {
    url += `&limit=${query.limit}`;
  } else {
    url += `&limit=1000}`;
  }
  return url;
}

/**
 * It removes the duplicates from the server response
 * @param {*} body
 * @returns
 */
function processResult(body) {
  if (!body) return;
  if (typeof body === "string") {
    body = JSON.parse(body);
  }
  const results = _.uniqBy(body.results, function (rec) {
    return rec.collectionName;
  });
  body.results = results;
  return body;
}
