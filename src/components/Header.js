import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  
  const dispatch = useDispatch();

  useEffect(()=>{
     const debounce = setTimeout(()=>{
      getSerachSuggestion();
      },2000)

      return()=>{
        clearInterval(debounce);
      }
    
    
  },[searchText])

  const getSerachSuggestion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchText);
    const json = await data.json;
    console.log(json[0]);

  }
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }

  const searchInputChangeHandler = (e)=>{
     setSearchText(e.target.value);
     
  }
  return (
    <div className="flex justify-between p-4">
      <div className="flex h-8">
        <img className="mx-4 cursor-pointer"
        onClick={toggleMenuHandler}
          alt="hamburger"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
        />
        <img
          alt="youtube-logo"
          src="https://p7.hiclipart.com/preview/674/324/923/youtube-logo-music-video-computer-icons-youtube-logo.jpg"
        />
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
  );
};

export default Header;
