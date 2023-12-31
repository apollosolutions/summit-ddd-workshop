import { RESTDataSource } from '@apollo/datasource-rest';

export class ReviewAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = 'http://reviews-rest-api:5252/api/';

  getReviewsByTrack(trackId) {
    return this.get(`reviews/${trackId}`)
  }
}
