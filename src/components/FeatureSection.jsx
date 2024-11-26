import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="features">
      <p className="my-5 text-2xl sm:text-3xl lg:text-4xl text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Feature</p>
      <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl text-center">Easily build<span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        {" "} your code</span></h1>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;

