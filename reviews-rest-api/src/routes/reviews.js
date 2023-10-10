const express = require('express');
const router = express.Router();
const pool = require('../pg-pool');

/**
 * @swagger
 * /api/reviews:
 *  get:
 *    description: Get all reviews
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/reviews', async (req, res) => {
  const allReviews = await pool.query('SELECT * FROM reviews');
  res.json(allReviews.rows);
});

/**
 * @swagger
 * /api/reviews/{id}:
 *  get:
 *    description: Get a review by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the review to get
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/reviews/:trackId', async (req, res) => {
  // const reviewsForTrack = reviews.filter(r => r.trackId === req.params.trackId);
  const reviewsForTrack = await pool.query(`SELECT '5 days ago' as time_since_posted, * FROM reviews WHERE track_id = $1`, [req.params.trackId]);
  if (!reviewsForTrack.rows) return res.status(404).send('Review not found.');
  res.json(reviewsForTrack.rows.map(r => ({
    id: r.id,
    rating: r.rating,
    content: r.content,
    timeSincePosted: r.time_since_posted,
    reviewerName: r.reviewer_name,
    trackId: r.track_id,
  })));
});

router.get('/reviewMetrics')

module.exports = router;
