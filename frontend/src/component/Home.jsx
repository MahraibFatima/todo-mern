import { FaCalendarDay } from 'react-icons/fa';

const Home = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const getGreeting = () => {
    const hour = today.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> 
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {getGreeting()}! 👋
            </h1>
            <div className="flex items-center mt-2 text-gray-600">
              <FaCalendarDay className="mr-2" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 mb-4 gap-8 bg-white rounded-2xl shadow-lg p-6">
            {/* <div className={`mt-8 p-6 rounded-2xl bg-white rounded-2xl shadow-lg p-6`}> */}
          <h3 className="font-bold text-[#777C6D] ">Quick Tips</h3> 
                <div className="space-y-2 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
                  <ul className="space-y-3"> 
                  <li className="flex">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Use the edit icon to update task text</span>
                </li>
                <li className="flex">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Filter tasks by status or category</span>
                </li>
                <li className="flex">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Toggle dark mode for comfortable viewing</span>
                </li>
                  </ul>
                </div>
              
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Daily Inspiration</h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
                <p className="text-gray-700 italic">
                  "The secret of getting ahead is getting started."
                </p>
                <p className="text-gray-500 text-sm mt-2">~ Mark Twain</p>
              </div>
            </div>

          </div>
        </div>

      // </div>
   
  );
};

export default Home;