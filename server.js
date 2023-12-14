const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { nanoid } = require('nanoid');
const authRoutes = require('./router/auth');
const Url = require('./models/url');

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-auth';
const PORT = process.env.PORT || 3000;

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(cookieParser());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/auth', authRoutes);



app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  
  const shortUrl = 'http://abhishek.com/' + nanoid(8); 

  try {
   
    const newShortUrl = new Url({ originalUrl, shortUrl });
    await newShortUrl.save();

    res.json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
