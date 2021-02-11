import React, { useEffect, useState } from "react";
import { Form, Input, Button, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../actions/actions";

const { Content } = Layout;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditPost = ({ match }) => {
  const [form] = Form.useForm();
  const { id } = match.params;

  const post = useSelector((state) => state.singlePost);

  const [values, setValues] = useState({
    title: post.title,
    body: post.body,
  });

  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.getPostsById(id));
  }, []);

  const onFinish = (values) => {
    values.userId = userId;
    dispatch(ACTIONS.updatePost(values, id));
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

  useEffect(() => {
    form.setFieldsValue({
      title: post.title,
      body: post.body,
    });
  }, [post]);

  return (
    <Layout>
      <Content>
        <Form
          {...layout}
          form={form}
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
              Edit Post
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditPost;
