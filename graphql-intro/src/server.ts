 import express from "express";
import schema from "./schema";
import {graphql} from "graphql";
// import { type } from "os";

// const app = express();
import { Express, Request, Response } from 'express';
//const express = require('express');

const app: Express = express();



app.use(express.text({type: "application/graphql"}));


app.post("/graphql", function (req: Request, res: Response) {

  graphql(schema, req.body)
    .then(result => res.send(JSON.stringify(result, null, 2)))
    .catch(err => console.error(err));

})

const port = 3000;


const server = app.listen(port, () => {
  console.log(`Actively listening on port ${port}`)
})

export default server;