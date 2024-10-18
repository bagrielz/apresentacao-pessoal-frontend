import Ellipse from './Ellipse';

import ArrowUp from '../assets/arrow-up.svg';

const Stack = () => {
  const tools = [
    {
      tool: 'Next.js',
      href: 'https://nextjs.org/',
    },
    {
      tool: 'React.js',
      href: 'https://react.dev/',
    },
    {
      tool: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
    },
    {
      tool: 'SASS',
      href: 'https://sass-lang.com/',
    },
    {
      tool: 'Python',
      href: 'https://www.python.org/',
    },
    {
      tool: 'Figma',
      href: 'https://www.figma.com/',
    },
  ];

  return (
    <section className="p-5 bg-dark-200 text-base rounded-lg mb-10">
      <h2 className="flex items-center gap-2 font-medium text-neutral-100 mb-5">
        <Ellipse color="#B4B4B4" />
        Stack
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-50 font-medium">
        {tools.map((t, index) => (
          <li key={index}>
            <a
              className="flex justify-between p-3 bg-dark-100 border border-dark-10 rounded-md custom-shadow transition hover:bg-dark-50"
              href={t.href}
              target="_blank"
            >
              {t.tool}
              <img
                src={ArrowUp}
                alt="Ícone de uma seta apontada para cima em diagonal"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
