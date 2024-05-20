import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// -Homepage - strona powitalna, zawiera informacje o liczbe użytkowników na stronie (pobierane z API), liczbe aktualnie dostępnych postów oraz krótkie 
// przywitanie z przekierowaniem na forum


// Typy danych
type Post = {
  id: number;
};

export const Homepage = ({ id }: Post) => {
  const [postsCount, setPostsCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  // Funkcja do pobierania danych o postach
  const fetchPostData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const {posts} = await res.json();
      setPostsCount(posts.length);
    } catch (error) {
      console.log(error);
    }
  };

  // Funkcja do pobierania danych o użytkownikach
  const fetchUserData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const {users} = await res.json();
      setUserCount(users.length)
      console.log(postsCount); 
    } catch (error) {
      console.log(error);
    }
  };

  // Użycie useEffect do pobierania danych przy montowaniu komponentu
  useEffect(() => {
    fetchPostData();
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Witamy na forum</h2>
      <p>Liczba użytkowników: {userCount}</p>
      <p>Liczba postów: {postsCount}</p>
   <Link to="/PostList">Przejdź do forum</Link>

   
    </div>
  );
};
