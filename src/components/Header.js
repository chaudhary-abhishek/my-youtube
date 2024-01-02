import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  
  const dispatch = useDispatch();

  useEffect(()=>{
     const timer = setTimeout(()=>{
      //make an api call on every key press
      //if the difference between two key press is less than 200 ms decline the api call
      //only make api call when difference is 200ms
      getSerachSuggestion();
      },200)

      return()=>{
        clearTimeout(timer);
      }

      //whenever new component is getting rendered the old one will be destroyed and just before the old componenet got destroyed return function will be called and in this case old timer will be destroyed
    
    
  },[searchText]);

  const getSerachSuggestion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchText);
    const json = await data.json();
    //console.log(json[1]);
    setSearchSuggestion(json[1]);

  }
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }

  const searchInputChangeHandler = (e)=>{
     setSearchText(e.target.value);
     
  }
  return (
    <div className="">
    <div className="flex justify-between p-4 shadow-md">
      <div className="flex h-8">
        <img className="mx-4 cursor-pointer"
        onClick={toggleMenuHandler}
          alt="hamburger"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
        />
       
       <Link to="/">
        <img className="w-24"
          alt="youtube-logo"
          src="https://p7.hiclipart.com/preview/674/324/923/youtube-logo-music-video-computer-icons-youtube-logo.jpg"
        />
       </Link>
    
      </div>

      <div className="grid grid-flow-col w-1/2">
        <input className="hidden sm:block w-full px-6 py-2 border border-gray-600 rounded-l-full col-span-11 " type="text" placeholder="Search" value={searchText} onChange={searchInputChangeHandler} />
        <button className="sm:border rounded-r-full col-span-1  border-gray-600">🔍</button>
      
      </div>
      
      <div className="flex">
        <img className="h-10"
          alt="profile-logo"
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
        />
      </div>
    </div>
    <div className="hidden sm:block w-2/5 mx-[240px] md:mx-[280px] lg:mx-[360px] xl:mx-[380px] absolute shadow-xl bg-white rounded-lg list-none">
      {
        searchSuggestion.map((suggestion)=><li className="cursor-pointer p-1">🔍{" "+suggestion}</li>)
      }
    </div>
    </div>
  );
};

export default Header;
