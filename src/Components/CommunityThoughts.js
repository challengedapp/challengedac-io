import React from "react";

function CommunityThoughts() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold">
          Our Community Testimonials
        </h2>
        <div className="grid gap-10 mx-auto mt-14 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-screen-lg">
          <div>
            <img
              className="object-cover w-24 h-24 m-auto rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center text-center mt-2">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="mb-4 text-xs text-gray-800">Product Manager</p>
              <p className="text-sm tracking-wide text-gray-800">
                Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                cuppa unhand me sir hadn't done it in donkey's years sod's law.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full m-auto shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center text-center mt-2">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
              <p className="text-sm tracking-wide text-gray-800">
                Secondary fermentation degrees plato units of bitterness, cask
                conditioned ale ibu real ale pint glass craft beer. krausen
                goblet grainy ibu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityThoughts;
