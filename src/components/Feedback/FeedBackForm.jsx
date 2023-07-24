// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// // Function to get the rating label
// function getRating(rating) {
//   switch (rating) {
//     case 1:
//       return 'Poor';
//     case 2:
//       return 'Nothing special';
//     case 3:
//       return 'Average';
//     case 4:
//       return 'Very good';
//     case 5:
//       return 'Excellent';
//     default:
//       return 'None';
//   }
// }

// function ReviewForm() {
//   const { handleSubmit, register, reset, formState: { errors } } = useForm();

//   // Default rating state and hovered rating state
//   const [rating, setRating] = useState(3);
//   const [hoveredRating, setHoveredRating] = useState(0);

//   // Function to handle form submission
//   const onSubmit = (data) => {
//     console.log(data); // You can handle the form data submission here
//     reset(); // Reset the form after submission
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block mb-2 font-bold text-gray-700" htmlFor="comment">
//             Comment
//           </label>
//           <textarea
//             className={`w-full p-2 border ${errors.comment ? 'border-red-500' : 'border-gray-400'} rounded`}
//             name="comment"
//             id="comment"
//             {...register('comment', { required: true })} // Register the comment field with required validation
//             rows="4"
//           />
//           {errors.comment && <p className="text-red-500 mt-2">Comment is required</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-bold text-gray-700" htmlFor="rating">
//             Rating
//           </label>
//           {/* Rating Component */}
//           <div className="flex items-center">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <label
//                 key={star}
//                 className={`cursor-pointer text-4xl ${
//                   star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-300'
//                 }`}
//                 onMouseEnter={() => setHoveredRating(star)}
//                 onMouseLeave={() => setHoveredRating(0)}
//               >
//                 ★
//                 <input
//                   type="radio"
//                   name="rating"
//                   value={star}
//                   {...register('rating', { required: true })} // Register the rating field with required validation
//                   onChange={() => setRating(star)}
//                 />
//               </label>
//             ))}
//           </div>
//           <div>
//             <div>{`Selected: ${getRating(rating)}`}</div>
//             <div>{`Hovered: ${getRating(hoveredRating)}`}</div>
//           </div>
//           {errors.rating && <p className="text-red-500 mt-2">Rating is required</p>}
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit Review
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ReviewForm;
