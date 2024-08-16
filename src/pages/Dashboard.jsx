const Dashboard = () => {
  // Create an array with 10,000 elements
const cells = Array.from({ length: 10000 });

return (
  <div className="grid grid-cols-100 grid-rows-100 w-full h-screen py-5 text-white ml-2
  lg:grid-cols-100 md:grid-cols-50 sm:grid-cols-25 gap-0">

    {/*  */}
    {cells.map((_, index) => (
      <div
        key={index}
        //className="border border-gray-300" // Optional: Add borders to see the grid items clearly
        style={{ aspectRatio: '1' }} // Maintain square shape
      >
        <img src={`https://picsum.photos/400/300?random=7`} alt="" />
        {/* +Math.random() */}
      </div>
    ))}
  </div>
);
};

export default Dashboard;
