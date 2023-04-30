import React, { Component } from 'react';
import { JourneyPost } from './JourneyPost';

export class Journey extends Component {
  render() {
    return (
      <div id="journey" className="flex w-full flex-col items-center py-16 lg:py-24">
        <div className="flex max-w-3xl flex-col">
          <div className="text-dark mb-8 flex flex-col px-10 lg:mb-16">
            <h3 className="font-title mb-1 text-3xl font-medium lg:mb-4 lg:text-4xl">Follow our journey</h3>
            <p className="mb-4 text-lg">
              We are constantly researching new ways to improve the sustainability of the Mediterranean Sea.
            </p>
            <a href="https://www.instagram.com/proluoupv/" className="text-lg font-medium text-blue-400">
              Follow us on Instagram
            </a>
          </div>

          <div className="grid grid-flow-row grid-cols-3 gap-0.5 md:gap-1 md:px-10">
            <JourneyPost href="https://www.instagram.com/p/ClRZ-6XLXQE/" src="images/instagramPosts/ballenas.jpg" />
            <JourneyPost href="https://www.instagram.com/p/Ckv9BhHjuUb/" src="images/instagramPosts/plastitar.jpg" />
            <JourneyPost href="https://www.instagram.com/p/CXhDyYHAjrr/" src="images/instagramPosts/blau_02.jpg" />
            <JourneyPost href="https://www.instagram.com/p/CW_Sr7PAojC/" src="images/instagramPosts/70.jpg" />
            <JourneyPost href="https://www.instagram.com/p/CbdIVNOgJHL/" src="images/instagramPosts/agua.jpg" />
            <JourneyPost href="https://www.instagram.com/p/CbHukknAePN/" src="images/instagramPosts/tortuga.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
