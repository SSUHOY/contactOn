import * as S from "./searchBar.styled";

const SearchBar = () => {
  return (
    <S.CenterBlock>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        id="search-bar"
        // onChange={(e) => onChange(e.target.value)}
      />
    </S.CenterBlock>
  );
};

export default SearchBar;
