import React from "react";
import { Carousel } from "antd";
import userStore from "../../store/users";
const contentStyle = {
  margin: 0,
  height: "300px",
  width: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const PhotoCarousel = ({ id }) => {
  const user = userStore.getUserById(Number(id));

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} style={{ borderRadius: 20 }}>
      {!user?.photoGallery ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}>
          <span>No photos</span>
        </div>
      ) : (
        <>
          {user?.photoGallery.map((photo) => (
            <div key={photo.id}>
              <h3 style={contentStyle}>
                <img src={photo.thumbUrl} alt="photos" />
              </h3>
            </div>
          ))}
        </>
      )}
    </Carousel>
  );
};
export default PhotoCarousel;
