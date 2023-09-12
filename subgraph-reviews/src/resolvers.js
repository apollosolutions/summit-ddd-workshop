export const resolvers = {
  Query: {
    reviewMetrics: (_, { id }, { dataSources }) => {
      return dataSources.reviewMetricsAPI.getReviewMetricsByTrackId(id);
    }
  },
  Track: {
    __resolveReference: async ({ id }, { dataSources }) => {
      const reviewDAO = await dataSources.reviewAPI.getReviewsByTrack(id);
      const reviewMetricsDAO = await dataSources.reviewMetricsAPI.getReviewMetricsByTrackId(id);

      return {
        id: id,
        reviews: reviewDAO,
        reviewMetrics: reviewMetricsDAO,
      }
    },
  }
};
