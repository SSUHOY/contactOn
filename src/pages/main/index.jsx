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
import Fuse from "fuse.js";
import { toJS } from "mobx";

const Main = observer(() => {
  const isAuth = userStore.isAuth;

  const [userList, setUserList] = useState([]);
  const [searchType, setSearchType] = useState("");
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
    if (searchType && searchText !== "") {
      const options = {
        keys: [searchType.toLowerCase()],
      };
      const fuse = new Fuse(toJS(userList), options);
      const result = fuse.search(searchText);
      const items = result.map((result) => result?.item);
      return items;
    }
    if (searchType === "Gender" && gender !== "") {
      const options = {
        keys: ["gender"],
      };
      const fuse = new Fuse(toJS(userList), options);
      const result = fuse.search(gender);
      const items = result.map((result) => result?.item);
      return items;
    }
    return result;
  }, [userList, searchText, searchType, gender]);

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

export default Main;
