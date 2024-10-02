"use client";
import PostCard from "@/components/ui/ClassicPostCard";
import FButton from "@/components/ui/FButton";

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
    "https://res.cloudinary.com/dyvgvtnld/image/upload/v1727774843/l4iffit3uytqrieefvjw.webp",
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
    <div className="dm:m-32 mx-3">
      <h3 className="text-5xl font-semibold text-text mb-12">
        Hello, World! from Page
      </h3>
      <FButton>Click me</FButton>
      <div className="sm:max-w-[500px]">
        <PostCard
          heading={post.title}
          imageUrl={
            "https://www.thaiunion.com/files/product/pet/petcare-large.jpg"
          }
          tag={post.category}
        />
      </div>
    </div>
  );
};

export default Page;
