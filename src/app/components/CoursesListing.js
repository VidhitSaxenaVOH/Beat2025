// // pages/courses/index.js or components/CoursesListing.js
// import React from 'react';
// import { ChevronRight, Users, BookOpen, Star, TrendingUp, Award } from 'lucide-react';

// // Mock data for courses
// const coursesData = [
//   {
//     id: 1,
//     title: "Introduction to React",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
//     enrolledCount: 45,
//     description: "Learn the fundamentals of React development and build modern web applications",
//     level: "Beginner",
//     duration: "6 weeks",
//     rating: 4.8,
//     category: "Frontend Development"
//   },
//   {
//     id: 2,
//     title: "Advanced JavaScript",
//     image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
//     enrolledCount: 32,
//     description: "Master advanced JavaScript concepts and patterns for professional development",
//     level: "Advanced",
//     duration: "8 weeks",
//     rating: 4.9,
//     category: "Programming"
//   },
//   {
//     id: 3,
//     title: "Node.js Backend Development",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
//     enrolledCount: 28,
//     description: "Build scalable backend applications with Node.js and Express",
//     level: "Intermediate",
//     duration: "10 weeks",
//     rating: 4.7,
//     category: "Backend Development"
//   },
//   {
//     id: 4,
//     title: "Database Design & SQL",
//     image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
//     enrolledCount: 38,
//     description: "Learn database design principles and SQL optimization techniques",
//     level: "Intermediate",
//     duration: "7 weeks",
//     rating: 4.6,
//     category: "Database"
//   },
//   {
//     id: 5,
//     title: "UI/UX Design Fundamentals",
//     image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
//     enrolledCount: 52,
//     description: "Master the principles of user interface and user experience design",
//     level: "Beginner",
//     duration: "5 weeks",
//     rating: 4.8,
//     category: "Design"
//   },
//   {
//     id: 6,
//     title: "Python Data Science",
//     image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=300&fit=crop",
//     enrolledCount: 41,
//     description: "Analyze data and build machine learning models with Python",
//     level: "Intermediate",
//     duration: "12 weeks",
//     rating: 4.9,
//     category: "Data Science"
//   }
// ];

// // Level badge component
// const LevelBadge = ({ level }) => {
//   const levelColors = {
//     'Beginner': 'bg-green-100 text-green-700 border-green-200',
//     'Intermediate': 'bg-orange-100 text-orange-700 border-orange-200',
//     'Advanced': 'bg-red-100 text-red-700 border-red-200'
//   };

//   return (
//     <span className={`px-2 py-1 text-xs font-medium rounded-full border ${levelColors[level] || levelColors['Beginner']}`}>
//       {level}
//     </span>
//   );
// };

// // Course Card Component
// const CourseCard = ({ course, onSeeMore }) => (
//   <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
//     {/* Image Container */}
//     <div className="relative overflow-hidden">
//       <img 
//         src={course.image} 
//         alt={course.title}
//         className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//       />
//       <div className="absolute top-4 left-4">
//         <LevelBadge level={course.level} />
//       </div>
//       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
//         <Star size={14} className="text-orange-500 fill-current mr-1" />
//         <span className="text-xs font-semibold text-gray-700">{course.rating}</span>
//       </div>
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//     </div>

//     {/* Content */}
//     <div className="p-6">
//       <div className="mb-3">
//         <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
//           {course.category}
//         </span>
//       </div>
      
//       <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
//         {course.title}
//       </h3>
      
//       <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
//         {course.description}
//       </p>
      
//       <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//         <div className="flex items-center">
//           <Users size={16} className="mr-2 text-blue-500" />
//           <span className="font-medium">{course.enrolledCount} students</span>
//         </div>
//         <div className="flex items-center">
//           <BookOpen size={16} className="mr-2 text-orange-500" />
//           <span className="font-medium">{course.duration}</span>
//         </div>
//       </div>
      
//       <button 
//         onClick={() => onSeeMore(course.id)}
//         className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:shadow-lg transform group-hover:scale-105"
//       >
//         <span>View Students</span>
//         <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
//       </button>
//     </div>
//   </div>
// );

// // Stats Card Component
// const StatsCard = ({ icon: Icon, title, value, color, bgColor }) => (
//   <div className={`${bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300`}>
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-gray-600 text-sm font-medium">{title}</p>
//         <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
//       </div>
//       <div className={`p-3 rounded-xl ${color}`}>
//         <Icon size={24} className="text-white" />
//       </div>
//     </div>
//   </div>
// );

// // Main Courses Listing Component
// const CoursesListing = ({ onSeeMore }) => {
//   const totalStudents = coursesData.reduce((sum, course) => sum + course.enrolledCount, 0);
//   const totalCourses = coursesData.length;
//   const averageRating = (coursesData.reduce((sum, course) => sum + course.rating, 0) / totalCourses).toFixed(1);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
//       {/* Header Section */}
//       <div className="bg-white shadow-sm border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 bg-clip-text text-transparent mb-4">
//               LMS Admin Dashboard
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Manage your courses and monitor student progress with our comprehensive admin panel
//             </p>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <StatsCard
//               icon={BookOpen}
//               title="Total Courses"
//               value={totalCourses}
//               color="bg-gradient-to-r from-blue-500 to-blue-600"
//               bgColor="bg-blue-50"
//             />
//             <StatsCard
//               icon={Users}
//               title="Total Students"
//               value={totalStudents}
//               color="bg-gradient-to-r from-orange-500 to-orange-600"
//               bgColor="bg-orange-50"
//             />
//             <StatsCard
//               icon={Star}
//               title="Average Rating"
//               value={averageRating}
//               color="bg-gradient-to-r from-green-500 to-green-600"
//               bgColor="bg-green-50"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Courses Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Management</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Click on any course card to view enrolled students and their detailed progress
//           </p>
//         </div>
        
//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {coursesData.map(course => (
//             <CourseCard 
//               key={course.id} 
//               course={course} 
//               onSeeMore={onSeeMore}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesListing;