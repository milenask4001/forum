// -Lista postów (nasze forum)  - strona z wyswietlana liczba postów, pod kazdym postem jest możliwość dodania do ulubionych (dodaje do ulubionych w 
//   kontekscie), dania łapki w dół lub w góre (dodaje do polubionych, znielubionych w kontekscie) oraz mozliwosc udostepnienia (link generuje się jako link do 
//   podstrony pojedynczego postu po ID z naszej bazy. Lista powinna również posiadac wyszukiwarke (search term jest przechowywany w kontekscie)

import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'




type Post ={
  id:number,
  title: string,
  body: string;
  isFavorite: boolean,
}




export const PostList=({id,title,body,isFavorite}:Post)=>{
  const [posts, setPosts] = useState<Post[]>([]);

const fetchPostData = async()=>{

  try{
    const res = await fetch('https://dummyjson.com/posts');
    if(!res.ok){
      throw new Error('Something went wrong');
    }
const {posts} = await res.json();
setPosts(posts)
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  fetchPostData()
},[])




return (
  <div>
    <h2>Lista postów:</h2>
    <ul>
      {/* Mapujemy każdy post i wyświetlamy jego tytuł */}
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={toggleFavorite}>
            <FontAwesomeIcon icon={faHeart} color={isFavorite ? "#e60000" : "text-gray-400"} />
          </button>
        </li>
      ))}
    </ul>
  </div>
)



}