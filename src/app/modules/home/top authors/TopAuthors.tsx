import Heading5 from "@/components/typography/Heading5";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import Image from "next/image";

const authors = [
  {
    _id: "64a1f7d8e7a33f1b47b1c001",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    profilePicture:
      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    bio: "Pet lover and a professional vet with a passion for animal rescue.",
    followers: 1200,
    following: 300,
    profession: "Pet doctor",
    posts: 56,
  },
  {
    _id: "64a1f7d8e7a33f1b47b1c002",
    name: "Liam Harris",
    email: "liam.harris@example.com",
    profilePicture:
      "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
    bio: "Dog trainer and behaviorist, sharing tips for a happy pet life.",
    followers: 850,
    profession: "Pet expert",
    following: 150,
    posts: 34,
  },
  {
    _id: "64a1f7d8e7a33f1b47b1c003",
    name: "Sophia Moore",
    email: "sophia.moore@example.com",
    profilePicture:
      "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    bio: "Cat enthusiast and blogger, writing about pet care and adoption.",
    followers: 950,
    following: 210,
    profession: "Health expert",
    posts: 42,
  },
];

const TopAuthors = () => {
  return (
    <div className="py-20 bg-[#F6FCF6]">
      <FContainer>
        <FSectionTitle
          heading="Top Authors"
          subHeading="Meet the top authors"
        />
        <div className="grid md:grid-cols-3 grid-cols-1 items-center lg:gap-16 gap-4 mt-10 lg:max-w-[950px] w-[85%] mx-auto">
          {authors.map((author) => (
            <div
              key={author._id}
              className="text-center FCardShadow rounded-md bg-white"
            >
              <Image
                src={author.profilePicture}
                alt={author.name}
                width={400}
                height={200}
                className="w-full lg:h-[180px] md:h-[150px] rounded-t-md"
              />
              <div className="p-6">
                <Heading5>{author.name}</Heading5>
                <p className=" mt-1">
                  <span className="font-semibold">Followers:</span>{" "}
                  <span>{author.followers}</span>
                </p>{" "}
                <p className="text-gray-400 mt-3">{author.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </FContainer>
    </div>
  );
};

export default TopAuthors;
