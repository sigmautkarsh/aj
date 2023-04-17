// Create Token and saving in cookie
const sendToken = (user, statusCode, res) => {
    console.log("trying jwt")
      const token = user.getJWTToken();
      console.log(token)
    
      // options for cookie
      const options = {
       // expires: String(new Date(
         // Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        //)),
        httpOnly: true,
      };
    
      res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
      });
    };
    
    module.exports = sendToken;