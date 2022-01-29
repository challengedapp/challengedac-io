import React from 'react';

function CoreTeam() {
  return (
    <div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-16'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
              Core Team Members
            </p>
          </div>
        </div>

        <div className='grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-1 lg:grid-cols-2'>
          <div className='flex justfiy-start'>
            <img
              className='w-36  h-36  rounded-full p-1  mr-4  shadow border  '
              src='/images/kent.png'
              alt='Person'
            />
            <div className='flex flex-col '>
              <p className='text-lg font-bold'>Kent (Co-Founder)</p>
              <p className='text-sm text-gray-800'>
                Kent is our leader, having run many online businesses over the
                past 19 years, including e-commerce websites, website
                development,helping to develop over 150 business websites
                online, Kent is also a Blockchain Consultant. Kent is a
                developer, with experience in content management systems
                WordPress, Drupal, Joomla, as well as being a PHP,Javascript,
                CSS, and Ruby on Rails programmer.
              </p>
            </div>
          </div>

          <div className='flex justfiy-start'>
            <img
              className='36  h-36   p-1  mr-4 rounded-full shadow border  '
              src='/images/chace.png'
              alt='Person'
            />
            <div className='flex flex-col'>
              <p className='text-lg font-bold'>Chace Eskam (Co-Founder)</p>
              <p className='text-sm text-gray-800'>
                Has spent a number of years studying the social and economic
                impact of the blockchain. Chace has given talks about
                blockchains future implications on business at W.P Carey school
                of business as early as February 2016. Before devoting himself
                fully to blockchain Chace spent a number of years working in the
                fintech industry at the Nations first digital bank.
              </p>
            </div>
          </div>

          <div className='flex justfiy-center'>
            <img
              className='36  h-36  p-1  mr-4 rounded-full shadow border '
              src='/images/kandari.png'
              alt='Person'
            />
            <div className='flex flex-col '>
              <p className='text-lg font-bold'>
                Aditya Kandari (Head of development)
              </p>
              <p className='text-sm text-gray-800'>
                Experienced digital product strategist, tech evangelist, 7+
                years of experience in Product Strategy, Development, Designing,
                UI/UX, Product Development.
              </p>
            </div>
          </div>
          <div className='flex justfiy-start'>
            <img
              className='32  h-32  p-2  mr-4 rounded-full shadow border '
              src='/images/profiles/narasimha.jpg'
              alt='Person'
            />
            <div className='flex flex-col'>
              <p className='text-lg font-bold'>
                Narasimhulu Vasam (Front-end Developer)
              </p>
              <p className='text-sm text-gray-800'>
                Has a background as a software engineer and is an expert in
                Front-end Development. Narasimhulu Vasam has many years
                experience building User Interfaces, resusble components and has
                helped projects expanded their reach and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreTeam;
