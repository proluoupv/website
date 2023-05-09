import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div
        id="Navbar"
        className="flex h-32 w-full flex-row items-center bg-gradient-to-b from-black/40 to-black/0 px-10 md:px-16"
      >
        <div className="flex flex-1 flex-grow flex-row items-center">
          <a href="https://proluoupv.com">
            <img src="logos/proluo_whale.png" className="h-6" />
          </a>
        </div>

        <ul id="Navigation " className="hidden flex-row items-center space-x-12 md:flex">
          <li>
            <a href="#about_us">About Us</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#journey">The journey</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScpWKGVdGiJJ36IHo0_VaS7mhbM7Mys7hwBhO5dLnrB2y1BSw/viewform">
              Join Us
            </a>
          </li>
        </ul>

        <div id="Socials" className="hidden flex-1 flex-grow flex-row items-center justify-end space-x-4 md:flex">
          <a
            className="h-6 w-6 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('logos/RS/instagram.svg')" }}
            href="https://www.instagram.com/proluoupv/"
            target="_blank"
          ></a>
          <a
            className="h-6 w-6 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: " url('logos/RS/twitter.svg')" }}
            href="https://twitter.com/proluoupv"
            target="_blank"
          ></a>
          <a
            className="h-6 w-6 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('logos/RS/facebook.svg')" }}
            href="https://www.facebook.com/proluoupv/"
            target="_blank"
          ></a>
        </div>
      </div>
    );
  }
}
