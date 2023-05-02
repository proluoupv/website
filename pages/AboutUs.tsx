import { EXPORT_MARKER } from 'next/dist/shared/lib/constants';
import React, { Component } from 'react';

export class AboutUs extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <div id="about_us" className="flex w-full flex-col items-center pb-4 text-center lg:py-8">
          <h3 className="font--title mb-1 text-3xl font-medium lg:mb-4 lg:text-4xl">About Us</h3>
          <p className="mb-1 text-lg">Our mision, vision and values.</p>
        </div>
        <div className="flex w-full flex-col items-center py-1 lg:py-4">
          <div className="flex max-w-3xl flex-col">
            <div className="text-dark mb-8 flex flex-col px-10 lg:mb-16">
              <p className="mb-2 text-lg">
                Proluo UPV was born as a solution to one of the biggest problems that the planet is suffering from in
                the 21st century: extreme pollution by plastics in oceans, seas and our waters. It emerges as a
                non-profit project of the Polytechnic University of Valencia, based in the Vera Campus. We are a
                multidisciplinar team of very dedicated students, supported by other professionals, a board of advisors,
                and professors, focused on developing innovative plastic capturing filters, investigations, and studies
                on water pollution and the environment. Our main current focus, is the Mediterranean Sea.
              </p>
              <p className="mb-2 text-lg">
                Our mission is to clean the Mediterranean Sea of microplastics taking advantage of existing maritime
                activity through an efficient and passive filter called BLAU I.
              </p>
              <p className="mb-2 text-lg">
                We want to achieve a sea free of microplastics to preserve life in it and on Earth, and be an
                inspiration to others to take sustainable initiatives.
              </p>
              <p className="mb-2 text-lg">Some of our main values are: Sustainability, Innovation and Teamwork</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
