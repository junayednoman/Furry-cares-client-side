import Banner from "@/app/modules/about page/Banner";
import ContactForm from "@/app/modules/contact page/ContactForm";
import Faq from "@/app/modules/home/faq/Faq";
import SubscribeSection from "@/app/modules/home/newsletter/SubscribeSection";

const Contact = () => {
  return (
    <>
      <Banner heading="Contact Us" />;
      <ContactForm />
      <Faq />
      <SubscribeSection />
    </>
  );
};

export default Contact;
