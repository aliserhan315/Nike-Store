import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProduct";
import Service from "./sections/Service";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import Hero from "./sections/Hero";
import Nav from "./components/Nav";


 
const App = ()=> (
    <main className="relative">
       <Nav/>
      
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding"> 
        <PopularProducts/>
      </section>
      <section className="padding"> 
        <SuperQuality/>
      </section>
      <section className="padding-x py-10"> 
       <Service/>
      </section>
      <section className="padding"> 
        <SpecialOffer/>
      </section> 
      <section className="bg-pale-blue padding"> 
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full"> 
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pd-8"> 
       <Footer/>
      </section>

    </main>
  
);
export default App