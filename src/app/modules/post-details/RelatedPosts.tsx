"use client";
import FSectionTitle from "@/components/ui/FSectionTitle";
import VerticalPostCard from "@/components/ui/VerticalPostCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { TPost } from "@/types/post.type";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import FeaturedStoriesSkeleton from "@/app/(generalLayout)/skeletons/FeaturedStoriesSkeleton";
import { useSearchParams } from "next/navigation";
const RelatedPosts = () => {
  const category = useSearchParams().get("category");

  // Slider states
  const currentSlide = useRef(0);
  const loaded = useRef(false);
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
          slides: { perView: 3, spacing: 0 },
        },
      },
      initial: 0,
      slideChanged(slider) {
        // Update ref directly instead of triggering re-render
        currentSlide.current = slider.track.details.rel;
      },
      created() {
        loaded.current = true;
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

  const { data, isFetching, refetch } = useHandleQuery(
    "get-related-posts",
    "/posts",
    {
      category,
      sort: "-votes",
      limit: 6,
    }
  );

  useEffect(() => {
    if (category) {
      refetch();
    }
  }, [category, refetch]);

  const postData = data?.data?.result;
  if (isFetching || !postData || postData?.length < 1) {
    return <FeaturedStoriesSkeleton heading="Related posts" />;
  }

  return (
    <div className="md:py-24 py-16 overflow-hidden">
      <FSectionTitle heading="Related posts" />

      <div className="xl:mx-10">
        <div className="navigation-wrapper w-full relative">
          <div ref={sliderRef} className="keen-slider mt-10">
            {postData?.map((post: TPost, index: number) => (
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
          {loaded.current && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide.current === 0}
              />
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide.current ===
                  instanceRef?.current?.track?.details?.slides?.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default RelatedPosts;

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
