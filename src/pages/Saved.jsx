import { useState, useEffect } from 'react';
import '../components/PixelGrid/./PixelGrid.css';
import { Button, Modal } from "react-bootstrap";
//************************************************************************************ */
const Saved = ({ rows, cols }) => {
  const localStorageKey = 'pixelGridSelected';

  // Load grid from local storage or initialize it
  const initialGrid = JSON.parse(localStorage.getItem(localStorageKey)) || 
                      Array(rows * cols).fill({ color: '#ccc' });
//************************************************************************************
  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid.push(<div key={`${i}-${j}`} className="pixel">
          {/* <img src="https://picsum.photos/400/300?random=21" alt="login icon" className="" /> */}
        </div>);
      }
    }
    return grid;
  };
  //************************************************************************************ */
  // Initialize the grid with an array of objects, each representing a pixel
  const [grid, setGrid] = useState(initialGrid); // default color for each pixel

  const [selectedGrid, setSelectedGrid] = useState([]);
  const [showModal, setShowModal] = useState(false);
//************************************************************************************ */
   // Function to handle pixel click
   const handlePixelClick = (index) => {
    const newGrid = [...grid];
    newGrid[index] = {
      ...newGrid[index],
      color: newGrid[index].color === '#ccc' ? '#000' : '#ccc' // Toggle color
    };
    setGrid(newGrid);

    // var result = [];
    // newGrid.forEach((nGrid, index) => nGrid.color === '#000' ? result.push(index) : result.splice(index))
    // console.log("foundIndex index =", result);

    // assigning the list to temp variable
    const temp = [...selectedGrid];
    // removing the element using splice
    newGrid.forEach((nGrid, index) => nGrid.color === '#000' ? temp.push(index) : temp.splice(index))
    // updating the list
    setSelectedGrid(temp);
    // logging the list after removing the element
    console.log("list after Updating (Adding/Removing) the element =", temp);
  };
//************************************************************************************ */

  const handleReservedPixels = (selectedIndexes) => {
    // Here you can send the selectedIndexes to your server for reservation
    console.log("Reserved Pixels:", selectedIndexes);
    setShowModal(false);
  };
  //************************************************************************************ */

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(grid));
  }, [grid]);
//************************************************************************************ */
  // return <div className="grid-container">{createGrid()}</div>;

  return (
    <>
    <Button variant="danger" onClick={() => setShowModal(true)}
      className="btn btn-danger flex items-center content-center text-center hover:scale-105 mr-1 mb-1 
      duration-300 py-1 px-8 rounded-full text-wrap
      relative z-10 focus:outline-none focus:ring-4 focus:ring-indigo-600
      focus:ring-opacity-50 transition-all">
      إرسال البكسيلات المحجوزة
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد أنك تريد حجز البكسلات؟ {selectedGrid.map((item)=> (  <li key={item}>{item}</li>))} </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            إلغاء
          </Button>
          <Button variant="success" onClick={() => handleReservedPixels(selectedGrid)}>
            إرسال
          </Button>
        </Modal.Footer>
      </Modal>
    <div className="grid-container">      
      {grid.map((pixel, index) => (
        <div
          key={index}
          className="pixel"
          style={{ backgroundColor: pixel.color }}
          title={`Pixel ${index}`} // Add the tooltip text here
          onClick={() => handlePixelClick(index)}
        ></div>
      ))}
    </div>
    </>
    
  );
};

export default Saved;
