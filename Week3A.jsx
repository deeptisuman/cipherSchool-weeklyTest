import React from 'react';

const Navbar = () => {
  const handleOptionClick = (option) => {
    console.log(option);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleOptionClick('Home')}>Home</li>
        <li onClick={() => handleOptionClick('About')}>About</li>
        <li onClick={() => handleOptionClick('Contact us')}>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
