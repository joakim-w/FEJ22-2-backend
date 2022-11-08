const router = require('express').Router();


router.get('/', (req, res) => {
  res.send('hej')
})

router.post('/', (req, res) => {
  res.send('post request')
})


module.exports = router;