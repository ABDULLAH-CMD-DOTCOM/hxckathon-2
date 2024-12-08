import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const page = () => {
  return (
    <div className="bg-[#F6F7F9] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 py-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow-md">
          <nav>
            <ul>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-blue-600">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-car mr-3"></i>
                    Car Rent
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-chart-line mr-3"></i>
                    Insight
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-money-check-alt mr-3"></i>
                    Reimburse
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-inbox mr-3"></i>
                    Inbox
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-calendar-alt mr-3"></i>
                    Calendar
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-10">
            <h3 className="text-gray-600 mb-4">Preferences</h3>
            <ul>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-cog mr-3"></i>
                    Settings
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-question-circle mr-3"></i>
                    Help & Center
                  </a>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="#" legacyBehavior>
                  <a className="flex items-center text-gray-600">
                    <i className="fas fa-moon mr-3"></i>
                    Dark Mode
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <Link href="#" legacyBehavior>
              <a className="flex items-center text-gray-600">
                <i className="fas fa-sign-out-alt mr-3"></i>
                Log Out
              </a>
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <Image
                className="w-full h-auto rounded-lg shadow"
                src={"/Details Rental.png"}
                height={836}
                width={534}
                alt="Rental details"
              />
            </div>
            
            <div className="w-full">
              <Image
                className="w-full h-auto rounded-lg shadow mb-6 md:mb-0"
                src={"/rrrr.png"}
                height={524}
                width={324}
                alt="Rental details"
              />
              <Image
                className="w-full h-auto rounded-lg shadow my-8"
                src={"/rrr.png"}
                height={524}
                width={480}
                alt="Rental details"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
