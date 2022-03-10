const jwt = require("jsonwebtoken");
const authenticate  = function(req,res,next){
let token = req.headers["x-auth-token"];
 if (!token) return res.send({ status: false, msg: "token must be present" });
 next()
}

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"];
    let userId = req.params.userId;
    let decodedToken = jwt.verify(token, "chandresh-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    let decoded =decodedToken.userId
    if(userId!=decoded) res.send({status:false, msg:"anthentication denied"})

    next()
}

module.exports.authenticate =authenticate 
module.exports.authorise=authorise