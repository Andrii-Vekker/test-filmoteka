import axios from "axios";
export { getImg }
import { name, pageNum } from "./index";
import { options } from "./index";
import { page } from "./index";
const URL = `https://api.themoviedb.org/3`
const KEY = `8d439eb5ac7a153643a933bcb130103b`
async function getImg(page) {
   try {
     const response = await axios.get
         (`${URL}/search/movie?api_key=${KEY}&language=en-US&query=${name}&page=${page}`);
      // console.log(response)
    return response
   }
   catch (error) {
   
   }
};
// getImg().then(response => console.log(response.data))
// https://api.themoviedb.org/3/movie/550?api_key=8d439eb5ac7a153643a933bcb130103b
// ${BASE_URL}?api_key=${API_KEY}&query=${inputValue}&page=${pageNumber}

// async function getPopularImg() {
//    try {
//      const response = await axios.get
//         (`${URL}/trending/all/day?api_key=${KEY}&language=en-US&popular`);
//     return response
//    }
//    catch (error) {
   
//    }
// };

// getPopularImg().then(response => console.log(response))


// let name = "cat"
//  async function fetchSearchingFilms() {
//        try {
//       const response = await axios.get(`${URL}/search/movie?api_key=${KEY}&language=en-US&query=${name}`);
//         return response;
//     } catch (error) {
//       console.error('Something wrong! Can not search films' + error);
//     }
// } 

// fetchSearchingFilms().then(response =>console.log(response))