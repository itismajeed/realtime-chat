import express, { Request, Response } from 'express'
import { Context } from './index'

const app = express()

app.use(express.urlencoded())
app.use(express.json())

function getContext (request: Request, response: Response): Context {
  const body = request.body
  const params = request.params
  const query = request.query as { [key: string]: string };
  const headers = request.headers as { [key: string]: string };
  return {
    response,
    body,
    headers,
    query,
    params
  }
}

app.post('/v1/auth', (request: Request, response: Response) => {
  const ctx = getContext(request, response)
})