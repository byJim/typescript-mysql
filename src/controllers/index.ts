import {Request, Response} from 'express';

export function indexWelcome (request: Request, response: Response): Response{
 return response.json("welcome to my API v2020")
}
