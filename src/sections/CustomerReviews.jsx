import { reviews } from "../Constants";
import ReviewCard from "./ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What are <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-5 info-text m-auto max-w-lg text-center">
        Here genuine stories from stisfied customers about exceptional
        experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
