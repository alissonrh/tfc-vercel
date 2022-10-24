import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  next();
  return res.status(500).json({ message: 'algo deu muito errado' });
};

export default errorMiddleware;
