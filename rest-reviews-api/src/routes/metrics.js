const express = require('express');
const router = express.Router();
const pool = require('../pg-pool');

/**
 * @swagger
 * /metrics/reviews/{id}:
 *  get:
 *    description: Get the metrics for a review by id
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
  // const foundMetrics = reviewMetrics.find(r => r.trackId === req.params.trackId);
  const { rows } = await pool.query(`select track_id, ROUND(avg(rating), 1) as averageRating, count(id) as reviewCount from reviews where track_id = $1 group by track_id order by averageRating DESC`, [req.params.trackId]);
  if (!rows) return res.status(404).send('Review not found.');
  const track = rows[0]
  res.json({
    trackId: track.track_id,
    averageRating: track.averagerating,
    reviewCount: track.reviewcount
  });
});

module.exports = router;
