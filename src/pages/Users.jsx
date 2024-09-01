import { useCallback, useEffect, useRef, useState } from "react";
import "../components/PixelGrid/./PixelGrid.css";
import axios from "axios";
import { Trash } from "react-feather";
import { Button, Modal } from "react-bootstrap";
/********************************************************************************************************** */
const Users = ({ rows, cols }) => {
  const localStorageKey = 'pixelGridImages';

  // Load grid from local storage or initialize it
  const initialGrid = JSON.parse(localStorage.getItem(localStorageKey)) || 
                      Array(rows * cols).fill({ color: '#ccc', image: null });

  // const initialGrid = 
  // Array(rows * cols).fill({ color: "#ccc", image: null });

  const fixedCols = 67; // Number of columns (adjust this value as needed)
  const fixedRows = 33; // Number of rows (adjust this value as needed)
  const [pixelSize, setPixelSize] = useState(0);

  //const [grid, setGrid] = useState(initialGrid);
  const [showModal, setShowModal] = useState(false);

  const [showModalImage, setShowModalImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [hoveredPixel, setHoveredPixel] = useState(null); // State to track hovered pixel index

  const [grid, setGrid] = useState(initialGrid);
  

  // Initialize the grid with an array of objects, each representing a pixel
  //const [grid, setGrid] = useState(Array(rows * cols).fill({ color: "#ccc", image: null }));

  const fileInput = useRef();
/********************************************************************************************************** */

  const handleClick = useCallback((event) => {
    console.log("right-click index =", event.currentTarget.id);
    // prevent context menu from opening on right-click
    event.preventDefault();

    let message;

    // synthetic event
    switch (event.type) {
      case "click":
        message = `Left click (synthetic event)`;
        break;
      case "contextmenu":
        message = `Right click (synthetic event)`;
        //fileInput.current.style.backgroundImage[0] = 'none';
        const newGrid = [...grid];
        newGrid[5] = {
          ...newGrid[5],
          image: "https://picsum.photos/400/300?random=21",
        };
        // Store the image data URL
        setGrid(newGrid);
        break;
    }

    // native event
    switch (event.nativeEvent.button) {
      case 0:
        message = `${message}\nLeft click (native event)`;
        break;
      case 2:
        message = `${message}\nRight click (native event)`;
        break;
    }

    if (message) {
      console.log(`Click detected:\n${message}\n`);
    }
  }, []);

  // Function to handle pixel click and upload image
  const handlePixelClick = (index) => {
    console.log('Selected pixel index:', index); // Log the index of the selected pixel
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        /**Backend Option: Images are uploaded to a server and URLs are stored in the grid state,
         * making the images accessible from anywhere.
         * This setup provides both client-side and server-side options to store and retrieve images associated
         * with each pixel in the grid.
         * Performance: For large grids or images, consider optimizing the image sizes and loading strategies
         * (e.g., lazy loading). */
        //****************************************************************************************************** */
        // Create a form data object to send the image along with the index
        // Note: The server must be configured to handle this endpoint and save the image
        // using the provided index.
        // Also, make sure to sanitize the file input to prevent potential security vulnerabilities.
        // You can use a library like 'form-data' or 'axios' for this purpose.
        /*const formData = new FormData();
        formData.append('image', file);
        formData.append('index', index);
        // Send the image to the server
        try {
          const response = await axios.post('/api/upload-image', formData);
          const newGrid = [...grid];
          newGrid[index] = {
            ...newGrid[index],
            image: response.data.imageUrl // Store the image URL returned from backend
          };
          setGrid(newGrid);
        } catch (error) {
          console.error(error);
        }*/
        //****************************************************************************************************** */
        // Remove the temporary input field
        //input.remove();
        // Reset the background image
        //fileInput.current.style.backgroundImage[0] = 'none';
        // Toggle color
        //newGrid[index].color = newGrid[index].color === '#ccc'? '#000' : '#ccc';
        //setGrid(newGrid);
        // Reset the input field
        //fileInput.current.value = '';
        // Reset the input field's background image
        //fileInput.current.style.backgroundImage[0] = 'url(./placeholder.png)';
        // Reset the input field's placeholder text
        //fileInput.current.placeholder = 'Upload an image...';
        // Reset the input field's cursor
        //fileInput.current.style.cursor = 'pointer';
        // Reset the input field's border
        //fileInput.current.style.border = 'none';

        const reader = new FileReader();
        reader.onload = () => {
          const newGrid = [...grid];
          newGrid[index] = {
            ...newGrid[index],
            image: reader.result, // Store the image data URL
            //image: newGrid[index].image === '#ccc' ? '#000' : reader.result // Toggle color
          };
          setGrid(newGrid);
        };
        reader.readAsDataURL(file); // Read the file as a data URL
        //console.log("file", file);
      }
    };
    input.click(); // Trigger the file input dialog
  };


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

