import {
  Hero,
  CustomerReview,
  Footer,
  PopularProducts,
  SpecialOffer,
  Subscribe,
  SpecialQuality,
  Services,
} from "./sections";

import Nav from "./Components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding ">
        <SpecialQuality />
      </section>
      <section className="padding padding-x py10">
        <Services />
      </section>
      <section className="padding ">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
