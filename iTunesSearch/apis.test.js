const apis = require("./routes/apis");
const axios = require("axios");
jest.mock("axios");
axios.get.mockResolvedValue({
  data: {
    results: [
      {
        collectionName: "Believe",
        id: 1,
      },
      {
        collectionName: "Justice",
        id: 2,
      },
    ],
  },
});
test("test get all the albums with search text as query params", (done) => {
  apis.getAlbums(
    {
      query: { search: "justin" },
    },
    {
      send: function (body) {
        expect(body.results).toBeDefined();
        done();
      },
    }
  );
});

test("test get all the albums with search text and limit as query params", (done) => {
  apis.getAlbums(
    {
      query: { search: "justin", limit: "1" },
    },
    {
      send: function (body) {
        expect(body.results.length).toBe(1);
        done();
      },
    }
  );
});

test("test get all the albums with no query params", (done) => {
  apis.getAlbums(
    {
      query: {},
    },
    {
      status: function () {},
      send: function (body) {
        expect(body.results).toBeUndefined();
        done();
      },
    }
  );
});

test("test get all the albums with invalid search text as query params", (done) => {
  apis.getAlbums(
    {
      query: { search: " " },
    },
    {
      send: function (body) {
        expect(body.results.length).toBe(0);
        done();
      },
    }
  );
});
