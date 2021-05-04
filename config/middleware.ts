import { json } from "body-parser"
import { Application } from "express"
import cors from 'cors';

const middleware = (app: Application) => {
  app.use(json())
  app.use(cors({
    origin: '*',
  }))
}