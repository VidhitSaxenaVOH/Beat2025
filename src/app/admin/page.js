// // pages/admin/index.js or components/LMSAdminApp.js
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { 
//   ChevronRight, 
//   Users, 
//   BookOpen, 
//   User, 
//   Mail, 
//   CreditCard, 
//   Activity, 
//   CheckCircle, 
//   Clock, 
//   PlayCircle, 
//   FileText,
//   ArrowLeft,
//   Star,
//   Calendar,
//   TrendingUp,
//   Award,
//   Eye,
//   Search,
//   Filter,
//   Download,
//   MoreVertical,
//   Bell,
//   Settings,
//   LogOut
// } from 'lucide-react';

// // ==================== MOCK DATA ====================

// // Courses Data
// const coursesData = [
//   {
//     id: 1,
//     title: "Introduction to React",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
//     enrolledCount: 45,
//     description: "Learn the fundamentals of React development and build modern web applications with hooks, components, and state management.",
//     level: "Beginner",
//     duration: "6 weeks",
//     rating: 4.8,
//     category: "Frontend Development",
//     instructor: "Sarah Johnson",
//     price: "$299",
//     tags: ["React", "JavaScript", "Web Development"],
//   },
//   {
//     id: 2,
//     title: "Advanced JavaScript",
//     image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
//     enrolledCount: 32,
//     description: "Master advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features.",
//     level: "Advanced",
//     duration: "8 weeks",
//     rating: 4.9,
//     category: "Programming",
//     instructor: "Michael Chen",
//     price: "$399",
//     tags: ["JavaScript", "ES6", "Advanced Programming"],
//   },
//   {
//     id: 3,
//     title: "Node.js Backend Development",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
//     enrolledCount: 28,
//     description: "Build scalable backend applications with Node.js, Express, and MongoDB. Learn API development and server-side programming.",
//     level: "Intermediate",
//     duration: "10 weeks",
//     rating: 4.7,
//     category: "Backend Development",
//     instructor: "David Rodriguez",
//     price: "$459",
//     tags: ["Node.js", "Express", "MongoDB", "API"],
//   },
//   {
//     id: 4,
//     title: "Database Design & SQL",
//     image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
//     enrolledCount: 38,
//     description: "Learn database design principles, SQL optimization techniques, and work with both relational and NoSQL databases.",
//     level: "Intermediate",
//     duration: "7 weeks",
//     rating: 4.6,
//     category: "Database",
//     instructor: "Lisa Wang",
//     price: "$349",
//     tags: ["SQL", "Database Design", "PostgreSQL", "MongoDB"],
//   },
//   {
//     id: 5,
//     title: "UI/UX Design Fundamentals",
//     image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
//     enrolledCount: 52,
//     description: "Master the principles of user interface and user experience design. Learn design thinking, prototyping, and user research.",
//     level: "Beginner",
//     duration: "5 weeks",
//     rating: 4.8,
//     category: "Design",
//     instructor: "Emma Thompson",
//     price: "$279",
//     tags: ["UI Design", "UX Design", "Figma", "Prototyping"],
//   },
//   {
//     id: 6,
//     title: "Python Data Science",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
//     enrolledCount: 41,
//     description: "Analyze data and build machine learning models with Python. Learn pandas, numpy, scikit-learn, and data visualization.",
//     level: "Intermediate",
//     duration: "12 weeks",
//     rating: 4.9,
//     category: "Data Science",
//     instructor: "Alex Kumar",
//     price: "$549",
//     tags: ["Python", "Data Science", "Machine Learning", "Pandas"],
//   },
//   {
//     id: 7,
//     title: "Mobile App Development with Flutter",
//     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
//     enrolledCount: 29,
//     description: "Build cross-platform mobile applications using Flutter and Dart. Learn mobile UI design and app deployment.",
//     level: "Intermediate",
//     duration: "9 weeks",
//     rating: 4.7,
//     category: "Mobile Development",
//     instructor: "James Park",
//     price: "$429",
//     tags: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
//   },
// ];

// // Students Data
// const studentsData = {
//   1: [
//     {
//       id: 's1',
//       name: "Alice Johnson",
//       email: "alice.johnson@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
//       userId: "USR001",
//       status: "active",
//       enrolledDate: "2024-01-15",
//       lastActive: "2 hours ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: true,
//         video: false,
//         postAssessment: false
//       },
//       completionDate: null,
//       timeSpent: "12h 30m",
//       grade: "B+",
//       attendance: "95%"
//     },
//     {
//       id: 's2',
//       name: "Bob Smith",
//       email: "bob.smith@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       userId: "USR002",
//       status: "active",
//       enrolledDate: "2024-01-10",
//       lastActive: "1 day ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: true,
//         video: true,
//         postAssessment: true
//       },
//       completionDate: "2024-02-20",
//       timeSpent: "24h 15m",
//       grade: "A",
//       attendance: "100%"
//     },
//     {
//       id: 's3',
//       name: "Carol Davis",
//       email: "carol.davis@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//       userId: "USR003",
//       status: "inactive",
//       enrolledDate: "2024-01-20",
//       lastActive: "1 week ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: false,
//         video: false,
//         postAssessment: false
//       },
//       completionDate: null,
//       timeSpent: "3h 45m",
//       grade: "C",
//       attendance: "65%"
//     },
//     {
//       id: 's4',
//       name: "David Wilson",
//       email: "david.wilson@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       userId: "USR004",
//       status: "active",
//       enrolledDate: "2024-01-08",
//       lastActive: "30 minutes ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: true,
//         video: true,
//         postAssessment: false
//       },
//       completionDate: null,
//       timeSpent: "18h 20m",
//       grade: "A-",
//       attendance: "92%"
//     },
//     {
//       id: 's5',
//       name: "Emily Zhang",
//       email: "emily.zhang@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
//       userId: "USR005",
//       status: "active",
//       enrolledDate: "2024-01-25",
//       lastActive: "4 hours ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: true,
//         video: false,
//         postAssessment: false
//       },
//       completionDate: null,
//       timeSpent: "8h 15m",
//       grade: "B",
//       attendance: "88%"
//     }
//   ],
//   2: [
//     {
//       id: 's6',
//       name: "Frank Miller",
//       email: "frank.miller@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
//       userId: "USR006",
//       status: "active",
//       enrolledDate: "2024-01-12",
//       lastActive: "5 hours ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: true,
//         video: true,
//         postAssessment: false
//       },
//       completionDate: null,
//       timeSpent: "22h 10m",
//       grade: "A-",
//       attendance: "96%"
//     },
//     {
//       id: 's7',
//       name: "Grace Lee",
//       email: "grace.lee@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
//       userId: "USR007",
//       status: "active",
//       enrolledDate: "2024-01-18",
//       lastActive: "1 hour ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: false,
//         video: false,
//         postAssessment: false
//       },
//       completionDate: null,
//       timeSpent: "6h 30m",
//       grade: "B-",
//       attendance: "78%"
//     }
//   ],
//   3: [
//     {
//       id: 's8',
//       name: "Henry Brown",
//       email: "henry.brown@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
//       userId: "USR008",
//       status: "active",
//       enrolledDate: "2024-01-14",
//       lastActive: "3 hours ago",
//       courseProgress: {
//         overview: true,
//         preAssessment: true,
//         video: true,
//         postAssessment: true
//       },
//       completionDate: "2024-03-01",
//       timeSpent: "35h 45m",
//       grade: "A+",
//       attendance: "100%"
//     }
//   ]
// };

// // ==================== UTILITY COMPONENTS ====================

// // Loading Spinner Component
// const LoadingSpinner = () => (
//   <div className="flex items-center justify-center p-8">
//     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//   </div>
// );

// // Level Badge Component
// const LevelBadge = ({ level }) => {
//   const levelColors = {
//     'Beginner': 'bg-green-100 text-green-700 border-green-200',
//     'Intermediate': 'bg-orange-100 text-orange-700 border-orange-200',
//     'Advanced': 'bg-red-100 text-red-700 border-red-200'
//   };

//   return (
//     <span className={`px-3 py-1 text-xs font-medium rounded-full border ${levelColors[level] || levelColors['Beginner']}`}>
//       {level}
//     </span>
//   );
// };

// // Grade Badge Component
// const GradeBadge = ({ grade }) => {
//   const gradeColors = {
//     'A+': 'bg-green-100 text-green-800 border-green-200',
//     'A': 'bg-green-100 text-green-700 border-green-200',
//     'A-': 'bg-blue-100 text-blue-700 border-blue-200',
//     'B+': 'bg-blue-100 text-blue-600 border-blue-200',
//     'B': 'bg-yellow-100 text-yellow-700 border-yellow-200',
//     'B-': 'bg-yellow-100 text-yellow-600 border-yellow-200',
//     'C': 'bg-orange-100 text-orange-700 border-orange-200',
//     'D': 'bg-red-100 text-red-700 border-red-200',
//     'F': 'bg-red-200 text-red-800 border-red-300'
//   };

//   return (
//     <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${gradeColors[grade] || gradeColors['C']}`}>
//       {grade}
//     </span>
//   );
// };

// // Search and Filter Component
// const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
//   const categories = ['All', 'Frontend Development', 'Backend Development', 'Programming', 'Database', 'Design', 'Data Science', 'Mobile Development', 'Cloud Computing'];

//   return (
//     <div className="mb-8 space-y-4">
//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Search Bar */}
//         <div className="relative flex-1">
//           <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search courses..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//           />
//         </div>
        
//         {/* Category Filter */}
//         <div className="relative">
//           <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
//           >
//             {categories.map(category => (
//               <option key={category} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== MAIN COMPONENTS ====================

// // Header Component
// const Header = ({ currentPage, onBackToCourses, courseName }) => (
//   <div className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between h-16">
//         <div className="flex items-center space-x-4">
//           {currentPage === 'course-detail' && (
//             <button 
//               onClick={onBackToCourses}
//               className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
//             >
//               <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
//               Back to Courses
//             </button>
//           )}
          
//         </div>
        
//         <div className="flex items-center space-x-4">
//           <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
//             <span className="text-white text-sm font-semibold">A</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

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
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//     </div>

//     {/* Content */}
//     <div className="p-6">
      
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
//       </div>

//       <div className="flex items-center justify-between mb-4">
//         <span className="text-sm text-gray-500">by {course.instructor}</span>
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
// const StatsCard = ({ icon: Icon, title, value, color, bgColor, subtitle }) => (
//   <div className={`${bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-gray-600 text-sm font-medium">{title}</p>
//         <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
//         {subtitle && (
//           <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
//         )}
//       </div>
//       <div className={`p-3 rounded-xl ${color}`}>
//         <Icon size={28} className="text-white" />
//       </div>
//     </div>
//   </div>
// );

// // Student List Item Component
// const StudentListItem = ({ student, isSelected, onSelect }) => {
//   const overallProgress = Object.values(student.courseProgress).filter(Boolean).length * 25;
  
//   return (
//     <div 
//       className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-200 ${
//         isSelected ? 'bg-gradient-to-r from-blue-100 to-orange-100 border-l-4 border-l-blue-500 shadow-sm' : ''
//       }`}
//       onClick={() => onSelect(student)}
//     >
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <img 
//             src={student.profilePicture} 
//             alt={student.name}
//             className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//           />
//           <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
//             student.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
//           }`}></div>
//         </div>
        
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center justify-between">
//             <h4 className="text-sm font-semibold text-gray-900 truncate">{student.name}</h4>
//           </div>
//           <p className="text-xs text-gray-500 truncate">{student.email}</p>
//           <div className="flex items-center mt-2 space-x-4">
//             <div className="flex items-center">
//               <div className={`w-2 h-2 rounded-full mr-1 ${
//                 student.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
//               }`}></div>
//               <span className={`text-xs font-medium capitalize ${
//                 student.status === 'active' ? 'text-green-600' : 'text-gray-500'
//               }`}>
//                 {student.status}
//               </span>
//             </div>
//           </div>
          
//           {/* Progress Bar */}
//           <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
//             <div 
//               className="bg-gradient-to-r from-blue-500 to-orange-500 h-1.5 rounded-full transition-all duration-300"
//               style={{ width: `${overallProgress}%` }}
//             ></div>
//           </div>
//         </div>
        
//         {isSelected && (
//           <ChevronRight size={16} className="text-blue-500" />
//         )}
//       </div>
//     </div>
//   );
// };

// // Progress Section Component
// const ProgressSection = ({ title, completed, icon: Icon, description }) => (
//   <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//     completed 
//       ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-200 hover:shadow-md' 
//       : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 hover:shadow-sm'
//   }`}>
//     <div className="flex items-center justify-between">
//       <div className="flex items-center space-x-3">
//         <div className={`p-2 rounded-lg ${completed ? 'bg-green-500' : 'bg-gray-400'}`}>
//           <Icon size={18} className="text-white" />
//         </div>
//         <div>
//           <span className="text-sm font-semibold text-gray-800">{title}</span>
//           {description && (
//             <p className="text-xs text-gray-500 mt-1">{description}</p>
//           )}
//         </div>
//       </div>
//       <div className={`p-1 rounded-full ${completed ? 'bg-green-500' : 'bg-gray-300'}`}>
//         {completed ? (
//           <CheckCircle size={20} className="text-white" />
//         ) : (
//           <Clock size={20} className="text-gray-500" />
//         )}
//       </div>
//     </div>
//   </div>
// );

// // Student Detail Component
// const StudentDetail = ({ student, courseName }) => {
//   if (!student) {
//     return (
//       <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
//             <User size={32} className="text-blue-600" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a Student</h3>
//           <p className="text-gray-500">Choose a student from the sidebar to view their detailed progress and performance metrics</p>
//         </div>
//       </div>
//     );
//   }

//   const overallProgress = Object.values(student.courseProgress).filter(Boolean).length * 25;
//   const completedSections = Object.values(student.courseProgress).filter(Boolean).length;
//   const totalSections = Object.keys(student.courseProgress).length;

//   return (
//     <div className="flex-1 p-6 space-y-6">
//       {/* Main Student Card */}
//       <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//         {/* Header Card */}
//         <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 p-6 text-white">
//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <img 
//                 src={student.profilePicture} 
//                 alt={student.name}
//                 className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
//               />
//               <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-3 border-white ${
//                 student.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
//               }`}></div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold mb-1">{student.name}</h2>
//               <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 ${
//                 student.status === 'active' 
//                   ? 'bg-green-100 text-green-800' 
//                   : 'bg-red-100 text-red-800'
//               }`}>
//                 <div className={`w-2 h-2 rounded-full mr-2 ${
//                   student.status === 'active' ? 'bg-green-400' : 'bg-red-400'
//                 }`}></div>
//                 {student.status}
//               </div>
//               <div className="text-blue-100">
//                 <p className="text-sm">Enrolled in {courseName}</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="text-3xl font-bold">{overallProgress}%</div>
//               <div className="text-blue-200 text-sm">Complete</div>
//             </div>
//           </div>
//         </div>

//         {/* Student Info Grid */}
//         <div className="p-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
//               <div className="flex items-center space-x-3">
//                 {/* <Mail size={20} className="text-blue-600" /> */}
//                 <div>
//                   <p className="text-xs text-blue-600 font-medium">Email Address</p>
//                   <p className="text-xs font-medium text-gray-800 truncate">{student.email}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
//               <div className="flex items-center space-x-3">
//                 <CreditCard size={20} className="text-orange-600" />
//                 <div>
//                   <p className="text-xs text-orange-600 font-medium">User ID</p>
//                   <p className="text-xs font-medium text-gray-800 truncate">{student.userId}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
//               <div className="flex items-center space-x-3">
//                 <Calendar size={20} className="text-green-600" />
//                 <div>
//                   <p className="text-xs text-green-600 font-medium">Enrolled</p>
//                   <p className="text-xs font-medium text-gray-800 truncate">{new Date(student.enrolledDate).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
//               <div className="flex items-center space-x-3">
//                 <Clock size={20} className="text-purple-600" />
//                 <div>
//                   <p className="text-xs text-purple-600 font-medium">Time Spent</p>
//                   <p className="text-xs font-medium text-gray-800 truncate">{student.timeSpent}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Progress Overview */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-900">Progress Overview</h3>
//               <div className="text-sm text-gray-500">
//                 {completedSections} of {totalSections} sections completed
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-4 mb-4">
//               <div 
//                 className="bg-gradient-to-r from-blue-500 to-orange-500 h-4 rounded-full transition-all duration-500 shadow-sm"
//                 style={{ width: `${overallProgress}%` }}
//               ></div>
//             </div>
            
//             <div className="flex justify-between text-sm text-gray-600">
//               <span>Started</span>
//               <span className="font-medium">{overallProgress}% Complete</span>
//               <span>{overallProgress === 100 ? 'Finished' : 'In Progress'}</span>
//             </div>
//           </div>

//           {/* Course Progress Sections */}
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-900 mb-6">Course Sections</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <ProgressSection 
//                 title="Course Overview" 
//                 description="Introduction and objectives"
//                 completed={student.courseProgress.overview}
//                 icon={BookOpen}
//               />
//               <ProgressSection 
//                 title="Pre-Assessment" 
//                 description="Initial knowledge evaluation"
//                 completed={student.courseProgress.preAssessment}
//                 icon={FileText}
//               />
//               <ProgressSection 
//                 title="Video Content" 
//                 description="Main learning materials"
//                 completed={student.courseProgress.video}
//                 icon={PlayCircle}
//               />
//               <ProgressSection 
//                 title="Post-Assessment" 
//                 description="Final evaluation and certification"
//                 completed={student.courseProgress.postAssessment}
//                 icon={Award}
//               />
//             </div>
//           </div>

//           {/* Performance Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 border border-blue-100">
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="text-lg font-semibold text-gray-800">Performance</h4>
//                 <Activity size={20} className="text-blue-600" />
//               </div>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Current Grade:</span>
//                   <GradeBadge grade={student.grade} />
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Attendance:</span>
//                   <span className="text-sm font-semibold text-gray-800">{student.attendance}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Last Activity:</span>
//                   <span className="text-sm font-semibold text-gray-800">{student.lastActive}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="text-lg font-semibold text-gray-800">Timeline</h4>
//                 <Calendar size={20} className="text-green-600" />
//               </div>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Enrolled:</span>
//                   <span className="text-sm font-semibold text-gray-800">{new Date(student.enrolledDate).toLocaleDateString()}</span>
//                 </div>
//                 {student.completionDate ? (
//                   <div className="flex justify-between">
//                     <span className="text-sm text-gray-600">Completed:</span>
//                     <span className="text-sm font-semibold text-green-600">{new Date(student.completionDate).toLocaleDateString()}</span>
//                   </div>
//                 ) : (
//                   <div className="flex justify-between">
//                     <span className="text-sm text-gray-600">Status:</span>
//                     <span className="text-sm font-semibold text-orange-600">In Progress</span>
//                   </div>
//                 )}
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Total Time:</span>
//                   <span className="text-sm font-semibold text-gray-800">{student.timeSpent}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== MAIN APPLICATION COMPONENT ====================

// const LMSAdminPanel = () => {
//   const [currentPage, setCurrentPage] = useState('courses');
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [isLoading, setIsLoading] = useState(false);

//   // Filter courses based on search and category
//   const filteredCourses = coursesData.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleSeeMore = (courseId) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedCourse(courseId);
//       setSelectedStudent(null);
//       setCurrentPage('course-detail');
//       setIsLoading(false);
//     }, 500);
//   };

//   const handleBackToCourses = () => {
//     setCurrentPage('courses');
//     setSelectedCourse(null);
//     setSelectedStudent(null);
//     setSearchTerm('');
//     setSelectedCategory('All');
//   };

//   const handleStudentSelect = (student) => {
//     setSelectedStudent(student);
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   // ==================== COURSES LISTING PAGE ====================
//   if (currentPage === 'courses') {
//     const totalStudents = coursesData.reduce((sum, course) => sum + course.enrolledCount, 0);
//     const totalCourses = coursesData.length;
//     const averageRating = (coursesData.reduce((sum, course) => sum + course.rating, 0) / totalCourses).toFixed(1);
//     const totalRevenue = coursesData.reduce((sum, course) => sum + (course.enrolledCount * parseInt(course.price.replace(',', ''))), 0);

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
//         <Header currentPage={currentPage} />
        
//         {/* Hero Section */}
//         <div className="bg-white shadow-sm border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="text-center mb-2">
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 bg-clip-text text-transparent mb-6">
//                 LMS Admin Dashboard
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Manage your courses and monitor student progress with our comprehensive admin panel. 
//                 Track performance, analyze trends, and optimize learning outcomes.
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* Courses Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Management</h2>
//             <p className="text-gray-600 max-w-2xl">
//               Click on any course card to view enrolled students and their detailed progress
//             </p>
//           </div>

          
//           {/* Courses Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
//             {filteredCourses.map(course => (
//               <CourseCard 
//                 key={course.id} 
//                 course={course} 
//                 onSeeMore={handleSeeMore}
//               />
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-12">
//               <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">No courses found</h3>
//               <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   // ==================== STUDENT DETAILS PAGE ====================
//   const currentCourse = coursesData.find(c => c.id === selectedCourse);
//   const students = studentsData[selectedCourse] || [];

//   // Calculate stats for student details page
//   const activeStudents = students.filter(s => s.status === 'active').length;
//   const completedStudents = students.filter(s => 
//     Object.values(s.courseProgress).every(Boolean)
//   ).length;
//   const averageProgress = students.length > 0 
//     ? Math.round(students.reduce((sum, student) => {
//         const progress = Object.values(student.courseProgress).filter(Boolean).length * 25;
//         return sum + progress;
//       }, 0) / students.length)
//     : 0;

//   if (!currentCourse) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
//           <button 
//             onClick={handleBackToCourses}
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
//           >
//             Back to Courses
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
//       <Header 
//         currentPage={currentPage} 
//         onBackToCourses={handleBackToCourses}
//         courseName={currentCourse.title}
//       />
      
//       {/* Course Header */}
//       <div className="bg-white shadow-lg border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex items-center space-x-6 mb-8">
//             <img 
//               src={currentCourse.image} 
//               alt={currentCourse.title}
//               className="w-24 h-24 rounded-xl object-cover border-2 border-gray-200 shadow-lg"
//             />
//             <div className="flex-1">
//               <h1 className="text-3xl font-bold text-gray-900 mb-3">{currentCourse.title}</h1>
//               <p className="text-gray-600 max-w-2xl">{currentCourse.description}</p>
//             </div>
            
//           </div>

//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex gap-8 min-h-[calc(100vh-400px)]">
//           {/* Enhanced Sidebar - Students List */}
//           <div className="w-96 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-6 text-white">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold">Enrolled Students</h3>
//               </div>
//               <p className="text-blue-100 text-sm">
//                 {students.length} students • {activeStudents} active • {completedStudents} completed
//               </p>
//             </div>
            
//             <div className="overflow-y-auto max-h-full">
//               {students.map(student => (
//                 <StudentListItem
//                   key={student.id}
//                   student={student}
//                   isSelected={selectedStudent?.id === student.id}
//                   onSelect={handleStudentSelect}
//                 />
//               ))}
//               {students.length === 0 && (
//                 <div className="p-8 text-center">
//                   <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//                     <Users size={28} className="text-gray-400" />
//                   </div>
//                   <h4 className="text-lg font-semibold text-gray-700 mb-2">No Students Enrolled</h4>
//                   <p className="text-gray-500 text-sm">Students will appear here once they enroll in this course</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Enhanced Student Details */}
//           <StudentDetail student={selectedStudent} courseName={currentCourse.title} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LMSAdminPanel;