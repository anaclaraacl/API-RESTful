import { NextFunction, Request, Response } from "express";

export default function errorHandler() {
    return (err: any, req: Request, resp: Response, next: NextFunction) => {
        const status = err.status;
        resp.status(status).json({
            status,
            message: err.message
        });
    }
}