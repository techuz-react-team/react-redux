import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Layout } from "antd";
import * as ACTIONS from "../actions/actions";
const { Content } = Layout;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddPost = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ title: "", body: "" });
  const userId = useSelector((state) => state.userId);

  const onFinish = (values) => {
    values.userId = userId;
    // dispatch(ACTIONS.SHOW_LOADER())
    dispatch(ACTIONS.savePost(values));
  };

  const handleOnChange = (name) => (e) => {
    e.persist();
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Content>
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
            value={values.title}
            onChange={handleOnChange("title")}
            rules={[{ required: true, message: "Please enter title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Content"
            name="body"
            value={values.body}
            onChange={handleOnChange("body")}
            rules={[{ required: true, message: "Please enter content!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Add Post
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddPost;
