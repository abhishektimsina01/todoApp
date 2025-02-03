
const notFound = (req,res,next) =>{
    const error = new Error(`Not found - ${req.originaluRL}`)
    res.status(202)
    next(error)   
}

const errorHandler = (err, req, res, next) =>{
    console.log(err.message)
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode
    res.status(statusCode).json({
        error : err.message,
        stack : err.stack == "production" ? null : err.stack
    })
}

export {notFound , errorHandler}
