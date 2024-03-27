import React, { useState } from "react";
import { Carousel } from "antd";
import userStore from "../../store/users";
import { observer } from "mobx-react-lite";
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
const PhotoCarousel = observer(({ userID }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const user = userStore.getUserById(Number(userID));

  const onChange = (currentSlide) => {
    setCurrentSlide(currentSlide + 1);
  };
  return (
    <>
      <Carousel afterChange={onChange} style={{ borderRadius: 20 }}>
        <Carousel afterChange={onChange}>
          {user.photoGallery.map((photo) => (
            <div key={photo.id}>
              <img src={photo} alt="photo_gallery" style={contentStyle}></img>
            </div>
          ))}
        </Carousel>
      </Carousel>{" "}
      {user.photoGallery.length === 0 ? (
        <div
          style={{
            width: "100%",
            height: "80%",
            textAlign: "center",
            justifyItems: "center",
            color: "#bdbdbd",
            borderRadius: 20,
            border: "1px solid gray",
          }}>
          <p>No photo</p>
        </div>
      ) : (
        <span>{currentSlide}</span>
      )}
    </>
  );
});
export default PhotoCarousel;
