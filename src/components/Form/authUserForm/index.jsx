import { Button, Form, Input, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Age } from "./authUserForm.styled";

const UserForm = ({
  userAuthData,
  onChangeHandler,
  onChangeGenderFromSelect,
  newInterest,
  handleInputChange,
  addInterestHandler,
}) => {
  return (
    <Form
      wrapperCol={{
        span: 18,
      }}>
      <Form.Item>
        <Space>
          <Form.Item
            style={{
              width: "100%",
              marginBottom: 0,
              color: "white",
            }}>
            Name:
            <Input
              name="name"
              value={userAuthData?.name || ""}
              onChange={onChangeHandler}
              style={{
                marginBottom: 0,
                width: 150,
              }}
              placeholder="Your name"
            />
          </Form.Item>
          <Form.Item
            style={{
              marginBottom: 0,
              color: "white",
              width: 150,
            }}>
            Age:
            <Age
              type="number"
              name="age"
              placeholder="Your age"
              value={userAuthData?.age || ""}
              onChange={onChangeHandler}
            />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item>
        <Space>
          <Form.Item
            style={{
              color: "white",
            }}>
            City:
            <Input
              name="city"
              placeholder="City"
              style={{
                marginBottom: 0,
                width: 150,
              }}
              value={userAuthData?.city || ""}
              onChange={onChangeHandler}
            />
          </Form.Item>
          <Form.Item
            style={{
              marginTop: -10,
              color: "white",
            }}>
            Gender:
            <Select
              style={{ width: 150, height: 22 }}
              onChange={onChangeGenderFromSelect}
              defaultValue={userAuthData.gender === "Male" && "Male"}
              placeholder="Select a gender"
              optionFilterProp="children"
              options={[
                {
                  value: "male",
                  label: "Male",
                },
                {
                  value: "female",
                  label: "Female",
                },
                {
                  value: "Not mentioned",
                  label: "Not mentioned",
                },
              ]}
            />
          </Form.Item>
        </Space>
      </Form.Item>
      <Space>
        <Form.Item
          style={{
            display: "flex",
            color: "white",
          }}>
          Description:
          <TextArea
            placeholder="Profile description"
            value={userAuthData?.description || ""}
            onChange={onChangeHandler}
            style={{ width: 410, resize: "none", height: 80 }}
            name="description"
          />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
          }}>
          Interests:
          <TextArea
            value={userAuthData?.interests || ""}
            readOnly
            placeholder="Click add to set interests..."
            style={{ width: 410, resize: "none" }}
          />
        </Form.Item>
      </Space>
      <Space>
        <Input
          value={newInterest}
          placeholder="Add new interest"
          onChange={handleInputChange}
          name="interests"
        />
        <Button onClick={addInterestHandler} style={{ height: 40, margin: 4 }}>
          Add
        </Button>
      </Space>
    </Form>
  );
};

export default UserForm;
