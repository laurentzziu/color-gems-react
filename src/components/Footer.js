import React, { Component } from 'react';

const Footer = (props) => {
  return (
    <footer id="app-footer" className="text-center">
      Copyright &copy; Florinel Gorgan. { new Date().getFullYear() }
    </footer>
  )
}

export default Footer;
