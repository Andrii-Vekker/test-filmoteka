import SimpleLightbox from "simplelightbox";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImg } from "./fetchphoto";
export {name}
export { page }



let name = "";


const refs = {
  container: do
  form: document.querySelector(".search-form"),
  input: document.querySelector(".input"),
  // formBtn: document.querySelector(".formBtn"),
  galleryContainer: document.querySelector(".gallery"),
  // loadMoreBtn: document.querySelector(".load-more"),
  gallery: document.querySelector(".gallery")
};


refs.form.addEventListener("submit", formHandler);

const options = {
  totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 5,
    centerAlign: true,
   page:1,
}
const paganation = new Pagination('#tui-pagination-container', options);
const page = paganation.getCurrentPage();
paganation.on('afterMove', popular); 

function formHandler(e) {
  e.preventDefault(e);
  name = refs.input.value.trim();
   
  refs.gallery.innerHTML = ""
  function popular(event) {
  refs.gallery.innerHTML = ""
  const currentPage = event.page;

  getImg(currentPage).then((photo) => {
     
       renderGallery(photo.data)
      })
}


function renderGallery(array) {
  // paganation.reset(array.total_results) 
  refs.galleryContainer.insertAdjacentHTML("beforeend", createGallery(array));
    
};



var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);

  getImg().then((photo) => {
    
    const {total_results} = photo.data
    renderGallery(photo.data)
    paganation.reset(total_results)
  }).catch(error => error(console.log(error)));
};

    const url ="https://image.tmdb.org/t/p/w500"
function createGallery(array) {
  // console.log(array)
  return array.results.reduce((acc, { original_title, poster_path, backdrop_path }) => acc +
    `<a gallery__item" href="${original_title}">
  <img class="gallery__image" src="${url+poster_path}" alt="" loading="lazy"/>
   <div class="info">
     <p class="info-item">
       <b class="b">Year</b><b></b>
    </p>
     <p class="info-item">
       <b>Views:</b><b></b>
     </p>
     <p class="info-item">
       <b>Comments:</b><b></b>
     </p>
     <p class="info-item">
       <b>Downloads:</b><b></b></p>
   </div>
  </a>`, "");
};
////////////////////////////////////////////





 ///////////////////////////////////////////////////


// function resetCurrentPage() {
//   currentPage = 1;
// }



// export const genres = [
//   { id: 28, name: 'Action' },
//   { id: 12, name: 'Adventure' },
//   { id: 16, name: 'Animation' },
//   { id: 35, name: 'Comedy' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Documentary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Family' },
//   { id: 14, name: 'Fantasy' },
//   { id: 36, name: 'History' },
//   { id: 27, name: 'Horror' },
//   { id: 10402, name: 'Music' },
//   { id: 9648, name: 'Mystery' },
//   { id: 10749, name: 'Romance' },
//   { id: 878, name: 'Sci-Fi' },
//   { id: 10770, name: 'TV Movie' },
//   { id: 53, name: 'Thriller' },
//   { id: 10752, name: 'War' },
//   { id: 37, name: 'Western' },
// ];



