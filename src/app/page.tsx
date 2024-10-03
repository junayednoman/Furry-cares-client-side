"use client";
import BigPostCard from "@/components/ui/BigPostCard";
import PostCard from "@/components/ui/ClassicPostCard";
import FButton from "@/components/ui/FButton";
import SmallPostCard from "@/components/ui/SmallPostCard";

const post = {
  _id: "66fbc07dc661ee51510a17ee",
  author: {
    coverPhoto:
      "https://static.spacecrafted.com/a7396ee5481b4f909a919d4d9b12438c/i/fb8d760141e741eab1385d7d1e49585f/1/GCuCv726gZycFxatRCb7iU/1200-x-720%20Placeholder%20Image.jpg",
    isVerified: false,
    _id: "66fa1dbafda2037f6b64ad15",
    name: "Junayed Sarkar",
    email: "junayednoman05@gmail.com",
    password: "$2b$10$.uLgUABcta4s12rRa4JHpORve/FaJ8lYyulqsmvZQhkkWk41Wxgzm",
    bio: "A passionate veterinarian and pet enthusiast.",
    profilePicture: "https://example.com/profile/john_doe.png",
    role: "user",
    followers: [],
    following: [],
    isDeleted: false,
    createdAt: "2024-09-30T03:40:42.138Z",
    updatedAt: "2024-10-01T06:46:42.158Z",
    __v: 0,
  },
  title: "Lovely story of a dog and a 10 years old kid",
  content:
    "Grooming your dog at home can be easy and fun! Here are 5 essential tips to keep your dog looking sharp and feeling comfortable...",
  thumbnail:
    "https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806305.jpg?t=st=1727928825~exp=1727932425~hmac=a2a23f6513fc36b3334246890b5bc25e2115e7d65f73fa61d4a2488112528cc7&w=1380",
  category: "tip",
  tags: ["story", "dogs", "lovepet"],
  isPremium: false,
  votes: 0,
  comments: [],
  isDeleted: false,
  isPublished: true,
  createdAt: "2024-10-01T09:27:25.261Z",
  updatedAt: "2024-10-01T09:27:25.261Z",
  __v: 0,
};

const Page = () => {
  return (
    <div className="md:m-32 m-3 space-y-12 pb-20">
      <h3 className="text-5xl font-semibold text-text mb-12">
        Hello, World! from Page
      </h3>
      <FButton>Click me</FButton>
      <div className="sm:max-w-[500px]">
        <PostCard
          heading={post.title}
          imageUrl={
            "https://img.freepik.com/free-photo/adorable-portrait-pet-with-baby-surrounded-by-flowers_23-2151850071.jpg?t=st=1727930054~exp=1727933654~hmac=ff1f07dc90de773c443679bf985249acd39179e6ccb8646086e409ddfcc749bd&w=1380"
          }
          tag={post.category}
        />
      </div>
      <div className="lg:w-[1000px] space-y-8">
        <BigPostCard post={post} />
      </div>
      <div className="lg:w-[800px] space-y-8">
        <SmallPostCard post={post} />
      </div>
    </div>
  );
};

export default Page;
