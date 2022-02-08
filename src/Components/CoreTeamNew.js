import React from "react";

function CoreTeamNew() {
  return (
    <>
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-16">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Core Team Members
            </p>
          </div>
        </div>

        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-3xl sm:grid-cols-1 lg:grid-cols-3">
          <div className="max-w-md px-8 py-4 mx-auto mt-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border pb-10">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-28 h-28 border-2 border-blue-100 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="/images/kent.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-xl">
              Kent (Co-Founder)
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm">
              Kent is our leader, having run many online businesses over the
              past 19 years, including e-commerce websites, website
              development,helping to develop over 150 business websites online,
              Kent is also a Blockchain Consultant. Kent is a developer, with
              experience in content management systems WordPress, Drupal,
              Joomla, as well as being a PHP,Javascript, CSS, and Ruby on Rails
              programmer.
            </p>
          </div>
          {/* Second */}
          <div className="max-w-md px-8 py-4 mx-auto mt-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-28 h-28 border-2 border-blue-100 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="/images/chace.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-xl">
              Chace Eskam (Co-Founder)
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm">
              Kent is our leader, having run many online businesses over the
              past 19 years, including e-commerce websites, website
              development,helping to develop over 150 business websites online,
              Kent is also a Blockchain Consultant. Kent is a developer, with
              experience in content management systems WordPress, Drupal,
              Joomla, as well as being a PHP,Javascript, CSS, and Ruby on Rails
              programmer.
            </p>
          </div>
          {/* Third  */}
          <div className="max-w-md px-8 py-4 mx-auto mt-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-28 h-28 border-2 border-blue-100 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="/images/kandari.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-xl">
              Aditya Kandari (Head of development)
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm">
              Experienced digital product strategist, tech evangelist, 7+ years
              of experience in Product Strategy, Development, Designing, UI/UX,
              Product Development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoreTeamNew;
