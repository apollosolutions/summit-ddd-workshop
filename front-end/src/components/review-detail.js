import React from 'react';
import styled from '@emotion/styled';
import { widths, colors } from '../styles';
import { Rating } from 'react-simple-star-rating'

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 20px;
  width: 100%;
  max-width: 300px; // or whatever width you want for the card
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  background-color: ${colors.pink.base}; // or any color you want
  color: white;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: bold;
`;

export const ReviewerDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewerName = styled.h4`
  margin: 0;
`;

export const ReviewDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewContent = styled.p`
  margin-top: 8px;
`;

export const ReviewDetail = ({ review }) => {
  const { reviewerName, rating, content, timeSincePosted } = review
  const initials = reviewerName.split(' ').map(name => name[0]).join('');

  return (
    <ReviewCard>
      <ReviewHeader>
        <ProfilePicture>{initials}</ProfilePicture>
        <ReviewerDetails>
          <ReviewerName>{reviewerName}</ReviewerName>
          <ReviewDetails>
            {/* <Rating ratingValue={rating} /> */}
            <Rating
              initialValue={rating || 0}
              readonly={true}
              allowFraction={true}
              size={20}
              disableFillHover={true}
              allowHover={false}
            />
            <span>{timeSincePosted}</span>
          </ReviewDetails>
        </ReviewerDetails>
      </ReviewHeader>
      <ReviewContent>{content}</ReviewContent>
    </ReviewCard>
  );
}

export default ReviewCard;
