import React from "react";
import PostProject from "./Chat/PostProject";

const PostProperty = () => {
  return (
    <>
      <div className="short-banner">
        <div className="container">
          <h1>Post your Property Ad for free</h1>
        </div>
      </div>

      <section className="post-page">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <aside className="col-lg-5 col-12">
              <div className="spaceX">
                <h2>Sell or Rent your Property</h2>
                <img
                  src="./images/property-vector.png"
                  alt="Property Vector Icon"
                  className="img-fluid mb-4"
                />
                <h4 className="text-uppercase">Safety Tips</h4>
                <div className="ad-post-points">
                  <h3>Points before Selling a Property Online</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <span className="material-icons-outlined">ads_click</span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Post your Property Ad</h4>
                      <p>
                        This is some content from a media component. You can
                        replace this with any content and adjust it as needed.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <span className="material-icons-outlined">
                        add_photo_alternate
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Add Quality Photos</h4>
                      <p>
                        This is some content from a media component. You can
                        replace this with any content and adjust it as needed.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <span className="material-icons-outlined">add_location</span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Add Correct Locality/Address</h4>
                      <p>
                        This is some content from a media component. You can
                        replace this with any content and adjust it as needed.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <span className="material-icons-outlined">article</span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Write a Great Description</h4>
                      <p>
                        This is some content from a media component. You can
                        replace this with any content and adjust it as needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <aside className="col-lg-7 col-12">
              <PostProject />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostProperty;
