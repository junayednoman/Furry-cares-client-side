import { Col, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./FInputError";

type TTextAreaProps = {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  rows?: number;
};

const FTextArea = ({
  name,
  label,
  placeholder,
  disabled,
  colSpanLg,
  colSpanMd,
  rows = 4,
}: TTextAreaProps) => {
  return (
    <Col
      span={24}
      lg={{ span: colSpanLg }}
      md={{ span: colSpanMd }}
      className="mx-auto"
    >
      <div className="flex items-center justify-center">
        <Controller
          name={name}
          render={({ field, fieldState: error }) => (
            <div className="w-full">
              <Form.Item
                htmlFor={name}
                label={label}
                className="mb-3 font-semibold"
              >
                <Input.TextArea
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-none focus:border-primaryColor focus:shadow-none hover:border-primaryColor dark:text-gray-300 hover:dark:bg-primaryColor hover:dark:border-gray-300 focus:dark:bg-primaryColor focus:dark:border-gray-300 dark:bg-primaryColor dark:border-gray-500"
                  size="large"
                  rows={rows}
                />
                {error && (
                  <RInputError message={error?.error?.message as string} />
                )}
              </Form.Item>
            </div>
          )}
        />
      </div>
    </Col>
  );
};

export default FTextArea;
