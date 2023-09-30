/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './components/Tours';
import { Tour } from './types';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const toursData = await response.json();
      setIsLoading(false);
      setTours(toursData); 
    } catch(error){
      setIsLoading(false);
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchTours();
  }, []);

  if(isLoading) {
    return(
      <main>
       <Loading /> 
      </main>
    )
  }

 return(
 <main>
  <Tours tours = {tours}/>
 </main>
 );
}

export default App;
