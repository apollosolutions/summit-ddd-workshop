import { RESTDataSource } from '@apollo/datasource-rest';

export class ReviewMetricsAPI extends RESTDataSource {
  baseURL = 'http://reviews-rest-api:5252/metrics/';

  getReviewMetricsByTrackId(trackId) {
    return this.get(`reviews/${trackId}`)
  }
}
