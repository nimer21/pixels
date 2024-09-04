import { useEffect, useState } from "react";
import "../components/PixelGrid/./PixelGrid.css";
import { Button, Modal } from "react-bootstrap";
/********************************************************************************************************** */
const Home = () => {
  const localStorageKey = 'pixelGridImages';
  
  const fixedCols = 90; // Number of columns    77
  const fixedRows = 80; // Number of rows       65  => 5005
  const [pixelSize, setPixelSize] = useState(0);

  // Load grid from local storage or initialize it
  const initialGrid = JSON.parse(localStorage.getItem(localStorageKey)) || 
                      Array(fixedRows * fixedCols).fill({ color: '#ccc', image: null });
  const [grid, setGrid] = useState(initialGrid);

  const [showModalImage, setShowModalImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

/********************************************************************************************************** */   

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModalImage(true);
    //console.log("image clicked");
  };
/**********************************************************************************************************/
  const handleCloseModal = () => {
    setShowModalImage(false);
    setSelectedImage(null);
  };
/********************************************************************************************************** */
useEffect(() => {
  const calculatePixelSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    console.log("screenWidth=====",screenWidth);
    console.log("screenHeight=====",screenHeight);

    const calculatedPixelWidth = Math.floor(screenWidth / fixedCols);
    const calculatedPixelHeight = Math.floor(screenHeight / fixedRows);

    const size = Math.min(calculatedPixelWidth, calculatedPixelHeight);
    console.log("Size=====",size);
    setPixelSize(size);

    /*const newGrid = Array(fixedCols * fixedRows).fill({ color: '#ccc', image: null });
    setGrid(newGrid);*/
  };

  calculatePixelSize();
  window.addEventListener('resize', calculatePixelSize);

  return () => window.removeEventListener('resize', calculatePixelSize);
}, [fixedCols, fixedRows]);
/***************************************************************************************** */
  return (
    <div>     
      {/* <p className="mr-7 mb-2 font-semibold text-lg flex justify-center">ربما من الصعب أن نسميه أملاً.. لكنه ليس أقلّ من أن يكون عناداً..</p> */}
      {/********************************************************************************************/}
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
      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${fixedCols}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${fixedRows}, ${pixelSize}px)`,
          width: `${fixedCols * pixelSize}px`,
          height: `${fixedRows * pixelSize}px`,
          margin: 'auto',
        }}
      >
        {grid.map((pixel, index) => (
          <div
            key={index}
            className="pixel border-0"
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
              backgroundColor: pixel.image ? 'transparent' : pixel.color,
              backgroundImage: pixel.image ? `url(${pixel.image})` : 'none',
              backgroundSize: pixel.backgroundSize || 'cover',
              backgroundPosition: pixel.backgroundPosition || 'center',
              transition: 'background-size 0.3s ease, background-position 0.3s ease',
            }}
            title={`Pixel ${index}`} // Add the tooltip text here
            onClick={() => pixel.image && handleImageClick(pixel.image)} // Open image on click
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
