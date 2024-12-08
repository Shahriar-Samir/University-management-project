const pageNotFoundHandler = (req, res, next: NextFunction) => {
  const statusCode = 404;
  const message = 'page not found';
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default pageNotFoundHandler;
