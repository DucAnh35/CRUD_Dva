import React, { Component } from 'react';
import form from "./form.scss";
import { Form, Input, Button } from "antd";
class FormComponent extends Component {
  constructor(props){
    super(props);
    const {dataEdit,edit} = this.props;
    this.state={
      id: edit ? dataEdit.id : "",
      title: edit ? dataEdit.title : "",
      images: edit ? dataEdit.images : "",
      categories: edit ? dataEdit.categories : "",
      gmails: edit ? dataEdit.gmails : "",
      address: edit ? dataEdit.address : "",
    }
  }
  onChangerView = () => {
    this.props.onChangerView();
  };
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if(this.props.edit){
          values.id = this.state.id;
          this.props.onUpdate(values);
          this.onReset();
        }else{
          this.props.onAdd(values)
          this.onReset();
        }
      }
    });
  }
  onReset(){
    this.setState({
      title: "",
      images: "",
      categories: "",
      gmails: "",
      address: "",
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };
    return (
      <div className={form.form}>
      <div className={form.formHeader}>
        <h2 className={form.formTitle}>Form CRUD Dva</h2>
      </div>
      <div className={form.formContent}>
        <div className={form.tableAdd}>
          <Button
            type="primary"
            className={form.button}
            onClick={this.onChangerView}
          >
            Back 
          </Button>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Title" className={form.formItem} hasFeedback>
            {getFieldDecorator("title", {
              initialValue: this.state.title,
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "The title is not valid"
                }
              ]
            })(<Input className={form.formInput} />)}
          </Form.Item>
          <Form.Item label="Images" className={form.formItem} hasFeedback>
            {getFieldDecorator("images", {
              initialValue: this.state.images,
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "The author is not valid"
                }
              ]
            })(<Input className={form.formInput} />)}
          </Form.Item>
          <Form.Item label="Categories" className={form.formItem} hasFeedback>
            {getFieldDecorator("categories", {
              initialValue: this.state.categories,
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "The categories is not valid"
                }
              ]
            })(<Input className={form.formInput} />)}
          </Form.Item>
          <Form.Item label="Gmails" className={form.formItem} hasFeedback>
            {getFieldDecorator("gmails", {
              initialValue: this.state.gmails,
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "The tags is not valid"
                }
              ]
            })(<Input className={form.formInput} />)}
          </Form.Item>
          <Form.Item label="Address" className={form.formItem} hasFeedback>
            {getFieldDecorator("Address", {
              initialValue: this.state.address,
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "The visibility is not valid"
                }
              ]
            })(<Input className={form.formInput} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className={form.formItem}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    );
  }
}

export default Form.create()(FormComponent);