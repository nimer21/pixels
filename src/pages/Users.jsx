import React, { useState, useEffect } from 'react';
import "../components/PixelGrid/PixelGrid.css";
//************************************************************************************/

const Users = ({ rows, cols }) => {
  const localStorageKey = 'pixelGridImages';
  // Load grid from local storage or initialize it

  const fixedCols = 95; // Number of columns    77
  const fixedRows = 75; // Number of rows       65  => 5005
  const [pixelSize, setPixelSize] = useState(0);
  const initialGrid = JSON.parse(localStorage.getItem(localStorageKey)) || 
                      Array(fixedRows * fixedCols).fill({ color: '#ccc', image: null });
  const [grid, setGrid] = useState(initialGrid);
//************************************************************************************/  

  useEffect(() => {
    const calculatePixelSize = () => {
      const screenWidth = window.innerWidth-45;
      const screenHeight = window.innerHeight-45;
      //console.log("screenWidth=====",screenWidth);
      //console.log("screenHeight=====",screenHeight);

      const calculatedPixelWidth = Math.floor(screenWidth / fixedCols);
      const calculatedPixelHeight = Math.floor(screenHeight / fixedRows);

      const size = Math.min(calculatedPixelWidth, calculatedPixelHeight);
      //console.log("Size=====",size);
      setPixelSize(size);

      /*const newGrid = Array(fixedCols * fixedRows).fill({ color: '#ccc', image: null });
      setGrid(newGrid);*/
    };

    calculatePixelSize();
    window.addEventListener('resize', calculatePixelSize);

    return () => window.removeEventListener('resize', calculatePixelSize);
  }, [fixedCols, fixedRows]);

  //************************************************************************************/

  const handlePixelClick = (index) => {
    console.log('Selected pixel index:', index); // Log the index of the selected pixel
    // const newGrid = [...grid];
    // newGrid[index] = {
    //   ...newGrid[index],
    //   color: newGrid[index].color === '#ccc' ? '#000' : '#ccc' // Toggle color
    // };
    // setGrid(newGrid);
    
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {   ;
        const reader = new FileReader();
        reader.onload = () => {
          const newGrid = [...grid];
          newGrid[index] = {
            ...newGrid[index],
            image: reader.result, // Store the image data URL
            //image: newGrid[index].image === '#ccc' ? '#000' : reader.result // Toggle color
            //name:"nimer",
          };
          setGrid(newGrid);
        };
        reader.readAsDataURL(file); // Read the file as a data URL
        console.log("file", file);
      }
    };
    input.click(); // Trigger the file input dialog
  };

  //************************************************************************************/

  const handlePixelColorClick = (index) => {
    console.log('Selected pixel index:', index); // Log the index of the selected pixel
    const newGrid = [...grid];
    newGrid[index] = {
      ...newGrid[index],
      color: newGrid[index].color === '#ff0' ? '#00BF00' : newGrid[index].color === '#00BF00'? '#ff0' : "#ccc" // Toggle color
    };
    setGrid(newGrid);
  };

  //************************************************************************************/

  const handlePixelReset = (index) => {
    //splice(2, 1) means remove 1 element at index 2
    const newGrid = [...grid];
    //newGrid.splice(index, 1); // Remove 1 element at index =>> catastrophic
    newGrid[index] = { ...newGrid[index], image: null, country: null, color: "#ccc", name: null, date: null,
      description: null, email:null, mobile:null, url:null, width: null, height: null};
    //newGrid[index] = { ...newGrid[index], };
    setGrid(newGrid);
  };
//************************************************************************************/

  const handleResetAll = () => {
    const newGrid = grid.map(pixel => ({ ...pixel, image: null }));
    setGrid(newGrid);
  };
//************************************************************************************/

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(grid));
  }, [grid]);
//************************************************************************************/
  return (
    <div>
      <div
        //className="grid-container"
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
            className="pixel"
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
              backgroundColor: pixel.image ? 'transparent' : pixel.color,
              backgroundImage: pixel.image ? `url(${pixel.image})` : 'none',
              backgroundSize: pixel.backgroundSize || 'cover',
              backgroundPosition: pixel.backgroundPosition || 'center',
              transition: 'background-size 0.3s ease, background-position 0.3s ease',
            }}
            title={`مربع ${index}`} // Add the tooltip text here
            //onClick={() => pixel.image && handleImageClick(pixel.image)} // Open image on click
            onClick={() => handlePixelColorClick(index)} // Open image on click
            onDoubleClick={() => handlePixelClick(index)} // Upload image on double-click
            onContextMenu={(e) => {
              e.preventDefault();
              handlePixelReset(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Users;
