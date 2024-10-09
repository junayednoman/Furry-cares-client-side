"use client";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import VerticalPostCard from "@/components/ui/VerticalPostCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { TPost } from "@/types/post.type";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import FeaturedStoriesSkeleton from "@/app/(generalLayout)/skeletons/FeaturedStoriesSkeleton";
import NoData from "@/components/ui/NoData";
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
          slides: { perView: 2, spacing: 0 },
        },
        "(min-width: 1024px)": {
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

  const {
    data: postData,
    isFetching,
    isLoading,
    isError,
  } = useHandleQuery("get-featured-stories", "/posts", {
    category: "story",
    sort: "-votes",
    limit: 6,
  });
  console.log("featured data, ", postData);

  if (isFetching || isLoading) {
    return (
      <FeaturedStoriesSkeleton
        heading="featured stories"
        subHeading="reader's choice"
      />
    );
  }

  return (
    <>
      <div className="md:py-20 py-16 overflow-hidden">
        <FContainer>
          <FSectionTitle
            heading="featured stories"
            subHeading="reader's choice"
          />
          {isError || !postData.data ? (
            <NoData />
          ) : (
            <div className="xl:mx-10">
              <div className="navigation-wrapper w-full relative">
                <div ref={sliderRef} className="keen-slider mt-10">
                  {postData?.data.map((post: TPost, index: number) => (
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
            </div>
          )}
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
