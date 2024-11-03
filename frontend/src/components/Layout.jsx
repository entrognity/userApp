// src/components/Layout.jsx

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Home, FileText, Package, Headset } from 'lucide-react';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = []; // This should come from global state management

  const renderHeader = () => (
    <div className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold" onClick={() => {
          navigate('/')}}>
            PinPaper
        </h1>
        <div className="flex gap-4">
          <div className="relative">
            <ShoppingCart 
              className="w-6 h-6 cursor-pointer" 
              onClick={() => navigate('/cart')}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </div>
          <User 
            className="w-6 h-6 cursor-pointer" 
            onClick={() => navigate('/account')}
          />
        </div>
      </div>
    </div>
  );

  const renderNavigation = () => {
    // Determine if the navigation should be hidden
    const hideNav = location.pathname === '/services/book' || location.pathname === '/account';

    if (hideNav) return null; // Don't render navigation if on specific pages

    return (
      <div className="fixed bottom-0 w-full bg-white border-t">
        <div className="flex justify-around p-4">
          <div 
            className={`flex flex-col items-center cursor-pointer ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => navigate('/')}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </div>
          <div 
            className={`flex flex-col items-center cursor-pointer ${location.pathname === '/services' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => navigate('/services')}
          >
            <FileText className="w-6 h-6" />
            <span className="text-xs">Book</span>
          </div>
          <div 
            className={`flex flex-col items-center cursor-pointer ${location.pathname === '/orders' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => navigate('/orders')}
          >
            <Package className="w-6 h-6" />
            <span className="text-xs">Orders</span>
          </div>
          <div 
            className={`flex flex-col items-center cursor-pointer ${location.pathname === '/helpline' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => navigate('/helpline')}
          >
            <Headset className="w-6 h-6" />
            <span className="text-xs">Helpline</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 custom">
      {renderHeader()}
      {children}
      {renderNavigation()}
    </div>
  );
};

export default Layout;




// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, User, Home, FileText, Package } from 'lucide-react';

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const cartItems = []; // This should come from global state management

//   const renderHeader = () => (
//     <div className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="flex justify-between items-center p-4">
//         <h1 className="text-xl font-bold">PrintEasy</h1>
//         <div className="flex gap-4">
//           <div className="relative">
//             <Link to="/cart">
//               <ShoppingCart className="w-6 h-6 cursor-pointer" />
//             </Link>
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartItems.length}
//               </span>
//             )}
//           </div>
//           <Link to="/account">
//             <User className="w-6 h-6 cursor-pointer" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   const renderNavigation = () => (
//     <div className="fixed bottom-0 w-full bg-white border-t">
//       <div className="flex justify-around p-4">
//         <Link to="/" className={`flex flex-col items-center cursor-pointer ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}>
//           <Home className="w-6 h-6" />
//           <span className="text-xs">Home</span>
//         </Link>
//         <Link to="/book" className={`flex flex-col items-center cursor-pointer ${location.pathname === '/book' ? 'text-blue-600' : 'text-gray-600'}`}>
//           <FileText className="w-6 h-6" />
//           <span className="text-xs">Book</span>
//         </Link>
//         <Link to="/orders" className={`flex flex-col items-center cursor-pointer ${location.pathname === '/orders' ? 'text-blue-600' : 'text-gray-600'}`}>
//           <Package className="w-6 h-6" />
//           <span className="text-xs">Orders</span>
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 pb-20">
//       {renderHeader()}
//       {children}
//       {renderNavigation()}
//     </div>
//   );
// };

// export default Layout;
