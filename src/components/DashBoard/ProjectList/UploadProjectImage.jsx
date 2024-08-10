import React, { useState } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import { toast } from "react-toastify";

const UploadProjectImage = ({setJsonData, currentTab,ShowPreviewData ,setImageData}) => {
  const { callApi } = AuthUser();
  const [inputsDisabled, setInputsDisabled] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [imagePreview, setImagePreview] = useState([]);
  const [caption, setCaption] = useState("");
  const [tabFiles, setTabFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    setTabFiles(fileArray);

    const preview = fileArray.map((file) => URL.createObjectURL(file));
    setImagePreview(preview);
  };

  const uploadFiles = async (fileArray) => {
    try {
      for (const file of fileArray) {

        const response = await callApi({
          api: "/upload_project_file",
          method: "UPLOAD",
          data: {
            document:currentTab,
            images:file,
            caption:caption
          },
        });

        if (response && response.files) {
          const imageUrl = response.files[0];

          setImageData((prevImageData) => {
            const tabExists = prevImageData.some(
              (item) => item.key === currentTab
            );

            if (tabExists) {
              return prevImageData.map((item) =>
                item.key === currentTab
                  ? { ...item, images: [...item.images, imageUrl] }
                  : item
              );
            } else {
              return [
                ...prevImageData,
                {
                  key: currentTab,
                  images: [imageUrl],
                },
              ];
            }
          });

          toast.success("Upload successful!");
           setCaption('')
           setImagePreview('')
          setJsonData((prevData) => {
            const tabExists = prevData.gallery.some(
              (item) => item.type === currentTab
            );

            const updatedImage = {
              filename: imageUrl.filename,
              caption,
            };

            if (tabExists) {
              return {
                ...prevData,
                gallery: prevData.gallery.map((item) =>
                  item.type === currentTab
                    ? {
                        ...item,
                        images: [
                          ...item.images,
                          updatedImage,
                        ],
                      }
                    : item
                ),
              };
            } else {
              return {
                ...prevData,
                gallery: [
                  ...prevData.gallery,
                  {
                    type: currentTab,
                    images: [updatedImage],
                  },
                ],
              };
            }
          });
        } else {
          console.error("Upload failed, no files returned.");
        }
      }
    } catch (error) {
      console.error("Error occurred while uploading files.");
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

 
  const uploadImageData = () => {
    if (tabFiles.length > 0) {
      uploadFiles(tabFiles);
    } else {
      console.error("No files selected for", currentTab);
    }
  };

  const resetInput = () => {
    setImagePreview([]);
    setTabFiles([]);
    setCaption("");
    setInputsDisabled(false);
    setIsButtonDisabled(false);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        disabled={inputsDisabled}
      />
      <br />
      {imagePreview.length > 0 && (
        <div>
          {imagePreview.map((imageUrl, index) => (
            <div key={index} className="col-2">
              <div className="selected-image-container position-relative py-2">
                <img
                  src={imageUrl}
                  alt={`image-${index}`}
                  className="selected-image img-fluid"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
          <input
            type="text"
            placeholder="Enter image description"
            value={caption}
            onChange={handleCaptionChange}
          />
          <button
            className="btn"
            onClick={uploadImageData}
            disabled={isButtonDisabled}
          >
            Upload
          </button>
          <button className="btn" onClick={resetInput}>
            Reset
          </button>
        </div>
      )}
      <button onClick={ShowPreviewData}>Review Your Data</button>
    </div>
  );
};

export default UploadProjectImage;
