import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  // Use Intersection Observer to trigger animation when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.6,    // Percentage of element visible to trigger the animation
  });

  return (
    <div className="w-full max-w-4xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" ref={ref}>
      {/* Students Counter */}
      <div className="p-6 bg-blue-500 text-white rounded-lg text-center">
        <h2 className="text-4xl font-bold">
          {inView && <CountUp start={0} end={500} duration={7} />}
        </h2>
        <p className="mt-2 text-lg">Total Students</p>
      </div>

      {/* Teachers Counter */}
      <div className="p-6 bg-green-500 text-white rounded-lg text-center">
        <h2 className="text-4xl font-bold">
          {inView && <CountUp start={0} end={35} duration={7} />}
        </h2>
        <p className="mt-2 text-lg">Total Teachers</p>
      </div>

      {/* Awards Counter */}
      <div className="p-6 bg-yellow-500 text-white rounded-lg text-center">
        <h2 className="text-4xl font-bold">
          {inView && <CountUp start={0} end={6} duration={7} />}
        </h2>
        <p className="mt-2 text-lg">Awards Won</p>
      </div>

      {/* Graduated Counter */}
      <div className="p-6 bg-red-500 text-white rounded-lg text-center">
        <h2 className="text-4xl font-bold">
          {inView && <CountUp start={0} end={8} duration={7} />}
        </h2>
        <p className="mt-2 text-lg">Sets Graduated</p>
      </div>
    </div>
  );
};

export default Counter;
