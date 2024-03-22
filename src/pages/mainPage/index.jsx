import { Breadcrumb, theme } from "antd";
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

const MainPage = observer(() => {
  const [userList, setUserList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const users = useMemo(() => {
    let result = [...userList];
    if (searchText !== "") {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    // if (selectedArtists.length > 0) {
    //   result = result.filter((track) => selectedArtists.includes(track.author));
    // }
    // if (selectedGenres.length > 0) {
    //   result = result.filter((track) => selectedGenres.includes(track.genre));
    // }
    // if (selectedFilters.year === "New") {
    //   result.sort(
    //     (a, b) => new Date(a.release_date) - new Date(b.release_date)
    //   );
    // } else if (selectedFilters.year === "Old") {
    //   result.sort(
    //     (a, b) => new Date(b.release_date) - new Date(a.release_date)
    //   );
    // }
    return result;
  }, [userList, searchText]);

  useEffect(() => {
    userStore.saveUsersToLocalStorage();
    setUserList(userStore.users);
  }, []);

  return (
    <S.SharedLayout style={{ background: colorBgContainer }}>
      <S.SharedHeader style={{ background: colorBgContainer }}>
        <Burger />
        <Logo />
      </S.SharedHeader>
      <S.FiltersBox>
        <S.SearchAndSortContainer>
          <SearchBar onChange={(value) => setSearchText(value)} />
        </S.SearchAndSortContainer>
      </S.FiltersBox>
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
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Home" }]}></Breadcrumb>
          <UserList users={users} />
        </Container>
      </Content>
    </S.SharedLayout>
  );
});

export default MainPage;
