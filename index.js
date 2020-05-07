const server = require("./api/server.js");

//heroku will add the PORT var to the enviornment
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
