import { useCallback, useEffect, useRef, useState } from "react";
import "../components/PixelGrid/./PixelGrid.css";
import Modall from '../helpers/Modal';
import { Button, Modal } from "react-bootstrap";
/********************************************************************************************************** */
const Home = () => {
  const localStorageKey = 'pixelGridImages';

  // Load grid from local storage
  const initialGrid = JSON.parse(localStorage.getItem(localStorageKey)|| 
  Array(rows * cols).fill({ color: '#ccc', image: null }));

  const [showModalImage, setShowModalImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [grid, setGrid] = useState(initialGrid);
/********************************************************************************************************** */   

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModalImage(true);
    //console.log("image clicked");
  };

  const handleCloseModal = () => {
    setShowModalImage(false);
    setSelectedImage(null);
  };
/********************************************************************************************************** */
  return (
    <div>     
      {/***************************************************************************************** */}   
      <p className="mr-7 mb-2 font-semibold text-lg flex justify-center">ربما من الصعب أن نسميه أملاً.. لكنه ليس أقلّ من أن يكون عناداً..</p>

      <Modal show={showModalImage} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          {/* <Modal.Title>معاينة الصورة</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
          ) : (
            'No image selected.'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>إغلاق</Button>
        </Modal.Footer>
      </Modal>      
      {/********************************************************************************************/}
      <div className="grid-container">
        {grid.map((pixel, index) => (
          <div
            key={index}
            className="pixel border-0"
            style={{
              backgroundColor: pixel.image ? "transparent" : pixel.color,
              backgroundImage: pixel.image ? `url(${pixel.image})` : "none",
              backgroundSize: "cover",
            }}
            title={`Pixel ${index}`} // Add the tooltip text here
            onClick={() => pixel.image && handleImageClick(pixel.image)} // Open image on click
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
