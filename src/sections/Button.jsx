export const Button = ({ label, iconUrl, white, fullwidth }) => {
  return (
    <button
      className={` group flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full  ${
        white
          ? "bg-white text-slate-500 border-slate-500"
          : "bg-coral-red text-white border-coral-red"
      } ${fullwidth && "w-full"} `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="group-hover:scale-125  ml-2 rounded-full w-5 h-5 transition-all"
        />
      )}
    </button>
  );
};
