import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AuthUser from '../../Authentication/Validation/AuthUser';
import { Document_tpye } from '../../Property/ProjectData';

const EditProjectDocument = ({ projectDetails,setUpdatedDocumentFile }) => {
  const { callApi, imgPath } = AuthUser();
  const [activeTab, setActiveTab] = useState('');
  const [imageFile, setImageFile] = useState([]);

  useEffect(() => {
    if (projectDetails) {
      const document = projectDetails.images || [];
      setImageFile(document);
    }
  }, [projectDetails]);

  const handleTabClick = (type) => {
    setActiveTab(type);
  };

  const getFilteredImages = () => {
    const activeImages = imageFile.find((item) => item.doc_name === activeTab);
    return activeImages ? activeImages.details : [];
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
        item.doc_name === activeTab
          ? {
              ...item,
              details: item.details.filter((_, idx) => idx !== index),
            }
          : item
      );

      setImageFile(updatedImageFile);
      setUpdatedDocumentFile(updatedImageFile)
     

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
          if (item.doc_name === activeTab) {
            return {
              ...item,
              details: [
                ...item.details,
                ...uploadedFiles.map((file) => ({ image: file.filename })),
              ],
            };
          }
          return item;
        });

        if (!updatedImageFile.some((item) => item.doc_name === activeTab)) {
          updatedImageFile.push({
            doc_name: activeTab,
            details: uploadedFiles.map((file) => ({ image: file.filename })),
          });
        }

        return updatedImageFile;
      });
      setUpdatedDocumentFile((prevImageFile) => {
        const updatedImageFile = prevImageFile.map((item) => {
          if (item.doc_name === activeTab) {
            return {
              ...item,
              details: [
                ...item.details,
                ...uploadedFiles.map((file) => ({ image: file.filename })),
              ],
            };
          }
          return item;
        });

        if (!updatedImageFile.some((item) => item.doc_name === activeTab)) {
          updatedImageFile.push({
            doc_name: activeTab,
            details: uploadedFiles.map((file) => ({ image: file.filename })),
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

  console.log(imageFile)
  return (
    <div>
      <div className="bg-danger mt-1">
        <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
          {Document_tpye.map((tab, index) => (
            <li className="nav-item" key={index}>
              <button
                onClick={() => handleTabClick(tab.type)}
                className={`btn btn-warning text-light mb-2 ml-0 ${
                  activeTab === tab.type ? 'active' : ''
                }`}
                style={{ marginRight: '10px' }}
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

export default EditProjectDocument;
