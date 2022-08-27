import SimpleLightbox from "simplelightbox";
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
// import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImg } from "./fetchphoto";
export { name, count }

// const URL = `https://api.themoviedb.org/3`;
// const KEY = `8d439eb5ac7a153643a933bcb130103b`;

let name = "";
let count = 1;

const refs = {
  form: document.querySelector(".search-form"),
  input: document.querySelector(".input"),
  formBtn: document.querySelector(".formBtn"),
  galleryContainer: document.querySelector(".gallery"),
  loadMoreBtn: document.querySelector(".load-more"),
  gallery: document.querySelector(".gallery")
};






// refs.gallery.addEventListener("click", galleryHandler)
// refs.input.addEventListener("input", inputHandler);
refs.form.addEventListener("submit", formHandler);
// refs.loadMoreBtn.addEventListener("click", loadMoreBtnHandler);

// function galleryHandler(e) {
//   e.preventDefault();
//   const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   captionPosition: "bottom",
//   showCounter: true,
//   enableKeyboard: true
// });
// }


// function loadMoreBtnHandler(e) {
//   e.preventDefault
 
//   if (name !== "") {
//     getImg().then((photo) =>{
//             if (count > photo.totalHits/40) {
//           Notify.failure('Were sorry, but you ve reached the end of search results');
//               refs.loadMoreBtn.classList.remove("loadMoreVisible");
//        refs.loadMoreBtn.classList.add("loadMoreHidden");
//       };
//       renderGallery(photo)
//     })
//   .catch(error => console.log(error));
//   };
//   return count
// };

// function inputHandler(e) {
//   if (refs.input.value === "") {
//     // refs.galleryContainer.innerHTML = ""
//     Notify.failure('Sorry, there are no images matching your search query. Please try again')
//     };
// }
///////////////////////////////////////////////////////



    
  



function formHandler(e) {
  e.preventDefault();
  name = refs.input.value.trim();
  getImg().then((photo) => {
    
    renderGallery(photo.data)
   
  }).catch(error => error(console.log(error)));
    
};
    const url ="https://image.tmdb.org/t/p/w500"
function createGallery(array) {
  console.log(array)
  // const options = {
  // totalItems: array.total_results,
  // itemsPerPage: 20,
  // visiblePages: 20,
  //   page: 1,
  //   centerAlign: false,
  //   firstItemClassName: 'tui-first-child', 
  //     lastItemClassName: 'tui-last-child'
  // }
  
// const container = document.getElementById('tui-pagination-container');
// const myPagination = new Pagination(container, options);
// // instance.getCurrentPage();
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
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  // console.log(`${URL}`)

function renderGallery(array) {
  // const pagination = new Pagination(document.getElementById('pagination'), {
  //       totalItems: 0,
  //       itemsPerPage: 20,
  //       visiblePages: 5,
  //   centerAlign: true,
  //       page: 1
  // });
//   pagination.on('afterMove', (event) => {
//     const currentPage = event.page;
//       getImg().then((photo) => {
    
//     renderGallery(photo.data)
   
//   }).catch(error => error(console.log(error)));
//      console.log(currentPage);
// });
// pagination.on('beforeMove', (event) => {
//     const currentPage = event.page;
//   getImg().then((photo) => {
    
//     renderGallery(photo.data)
   
//   }).catch(error => error(console.log(error)));
//     if (currentPage === 10) {
//         return false;
//         // return true;
//     }
// });
  pagination.reset(array.total_results)
  const cardHeight = refs.gallery.clientHeight
    refs.galleryContainer.insertAdjacentHTML("beforeend", createGallery(array));
};

 const pagination = new Pagination(document.getElementById('pagination'), {
        totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 5,
    centerAlign: true,
        page: 1
  });

pagination.on('afterMove', (event) => {
    const currentPage = event.page;
      getImg().then((photo) => {
    
    renderGallery(photo.data)
   
  }).catch(error => error(console.log(error)));
     console.log(currentPage);
});
pagination.on('beforeMove', (event) => {
    const currentPage = event.page;
  getImg().then((photo) => {
    
    renderGallery(photo.data)
   
  }).catch(error => error(console.log(error)));
    if (currentPage === 10) {
        return false;
        // return true;
    }
});



