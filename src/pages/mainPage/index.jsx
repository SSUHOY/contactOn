import { theme } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import * as S from "../../components/Shared/Layout/index";
import UserList from "../../components/UserList";
import Burger from "../../components/BurgerMenu";
import { observer } from "mobx-react-lite";
import userStore from "../../store/users";
import { Content } from "../../components/Shared/Layout/index";
import Logo from "../../components/Shared/Logo";
import { Container } from "../../components/Shared/Container";
import SearchBar from "../../components/SearchBar";
import DropDown from "../../components/Dropdown";

const MainPage = observer(() => {
  const isAuth = userStore.isAuth;
  const authUser = userStore.getAuthorizedUser();

  const [userList, setUserList] = useState([]);
  const [searchType, setSearchType] = useState(null);
  const [gender, setGender] = useState("");
  const [searchText, setSearchText] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const typeSelection = (e) => {
    switch (e) {
      case "name":
        setSearchType("Name");
        break;
      case "age":
        setSearchType("Age");
        break;
      case "city":
        setSearchType("City");
        break;
      case "gender":
        setSearchType("Gender");
        break;
      case "interests":
        setSearchType("Interests");
        break;
      default:
        setSearchType("Name");
        break;
    }
  };
  const users = useMemo(() => {
    let result = [...userList];
    if (searchType === "Name" && searchText !== "") {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (searchType === "Age" && searchText !== "") {
      result = result.filter((user) =>
        user.age.toString().includes(searchText)
      );
    }
    if (searchType === "City" && searchText !== "") {
      result = result.filter((user) =>
        user.city.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (searchType === "Gender" && gender !== "") {
      result = result.filter((user) =>
        user.gender.toLowerCase().includes(gender.toLowerCase())
      );
    }
    if (searchType === "Interests" && searchText !== "") {
      result = result.filter((user) =>
        user.interests.includes(searchText.toLowerCase())
      );
    }
    return result;
  }, [userList, searchText, gender]);

  useEffect(() => {
    userStore.saveUsersToLocalStorage();
    setUserList(userStore.users);
  }, []);

  return (
    <S.SharedLayout style={{ background: colorBgContainer }}>
      <S.SharedHeader style={{ background: colorBgContainer }}>
        <Burger />
        {isAuth ? (
          <S.UsersUI>
            <DropDown />
          </S.UsersUI>
        ) : (
          ""
        )}
        <Logo />
      </S.SharedHeader>
      <S.FiltersBox>
        <S.SearchAndSortContainer>
          <SearchBar
            onChange={(e) => setSearchText(e)}
            typeSelection={typeSelection}
            searchType={searchType}
            changeGender={(e) => setGender(e)}
          />
        </S.SearchAndSortContainer>
      </S.FiltersBox>

      <br />
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Container
          style={{
            borderRadius: borderRadiusLG,
            background: colorBgContainer,
          }}>
          <UserList users={users} />
        </Container>
      </Content>
    </S.SharedLayout>
  );
});

export default MainPage;
