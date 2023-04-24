import React from 'react';
import { SponsorSection } from './SponsorSection';
import { Journey } from './Journey';
import { Sponsor } from './Sponsor';
import { Miembros } from './Miembros';

export default function Home({}) {
  return (
    <div>
      <div id="team" className="flex w-full flex-col items-center pb-16 text-center lg:py-24">
        <div className="flex max-w-3xl flex-col">
          <div className="text-dark mb-8 flex flex-col px-10 lg:mb-16">
            <h3 className="font--title mb-1 text-3xl font-medium lg:mb-4 lg:text-4xl">Team</h3>
            <p className="mb-4 text-lg">The people who make this possible.</p>
          </div>

          <div className="mb-8 flex w-full flex-row items-center space-x-4">
            <div className="bg-slate-200 flex h-px flex-1 flex-grow"></div>
            <span>EXECUTIVES</span>
            <div className="bg-slate-200 flex h-px flex-1 flex-grow"></div>
          </div>

          <div className="grid grid-flow-row grid-cols-1 gap-10 px-10 sm:grid-cols-2 sm:gap-16 md:grid-cols-3">
            <Miembros
              linkdn="https://www.linkedin.com/in/aymane-berrerhdoche-70544b155"
              imagen="images/team/06.png"
              cargo="Chief Executive"
              nombre="Aymane Berrerhdoche"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/cecilio-jos%C3%A9-rodr%C3%ADguez-grau-8a6099194"
              imagen="images/team/18.png"
              cargo="Chief Hidromechanics Engineer"
              nombre="Cecilio Rodriguez"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/joel-mira-molt%C3%B3-245025254"
              imagen="images/team/43.png"
              cargo="Chief Economics Manager"
              nombre="Joel Mira Moltó"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/elena-mart%C3%ADnez-chova-49940b232"
              imagen="images/team/10.png"
              cargo="Chief Creative Designer"
              nombre="Elena Martínez Chova"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/mart%C3%ADn-gramage-casado-067811211"
              imagen="images/team/13.png"
              cargo="Chief Enviroment Researcher"
              nombre="Martín Gramage"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/carmen-yaguez-peon-334879180"
              imagen="images/team/15.png"
              cargo="Chief HR Manager"
              nombre="Carmen Yaguez Peón"
            />
          </div>
          <div className="mb-8 mt-20 flex w-full flex-row items-center space-x-4">
            <div className="bg-slate-200 flex h-px flex-1 flex-grow"></div>
            <span>TEAM MEMBERS</span>
            <div className="bg-slate-200 flex h-px flex-1 flex-grow"></div>
          </div>
          <div className="grid grid-flow-row grid-cols-1 gap-10 px-10 sm:grid-cols-2 sm:gap-16 md:grid-cols-3">
            <Miembros
              linkdn="https://www.linkedin.com/in/kailas-berm%C3%BAdez-peinado-1272491b7"
              imagen="images/team/08.png"
              cargo="Hidromechanics Engineer"
              nombre="Kailas Bermúdez"
            />
            <Miembros
              linkdn=""
              imagen="images/team/27.png"
              cargo="Hidromechanics Engineer"
              nombre="Vicent de Juan Gil"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/eusebio-fern%C3%A1ndez-montes-mart%C3%ADn-9a4626243"
              imagen="images/team/16.png"
              cargo="Hidromechanics Engineer"
              nombre="Eusebio Fernández"
            />
            <Miembros
              linkdn=""
              imagen="images/team/30.png"
              cargo="Hidromechanics Engineer"
              nombre="Nayan Soler Juárez"
            />
            <Miembros
              linkdn=""
              imagen="images/team/41.png"
              cargo="Hidromechanics Engineer"
              nombre="Violeta Ferrándiz"
            />
            <Miembros
              linkdn=""
              imagen="images/team/37.png"
              cargo="Hidromechanics Engineer"
              nombre="Claudia Lara Pinillos"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/brigitte-moreno-54a034252"
              imagen="images/team/40.png"
              cargo="Economics Manager"
              nombre="Brigitte Moreno Suntaxi"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/%C3%A1lvaro-de-la-cruz-54a28716b"
              imagen="images/team/03.png"
              cargo="Creative Designer"
              nombre="Álvaro de la Cruz Huerta"
            />
            <Miembros linkdn="" imagen="images/team/33.png" cargo="Creative Designer" nombre="Ronte Montoya Martínez" />
            <Miembros
              linkdn="https://www.linkedin.com/in/nicolau-contreras-mart%C3%ADnez-3112a5265/"
              imagen="images/team/34.png"
              cargo="Creative Designer"
              nombre="Nicolau Contreras Martínez"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/ivana-spinoso-cordeiro-5105561b2"
              imagen="images/team/36.png"
              cargo="Creative Designer"
              nombre="Ivana Spinoso Cordeiro"
            />
            <Miembros
              linkdn="https://www.linkedin.com/in/laijie-ji-34292a239"
              imagen="images/team/31.png"
              cargo="Creative Designer"
              nombre="Laijie Ji"
            />
            <Miembros
              linkdn=""
              imagen="images/team/28.png"
              cargo="Enviroment Researcher"
              nombre="Miguel Ángel Moreno"
            />
            <Miembros linkdn="" imagen="images/team/38.png" cargo="Enviroment Researcher" nombre="Irene Alcantud" />
            <Miembros linkdn="" imagen="images/team/29.png" cargo="Enviroment Researcher" nombre="Anabel Clemente" />
            <Miembros linkdn="" imagen="images/team/00.png" cargo="HR Manager" nombre="Luís Quirós Rodríguez" />
            <Miembros linkdn="" imagen="images/team/00.png" cargo="HR Manager" nombre="Ignacio Gómez" />
          </div>
        </div>
      </div>
      <div id="sponsors" className="flex w-full flex-col items-center pb-16 lg:pb-24">
        <div className="flex max-w-3xl flex-col">
          <div className="text-dark mb-8 flex flex-col px-10 lg:mb-16">
            <h3 className="font--title mb-4 text-center text-3xl font-medium lg:mb-4 lg:text-4xl">
              Thanks to our sponsors
            </h3>
          </div>

          <div className="grid grid-flow-row grid-cols-2 gap-10 px-10 sm:grid-cols-4 sm:gap-16">
            <Sponsor src="images/team/02.png" href="http://www.upv.es/es/" size="big" />
            <Sponsor src="images/team/09.png" href="https://www.etsid.upv.es/alumnos/" size="mid" />
            <Sponsor src="./src/logos/iccp.png" href="https://www.iccp.upv.es/web/" size="mid" />

            <img className="flex flex-col items-center" src="./src/logos/vacio.png" />

            <Sponsor src="./src/logos/ge.png" href="https//generacionespontanea.upv.es/" size="mid" />

            <img className="flex flex-col items-center" src="./src/logos/vacio.png" />

            <Sponsor src="./src/logos/ade.png" href="http://www.upv.es/entidades/ADE" size="small" />
            <Sponsor src="./src/logos/moloon.png" href="http://www.moloon.es" size="small" />
            <Sponsor src="./src/logos/maxilia.png" href="http://www.maxilia.es" size="small" />
            <Sponsor
              src="./src/logos/regalospublicitarios-grande.png"
              href="http://www.regalospublicitarios.com"
              size="small"
            />
          </div>
        </div>
      </div>
      <Journey />
      <SponsorSection />
    </div>
  );
}
