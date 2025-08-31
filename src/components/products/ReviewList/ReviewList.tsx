import { useState, useEffect } from "react";
import { Review } from "@/lib/types/product";
import { getProductReviews } from "@/lib/api/products";
import {
  ReviewsContainer,
  ReviewItem,
  ReviewHeader,
  ReviewerName,
  ReviewDate,
  StarRating,
  Star,
  ReviewComment,
  EmptyReviews,
  ReviewSummary,
  AverageRating,
  ReviewCount,
  LoadingText,
} from "./ReviewList.styles";

type ReviewListProps = {
  productId: string;
  visible: boolean;
};

const StarRatingDisplay = ({ rating }: { rating: number }) => (
  <StarRating>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} $filled={star <= rating}>
        ★
      </Star>
    ))}
  </StarRating>
);

export const ReviewList = ({ productId, visible }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProductReviews(productId);
        setReviews(data);
      } catch {
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [productId]);

  if (!visible) {
    return null;
  }

  return (
    <ReviewsContainer $visible={visible}>
      {isLoading ? (
        <LoadingText>Loading reviews...</LoadingText>
      ) : error ? (
        <LoadingText>{error}</LoadingText>
      ) : !reviews.length ? (
        <EmptyReviews>No reviews yet. Be the first to review!</EmptyReviews>
      ) : (
        <>
          <ReviewSummary>
            <AverageRating>
              {(
                reviews.reduce((acc, review) => acc + review.rating, 0) /
                reviews.length
              ).toFixed(1)}
            </AverageRating>
            <div>
              <StarRatingDisplay
                rating={
                  reviews.reduce((acc, review) => acc + review.rating, 0) /
                  reviews.length
                }
              />
              <ReviewCount>{reviews.length} reviews</ReviewCount>
            </div>
          </ReviewSummary>

          {reviews.map((review) => (
            <ReviewItem key={review.id}>
              <ReviewHeader>
                <ReviewerName>{review.userName}</ReviewerName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewHeader>
              <StarRatingDisplay rating={review.rating} />
              <ReviewComment>{review.comment}</ReviewComment>
            </ReviewItem>
          ))}
        </>
      )}
    </ReviewsContainer>
  );
};
