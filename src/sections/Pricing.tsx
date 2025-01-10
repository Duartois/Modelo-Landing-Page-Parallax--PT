'use client';
import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: 'Grátis',
    monthlyPrice: 0,
    buttonText: 'Comece gratuitamente',
    popular: false,
    inverse: false,
    features: [
      'Até 5 membros em projetos',
      'Tarefas e projetos ilimitados',
      '2GB de armazenamento',
      'Integrações',
      'Suporte básico',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Inscreva-se agora',
    popular: true,
    inverse: true,
    features: [
      'Até 50 membros em projetos',
      'Tarefas e projetos ilimitados',
      '50GB de armazenamento',
      'Integrações',
      'Suporte prioritário',
      'Suporte avançado',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Inscreva-se agora',
    popular: false,
    inverse: false,
    features: [
      'Até 5 membros em projetos',
      'Tarefas e projetos ilimitados',
      '200GB de armazenamento',
      'Integrações',
      'Gerente de conta dedicado',
      'Campos personalizados',
      'Análises avançadas',
      'Capacidades de exportação',
      'Acesso à API',
      'Recursos avançados de segurança',
    ],
  },
];

export const Pricing = () => {
  return (
    <section className='py-24 bg-white'>
      <div className='container'>
        <div className='section-heading'>
          <h2 className='section-title'>Valores</h2>
          <p className='section-description mt-5'>
          Grátis para sempre. Faça o upgrade para tarefas ilimitadas, melhor segurança e recursos exclusivos.
          </p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={title || index} // Usa o título como chave ou o índice como fallback
                className={twMerge(
                  'card',
                  inverse === true && 'border-black bg-black text-white'
                )}
              >
                <div className='flex justify-between'>
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      inverse === true && 'text-white/60'
                    )}
                  >
                    {' '}
                    {title}
                  </h3>
                  {popular === true && (
                    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                      <motion.span
                        animate={{
                          backgroundPositionX: '100%',
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType: 'loop',
                        }}
                        className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium'
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className='flex item-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>
                    ${monthlyPrice}
                  </span>
                  <span className='tracking-tight font-bold text-black/50%'>
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px]',
                    inverse === true && 'bg-white text-black'
                  )}
                >
                  {buttonText}
                </button>
                <ul className='flex flex-col gap-5 mt-8'>
                  {features.map((feature, index) => (
                    <li key={index} className='text-sm flex items-center gap-4'>
                      <CheckIcon className='h-6 w-6' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
