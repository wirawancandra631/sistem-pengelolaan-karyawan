const { CONFIG } = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const cors = require('cors');
const DatabaseMiddleware = require('./middleware/DatabaseMiddleware');
const app = express();
const PORT = CONFIG.SERVER_PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', DatabaseMiddleware);
app.use('/api', apiRouter);
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
