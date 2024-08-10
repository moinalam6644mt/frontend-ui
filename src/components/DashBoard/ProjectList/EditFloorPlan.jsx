import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AuthUser from '../../Authentication/Validation/AuthUser';
import { bhk_type } from '../../Property/ProjectData';

const EditFloorPlan = ({ projectDetails ,setUpdatedFloorPlan}) => {
  const { callApi, imgPath } = AuthUser();
  const [activeTab, setActiveTab] = useState('');
  const [imageFile, setImageFile] = useState([]);

  useEffect(() => {
    if (projectDetails) {
      const document = projectDetails.floorPlanImage || [];
      setImageFile(document);
    }
  }, [projectDetails]);

  const handleTabClick = (name) => {
    setActiveTab(name);
  };

  const getFilteredImages = () => {
    const activeImages = imageFile.find((item) => item.bhk_type === activeTab);
    return activeImages ? activeImages.images : [];
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      uploadFile(files);
    }
  };

  const handleDelete = async (index) => {
    try {
      const updatedImageFile = imageFile.map((item) =>
        item.key_name === activeTab
          ? {
              ...item,
              images: item.images.filter((_, idx) => idx !== index),
            }
          : item
      );

      setImageFile(updatedImageFile);
      setUpdatedFloorPlan(updatedImageFile)

      toast.success('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image');
    }
  };

  const uploadFile = async (fileArray) => {
    try {
      const responses = await Promise.all(
        fileArray.map((file) =>
          callApi({
            api: '/upload_project_file',
            method: 'UPLOAD',
            data: {
              images: file,
              document: activeTab,
            },
          })
        )
      );

      const uploadedFiles = responses.flatMap((response) => response.files);

      setImageFile((prevImageFile) => {
        const updatedImageFile = prevImageFile.map((item) => {
          if (item.key_name === activeTab) {
            return {
              ...item,
              images: [
                ...item.images,
                ...uploadedFiles.map((file) => ({ image: file.filename })),
              ],
            };
          }
          return item;
        });
        

        if (!updatedImageFile.some((item) => item.key_name === activeTab)) {
          updatedImageFile.push({
            key_name: activeTab,
            images: uploadedFiles.map((file) => ({ image: file.filename })),
          });
        }

        return updatedImageFile;
      });

      setUpdatedFloorPlan((prevImageFile) => {
        const updatedImageFile = prevImageFile.map((item) => {
          if (item.key_name === activeTab) {
            return {
              ...item,
              images: [
                ...item.images,
                ...uploadedFiles.map((file) => ({ image: file.filename })),
              ],
            };
          }
          return item;
        });
        

        if (!updatedImageFile.some((item) => item.key_name === activeTab)) {
          updatedImageFile.push({
            key_name: activeTab,
            images: uploadedFiles.map((file) => ({ image: file.filename })),
          });
        }

        return updatedImageFile;
      });


      toast.success('Images uploaded successfully');
    } catch (error) {
      console.error('Error occurred while uploading images:', error);
      toast.error('Failed to upload images');
    }
  };

  console.log(activeTab)
  return (
    <div>
      <div className="bg-danger mt-1">
        <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
          {bhk_type.map((tab, index) => (
            <li className="nav-item" key={index}>
              <button
                onClick={() => handleTabClick(tab.name)}
                className={`btn btn-warning text-light  ${
                  activeTab === tab.name ? 'active' : ''
                }`}
                style={{ marginRight: '10px', }}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
        {activeTab && (
          <div className="masonryGrid">
            {getFilteredImages().map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={`${imgPath}/${image.image}`}
                  alt={`image-${index}`}
                  height={200}
                  width={200}
                />
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        )}
        <div>
          <input type="file" multiple onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default EditFloorPlan;
