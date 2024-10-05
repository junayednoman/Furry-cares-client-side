import { Col, Form } from "antd";
import { Controller } from "react-hook-form";
import { TimePicker } from "antd";
import RInputError from "./FInputError";

type TTimePickerProps = {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
};

const FTimePicker = ({
  name,
  label,
  placeholder,
  disabled,
  colSpanLg,
  colSpanMd,
}: TTimePickerProps) => {
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
                <TimePicker
                  format={"HH:mm"}
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-[4px] focus:border-text focus:shadow-none hover:border-text"
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

export default FTimePicker;
