import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";
import userStore from "../../store/users";

const UploadPhotos = ({ userAuthData, setAuthUserData, setIsSaveAll }) => {
  const [saved, setIsSaved] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = previewImage;
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setIsSaveAll(false);
    setIsSaved(false);
  };
  const handleSavePhotosToGallery = () => {
    userStore.addToPhotoGallery(fileList);
    setIsSaved(false);
    const imgURLs = fileList.map((image) => image.thumbUrl);
    setAuthUserData({ ...userAuthData, photoGallery: imgURLs });
    setFileList([]);
    setIsSaved(true);
  };

  const emptyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button">
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </button>
  );

  return (
    <>
      <Upload
        customRequest={emptyRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}>
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
      {fileList.length !== 0 ? (
        <Button onClick={handleSavePhotosToGallery} disabled={saved}>
          {saved ? "Saved!" : "Save"}
        </Button>
      ) : (
        ""
      )}
    </>
  );
};
export default UploadPhotos;
