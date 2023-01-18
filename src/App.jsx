import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Sort from './components/Sort';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {

    // using out api key from pixabay
    // term is the search term that we will manually type
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=51&orientation=horizontal`)
      .then(res => res.json()) // getting response from fetch and converring it to json format
      .then(data => { // if you look into the sample fetch request in the pixabay site, the images are objects , and these objects are elements of array and this array is actaully value of key 
        setImages(data.hits); // data.hits is an array (in this array we have image objects as elemnts containg the actual images and the correspoing data like view and likes)
        setIsLoading(false);

      }).catch(err => console.log(err));

    console.log(selectedText);

   

    // setSelectedText([].concat(images).sort((a, b) => a.selectedText - b.selectedText));




  }, [term]);

  // const imagesCopy = structuredClone(images);
  // setImages((p1, p2) => (p1.selectedText < p2.selectedText) ? 1 : (p1.selectedText > p2.selectedText) ? -1 :0);
  // console.log(selectedText);











  return (
    <div className="container mx-auto">

      <Sort sortParamenter={(text) => setSelectedText(texts)} />
      {/* {console.log(text)} */}

      {/* we created and passed the searchText function, it takes a parmater text and set it as search term using setTerm*/}
      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* search term eneterd and its totally blank, that means after loading and the lengh of images is 0, show no reulst found*/}
      {!isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-32' >NO IMAGES FOUND</h1>}

      {/* if ts loading - show loading if not, create  a grid and map through the image obj array and put images into it (impor the image card componet) */}
      {isLoading
        ? <h1 className='text-6xl text-center mx-auto mt-32' >LOADING PLEASE WAIT...</h1>
        : <div className="grid grid-cols-4 gap-4">
          {[...images].sort((a, b) => a.searchText > b.selectedText ? 1 : -1)
          .map(imageObj => (
            <ImageCard key={imageObj.id} imageObj={imageObj} />
          ))}
        </div>
      }


    </div>
  );
}

export default App;
