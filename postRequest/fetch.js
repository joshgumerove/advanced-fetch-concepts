const root = "https://jsonplaceholder.typicode.com";

let url = `${root}/posts`;

let options = {
  method: "POST",
  body: JSON.stringify({
    title: "josh is so cool",
    body: "so very cool",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

let req = new Request(url, options);

fetch(req)
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error("there has been an error");
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
