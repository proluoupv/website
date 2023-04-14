import React from 'react';

interface ImageProps {
  src: string;
  href: string;
  size: 'big' | 'mid' | 'small';
}
/**
 *This component creates a image with a link to the sponsor.
 *@param src
 *@param href
 *@param size - the size of the image
 *@returns A component with a image that contains a link to the corresponding sponsor
 *The values that size accepts are "small", "mid" and "big", being the corresponding spans on the grid:
 *flex flex-col, col-span-2 and col-span-4
 */
export const Sponsor: React.FC<ImageProps> = ({ src, href, size }) => {
  let spanClass: string;
  switch (size) {
    case 'big':
      spanClass = 'col-span-4 items-center';
      break;
    case 'mid':
      spanClass = 'col-span-2 items-center';
      break;
    case 'small':
      spanClass = 'flex flex-col items-center';
      break;
    default:
      spanClass = 'col-span-2 items-center';
      break;
  }
  return (
    <a className={spanClass} href={href} target="_blank">
      <img src={src} className="h-full w-full object-contain" />
    </a>
  );
};
