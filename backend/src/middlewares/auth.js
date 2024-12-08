const isAuth = (req,res,next) => {
    if (req.session.user) {
        next();
    } else {
        return res.status(401).json({message:'Debes estar logueado'});
    }
}

export default isAuth;