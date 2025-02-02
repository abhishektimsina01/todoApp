
const notFound = (req,res,next) =>{
    const error = new Error(`Not found - ${req.originaluRL}`)
    res.status(404)
    next(error)   
}

const errorHandler = (err, req, res, next) =>{
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode
    res.status(statusCode).json({
        error : err.message,
        stack : err.stack == "production" ? null : err.stack
    })
}


export {notFound , errorHandler}
