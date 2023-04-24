import React from 'react';

interface postProps {
  src: string;
  href: string;
}
/**
 * Adds a post for the journey section
 * @param href, link to the post
 * @param src, location of the image
 * @returns image with a link to the post
 */
export const JourneyPost: React.FC<postProps> = ({ src, href }) => {
  return (
    <a href={href}>
      <img
        className="aspect-square h-full w-full transform object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        src={src}
      />
    </a>
  );
};
