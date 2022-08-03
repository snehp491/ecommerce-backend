const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const app = express();
const PORT = process.env.PORT || 3001;

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;