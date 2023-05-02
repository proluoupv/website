import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Landing extends Component {
  render() {
    return (
      <div
        className="bg-slate-50 flex min-h-screen w-full flex-col justify-between bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('images/sea_render.png')" }}
      >
        <Navbar />

        <div id="ImageText"
          className="flex w-full flex-col bg-gradient-to-t from-black/40 to-black/0 p-10 md:p-16 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="mb-6 text-6xl font-semibold sm:text-7xl md:text-8xl lg:mb-0 lg:mr-16 lg:text-9xl">
            <span>BACK</span>
            <br />
            <span className="whitespace-nowrap">TO BLUE</span>
          </h1>
          <h2 className="text-2xl lg:mb-4 lg:max-w-sm lg:text-3xl">
            We are developing innovative microplastics filters to contribute to the cleanup of the Mediterranean Sea.
          </h2>
        </div>
      </div>
    );
  }
}
