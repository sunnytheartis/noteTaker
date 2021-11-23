const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
router.get('/notes', function(req, res){
  res.sendFile(path.join(__dirname, '.,/public/assets/index.html'));
});

// All other routes respond with the index.html file
router.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});

module.exports = router;
