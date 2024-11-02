import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { Collapse, CollapseProps } from "antd";

const Faq = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is Furry Cares?",
      children: (
        <p>
          Furry Cares is a platform where pet owners can share tips, stories,
          and advice on pet care while connecting with other pet lovers.
        </p>
      ),
    },
    {
      key: "2",
      label: "How can I contribute to Furry Cares?",
      children: (
        <p>
          You can contribute by creating an account, sharing your pet stories,
          tips, or experiences, and interacting with the community.
        </p>
      ),
    },
    {
      key: "3",
      label: "Is there a premium membership available?",
      children: (
        <p>
          Yes, we offer premium membership options that give access to exclusive
          content, in-depth pet care guides, and expert consultations.
        </p>
      ),
    },
    {
      key: "4",
      label: "How do I contact customer support?",
      children: (
        <p>
          You can contact our support team by sending an email to support@Furry
          Cares.com or through the contact form on our website.
        </p>
      ),
    },
    {
      key: "5",
      label: "Can I submit pet care tips as an author?",
      children: (
        <p>
          Yes! As a registered user, you can submit articles, tips, and stories
          related to pet care and become a valued author on our platform.
        </p>
      ),
    },
    {
      key: "6",
      label: "What payment methods are accepted for premium membership?",
      children: (
        <p>
          We accept various payment methods including credit cards, PayPal, and
          Stripe. You can choose the method that works best for you.
        </p>
      ),
    },
    {
      key: "9",
      label: "How can I get my account verified?",
      children: (
        <p>
          To get your account verified on Furry Cares, ensure that your profile
          information is complete, including a profile picture and bio, and you
          have minimum of 5 posts and 15 up votes. Verified accounts are granted
          to users who are active and trusted within the community.
        </p>
      ),
    },
  ];

  return (
    <div className="md:py-20 py-16 bg-light">
      <FSectionTitle
        heading="Frequently Asked Questions"
        subHeading="Get answer to your queries"
      />
      <FContainer>
        <div className="lg:max-w-[800px] w-full mx-auto mt-10">
          <Collapse accordion items={items} />
        </div>
      </FContainer>
    </div>
  );
};

export default Faq;
