import Banner from "@/app/modules/about page/Banner";
import ContactInfo from "@/app/modules/about page/ContactInfo";
import Mission from "@/app/modules/about page/Mission";
import Team from "@/app/modules/about page/Team";

const AboutPage = () => {
  return (
    <>
      <Banner heading="About Us" />
      <Mission />
      <Team />
      <ContactInfo />
    </>
  );
};

export default AboutPage;
