// // pages/courses/[courseId]/students.js or components/StudentDetails.js
// import React, { useState } from 'react';
// import { 
//   ChevronRight, 
//   Users, 
//   User, 
//   Mail, 
//   CreditCard, 
//   Activity, 
//   CheckCircle, 
//   Clock, 
//   PlayCircle, 
//   FileText,
//   BookOpen,
//   ArrowLeft,
//   Star,
//   Calendar,
//   TrendingUp,
//   Award,
//   Eye
// } from 'lucide-react';

// // Mock data for courses (same as before but extended)
// const coursesData = {
//   1: {
//     title: "Introduction to React",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
//     level: "Beginner",
//     duration: "6 weeks",
//     category: "Frontend Development"
//   },
//   2: {
//     title: "Advanced JavaScript",
//     image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
//     level: "Advanced", 
//     duration: "8 weeks",
//     category: "Programming"
//   }
// };

// // Mock data for students with more detailed information
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
//       timeSpent: "12h 30m"
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
//       timeSpent: "24h 15m"
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
//       timeSpent: "3h 45m"
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
//       timeSpent: "18h 20m"
//     }
//   ],
//   2: [
//     {
//       id: 's5',
//       name: "Emma Thompson",
//       email: "emma.thompson@email.com",
//       profilePicture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
//       userId: "USR005",
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
//       timeSpent: "22h 10m"
//     }
//   ]
// };

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
//           <h4 className="text-sm font-semibold text-gray-900 truncate">{student.name}</h4>
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
//             <div className="flex items-center">
//               <TrendingUp size={12} className="text-blue-500 mr-1" />
//               <span className="text-xs font-medium text-blue-600">{overallProgress}%</span>
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

// // Progress Component with enhanced styling
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
//           <p className="text-gray-500">Choose a student from the sidebar to view their detailed progress</p>
//         </div>
//       </div>
//     );
//   }

//   const overallProgress = Object.values(student.courseProgress).filter(Boolean).length * 25;
//   const completedSections = Object.values(student.courseProgress).filter(Boolean).length;
//   const totalSections = Object.keys(student.courseProgress).length;

//   return (
//     <div className="flex-1 p-6">
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
//               <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                 student.status === 'active' 
//                   ? 'bg-green-100 text-green-800' 
//                   : 'bg-red-100 text-red-800'
//               }`}>
//                 <div className={`w-2 h-2 rounded-full mr-2 ${
//                   student.status === 'active' ? 'bg-green-400' : 'bg-red-400'
//                 }`}></div>
//                 {student.status}
//               </div>
//               <div className="mt-2 text-blue-100">
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
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
//               <div className="flex items-center space-x-3">
//                 <Mail size={20} className="text-blue-600" />
//                 <div>
//                   <p className="text-xs text-blue-600 font-medium">Email Address</p>
//                   <p className="text-sm font-semibold text-gray-800 truncate">{student.email}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
//               <div className="flex items-center space-x-3">
//                 <CreditCard size={20} className="text-orange-600" />
//                 <div>
//                   <p className="text-xs text-orange-600 font-medium">User ID</p>
//                   <p className="text-sm font-semibold text-gray-800">{student.userId}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
//               <div className="flex items-center space-x-3">
//                 <Calendar size={20} className="text-green-600" />
//                 <div>
//                   <p className="text-xs text-green-600 font-medium">Enrolled</p>
//                   <p className="text-sm font-semibold text-gray-800">{new Date(student.enrolledDate).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
//               <div className="flex items-center space-x-3">
//                 <Clock size={20} className="text-purple-600" />
//                 <div>
//                   <p className="text-xs text-purple-600 font-medium">Time Spent</p>
//                   <p className="text-sm font-semibold text-gray-800">{student.timeSpent}</p>
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
//           <div>
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

//           {/* Additional Info */}
//           <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border border-blue-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Last Activity</p>
//                 <p className="text-lg font-semibold text-gray-900">{student.lastActive}</p>
//               </div>
//               {student.completionDate && (
//                 <div className="text-right">
//                   <p className="text-sm font-medium text-gray-700">Completed On</p>
//                   <p className="text-lg font-semibold text-green-600">{new Date(student.completionDate).toLocaleDateString()}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Student Details Component
// const StudentDetails = ({ courseId, onBackToCourses }) => {
//   const [selectedStudent, setSelectedStudent] = useState(null);
  
//   const currentCourse = coursesData[courseId];
//   const students = studentsData[courseId] || [];
  
//   const handleStudentSelect = (student) => {
//     setSelectedStudent(student);
//   };

//   // Calculate stats
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
//             onClick={onBackToCourses}
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
//       {/* Enhanced Header */}
//       <div className="bg-white shadow-lg border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between mb-6">
//             <button 
//               onClick={onBackToCourses}
//               className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
//             >
//               <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
//               Back to Courses
//             </button>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             <img 
//               src={currentCourse.image} 
//               alt={currentCourse.title}
//               className="w-20 h-20 rounded-xl object-cover border-2 border-gray-200 shadow-sm"
//             />
//             <div className="flex-1">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentCourse.title}</h1>
//               <div className="flex items-center space-x-4 text-sm text-gray-600">
//                 <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
//                   {currentCourse.level}
//                 </span>
//                 <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
//                   {currentCourse.duration}
//                 </span>
//                 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
//                   {currentCourse.category}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-blue-600 text-sm font-medium">Total Students</p>
//                   <p className="text-2xl font-bold text-gray-800">{students.length}</p>
//                 </div>
//                 <Users size={24} className="text-blue-600" />
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-green-600 text-sm font-medium">Active Students</p>
//                   <p className="text-2xl font-bold text-gray-800">{activeStudents}</p>
//                 </div>
//                 <Activity size={24} className="text-green-600" />
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-orange-600 text-sm font-medium">Completed</p>
//                   <p className="text-2xl font-bold text-gray-800">{completedStudents}</p>
//                 </div>
//                 <Award size={24} className="text-orange-600" />
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-600 text-sm font-medium">Avg Progress</p>
//                   <p className="text-2xl font-bold text-gray-800">{averageProgress}%</p>
//                 </div>
//                 <TrendingUp size={24} className="text-purple-600" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex gap-8 h-[calc(100vh-300px)]">
//           {/* Enhanced Sidebar - Students List */}
//           <div className="w-96 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-6 text-white">
//               <h3 className="text-xl font-bold mb-2">Enrolled Students</h3>
//               <p className="text-blue-100 text-sm">
//                 {students.length} students • {activeStudents} active
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
//                     <Users size={24} className="text-gray-400" />
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

// export default StudentDetails;