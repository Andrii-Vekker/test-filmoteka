import SimpleLightbox from "simplelightbox";
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
// import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImg } from "./fetchphoto";
export {name}
export {page}

let name = "";

const refs = {
  form: document.querySelector(".search-form"),
  input: document.querySelector(".input"),
  formBtn: document.querySelector(".formBtn"),
  galleryContainer: document.querySelector(".gallery"),
  loadMoreBtn: document.querySelector(".load-more"),
  gallery: document.querySelector(".gallery")
};


refs.form.addEventListener("submit", formHandler);


function formHandler(e) {
  e.preventDefault();
  name = refs.input.value.trim();
 
  getImg().then((photo) => {
    
    renderGallery(photo.data)
    // pagination.off('afterMove', popular);
    
    
  }).catch(error => error(console.log(error)));
};

    const url ="https://image.tmdb.org/t/p/w500"
function createGallery(array) {
  console.log(array)
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
const options = {
  totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 5,
    centerAlign: true,
   page:1,
}
const pagination = new Pagination(document.getElementById('pagination'), options);
const page = pagination.getCurrentPage();
pagination.on('afterMove', popular); 


function popular(event) {
  const currentPage = event.page;
   refs.gallery.innerHTML = ""
  getImg(currentPage).then((photo) => {
renderGallery(photo.data)
  })
}

/////////////////////////////////////////////////////
function renderGallery(array) {
  pagination.reset(array.total_results) 
  refs.galleryContainer.insertAdjacentHTML("beforeend", createGallery(array));
    
};

 


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



