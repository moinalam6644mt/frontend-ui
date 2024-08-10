import React, { useState } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import { toast } from "react-toastify";

const UploadDocument = ({
  nextQuestion,
  setJsonData,
  currentTab,
  setDocumentData,
}) => {
  const { callApi } = AuthUser();
  const [inputsDisabled, setInputsDisabled] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [imagePreview, setImagePreview] = useState([]);

  const handleFileChange = (event) => {
    const Files = event.target.files;
    const fileArray = Array.from(Files);
    uploadFiles(fileArray);
  };

  const uploadFiles = async (fileArray) => {
    console.log(fileArray);
    try {
      const uploadedImages = [];
      for (const file of fileArray) {
        const response = await callApi({
          api: "/upload_project_file",
          method: "UPLOAD",
          data: {
            images: file,
            document: currentTab,
          },
        });
        if (response && response.files) {
          const imageUrl = response.files[0];

          setDocumentData((prevImageData) => {
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

          uploadedImages.push(imageUrl.url); 
          
          setJsonData((prevData) => {
            const tabExists = prevData.document.some(
              (item) => item.type === currentTab
            );

            const updatedImage = {
              filename: imageUrl.filename,
              url: imageUrl.url, // Save the URL for preview
            };

            if (tabExists) {
              return {
                ...prevData,
                document: prevData.document.map((item) =>
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
                document: [
                  ...prevData.document,
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

      setImagePreview((prev) => [...prev, ...uploadedImages]); // Update image preview
    } catch (error) {
      console.error("Error occurred while uploading files:", error);
    }
  };

  const SaveFileData = () => {
    nextQuestion();
    setInputsDisabled(true);
    setIsButtonDisabled(true);
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
        </div>
      )}
      <button onClick={SaveFileData} disabled={isButtonDisabled}>
        Next
      </button>
    </div>
  );
};

export default UploadDocument;
