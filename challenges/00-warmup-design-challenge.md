# Warm up schema design challenge

Imagine you are a backend developer who has been tasked with exposing the following REST APIs to your GraphQL API. You don't know much about the use case for this, you are just asked to make the review data available. Sketch out a GraphQL schema in Schema Definition Language (SDL) that exposes these APIs.

```text
/metrics/reviews/{id}
  track_id
  averagerating
  reviewcount

/api/reviews
  id
  reviewer_name
  content
  rating
  track_id
  created_on
  updated_on

/api/reviews/{id}
  id
  reviewer_name
  content
  rating
  track_id
  created_on
  updated_on
```
