const globalErrorHandler = (err: any, req, res, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default globalErrorHandler;
