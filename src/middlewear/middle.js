
const mid = function(req,res,next){
    const timeDate = new Date()
   
   const ha = req.connection.remoteAddress
//    console.log(ha) 
   const haaa = req.route.path
//    console.log(haaa)
   console.log(timeDate+", " + ha +", "+ haaa)
   next()
}


module.exports.mid = mid