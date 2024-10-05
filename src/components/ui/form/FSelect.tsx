import { Col, Form, Select } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./FInputError";

const { Option } = Select;

type TSelectProps = {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  options: { value: string | number; label: string }[];
  mode?: "multiple";
};

const FSelect = ({
  name,
  label,
  placeholder,
  disabled,
  colSpanLg,
  colSpanMd,
  options,
  mode,
}: TSelectProps) => {
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
                <Select
                  mode={mode}
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-[4px] focus:border-accent focus:shadow-none hover:border-text"
                  size="large"
                >
                  {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
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

export default FSelect;
