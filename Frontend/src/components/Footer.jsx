/*import React from 'react';

function Footer() {
  return (
    <>
    <div className='item-center justify-center'>
      <hr className='border-black'/>
      <h1 className='text-center py-3 text-sm'>
      Made with ❤️ By Pranjit Roy, Copyright  © 2024 
       
      </h1>
    </div>
    </>
  )
}

export default Footer;*/
import React from 'react';

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6'>
      <div className='container mx-auto text-center text-white'>
        <hr className='border-white mb-4'/>
        <h1 className='text-lg font-medium'>
          Made with ❤️ By <span className='font-bold'>Pranjit Roy</span>
        </h1>
        <p className='text-sm mt-2'>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


