import Ellipse from './Ellipse';

import Dogs from '../assets/dogs.png';
import ToDoList from '../assets/to-do-list.png';
import AnimaisFantasticos from '../assets/animais-fantasticos.png';
import Chevron from '../assets/chevron.svg';

const Projects = () => {
  const projects = [
    {
      href: 'https://github.com/bagrielz/dogs-project',
      src: Dogs,
      alt: 'Imagem do projeto Dogs Next',
      name: 'Dogs Next',
      desc: 'Rede social para cachorros',
    },
    {
      href: 'https://github.com/bagrielz/teste-dev-junior',
      src: ToDoList,
      alt: 'Imagem do projeto To Do List',
      name: 'To Do List',
      desc: 'Teste para uma vaga de dev',
    },
    {
      href: 'https://github.com/bagrielz/animais-fantasticos-project',
      src: AnimaisFantasticos,
      alt: 'Imagem do projeto Animais Fantásticos',
      name: 'Animais Fantásticos',
      desc: 'Site sobre animais',
    },
  ];

  return (
    <section className="p-5 bg-dark-200 text-base rounded-lg">
      <h2 className="flex items-center gap-2 font-medium text-neutral-100 mb-5">
        <Ellipse color="#B4B4B4" />
        Projetos
      </h2>
      <ul className="space-y-3">
        {projects.map((p, index) => (
          <li key={index}>
            <a
              href={p.href}
              target="_blank"
              className="flex justify-between p-3 bg-dark-100 border border-dark-10 rounded-md custom-shadow transition hover:bg-dark-50"
            >
              <div className="flex flex-col items-center sm:flex-row gap-3">
                <img
                  className="p-[6px] w-12 h-12 rounded-full bg-dark-200"
                  src={p.src}
                  alt={p.alt}
                />
                <div className="flex flex-col items-center sm:block text-neutral-50 font-medium">
                  {p.name}
                  <p className="text-neutral-100 font-normal text-center sm:text-left">
                    {p.desc}
                  </p>
                </div>
              </div>
              <img
                src={Chevron}
                alt="Ícone de uma divisa apontada para o lado direito"
                className="hidden sm:inline-block"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
