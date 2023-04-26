import React from 'react';
import { SponsorSection } from './SponsorSection';
import { Journey } from './Journey';
import { MemberSection } from './MemberSection';

export default function Home({}) {
  return (
    <div>
      <MemberSection />
      <Journey />
      <SponsorSection />
    </div>
  );
}
