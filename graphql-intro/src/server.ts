import express from "express";
import schema from "./schema";
import {graphql} from "graphql";
import { type } from "os";

const app = express();

app.use(express.text({type: "application/graphql"}));

app.post("/graphql", function (req, res) {

  graphql(schema, req.body)
    .then(result => res.send(result))
    .catch(err => console.error(err));
})

const port = 3000;


const server = app.listen(port, () => {
  console.log(`Actively listening on port ${port}`)
})

export default server;