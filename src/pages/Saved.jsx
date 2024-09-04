import { useState, useEffect } from 'react';
import '../components/PixelGrid/./PixelGrid.css';
import { Button, Form, Modal } from "react-bootstrap";
//************************************************************************************ */
const Saved = ({ rows, cols }) => {
  const localStorageKey = 'pixelGridImages';

  const fixedCols = 90; // Number of columns    77
  const fixedRows = 80; // Number of rows       65  => 5005
  const [pixelSize, setPixelSize] = useState(0);
  // Load grid from local storage or initialize it
  const initialGrid = JSON.parse(localStorage.getItem(localStorageKey)) || 
                      Array(fixedRows * fixedCols).fill({ color: '#ccc', image: null });
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
  
  const [gridTemp, setGridTemp] = useState(initialGrid); // default color for each pixel
  
  const [selectedGrid, setSelectedGrid] = useState([]);
  
  const [selectedPixels, setSelectedPixels] = useState([]);
  
  const [showModal, setShowModal] = useState(false);

  const [showModal2, setShowModal2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
//************************************************************************************ */
useEffect(()=>{
  console.log("Selected Pixels changed:", selectedPixels);
  // Perform any actions that depend on the updated selectedPixels here
},[selectedPixels])
  
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
//************************************************************************************/
   // Function to handle pixel click
   const handlePixelClick = (index) => {

    
    if (selectedPixels.includes(index)) {
      setSelectedPixels(selectedPixels.filter(i => i !== index));
    } else  { //if(selectedPixels[index].color==="#ccc")
      setSelectedPixels([...selectedPixels, index]);
    }


    /**
     * Example Fix with Functional Update:
      If you need to add or remove pixels from selectedPixels based on the current state,
      you can use the functional form of setState:
     */
    /*
    const handlePixelClick = (index) => {
      setSelectedPixels((prevSelectedPixels) => {
        if (prevSelectedPixels.includes(index)) {
          return prevSelectedPixels.filter(i => i !== index);
        } else {
          return [...prevSelectedPixels, index];
        }
      });
    };
    */
//************************************************************************************/
    
/*
    const newGrid = [...grid];
    newGrid[index] = {
      ...newGrid[index],
      color: newGrid[index].color === '#ccc' ? '#000' : '#ccc' // Toggle color
    };
    setGrid(newGrid);*/


    const newGrid = [...gridTemp];
    newGrid[index] = {
      ...newGrid[index],
      color: newGrid[index].color === '#ccc' ? '#000' : '#ccc' // Toggle color
    };
    setGridTemp(newGrid);

    console.log('selectedPixels index:', selectedPixels); // Log the index of the selected pixel
    console.log('Selected grid color:', grid[index].color); // Log the index of the selected pixel
    console.log('Selected gridTemp color:', gridTemp[index].color); // Log the index of the selected pixel

/*
    // assigning the list to temp variable
    const temp = [...selectedGrid];
    // removing the element using splice
    newGrid.forEach((nGrid, index) => nGrid.color === '#000' ? temp.push(index) : temp.splice(index))
    // updating the list
    setSelectedGrid(temp);
    // logging the list after removing the element
    console.log("list after Updating (Adding/Removing) the element =", temp);
    */
  };
//************************************************************************************ */
const handleSubmit = (e) => {
  e.preventDefault();

  if (!selectedImage || !selectedCountry) {
    alert('Please upload an image and select a country.');
    return;
  }
  
/*
  const newGrid = [...grid];

  selectedPixels.forEach(index => {
    newGrid[index] = {
      ...newGrid[index],
      //image: selectedImage,
      country: selectedCountry,
      color: '#ff0',
      name: "Ahmed"
    };
  });*/

  const newGrid2 = [...gridTemp];

  selectedPixels.forEach(index => {
    newGrid2[index] = {
      ...newGrid2[index],
      //image: selectedImage,
      country: selectedCountry,
      color: '#ff0',
      name: "Ahmed",
      date: new Date().toLocaleString() + "",
    };
  });


  setGrid(newGrid2);
  setGridTemp(newGrid2);
  //localStorage.setItem(localStorageKey, JSON.stringify(grid));

  setSelectedImage(null);
  setSelectedCountry('');
  setSelectedPixels([]); // Take Care Nimer

  handleCloseModal();
};
//************************************************************************************
const handleOpenModal = () => {
  if (selectedPixels.length === 0) {
    alert('Please select at least one pixel.');
    return;
  }
  setShowModal2(true);
};

const handleCloseModal = () => {
  setShowModal2(false);
  // setSelectedImage(null);
  // setSelectedCountry('');
  // setSelectedPixels([]); // Take Care Nimer
};


const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
};


const handleCountryChange = (e) => {
  setSelectedCountry(e.target.value);
};


  const handleReservedPixels = (selectedIndexes) => {
    // Here you can send the selectedIndexes to your server for reservation
    console.log("Reserved Pixels:", selectedIndexes);
    setShowModal(false);
  };
  //************************************************************************************ */
  const handlePixelReset = (index) => {
    const newGrid = [...grid];
    newGrid[index] = { ...newGrid[index], image: null, country: null, color: null};
    setGrid(newGrid);
    // if (selectedPixels.includes(index)) {
    //   setSelectedPixels(selectedPixels.filter(i => i !== index));
    // } else  { //if(selectedPixels[index].color==="#ccc")
    //   setSelectedPixels([...selectedPixels, index]);
    // }
  };
  //************************************************************************************ */

  const handleResetAll = () => {
    setGrid(newGrid2);
    setSelectedGrid([]);
  };
  //************************************************************************************ */

   useEffect(() => {
   localStorage.setItem(localStorageKey, JSON.stringify(grid));
   }, [grid]);
//************************************************************************************ */
  // return <div className="grid-container">{createGrid()}</div>;

  return (
    <>
    <div className='flex'>
    {/* <Button variant="danger" onClick={() => setShowModal(true)}
      className="btn btn-danger flex items-center content-center text-center hover:scale-105 mr-1 mb-1 
      duration-300 py-1 px-8 rounded-full text-wrap
      relative z-10 focus:outline-none focus:ring-4 focus:ring-indigo-600
      focus:ring-opacity-50 transition-all">
      إرسال المربعات
      </Button> */}

<Button variant="primary" onClick={handleOpenModal}>إرسال المربعات المحجوزة</Button>
    
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          هل أنت متأكد أنك تريد حجز البكسلات؟ {selectedGrid.map((item)=> (  <li key={item}>{item}</li>))}

                    <h4 className='m-2'>البلد: </h4>
                    <input type="text" placeholder="Enter text"/>
                    <hr />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            إلغاء
          </Button>
          <Button variant="success" onClick={() => handleReservedPixels(selectedGrid)}>
            إرسال
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showModal2} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        هل أنت متأكد أنك تريد حجز المربعات؟ {selectedPixels.map((item)=> (  <p className='bg-amber-400 font-bold text-red-700' key={item}>{item}</p>))}
          <Form onSubmit={handleSubmit}>
            
            <Form.Group controlId="formImageUpload">
              <Form.Label>تحميل صورة الإعلان</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            </Form.Group>
            <div className="mt-2 w-20 h-20 mx-auto relative">
                <img src={selectedImage || "https://picsum.photos/400/300?random=21"} alt="Advertising Image" />
            </div>
            <Form.Group controlId="formCountrySelect">
              <Form.Label>إختار الدولة</Form.Label>
              <Form.Control as="select" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">إختار...</option>
                <option value="Palestine">فلسطين</option>
                <option value="Jordan">الأردن</option>
                <option value="Egypt">مصر</option>
                <option value="Syria">سوريا</option>
                {/* Add more countries as needed */}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              إرسال
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    <div className="grid-container"
    style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${fixedCols}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${fixedRows}, ${pixelSize}px)`,
          width: `${fixedCols * pixelSize}px`,
          height: `${fixedRows * pixelSize}px`,
          margin: 'auto',
        }}
        >
      {gridTemp.map((pixel, index) => (
        <div
          key={index}
          className={`pixel ${pixel.color!=="#000" && pixel.color!=="#ccc" ? 'pointer-events-none' : 'none' }`} //pointer-events-none
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
          onClick={() => handlePixelClick(index)}
          onContextMenu={(e) => {
            e.preventDefault();
            handlePixelReset(index);
          }}
        ></div>
      ))}
    </div>
    </>
    
  );
};

export default Saved;
