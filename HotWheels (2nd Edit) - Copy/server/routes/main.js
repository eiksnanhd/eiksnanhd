const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * GET /
 * Home Page
 */
router.get('', async (req, res) => {
  const locals = {
    title: "Hotwheels Blog",
    description: "Hotwheels blog about collections, cars and playsets."
  };

  try {
    const data = await Post.find(); // ✅ Fetch posts properly
    res.render('index', {
      locals,
      items: data, // match the key used in your EJS
      username: 'HotWheelFan99'
    });
  } catch (error) {
    console.error(error); // ✅ Now error is correctly defined
    res.status(500).send('Internal Server Error');
  }
});

/**
 * GET /about
 */
router.get('/about', (req, res) => {
  res.render('about');
});

/**
 * GET /collections
 */
router.get('/collections', (req, res) => {
  res.render('collections');
});

/**
 * GET /shop
 */
router.get('/shop', (req, res) => {
  res.render('shop');
});

module.exports = router;
