// // app/components/SliderArrows.js
// "use client";
// import React from 'react';

// // Komponen untuk panah KANAN (Next)
// export function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       // Ubah dari right-8 menjadi right-12
//       className={`${className} absolute top-1/2 right-16 -translate-y-1/2 z-10 cursor-pointer`}
//       onClick={onClick}
//     >
//       <div className="bg-black/30 hover:bg-black/50 transition-colors rounded-full w-12 h-12 flex items-center justify-center">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </div>
//     </div>
//   );
// }

// // Komponen untuk panah KIRI (Previous)
// export function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       // Ubah dari left-8 menjadi left-12
//       className={`${className} absolute top-1/2 left-16 -translate-y-1/2 z-10 cursor-pointer`}
//       onClick={onClick}
//     >
//       <div className="bg-black/30 hover:bg-black/50 transition-colors rounded-full w-12 h-12 flex items-center justify-center">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </div>
//     </div>
//   );
// }