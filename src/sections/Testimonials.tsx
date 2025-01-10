'use client';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    text: 'Como designer experiente sempre em busca de ferramentas inovadoras, esse modelo chamou imediatamente minha atenção.',
    imageSrc: avatar1.src,
    name: 'João Rivera',
    username: '@jaoriviera30',
  },
  {
    text: 'A produtividade da nossa equipe disparou desde que começamos a usar esta ferramenta.',
    imageSrc: avatar2.src,
    name: 'José Santana',
    username: '@zesantana',
  },
  {
    text: 'Este aplicativo transformou completamente a maneira como gerencio meus projetos e prazos.',
    imageSrc: avatar3.src,
    name: 'Marcos luiz',
    username: '@maluiz',
  },
  {
    text: 'Fiquei impressionado com a rapidez com que conseguimos integrar este aplicativo ao nosso fluxo de trabalho.',
    imageSrc: avatar4.src,
    name: 'Denzel Washington ',
    username: '@denzinhoBala ',
  },
  {
    text: 'Planejar e executar eventos nunca foi tão fácil. Este aplicativo me ajuda a acompanhar todas as partes móveis, garantindo que nada passe despercebido.',
    imageSrc: avatar5.src,
    name: 'Tiago Sem T',
    username: '@tiagosemt',
  },
  {
    text: 'A personalização e as capacidades de integração deste aplicativo são de altíssimo nível.',
    imageSrc: avatar6.src,
    name: 'Renata Glasc',
    username: '@rere.vidro',
  },
  {
    text: 'Adotar este aplicativo para nossa equipe simplificou o gerenciamento de projetos e melhorou a comunicação em todos os aspectos.',
    imageSrc: avatar7.src,
    name: 'Jonathan Jaime',
    username: '@JJmaryJ',
  },
  {
    text: 'Com este aplicativo, podemos facilmente atribuir tarefas, acompanhar o progresso e gerenciar documentos em um só lugar.',
    imageSrc: avatar8.src,
    name: 'Carol Dias',
    username: '@cadias',
  },
  {
    text: 'Sua interface amigável e recursos robustos atendem às nossas diversas necessidades.',
    imageSrc: avatar9.src,
    name: 'Gabriela Silva',
    username: '@gagasi',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className='flex flex-col gap-6 pb-6'
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(
            ({ text, imageSrc, name, username }, index) => (
              <div key={index} className='card'>
                <div>{text}</div>
                <div className='flex items-center gap-2 mt-5'>
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className='h-10 w-10 rounded-full'
                  />
                  <div className='flex flex-col'>
                    <div className='font-medium tracking-tight leading-5'>
                      {name}
                    </div>
                    <div className='leading-5 tracking-tight'>{username}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className='bg-white'>
      <div className='container'>
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Depoimentos</div>
          </div>
          <h2 className='section-title mt-5'> Opinião dos usuários</h2>
          <p className='section-description mt-5'>
            De um design intuitivo a recursos poderosos, nosso aplicativo se
            tornou uma ferramenta essencial para usuários em todo o mundo.
          </p>
        </div>
        <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)] max-h-[738px] overflow-hidden'>
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className='hidden md:block'
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className='hidden lg:block'
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
