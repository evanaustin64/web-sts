// // app/components/CatalogueArrows.tsx
// "use client";

// import React from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// type ArrowProps = {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: () => void;
// }

// export function CatalogueNextArrow(props: ArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10 cursor-pointer hidden md:block`}
//       onClick={onClick}
//     >
//       <div className="bg-gray-800/60 hover:bg-gray-800/80 transition-colors rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
//         <ChevronRightIcon className="h-5 w-5 text-white" />
//       </div>
//     </div>
//   );
// }

// export function CataloguePrevArrow(props: ArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10 cursor-pointer hidden md:block`}
//       onClick={onClick}
//     >
//       <div className="bg-gray-800/60 hover:bg-gray-800/80 transition-colors rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
//         <ChevronLeftIcon className="h-5 w-5 text-white" />
//       </div>
//     </div>
//   );
// }