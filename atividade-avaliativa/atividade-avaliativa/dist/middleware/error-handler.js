"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler() {
    return (err, req, resp, next) => {
        const status = err.status;
        resp.status(status).json({
            status,
            message: err.message
        });
    };
}
