"use client";

/* eslint-disable react/no-unescaped-entities */
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FTextArea from "@/components/ui/form/FTextArea";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ContactForm = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <div className="md:py-20 py-16">
      <FContainer>
        <FSectionTitle heading="Contact Us" subHeading="Get in touch" />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-y-8 lg:mt-10 mt-5">
          <div>
            <div>
              <h5 className="text-text sm:text-2xl text-xl font-semibold lg:inline-block hidden">
                Get in touch
              </h5>
              <p className="mt-4 leading-6">
                We'd love to hear from you. If you have any questions, feedback
                or just want to say hi, please don't hesitate to contact us.
                We'll do our best to get back to you as soon as possible. We're
                always excited to hear from our users and appreciate any
                feedback that can help us improve our platform.
              </p>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold text-text text-base">Email</h5>
              <p>contact@furrycares.com</p>
            </div>
            <div className="mt-3">
              <h5 className="font-semibold text-text text-base">Phone</h5>
              <p>+880 123 456 789</p>
            </div>
          </div>
          <div>
            <FForm handleFormSubmit={handleSubmit}>
              <div className="space-y-2">
                <FInput
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                />
                <FInput
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />
                <FInput
                  label="Subject"
                  name="subject"
                  placeholder="Enter subject"
                />
                <FTextArea label="Message" name="message" rows={5} />
                <FButton htmlType="submit">Send</FButton>
              </div>
            </FForm>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default ContactForm;
