const router = require('express').Router();
const db = require('../db/db');

router.get('/notes', function(req, res) {
  db
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', function(req, res) {
  db
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', function(req, res) {
  db
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
