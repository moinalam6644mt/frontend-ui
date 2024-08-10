import React, { useState } from 'react';
import AuthUser from "../../Authentication/Validation/AuthUser";
import { toast } from 'react-toastify';

const UploadMasterImage = ({ setJsonData, nextQuestion ,setMasterData }) => {
  const { callApi } = AuthUser();
  const [imagePreview, setImagePreview] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    uploadFiles(fileArray);
  };

  const uploadFiles = async (fileArray) => {
    try {
      const uploadedImages = [];
      const ReviewImages = [];

      for (const file of fileArray) {
        const formData = new FormData();
        formData.append('images', file);

        const response = await callApi({
          api: "/project_image",
          method: "POST",
          data: formData,
        });

        if (response && response.files) {
          const imageUrl = response.files[0];
          toast.success("Upload successful!");

          uploadedImages.push(imageUrl.filename);
          ReviewImages.push(imageUrl.url);


          setJsonData((prevData) => ({
            ...prevData,
            master_image: uploadedImages,
          }));
        } else {
          toast.error("Upload failed, no files returned.");
          console.error("Upload failed, no files returned.");
        }
      }

      setImagePreview((prev) => [...prev, ...ReviewImages]);
      setMasterData((prev) => [...prev, ...ReviewImages]);
    } catch (error) {
      toast.error("Error occurred while uploading files.");
      console.error("Error occurred while uploading files:", error);
    }
  };

  return (
    <div>
      <input type='file' multiple onChange={handleFileChange} />
      <br />

      {imagePreview.length > 0 && (
        <>
          <div className="d-flex flex-wrap">
            {imagePreview.map((imageUrl, index) => (
              <div key={index} className="col-2 p-2">
                <div className="selected-image-container position-relative">
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
          <button onClick={nextQuestion} className="btn btn-primary mt-3">Next</button>
        </>
      )}
    </div>
  );
};

export default UploadMasterImage;
