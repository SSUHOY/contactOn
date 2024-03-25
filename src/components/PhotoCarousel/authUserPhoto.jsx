import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import userStore from "../../store/users";
const contentStyle = {
  margin: 0,
  height: "300px",
  width: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "transparent",
  borderRadius: 20,
  paddingBottom: 20,
  border: "1px solid gray",
};
const AuthUserPhotoCarousel = () => {
  const [showedImages, setShowedImages] = useState([]);
  const authUser = userStore.getAuthorizedUser();
  useEffect(() => {
    setShowedImages(authUser?.photoGallery || []);
  }, [authUser]);
  return (
    <>
      <Carousel style={{ borderRadius: 20 }}>
        <Carousel>
          {showedImages.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt="gallery" style={contentStyle}></img>
            </div>
          ))}
        </Carousel>
      </Carousel>{" "}
      {showedImages.length === 0 ? (
        <div
          style={{
            width: "100%",
            height: "80%",
            textAlign: "center",
            justifyItems: "center",
            color: "#bdbdbd",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            border: "1px solid gray",
          }}>
          <p>No photo</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default AuthUserPhotoCarousel;
