import { Col, Form, Checkbox } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./FInputError";
type TCheckboxProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  onChange?: (e: any) => void;
};

const FCheckbox = ({
  name,
  label,
  disabled,
  colSpanLg,
  colSpanMd,
  onChange,
}: TCheckboxProps) => {
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
                name={name}
                htmlFor={name}
                className="mb-3 font-semibold text-text"
              >
                <Checkbox
                  id={name}
                  disabled={disabled}
                  {...field}
                  onChange={onChange}
                >
                  {label}
                </Checkbox>
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

export default FCheckbox;
