import { Request, Response, NextFunction } from "express";
import { LoginUseCase } from './LoginUseCase';
import jwt from 'jsonwebtoken';
import { RefreshTokenStore } from "./refreshTokenStore";
import { v4 } from 'uuid'

export class LoginController {
    constructor(
        private loginUseCase: LoginUseCase,
        private refreshTokenStore: RefreshTokenStore
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const user = await this.loginUseCase.execute({email, password});

            const accessToken = jwt.sign(user, process.env.SECRET, { expiresIn: '1m' });
            const refreshToken = v4();
            this.refreshTokenStore.add(refreshToken, user.email)
            return response.status(201).send({token: accessToken, refreshToken: refreshToken});  

        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

    async newToken(request: Request, response: Response): Promise<Response> {
        const { refreshToken, email } = request.body;

        try {
            if(this.refreshTokenStore.check(refreshToken, email)){
                const user = await this.loginUseCase.refreshUser(email );
                const accessToken = jwt.sign(user, process.env.SECRET, { expiresIn: '1m' });
                return response.status(201).send({token: accessToken, refreshToken: refreshToken});

            } else {
                throw new Error('Invalid token request')
            }
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

    authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
    
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            console.log(token)
    
            jwt.verify(token, process.env.SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
    
                req.app.set("user", user);
                next();
            });
        } else {
            res.sendStatus(401);
        }
    }
}

