import React from 'react';
import { RatingProps } from '../utils/types';

const Rating: React.FC<RatingProps> = ({ rating }) => {

  const starClass = (index: number): string => {
    if (index < rating) {
      return "text-secondaryColor";
    } else {
      return "text-gray-300";
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 fill-current ${starClass(index)}`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 14.62l-4.225 2.45a1 1 0 0 1-1.664-1.063L6.296 11.82 2.445 8.969a1 1 0 0 1 .562-1.701l4.93-.715 2.211-4.47a1 1 0 0 1 1.796 0l2.211 4.47 4.93.715a1 1 0 0 1 .562 1.701l-3.851 3.852 1.2 4.19a1 1 0 0 1-1.532 1.063L10 14.62z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
