import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./notFound.styles";
import { Button } from "antd";

const NotFound = () => {
  return (
    <>
      <Container>
        <div>Oooops. Page not found</div>
        <br />
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
