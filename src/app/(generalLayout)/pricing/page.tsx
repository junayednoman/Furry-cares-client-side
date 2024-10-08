import PricingPlan from "@/app/modules/price page/PricingPlan";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
const freeIncludings = [
  "Basic pet care tips and stories",
  "Comment and upvote/downvote",
  "Create and share public posts",
];
const freeExcludings = [
  "No access to premium content",
  "Limited image uploads per post",
  "Google adsense",
];

const proIncludings = [
  ...freeIncludings,
  "Exclusive Pet Care Tips",
  "Exclusive access to AI 🪄",
  "Premium Content Library",
  "Ad-Free Experience",
  "Downloadable Resources",
];

const Pricing = () => {
  return (
    <div className="md:py-24 py-12">
      <FContainer>
        <FSectionTitle
          heading="Pricing Plans"
          subHeading="Choose the Perfect Plan for Your Pet Care Journey"
        />
        <div className="mt-10 flex md:flex-row flex-col md:items-start items-center justify-center lg:gap-10 md:gap-x-6 gap-y-6">
          <PricingPlan
            includings={freeIncludings}
            excludings={freeExcludings}
            title="Free Plan"
            price={0}
            description="The Free Plan offers access to essential pet care tips and stories, plus community engagement through comments and upvotes"
          />
          <PricingPlan
            includings={proIncludings}
            title="Premium Subscription"
            price={20}
            description="Unlock a world of exclusive pet care insights, inspiring stories, and ad-free browsing with our Premium Plan."
          />
        </div>
      </FContainer>
    </div>
  );
};

export default Pricing;
