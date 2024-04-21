import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-[200px]">
      <div className={`loader ease-linear rounded-full border-8 border-t-8 border-t-[#20603C] border-gray-200 h-12 w-12 animate-spin`}></div>
    </div>
  );
};

export default Loader;
