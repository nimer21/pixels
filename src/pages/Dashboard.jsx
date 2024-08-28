const Dashboard = () => {
  // Create an array with 10,000 elements
const cells = Array.from({ length: 625 });

return (
  <div className="grid grid-cols-25 grid-rows-25 w-full py-5 text-white mr-1 ml-20
  lg:grid-cols-25 md:grid-cols-25 sm:grid-cols-25 gap-1 overflow-y-scroll h-[calc(100vh-50px)]">

    {/*  */}
    {cells.map((_, index) => (
      <div
        key={index}
        //className="border border-gray-300" // Optional: Add borders to see the grid items clearly
        style={{ aspectRatio: '1' }} // Maintain square shape
      >
        <img className="object-cover" src={`https://picsum.photos/400/300?random=`+Math.random()} alt="" />
        {/* +Math.random() */}
      </div>
    ))}
  </div>
);
};

export default Dashboard;
