import FButton from "@/components/ui/FButton";

const SubscribeNewsletter = () => {
  return (
    <div className="sm:p-8 p-6 sm:px-10 px-8 space-y-4 bg-[#fff6e9] mt-8 w-full rounded-md">
      <h3 className="font-semibold md:text-3xl text-2xl">
        Subscribe to our newsletter
      </h3>
      <p className="font-montserrat">
        Subscribe to our newsletter and be the first to access exclusive content
        and expert insights.
      </p>
      <FButton>Subscribe</FButton>
    </div>
  );
};

export default SubscribeNewsletter;
