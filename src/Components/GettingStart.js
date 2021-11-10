import React from "react";

function GettingStart() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-10 lg:flex-row lg:justify-center mt-16 ">
          <div className="max-w-xl pr-16 w-6/12 mx-auto mb-10 lg:mt-1 sm:mt-10 sm:w-full getting_start_data">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              How to participate in a challenge
            </h5>
            <p className="mb-6 text-gray-900">
              You can participate in any challenge published within the
              application, for this you simply must follow the steps indicated
              that the author specifies in order to obtain your reward
            </p>
          </div>

          <div className=" lg:w-4/12 sm:w-full grid gap-5 row-gap-5 sm:grid-cols-1">
            <video
              className="w-full border"
              src="/images/videos/participate_challenge.mp4"
              autoPlay
              loop
            ></video>
          </div>
        </div>
        <hr />

        <div className="flex my-10 flex-col lg:flex-row lg:justify-center sm:w-full mt-16">
          <div className="max-w-xl pr-16 w-6/12 mx-auto mb-10 sm:w-full getting_start_data">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              How to create a challenge
            </h5>
            <p className="mb-6 text-gray-900">
              Create challenges within the community by setting the following
              parameters:
            </p>
            <p className="mt-2">- Task challenge or Geo challenge</p>
            <h4 className="my-3 font-bold">
              Geo challenge: Free Competitions in geo-located places around the
              world
            </h4>
            <p className="mt-2">
              - Include social media within where interaction is required if
              necessary, to complete the challenge
            </p>
            <p className="mt-2">
              - Set the amount and reward token for completing the task
            </p>
            <p className="mt-2">
              - In case of being a geo-localized challenge, include if you want
              to generate an auto reward to send the tokens when reaching the
              destination point, and include the coordinates to where it is
              required to arrive to complete the task
            </p>
          </div>

          <div className="lg:w-4/12 sm:w-full grid gap-5 row-gap-5 sm:grid-cols-1">
            <video
              className="w-full border"
              src="/images/videos/create_challenge.mp4"
              autoPlay
              loop
            ></video>
          </div>
        </div>
        <hr />
        <div className="flex flex-col my-10  lg:flex-row lg:justify-center mt-16 sm:w-full">
          <div className="max-w-xl pr-16 w-6/12 mx-auto mb-10 sm:w-full getting_start_data">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              How to reward user
            </h5>
            <p className="mb-6 text-gray-900">
              Once your challenge is created, you have to reward those who
              participate in it, for this go to the section of your challenges
              carried out and select by user those that have been completed
              correctly
            </p>
            <p className="mb-6 text-gray-900">
              In addition to rewarding each user individually, you have the
              possibility of sending a personalized tip with any of the other
              cryptocurrencies accepted within the application through a command
              or using the following interface:
            </p>
          </div>

          <div className="lg:w-4/12 sm:w-full grid gap-5 row-gap-5 sm:grid-cols-1">
            <video
              className="w-full border"
              src="/images/videos/reward_user.mp4"
              autoPlay
              loop
            ></video>
            <video
              className="w-full border"
              src="/images/videos/reward_video2.mp4"
              autoPlay
              loop
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStart;
