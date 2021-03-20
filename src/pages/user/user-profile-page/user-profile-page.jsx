import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectCurrentUser } from "../../../redux/selectors/user.selectors";
import UserMenu from "../../../components/user-menu";
import CustomButton from "../../../components/custom-button";

import {
  Container,
  ProfileContainer,
  Title,
  Form,
  Input,
  Label,
  Select,
  Option,
} from "./user-profile-page.styles";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
  });
  const user = useSelector(selectCurrentUser, shallowEqual);

  const { firstName, lastName, email, phone, birthDate } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    setUserData({ ...userData, gender: value });
    // dispatch(updateUserData(userData));
  };
  useEffect(() => {
    if (user !== undefined && user !== null) {
      const updatedUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        birthDate: user.birthDate,
      };
      setUserData(updatedUser);
    }
  }, [user]);
  return (
    <Container>
      {console.log("user", user)}
      <UserMenu />
      <ProfileContainer>
        <Title>Profile</Title>
        <Form onSubmit={handleSubmit}>
          <Label>First name</Label>
          <Input
            onChange={handleChange}
            placeholder="first name"
            type="text"
            name="firstName"
            value={firstName}
            label="firstName"
            required
          />
          <Label>Last name</Label>
          <Input
            onChange={handleChange}
            placeholder="last name"
            type="text"
            name="lastName"
            value={lastName}
            label="lastName"
            required
          />
          <Label>Birth Date</Label>
          <Input
            onChange={handleChange}
            placeholder="birth date"
            type="date"
            name="birthdate"
            value={birthDate}
            label="brith date"
            required
          />
          <Select name="gender" id="gender" required>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          <Label>Phone number</Label>
          <Input
            onChange={handleChange}
            placeholder="phone"
            type="tel"
            name="phone"
            value={phone}
            label="phone"
            pattern="123456789"
            required
          />
          <Label>Email</Label>
          <Input
            onChange={handleChange}
            placeholder="email"
            type="email"
            name="email"
            value={email}
            label="email"
            required
          />
          <CustomButton type="submit" color="standard">
            SAVE DATA
          </CustomButton>
        </Form>
      </ProfileContainer>
    </Container>
  );
};

export default UserProfilePage;
