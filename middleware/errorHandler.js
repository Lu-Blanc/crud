const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const errors = err.errors || null;
  
    res.status(statusCode).json({ message, errors });
  };
  
  //not found 404
  const notFound = (req, res) => {
    res.status(404).json({ error: "Not Found" })
  };
  
  export default {
    errorHandler,
    notFound
  }