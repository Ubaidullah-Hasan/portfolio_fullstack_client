// import React, { useState } from "react";

// const Slider = ({ items }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const slidesToShow = 1; // প্রতি স্লাইডে ১টি ব্লগ দেখানো হবে

//     const handleNext = () => {
//         // ১টি ব্লগ স্লাইড করা হবে
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     };

//     const handlePrev = () => {
//         // ১টি ব্লগ স্লাইড করা হবে
//         setCurrentIndex(
//             (prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1)
//         );
//     };

//     return (
//         <div className="slider-container relative w-full overflow-hidden">
//             {/* Slides */}
//             <div
//                 className="slider flex transition-transform duration-500"
//                 style={{
//                     transform: `translateX(-${currentIndex * 100}%)`, // প্রতি ১টি ব্লগ স্লাইড হবে
//                 }}
//             >
//                 {items.map((item, index) => (
//                     <div
//                         key={index}
//                         className="slide w-full flex justify-center items-center p-4" // একে একে ১টি ব্লগ দেখানো হবে
//                     >
//                         {/* Blog Card */}
//                         <div className="card bg-white p-6 shadow-lg rounded-lg text-center">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="rounded-md mb-4 object-cover w-full h-40"
//                             />
//                             <h3 className="text-xl font-bold">{item.title}</h3>
//                             <p className="text-sm text-gray-500">{item.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Previous Button */}
//             <button
//                 onClick={handlePrev}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
//             >
//                 Prev
//             </button>

//             {/* Next Button */}
//             <button
//                 onClick={handleNext}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Slider;
