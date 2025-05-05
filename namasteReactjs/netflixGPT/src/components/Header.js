import React from 'react';
import { netflix_logo } from '../utils/url';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/90 to-black/10 px-4 py-3 z-10">
      <img className="w-32" src={netflix_logo} alt="Netflix Logo" />
    </div>
  );
};

export default Header;