
exports.authAdmin = (req, res, next) => {
        if(req.session.user && req.session.user.isAdmin) {
            next();
        } else {
            res.redirect("/");
        }
}

exports.authUser = (req, res, next) => {
    
    if(req.session.user && !req.session.user.isAdmin) {
        next();
    } else {
        res.redirect("/");
    }
}

exports.auth = (req, res, next) => {
    
    if(req.session.user) {
        next();
    } else {
        res.redirect("/");
    }
}