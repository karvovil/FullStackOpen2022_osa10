import BaseReviewItem from "../BaseReviewItem";

const ReviewItem = ({ review }) => {
  return(
    <BaseReviewItem review = {review} headingText={review.user.username}/>
  );
};
export default ReviewItem;