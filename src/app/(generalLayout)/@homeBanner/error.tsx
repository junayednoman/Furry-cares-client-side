"use client";

import FContainer from "@/components/ui/Container";

const Error = () => {
  return (
    <div className="pt-12 text-center">
      <FContainer>
        <div className=" lg:min-h-[550px] md:min-h-[500px] min-h-[350px] w-full flex items-center justify-center border border-slate-100 border-solid flex-col gap-3 rounded-[10px]">
          <h1 className="text-text sm:text-3xl text-2xl">
            Something went wrong!
          </h1>
          <p className="text-slate-400 mt-2">Failed to fetch posts 😔</p>
        </div>
      </FContainer>
    </div>
  );
};

export default Error;
