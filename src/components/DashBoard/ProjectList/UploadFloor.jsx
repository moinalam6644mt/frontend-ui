import React, { useState } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import { toast } from "react-toastify";

const UploadFloorPlan = ({
  setJsonData,
  currentTab,
  setFloorData,
}) => {
  const { callApi } = AuthUser();
  const [inputsDisabled, setInputsDisabled] = useState(false);

  const handleFileChange = (event) => {
    const Files = event.target.files;
    const fileArray = Array.from(Files);
    uploadFiles(fileArray);
  };

  const uploadFiles = async (fileArray) => {
    console.log(fileArray)
    try {
      for (const file of fileArray) {
        const response = await callApi({
          api:"/upload_project_file",
          method: "UPLOAD",
          data: {
            images: file,
            document:currentTab,
          },
        });
        if (response && response.files) {
          const imageUrl = response.files[0];

          setFloorData((prevImageData) => {
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
          toast.success("Upload successfully!");

          setJsonData((prevData) => {
            const tabExists = prevData.floor_plan.some(
              (item) => item.type === currentTab
            );
            if (tabExists) {
              return {
                ...prevData,
                floor_plan: prevData.floor_plan.map((item) =>
                  item.type === currentTab
                    ? {
                        ...item,
                        images: [
                          ...item.images,
                          {
                            filename: imageUrl.filename,
                          },
                        ],
                      }
                    : item
                ),
              };
            } else {
              return {
                ...prevData,
                floor_plan: [
                  ...prevData.floor_plan,
                  {
                    type: currentTab,
                    images: [{ filename: imageUrl.filename }],
                  },
                ],
              };
            }
          });

        } else {
          console.error("Upload failed, no files returned.");
        }
      }
    }catch (error) {
      console.error("Error occurred while uploading files.");
    }
  };

  return (
    <div>
     Floor Plan : <input
        type="file"
        multiple
        onChange={handleFileChange}
        disabled={inputsDisabled}
      />
      <br />
      
    </div>
  );
};

export default UploadFloorPlan;
