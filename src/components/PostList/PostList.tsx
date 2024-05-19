// -Lista postów (nasze forum)  - strona z wyswietlana liczba postów, pod kazdym postem jest możliwość dodania do ulubionych (dodaje do ulubionych w 
//   kontekscie), dania łapki w dół lub w góre (dodaje do polubionych, znielubionych w kontekscie) oraz mozliwosc udostepnienia (link generuje się jako link do 
//   podstrony pojedynczego postu po ID z naszej bazy. Lista powinna również posiadac wyszukiwarke (search term jest przechowywany w kontekscie)

import React from "react";
import { useEffect, useState } from "react";

type Post ={
  id:number,
  title: string,
  body: string;
}


export const PostList=()=>{
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteIds, setFavoriteIds] = useState<[]>([]);
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [dislikedIds, setDislikedIds] = useState<number[]>([]);

const fetchPostData = async()=>{

  try{
    const res = await fetch('https://dummyjson.com/posts');
    if(!res.ok){
      throw new Error('Something went wrong');
    }
const data = await res.json();
setPosts(data)
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
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

  </div>
)



}