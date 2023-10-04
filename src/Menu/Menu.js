import React from 'react';
import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
  <nav>
    <ul>
        <li><a href="/">Homepage</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="https://google.com">Google</a></li>
    </ul>
 </nav>
  );
}

export default Menu;