/********************************************************************************************************** */

  const handlePixelReset = (index) => {
    const newGrid = [...grid];
    newGrid[index] = {
      ...newGrid[index],
      image: null, // Reset the image
    };
    setGrid(newGrid);
  };
/********************************************************************************************************** */

  const handleResetAll = () => {
    const newGrid = grid.map((pixel) => ({ ...pixel, image: null }));
    setGrid(newGrid);
    setShowModal(false);
  };
/********************************************************************************************************** */

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(grid));
  }, [grid]);
/********************************************************************************************************** */
/*
  useEffect(() => {
    const calculatePixelSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const calculatedPixelWidth = Math.floor(screenWidth / fixedCols);
      const calculatedPixelHeight = Math.floor(screenHeight / fixedRows);

      const size = Math.min(calculatedPixelWidth, calculatedPixelHeight);
      setPixelSize(size);

      const newGrid = Array(fixedCols * fixedRows).fill({ color: '#ccc', image: null });
      setGrid(newGrid);
    };

    calculatePixelSize(); // Initial calculation
    window.addEventListener('resize', calculatePixelSize); // Recalculate on resize

    return () => window.removeEventListener('resize', calculatePixelSize);
  }, [fixedCols, fixedRows]);
*/
/********************************************************************************************************** */
  return (
    <div>
      <div className="flex">
      <button className="btn btn-danger flex items-center content-center text-center hover:scale-105 mr-1 mb-1 
      duration-300 py-1 px-8 rounded-full text-wrap
      relative z-10 focus:outline-none focus:ring-4 focus:ring-indigo-600
      focus:ring-opacity-50 transition-all" onClick={() => setShowModal(true)}>
        إعادة تعيين جميع الصور
      <Trash className="mr-11" /> 
      </button>
      <p className="mr-7 font-semibold text-lg">ربما من الصعب أن نسميه أملاً.. لكنه ليس أقلّ من أن يكون عناداً..</p>
      </div>
       {/***************************************************************************************** */}
       <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Title>تأكيد إعادة الضبط</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>هل أنت متأكد أنك تريد إعادة تعيين كافة الصور؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            إلغاء
          </Button>
          <Button className="disabled" variant="danger" onClick={handleResetAll}>
            إعادة تعيين
          </Button>
        </Modal.Footer>
      </Modal>
      {/********************************************************************************************/}
      <div className="grid-container">
        {grid.map((pixel, index) => (
          <div
            key={index}
            className="pixel"
            style={{
              // width: `${pixelSize}px`,
              // height: `${pixelSize}px`,
              backgroundColor: pixel.image ? "transparent" : pixel.color,
              backgroundImage: pixel.image ? `url(${pixel.image})` : "none",
              //backgroundSize: hoveredPixel === index ? '200%' : 'cover', // Zoom effect
              backgroundPosition: hoveredPixel === index ? 'center' : 'center',
              backgroundSize: "cover",
              //backgroundPosition: "center",
              // ref: { fileInput },
              // hover: "I love \"Sherlock Holmes\"",
              transition: 'background-size 0.3s ease, background-position 0.3s ease', // Smooth transition
            }}
            title={`Pixel ${index}`} // Add the tooltip text here
            onClick={() => pixel.image && handleImageClick(pixel.image)} // Open image on click
            onDoubleClick={() => handlePixelClick(index)} // Upload image on double-click
            onContextMenu={(e) => {
              e.preventDefault();
              handlePixelReset(index);
            }}
            onMouseEnter={() => setHoveredPixel(index)} // Set hovered pixel index on mouse enter
            onMouseLeave={() => setHoveredPixel(null)} // Reset on mouse leave
            //  onContextMenu={handleClick}
            // onClick={()=>handlePixelClick(index)} onContextMenu={handleClick}
          >
          {/* Tooltip content */}
          {/* <div className="tooltip">
              {index} - {pixel.image ? 'Image' : 'No Image'}
            </div> */}

          </div>
          // <span className="tooltiptext">{index}</span>
        ))}
      </div>
    </div>
  );
};

export default Users;
