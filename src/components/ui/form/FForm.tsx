import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TFormProps = {
  children: ReactNode;
  handleFormSubmit: SubmitHandler<FieldValues>;
  reset?: boolean;
} & TFormConfig;

const FForm = ({
  children,
  handleFormSubmit,
  defaultValues,
  resolver,
  reset,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);

  const onSubmit = async (data: FieldValues) => {
    await handleFormSubmit(data);
    if (reset) {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <Form
        style={{ width: "100%" }}
        layout="vertical"
        onFinish={methods.handleSubmit(onSubmit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default FForm;
