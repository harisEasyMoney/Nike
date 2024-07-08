import { Button } from "./Button";

const Subscribe = () => {
  return (
    <section
      className="max-container justify-between items-center flex gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl leadiing-[68px] lg:max-w-md font-bold font-palanquin">
        Sign Up for
        <span className="text-coral-red"> Spam</span> Emails
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gpa-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Subscribe for Spam Letters"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
