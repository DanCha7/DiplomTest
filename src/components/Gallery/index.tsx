import React from "react";
import styled from "styled-components";

const Gallery: React.FC = () => {
  return (
    <GalleryStyle>
      <div className="gallery">
        <img src="/src/image/1024px-Instagram_logo 1.png" alt="" />
        <div className="gallery-grid">
          <div>
            <img
              src="/src/image/Rectangle 37.png"
              alt=""
              className="gallery-item "
            />
            <img
              src="/src/image/Rectangle 39.png"
              alt=""
              className="gallery-item "
            />
          </div>
          <img src="/src/image/img1.png" className="gallery-item-central" />
          <div>
            <img
              src="/src/image/Rectangle 40.jpg"
              alt=""
              className="gallery-item "
            />
            <img
              src="/src/image/Rectangle 41.jpg"
              alt=""
              className="gallery-item "
            />
          </div>
        </div>
      </div>
    </GalleryStyle>
  );
};

const GalleryStyle = styled.section`
  .gallery {
    text-align: center;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-item {
    width: auto;
    border-radius: 4px;
  }

  .gallery-item-central {
    width: auto;
  }
`;

export default Gallery;
