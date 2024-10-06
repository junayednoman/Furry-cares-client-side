"use client";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import VerticalPostCard from "@/components/ui/VerticalPostCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { TPost } from "@/types/post.type";

const posts = [
  {
    _id: "64b1a8e7f9a33a1b47b1c101",
    author: {
      coverPhoto: "https://example.com/images/sophia-cover.jpg",
      isVerified: true,
      _id: "64a1f7d8e7a33f1b47b1c003",
      name: "Sophia Moore",
      email: "sophia@example.com",
      password: "hashed_password",
      bio: "Pet lover and cat whisperer.",
      profilePicture:
        "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-10-05T08:30:00Z",
      updatedAt: "2023-10-05T08:30:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "If you're new to the world of cats, these tips will help you care for your furry friend and ensure they feel safe and loved in their new home.",
    thumbnail:
      "https://media.npr.org/assets/img/2023/07/28/gettyimages-174555549_wide-af5baee641ef150b894736a7f836f9f59971349c.jpg?s=1400&c=100&f=jpeg",
    category: "tip",
    tags: ["cats", "pet care", "new owners"],
    isPremium: false,
    votes: 150,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c201",
        post: "64b1a8e7f9a33a1b47b1c101",
        commenter: "John Doe",
        text: "These tips were super helpful, thanks!",
        createdAt: "2024-10-05T12:00:00Z",
        updatedAt: "2024-10-05T12:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-05T10:00:00Z",
    updatedAt: "2024-10-05T10:00:00Z",
    __v: 0,
  },
  {
    _id: "64b1a8e7f9a33a1b47b1c102",
    author: {
      coverPhoto: "https://example.com/images/emma-cover.jpg",
      isVerified: false,
      _id: "64a1f7d8e7a33f1b47b1c001",
      name: "Emma Wilson",
      email: "emma@example.com",
      password: "hashed_password",
      bio: "Dog rescue advocate and story writer.",
      profilePicture:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-09-20T07:15:00Z",
      updatedAt: "2023-09-20T07:15:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "Max was found wandering the streets, scared and alone. This is his inspiring journey from rescue to finding his forever home.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqJBAsZBHxnG0WK7r0wtbG9ioGCjxrFu0Bw&s",
    category: "story",
    tags: ["dog", "rescue", "adoption"],
    isPremium: true,
    votes: 240,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c203",
        post: "64b1a8e7f9a33a1b47b1c102",
        commenter: "Lisa Ray",
        text: "Beautiful story, it brought tears to my eyes!",
        createdAt: "2024-10-04T14:00:00Z",
        updatedAt: "2024-10-04T14:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-04T09:30:00Z",
    updatedAt: "2024-10-04T09:30:00Z",
    __v: 0,
  },
  {
    _id: "64b1a8e7f9a33a1b47b1c103",
    author: {
      coverPhoto: "https://example.com/images/emma-cover.jpg",
      isVerified: false,
      _id: "64a1f7d8e7a33f1b47b1c001",
      name: "Emma Wilson",
      email: "emma@example.com",
      password: "hashed_password",
      bio: "Dog rescue advocate and story writer.",
      profilePicture:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-09-20T07:15:00Z",
      updatedAt: "2023-09-20T07:15:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "Routine vet visits are important to catch early signs of illness in pets. Learn how these check-ups can save your pet's life.",
    thumbnail:
      "https://face4pets.wordpress.com/wp-content/uploads/2019/01/pet-trends.jpg",
    category: "tip",
    tags: ["health", "vet visits", "pet care"],
    isPremium: false,
    votes: 320,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c205",
        post: "64b1a8e7f9a33a1b47b1c103",
        commenter: "Mark Reed",
        text: "Such an informative article. I never realized how important regular check-ups are.",
        createdAt: "2024-10-02T15:00:00Z",
        updatedAt: "2024-10-02T15:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-02T08:15:00Z",
    updatedAt: "2024-10-02T08:15:00Z",
    __v: 0,
  },
];

const FeaturedStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,

      slides: {
        perView: 3,
      },
      breakpoints: {
        "(min-width: 300px)": {
          slides: { perView: 1, spacing: 0 },
        },
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1280px)": {
          slides: { perView: 3, spacing: 3 },
        },
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="md:py-20 py-16 overflow-hidden">
        <FContainer>
          <FSectionTitle
            heading="featured stories"
            subHeading="reader's choice"
          />
          <div className="navigation-wrapper w-full relative">
            <div ref={sliderRef} className="keen-slider mt-10">
              {posts.map((post: TPost, index: number) => (
                <div
                  key={post._id}
                  className={`keen-slider__slide px-3 pb-6 number-slide${
                    index + 1
                  }`}
                >
                  <VerticalPostCard post={post} />
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
        </FContainer>
      </div>
    </>
  );
};

export default FeaturedStories;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled} w-10 h-10`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
