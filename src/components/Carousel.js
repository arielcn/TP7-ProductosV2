import './Carousel.css'

const Carousel = (props) => {

  if (props.productos.length === 0) return (<></>);

  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <img src={props.productos[0].thumbnail} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={props.productos[1].thumbnail} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={props.productos[2].thumbnail} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={props.productos[3].thumbnail} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={props.productos[4].thumbnail} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={props.productos[5].thumbnail} class="d-block w-100" alt="..."/>
        </div>
      </div> 
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;