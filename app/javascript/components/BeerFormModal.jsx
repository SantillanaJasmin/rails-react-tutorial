import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";

const { Item } = Form;
const { Option } = Select;

class BeerFormModal extends React.Component {
  formRef = React.createRef();

  handleCancel = () => {
    this.props.toggleVisibility();
  }

  onFinish = (values) => {
    fetch(this.props.url, {
      method: this.props.method,
      headers: {
        "Authorization": "Basic " + btoa('username:password'),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        this.props.reloadBeers();
      })
      .catch((err) => console.error("Error: " + err));
  };

  render() {
    let { header, visible } = this.props;
    let { brand, country, quantity, style} = this.props.beer;

    var initialValues = {
      brand: brand,
      country: country,
      quantity: quantity,
      style: style
    };

    return (
      <>
        <Modal title={header} visible={visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" initialValues={initialValues} onFinish={this.onFinish}>
            <Item name="brand" label="Brand" rules={[{ required: true, message: "Please input your beer brand!" }]}>
              <Input placeholder="Input your beer brand" />
            </Item>
    
            <Item name="style" label="Style" rules={[{ required: true, message: "Please input your beer style!" }]}>
              <Input placeholder="Input your beer style" />
            </Item>
    
            <Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please input the country of the beer!",
                },
              ]}
            >
              <Select showSearch placeholder="Select your beer country" optionFilterProp="children" style={{ width: "100%" }}>
                <Option value="Finland">Finland</Option>
                <Option value="Germany">Germany</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="UK">UK</Option>
                <Option value="USA">USA</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Item>
    
            <Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
              <Input type="number" placeholder="How many beers you desire?" />
            </Item>
    
            <Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default BeerFormModal;