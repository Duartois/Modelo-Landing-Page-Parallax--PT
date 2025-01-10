import ArrowRigth from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
        <p className='text-white/60 hidden md:block'>
          Otimize seu fluxo de trabalho e aumente sua produtividade.
        </p>
        <div className='inline-flex gap-1 items-center'>
          <p>Comece gratuitamente</p>
          <ArrowRigth className='h-4 w-4 inline-flex justify-center items-center' />
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
              <Image
                src={Logo}
                alt='Saas Logo'
                height={40}
                width={40}
                className='z-20'
              />
            </div>
            <MenuIcon className='h-5 w-5 md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>Sobre</a>
              <a href='#'>Recursos</a>
              <a href='#'>Valores</a>
              <a href='#'>Clientes</a>
              <a href='#'>Ajuda</a>
              <a href='#'></a>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
