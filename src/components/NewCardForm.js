import React, { useEffect } from "react";
import { Button, Form, Input, Space, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { SwapLeftOutlined } from "@ant-design/icons";
import '../App.scss';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function NewCardForm({ card }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (card) {
      form.setFieldsValue(card);
    }
  }, []);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <h2 className="return-zone">
        <Button type="dashed" onClick={() => navigate(-1)}>
          <SwapLeftOutlined />
        </Button>
        <span>Back</span>
      </h2>
      <h1>Create New Card</h1>
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          margin: "auto",
        }}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            flexGrow: 1,
          }}
        >
          <Input placeholder="Enter card name" />
        </Form.Item>

        <div style={col2}>
          <Form.Item
            name="number"
            label="Number"
            rules={[
              {
                required: true,
              },
            ]}
            style={{ flexGrow: 1 }}
          >
            <Input
              style={{
                width: "100%",
              }}
              placeholder="0000 0000 0000 0000"
            />
          </Form.Item>

          <Form.Item
            name="cvv"
            label="CVV"
            rules={[
              {
                required: true,
                max: 3,
              },
            ]}
            style={{ flexGrow: 1 }}
          >
            <Input
              style={{
                width: "100%",
              }}
              placeholder="000"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="expireDate"
          label="Expire Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker onChange={onChange} />
        </Form.Item>

        <Form.Item
          style={{
            textAlign: "center",
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}

const col2 = {
  display: "flex",
  gap: 10,
};
