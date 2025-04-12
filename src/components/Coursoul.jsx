import React from 'react'

function Coursoul() {
  const downloadBrochure = () => {
    // const pdfUrl = "/oops.pdf"; // Ensure the PDF is placed in the public folder
    // const link = document.createElement("a");
    // link.href = pdfUrl;
    // link.download = "School_Brochure.pdf"; // Set the download file name
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
   
      const pdfUrl = "/Apex_Main.pdf"; // Ensure the PDF is in the public folder
      window.open(pdfUrl, "_blank"); // Opens in a new tab
 
  
    
};



  return (

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: "url('src/assets/c11.jpeg')", backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
            

              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>Apex English School</span>
                
                </h1>
                <h4 className='lg:text-xl text-lg  text-light  mt-3 font-bold'>Nagar Road, Patoda</h4>
              </div>
              <button 
    className="bg-blue-600 p-3 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-white shadow-md 
               transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105" 
    onClick={downloadBrochure}
>
    Download Brochure
</button>

            </div>
          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: "url('https://claireville.peelschools.org/images/fc89c99e-3415-4f95-8c22-f582241d485d')", backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center '>
              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>Apex English School</span>
                
                </h1>
                <h4 className='lg:text-xl text-lg  text-light  mt-3 font-bold'>Nagar Road, Patoda</h4>
              </div>
              <button 
    className="bg-blue-600 p-3 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-white shadow-md 
               transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105" 
    onClick={downloadBrochure}
>
    Download Brochure
</button>
            </div>
          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: "url('https://i.ytimg.com/vi/DCQmllhzFHw/maxresdefault.jpg')", backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>Apex English School</span>
                
                </h1>
                <h4 className='lg:text-xl text-sm  text-light  mt-3 font-bold'>Nagar Road, Patoda</h4>
              </div>
              <button 
    className="bg-blue-600 p-3 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-white shadow-md 
               transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105" 
    onClick={downloadBrochure}
>
    Download Brochure
</button>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev hideen lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next hideen lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        
      </button>
    </div>

  )
}

export default Coursoul
