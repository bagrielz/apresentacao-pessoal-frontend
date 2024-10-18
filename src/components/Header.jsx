import Ellipse from './Ellipse';

import LinkedIn from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import GitHub from '../assets/github.svg';

import Avatar from '../assets/avatar.png';

const Header = () => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/bagriel/',
      src: LinkedIn,
      alt: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/bagrielz',
      src: Instagram,
      alt: 'Instagram',
    },
    { href: 'https://github.com/bagrielz', src: GitHub, alt: 'GitHub' },
  ];

  return (
    <header className="text-neutral-100 font-medium mb-10">
      <div className="flex justify-between mb-6">
        <span className="hidden sm:flex sm:items-center sm:gap-2 sm:text-base">
          <Ellipse color="#B4B4B4" />
          Desenvolvedor Front-End
        </span>
        <span className="flex items-center gap-2 px-2 py-[6px] uppercase text-xs text-auxiliary-green_light bg-auxiliary-green_dark rounded-full">
          <Ellipse color="#29D689" />
          Disponível para trabalho
        </span>
      </div>

      <div className="flex gap-6 flex-col items-center sm:flex-row sm:justify-between sm:gap-0">
        <div>
          <div className="sm:max-w-52">
            <h1 className="text-3xl text-neutral-50 font-medium mb-4">
              Prazer, Gabriel
            </h1>
            <p className="text-sm font-normal mb-6">
              Desenvolvedor front-end apaixonado por design de telas.
            </p>
          </div>
          <div className="p-3 sm:w-64 flex justify-between items-center rounded-lg bg-dark-200">
            <span className="text-sm font-medium">Siga-me</span>
            <ul className="flex gap-3">
              {socialLinks.map(({ href, src, alt }) => (
                <li key={alt}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img
                      className="p-[6px] rounded-full bg-dark-100 border border-dark-50 transition hover:bg-dark-50"
                      src={src}
                      alt={`Ícone do ${alt}`}
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center w-[136px] h-[136px] border border-dark-50 rounded-full bg-dark-100">
            <div className="w-[120px] h-[120px] bg-gradient-to-b from-[#c3ddfa] to-[#d6d8db] rounded-full"></div>
          </div>
          <img
            src={Avatar}
            alt="Imagem de uma avatar do Gabriel Stênio"
            className="absolute top-1 left-2"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
