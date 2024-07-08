export const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red scale-110 bg-coral-red"
          : "border-transparent bg-blue-800"
      } cursor-pointer max-sm:flex-1 transition-all`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center  sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img
          src={imgUrl.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
