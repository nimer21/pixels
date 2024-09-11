import { useEffect, useState } from "react";
import "../components/PixelGrid/./PixelGrid.css";
import { Button, Form, Modal } from "react-bootstrap";
/********************************************************************************************************** */
const Home = () => {
  const localStorageKey = "pixelGridImages";

  const fixedCols = 85; // Number of columns    77
  const fixedRows = 85; // Number of rows       65  => 5005
  const [pixelSize, setPixelSize] = useState(0);

  // Load grid from local storage or initialize it
  const initialGrid =
    JSON.parse(localStorage.getItem(localStorageKey)) ||
    Array(fixedRows * fixedCols).fill({ color: "#ccc", image: null });
  const [grid, setGrid] = useState(initialGrid);

  const [showModalImage, setShowModalImage] = useState(false);
  const [showModalImageLG, setShowModalImageLG] = useState(false);
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
      const screenWidth = window.innerWidth - 45;
      const screenHeight = window.innerHeight - 45;
      console.log("screenWidth=====", screenWidth);
      console.log("screenHeight=====", screenHeight);

      const calculatedPixelWidth = Math.floor(screenWidth / fixedCols);
      const calculatedPixelHeight = Math.floor(screenHeight / fixedRows);

      const size = Math.min(calculatedPixelWidth, calculatedPixelHeight);
      console.log("Size=====", size);
      setPixelSize(size);

      /*const newGrid = Array(fixedCols * fixedRows).fill({ color: '#ccc', image: null });
    setGrid(newGrid);*/
    };

    calculatePixelSize();
    window.addEventListener("resize", calculatePixelSize);

    return () => window.removeEventListener("resize", calculatePixelSize);
  }, [fixedCols, fixedRows]);
  /***************************************************************************************** */
  return (
    <div>
      {/* <p className="mr-7 mb-2 font-semibold text-lg flex justify-center">ربما من الصعب أن نسميه أملاً.. لكنه ليس أقلّ من أن يكون عناداً..</p> */}
      {/********************************************************************************************/}
  
      <Modal show={showModalImage} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>معاينة الصورة</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="flex justify-between">
          <div className="w-9/12">
            <p className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold text-center">
              إسم الشركة
            </p>

            <Form.Label>الفقرة التعريفية</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              //cols={2}
              disabled={true}
              //placeholder="أدخل نبذة عن المنتج / الشركة"
              name="description"
              //resize= "none"
              no-resize
              className="p-2 bg-slate-100 border rounded max-h-32"
            />

            <Form.Label className="mt-2">رابط الشركة</Form.Label>
            <Form.Control
              type="text"
              //placeholder="رابط الموقع"
              disabled={true}
              name="url"
              autoFocus
              className="p-2 bg-slate-100 border rounded"
            >
              {/* Add more countries as needed */}
            </Form.Control>
          </div>

          {selectedImage ? (
            <img
              src={selectedImage}
              className="rounded-md object-cover"
              alt="Selected"
              style={{ width: "200px", height: "300px", marginRight:"9px" }}
            />
          ) : (
            "No image selected."
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalImageLG} onHide={handleCloseModal} size="sm">
        <Modal.Header closeButton>
          {/* <Modal.Title>معاينة الصورة</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="flex justify-between">
        {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "10%", height: "10%", marginRight:"9px" }}
            />
          ) : (
            "No image selected."
          )}

          <div className="w-9/12">
            <p className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold text-center">
              إسم الشركة
            </p>

            <Form.Label className="mt-2">رابط الشركة</Form.Label>
            <Form.Control
              type="text"
              placeholder="رابط الموقع"
              disabled={true}
              name="url"
              autoFocus
              className="p-2 bg-slate-100 border rounded"
            >
              {/* Add more countries as needed */}
            </Form.Control>
          </div>         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
      {/********************************************************************************************/}
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${fixedCols}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${fixedRows}, ${pixelSize}px)`,
          width: `${fixedCols * pixelSize}px`,
          height: `${fixedRows * pixelSize}px`,
          margin: "auto",
        }}
      >
        {grid.map((pixel, index) => (
          <div
            key={index}
            className="pixel border-0"
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
              backgroundColor: pixel.image ? "transparent" : pixel.color,
              backgroundImage: pixel.image ? `url(${pixel.image})` : "none",
              backgroundSize: pixel.backgroundSize || "cover",
              backgroundPosition: pixel.backgroundPosition || "center",
              transition:
                "background-size 0.3s ease, background-position 0.3s ease",
            }}
            title={`مربع رقم ${index}`} // Add the tooltip text here
            onClick={() => pixel.image && handleImageClick(pixel.image)} // Open image on click
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
