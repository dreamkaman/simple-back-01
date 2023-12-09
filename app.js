const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const { checkDuplicates } = require('./middleWares/checkDuplicates');

const usersRouter = require('./routes/usersRoutes');
const appealsRouter = require('./routes/appealsRoutes');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/users', checkDuplicates, usersRouter);
app.use('/api/appeals', appealsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Rout is not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
