import { Response } from 'express'

type Context = {
  response:Response;
  body:{ [key: string]: any };
  headers: { [key: string]: string };
  query: { [key: string]: string };
  params: any;
}