import type { Response, Request } from "express"

export const signUp = (req: Request, res: Response) => {

    res.send('Sign UP api')
}

export const signIn = (req: Request, res: Response) => {

    res.send('Sign In api')
}

export const signOut = (req: Request, res: Response) => {

    res.send('Sign Out api')
}