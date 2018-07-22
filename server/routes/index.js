const express = require('express');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('*', (req, res, next) => {
  res.render(path.join(PUBLIC_PATH, 'index.html'), { title: 'Express' });
});

module.exports = router;
