/* eslint-disable react/no-unescaped-entities */
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";

const Mission = () => {
  return (
    <div className="lg:py-24 md:py-20 py-16">
      <FContainer>
        <FSectionTitle heading="Our Mission" subHeading="Making biking easy" />
        <div className="dark:text-gray-300 mt-8">
          <p className="leading-6">
            Our mission is to build an inclusive and compassionate platform that
            serves as a hub for pet owners around the world. We are dedicated to
            providing reliable, expert advice on pet care, covering everything
            from nutrition and grooming to health and exercise, ensuring that
            all pets live their best lives. Alongside practical care tips, we
            aim to share heartwarming stories that highlight the unique bond
            between humans and their pets, fostering a deep appreciation for pet
            companionship. Through this platform, we seek to inspire a community
            where sharing, learning, and celebrating the love for pets becomes a
            daily joy, enabling pet owners to make informed decisions and enrich
            their relationships with their furry friends.
          </p>
          <p className="mt-4 leading-6">
            Our vision is to become the go-to global platform for pet care,
            where every pet owner feels empowered with the knowledge and
            resources they need to provide the highest quality of care for their
            pets. We aspire to cultivate a space where both novice and
            experienced pet owners can come together, share insights, and uplift
            one another through inspiring stories, expert tips, and a sense of
            belonging. By combining education, empathy, and community, we
            envision a world where pets everywhere are loved, cherished, and
            cared for in ways that enhance their well-being and strengthen the
            human-animal connection.
          </p>
        </div>
      </FContainer>
    </div>
  );
};

export default Mission;
