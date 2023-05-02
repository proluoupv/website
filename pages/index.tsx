import React from 'react';
import { SponsorSection } from './SponsorSection';
import { Journey } from './Journey';
import { MiembrosSection } from './MiembrosSection';
import { AboutUs } from './AboutUs';
import Landing from './Landing';

export default function Home({}) {
  return (
    <div>
      <Landing />
      <div className="flex w-full flex-col pb-16">
        <img src="images/mission.jpg" className="hidden w-full sm:flex" />
        <img src="images/mission_reduced.jpg" className="flex w-full sm:hidden" />
      </div>
      <AboutUs />
      <MiembrosSection />
      <Journey />
      <SponsorSection />
      <div className="flex h-20 flex-col items-center justify-center">© 2021 Proluo — All rights reserved</div>
    </div>
  );
}
