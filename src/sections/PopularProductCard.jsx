import { star } from "../assets/icons";

export const PopularProductCard = ({ key, imgURL, name, price, rating }) => {
  return (
    <div key={key} className="flex flex-col flex-1 w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] hover:scale-105  cursor-pointer transition-all"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};
