import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../redux/actions/postAction';
import { getSuggestions } from '../../redux/actions/suggestionsAction';
import linker from '../../images/linkers_1.png'

const Header = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRefreshHome = () => {
    window.scrollTo({top: 0})
    dispatch(getPosts(auth.token));
    dispatch(getSuggestions(auth.token));
  };

  return (
    <div className="header bg-white" style={{ borderRadius: '20px' }} >
      <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between" style={{ borderRadius: '35px'}}>
        <div className="container-fluid">
          <Link to="/" className="logo"  onClick={handleRefreshHome}>
            <img src={linker} alt="linkers logo"className="navbar-brand p-0 m-0"/>
          </Link>

          <Search />

          <Menu />
         
        </div>
      </nav>
    </div>
  );
};

export default Header;
