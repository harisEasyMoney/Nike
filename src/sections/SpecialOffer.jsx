import { offer } from "../assets/images";
import { Button } from "./Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          <span className="text-coral-red">Offer </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on Shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings. We
          offer unparalled value that sets us apart
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfil yout unique
          desires surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-6 mt-11">
          <Button label="Shop Now" iconUrl={arrowRight} />{" "}
          <Button label="Learn more" white />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
