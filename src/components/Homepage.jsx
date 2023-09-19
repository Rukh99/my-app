import React from 'react'


const Homepage = () => {
  return (

    <div>
    <div class="text-centre ">
    <h1 className='text-center color: white fw-2' style={{color:'brown'}}> EXPERIENCE THE BEST TRIP EVER </h1>
       <h3 className='text-center color:brown fw-2' > EXPLORE THE DISTANT CORNER OF THE WORLD 
             Find your next stay<br />
               Search low prices on hotels, homes and much more...</h3>

<div className='text-center'><input type= "text" placeholder="where are you going to"></input>
<button className='btn-btn-primary '> SEARCH </button></div>
</div>
    <div className='slider'>
    
    
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
              <div className="carousel-item active img-fluid">
                <img src="https://static.toiimg.com/thumb/msid-96713915,width-1280,height-720,resizemode-4/.jpg" className="w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://codecanyon.img.customer.envatousercontent.com/files/463311877/RioRelax_Banner.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=30d873926150c5c0b4e65d93a2da7a1e" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/1.jpg" className=" w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
      }
  ;
  </div>
  </div>
  )
}

export default Homepage





