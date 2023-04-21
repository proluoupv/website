import React, { Component } from 'react';
import { Sponsor } from './Sponsor';

export class SponsorSection extends Component {
  render() {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div id="sponsors" className="flex w-full flex-col items-center pb-16 lg:pb-24">
          <div className="flex max-w-3xl flex-col">
            <div className="text-dark mb-8 flex flex-col px-10 lg:mb-16">
              <h3 className="font--title mb-4 text-center text-3xl font-medium lg:mb-4 lg:text-4xl">
                Thanks to our sponsors
              </h3>
            </div>

            <div className="grid grid-flow-row grid-cols-2 gap-10 px-10 sm:grid-cols-4 sm:gap-16">
              <Sponsor src="logos/upv.png" href="http://www.upv.es/es/" size="big" />
              <Sponsor src="logos/etsid.png" href="https://www.etsid.upv.es/alumnos/" size="mid" />
              <Sponsor src="logos/iccp.jpg" href="https://www.iccp.upv.es/web/" size="mid" />

              <img className="flex flex-col items-center" src="logos/vacio.png" />

              <Sponsor src="logos/ge.png" href="https//generacionespontanea.upv.es/" size="mid" />

              <img className="flex flex-col items-center" src="logos/vacio.png" />

              <Sponsor src="logos/ade.png" href="http://www.upv.es/entidades/ADE" size="small" />
              <Sponsor src="logos/moloon.png" href="http://www.moloon.es" size="small" />
              <Sponsor src="logos/maxilia.png" href="http://www.maxilia.es" size="small" />
              <Sponsor
                src="logos/regalospublicitarios-grande.png"
                href="http://www.regalospublicitarios.com"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
