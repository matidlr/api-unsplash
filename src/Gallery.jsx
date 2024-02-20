import axios from "axios"
import { useQuery } from "@tanstack/react-query";

const url = 'https://api.unsplash.com/photos/?client_id=nj3AOy8910vCC_37pCjpJABjzuV65fd1H0LkEbrR1Gc&query=office'

export default function Gallery() {

  const response = useQuery({
    queryKey:['images'],
    queryFn:async () =>{
      const result = await axios.get(url)

      return result.data;
    },
  });
  console.log(response)
  return (
    <div>Gallery</div>
  )
}
