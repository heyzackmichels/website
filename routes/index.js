var express = require('express');
var path = require('path');
var router = express.Router();
var cors = require('cors');
var app = express();

var allowedOrigins = ['http://localhost:3000',
                      'http://store.steampowered.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


res.setHeader("Access-Control-Allow-Origin", "*"); 
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With"); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/ZACK/index.html'));
});

// /* GET TEST. copy these guys for root redirection to directories */
// router.get('/TEST', function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../public/TEST/index.html'));
// });

module.exports = router;
