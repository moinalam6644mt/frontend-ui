import React, {useEffect, useState } from 'react'

import {useParams } from 'react-router-dom';
import AuthUser from '../Authentication/Validation/AuthUser';



const ShowAllImage = ({ property }) => {

    const { property_id} = useParams()

    const { callApi } = AuthUser();
    const [selectedImage, setSelectedImage] = useState([]);

    const [visibalImage, setVisibalImage] = useState(0)

    const [activeTab, setActiveTab] = useState("");
    useEffect(() => {
        getImageData()
    }, [property_id])

    const getImageData = async () => {

        try {
            const response = await callApi({
                api: `/get_all_image/${property_id}`,
                method: "GET",
            });
            if (response && response.success) {

                setSelectedImage(response.data);


            }
        } catch (error) {
            console.error("Error fetching property data:", error);
        }

    }

    const handleLeftClick = () => {
      
        setVisibalImage((prevVisibleImage) => prevVisibleImage - 1);
        
        setActiveTab( selectedImage[visibalImage-1].key_name)

    };


    const handleRightClick = () => {
        setVisibalImage((prevVisibleImage) => prevVisibleImage + 1);
        
        setActiveTab( selectedImage[visibalImage+1].key_name)
    };

    const handleKey = (key_name) => {
        const selectedTab =selectedImage.filter(tab => tab.key_name === key_name);
        console.log(selectedTab)
        setActiveTab(key_name)
        
        //console.log(selectedTab[visibalImage].key_id);
        if (selectedTab) {
            const index = selectedImage.findIndex(tab => tab.key_id === selectedTab[0].key_id);
            console.log(index)
           
                setVisibalImage(index)
      };
    }
    return (
        <>
            <div className="propertyViewModalWrapper" >
                <div className="propertyViewModal" style={{ display: 'block' }}>

                    <div className="tabSlider" >
                        <div className="slider-container">
                            <div className="slider-top-bar" style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between' }}>
                                <div className="topTitle">
                                    <span className="closeTab">
                                        <a href="javascript:void(0)"></a>
                                    </span>
                                    <span>Plot/Land for Sale in Ajman</span>
                                </div>
                                <div className="btnsGroup">
                                    <button className="btn btnBW clientAgent clientAgent2">Contact Builder</button>
                                </div>
                            </div>

                            <div className="navList" >
                                <ul className='nav-tabs' style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', cursor: 'pointer' }} >
                                    {property.data.gallery.map((tab, index) => (


                                        <li key={index} className={`nav-link ${tab.key_name == activeTab ? 'active' : ""}`} data-start="1" data-cat-key="Bedroom" onClick={() => handleKey(tab.key_name)}>
                                            {tab.key_name}({tab.images.length})
                                        </li>
                                    ))}
                                </ul>
                                <div className="bottomIndicator" id="bottomIndicator">
                                    {visibalImage + 1}/<span>{selectedImage.length}</span>
                                </div>
                            </div>


                            <div id="myGallery">
                                <div className="photoGallery" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <a href="javascript:void(0)" className="left-arrow" onClick={handleLeftClick}>
                                        {visibalImage === 0 ? (
                                            <button className="arrow leftArrow " disabled>Left</button>
                                        ) : (
                                            <button className="arrow leftArrow">Left</button>
                                        )}
                                    </a>
                                    <div className="imageContainer" style={{ marginLeft: '0px' }}>
                                        <div className="sliderImages" style={{ display: 'flex' }}>


                                            {selectedImage.map((image, index) => (
                                                index === visibalImage ? (
                                                    <img
                                                        key={index} // Make sure to add a unique key prop
                                                        className="img-2 active"
                                                        src={property.url + image.image}
                                                        category=""
                                                        type="image"
                                                        alt="Slider Image"
                                                    />
                                                ) : null
                                            ))}
                                        </div>
                                    </div>
                                    <a href="javascript:void(0)" className="left-arrow" onClick={handleRightClick}>
                                        {visibalImage + 1 === selectedImage.length ? (
                                            <button className="arrow leftArrow " disabled>Right</button>
                                        ) : (
                                            <button className="arrow leftArrow">Right</button>
                                        )}
                                    </a>
                                </div>
                            </div>

                            <div className="bottomIndicator" id="bottomIndicator" style={{ textAlign: 'center' }}>
                                {visibalImage + 1}/<span>{selectedImage.length}</span>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ShowAllImage
