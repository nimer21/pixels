import { useState } from 'react';
import '../components/PixelGrid/./PixelGrid.css';
const Saved = ({ rows, cols }) => {
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


  //*************************************************** */
  // Initialize the grid with an array of objects, each representing a pixel
  const [grid, setGrid] = useState(
    Array(rows * cols).fill({ color: '#ccc' }) // default color for each pixel
  );

   // Function to handle pixel click
   const handlePixelClick = (index) => {
    const newGrid = [...grid];
    newGrid[index] = {
      ...newGrid[index],
      color: newGrid[index].color === '#ccc' ? '#000' : '#ccc' // Toggle color
    };
    setGrid(newGrid);
  };

  // return <div className="grid-container">{createGrid()}</div>;

  return (
    <div className="grid-container">
      {grid.map((pixel, index) => (
        <div
          key={index}
          className="pixel"
          style={{ backgroundColor: pixel.color }}
          onClick={() => handlePixelClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Saved;
