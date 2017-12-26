const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/who', (req,res) => {
 res.send("Chan slayer kim \n");
});

router.post('/who', (req, res) => {
var uh = req.body;
var ip = Object.keys(uh)[0];
var str = "ha! i got you good! I got your IP address! Get hacksxed! "+ ip + '\n';

res.send(str)
});


module.exports = router;
