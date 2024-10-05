import { Col, Form } from "antd";
import { Controller } from "react-hook-form";
import { DatePicker } from "antd";
import RInputError from "./FInputError";

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
};

const FDatePicker = ({
  name,
  label,
  placeholder,
  disabled,
  colSpanLg,
  colSpanMd,
}: TDatePickerProps) => {
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
                className="mb-4 font-semibold"
              >
                <DatePicker
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal focus:border-text focus:shadow-text hover:border-text dark:text-gray-300 hover:dark:bg-primaryColor hover:dark:border-gray-300 focus:dark:bg-primaryColor focus:dark:border-gray-300 dark:bg-primaryColor dark:border-gray-500 rounded-[4px]"
                  size="large"
                  style={{ width: "100%" }}
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

export default FDatePicker;
