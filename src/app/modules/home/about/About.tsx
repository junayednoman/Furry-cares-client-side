import FContainer from "@/components/ui/Container";
import Image from "next/image";
import PetsImage from "@/assets/pets.png";
import FSectionTitle from "@/components/ui/FSectionTitle";
import Heading2 from "@/components/typography/Heading2";

const About = () => {
  return (
    <div className="-mt-6 md:pb-20 pb-16 md:pt-10 pt-4 bg-[#f6fcf6]">
      <FContainer>
        <div className="mt-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-20 gap-16">
            <div className="">
              <FSectionTitle
                subHeading="FurryTales – Pet Care & Stories"
                align="left"
                heading="About Us"
              />
              <p className="text-text mt-5 leading-6">
                Welcome to Furry Cares, your go-to platform for expert pet care
                advice and heartwarming stories. Whether you are a new pet owner
                looking for guidance or a seasoned caretaker searching for fresh
                ideas, we have got you covered! At Furry Cares, we believe pets
                are family, and like family, they deserve the best care and
                attention.
              </p>
              <p className="text-text mt-5 leading-6">
                Our platform is built on a foundation of love, knowledge, and
                community. From tips on nutrition, grooming, and health to
                inspiring real-life stories of pets and their humans, we offer a
                wide variety of content to help you understand and nurture your
                furry friends. Our expert contributors include veterinarians,
                pet trainers, and passionate pet owners, ensuring that every
                piece of advice is reliable, practical, and full of love.
              </p>
              <p className="text-text mt-5 leading-6">
                Our mission is simple: to make the world a better place for pets
                by providing reliable information, fostering a community of
                caring pet owners, and sharing the stories that remind us of the
                joy pets bring into our lives.
              </p>
            </div>
            <div>
              <div className="md:flex hidden justify-center w-full">
                <Image
                  className="mx-auto md:w-auto w-full md:h-[170px] h-[120px]"
                  src={PetsImage}
                  alt="About"
                  width={500}
                  height={170}
                />
              </div>
              <div className="grid grid-cols-2 md:gap-10 gap-6 -mt-5 lg:w-full md:w-[80%] mx-auto">
                <div className="rounded-md FCardShadow h-auto w-auto py-12 text-center hover:rotate-2 duration-500 md:bg-transparent bg-white">
                  <Heading2>100+</Heading2>
                  <p className="font-semibold">Stories</p>
                </div>
                <div className="rounded-md FCardShadow h-auto w-auto py-12 text-center hover:rotate-2 duration-500 md:bg-transparent bg-white">
                  <Heading2>83+</Heading2>
                  <p className="font-semibold">Tips</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:gap-10 gap-6 md:mt-10 mt-6 lg:w-full md:w-[80%] mx-auto">
                <div className="rounded-md FCardShadow h-auto w-auto py-12 text-center hover:rotate-2 duration-500 md:bg-transparent bg-white">
                  <Heading2>940+</Heading2>
                  <p className="font-semibold">Members</p>
                </div>
                <div className="rounded-md FCardShadow h-auto w-auto py-12 text-center hover:rotate-2 duration-500 md:bg-transparent bg-white">
                  <Heading2>10+</Heading2>
                  <p className="font-semibold">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default About;
