'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function WooCommerceIntegration() {
  const [openSection, setOpenSection] = useState<string | null>('accessing');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-[5%] bg-gradient-to-r from-loadlink-orange to-[#e67e22]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Loadlink for WooCommerce
              </h1>
              <p className="text-white/90 text-xl mb-2">User Manual & Integration Guide</p>
              <p className="text-white/80 text-sm">Document Version: 1.0.0</p>
              <p className="text-white/80 text-sm mb-6">Target Audience: Store Administrators, Fulfillment Teams, and Shop Managers</p>
              
              <Link 
                href="https://connect.loadlink.com.au" 
                className="inline-flex items-center gap-3 bg-white text-loadlink-orange py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                </svg>
                Connect Now
              </Link>
            </div>
            
            <div className="flex-shrink-0 relative w-98 h-48">
              <Image 
                src="/images/woocommerce-setup.jpg" 
                alt="WooCommerce Setup" 
                fill
                className="object-cover rounded-2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-[5%]">
        <div className="max-w-5xl mx-auto">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-loadlink-orange">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-loadlink-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-bold text-gray-800">Quick Setup</h3>
              </div>
              <p className="text-gray-600">Get started in under 10 minutes with our guided setup</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-bold text-gray-800">Live Rates</h3>
              </div>
              <p className="text-gray-600">Real-time shipping quotes at checkout</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-bold text-gray-800">Automated</h3>
              </div>
              <p className="text-gray-600">Automatic freight booking and manifest generation</p>
            </div>
          </div>

          {/* Manual Sections */}
          <div className="space-y-4">
            
            {/* Section 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('accessing')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">1</span>
                  <h2 className="text-2xl font-bold text-gray-800">Accessing the Plugin</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'accessing' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'accessing' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    Upon activation, the <strong>Loadlink Parcel Freight</strong> menu will appear in your WordPress admin sidebar. 
                    This central hub contains all tools necessary to manage your shipping integration.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Navigation Overview:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">Dashboard:</strong>
                        <span className="text-gray-700"> High-level system health and quick action buttons.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">My Parcel Freight:</strong>
                        <span className="text-gray-700"> Log of all processed freight bookings and manifests.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">Settings:</strong>
                        <span className="text-gray-700"> Management of API credentials and default shipping behaviors.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">Instructions:</strong>
                        <span className="text-gray-700"> A step-by-step checklist for initial setup.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">About & Notices:</strong>
                        <span className="text-gray-700"> Version details and system-generated alerts.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('dashboard')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">2</span>
                  <h2 className="text-2xl font-bold text-gray-800">The Dashboard</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'dashboard' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'dashboard' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    The Dashboard serves as your command center for monitoring the connection between WooCommerce and the Loadlink API.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Sections:</h3>
                  
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-800 mb-2">App Status:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong className="text-gray-800">API Configuration:</strong>
                          <span className="text-gray-700"> A green "Active" badge confirms your store is successfully communicating with Loadlink.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <div>
                          <strong className="text-gray-800">Freight Orders:</strong>
                          <span className="text-gray-700"> Tracks the total number of bookings processed through the plugin.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 mb-2">Quick Actions:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-loadlink-orange font-bold">→</span>
                        <div>
                          <strong className="text-gray-800">Configure Settings (Orange):</strong>
                          <span className="text-gray-700"> Edit API keys or shipping defaults.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-loadlink-orange font-bold">→</span>
                        <div>
                          <strong className="text-gray-800">Setup Carrier Service:</strong>
                          <span className="text-gray-700"> Guidance on registering your carrier credentials.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-loadlink-orange font-bold">→</span>
                        <div>
                          <strong className="text-gray-800">View Orders:</strong>
                          <span className="text-gray-700"> Jump directly to your freight history.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-gray-800 mb-2">Getting Started Guide:</h4>
                    <p className="text-gray-700">Follow the 3-step walk-through (Connect, Register, and Launch) to ensure no configuration steps are missed.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('settings')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">3</span>
                  <h2 className="text-2xl font-bold text-gray-800">Configuring Settings</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'settings' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'settings' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    Navigate to <strong>Loadlink Parcel Freight &gt; Settings</strong> to initialize your integration.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">API Configuration</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                      <thead className="bg-loadlink-orange text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">Field</th>
                          <th className="px-4 py-3 text-left font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-800">API URL</td>
                          <td className="px-4 py-3 text-gray-700">The endpoint provided by Loadlink (standard default is pre-filled).</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-800">API Key & Secret</td>
                          <td className="px-4 py-3 text-gray-700">Your unique credentials provided by your Loadlink representative.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-800">User ID</td>
                          <td className="px-4 py-3 text-gray-700">Your specific Loadlink Account User ID.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Store & Shipping Defaults</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">Building Type:</strong>
                        <span className="text-gray-700"> Set the default for pickup/delivery (e.g., Residential or Commercial).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">Store Phone:</strong>
                        <span className="text-gray-700"> The primary contact number for the courier at the pickup point.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold">•</span>
                      <div>
                        <strong className="text-gray-800">Packaging Code:</strong>
                        <span className="text-gray-700"> The default container type (e.g., RX for Box).</span>
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Options (Troubleshooting)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">⚙</span>
                      <div>
                        <strong className="text-gray-800">Enable Logging:</strong>
                        <span className="text-gray-700"> Captures detailed transaction data (found in WooCommerce &gt; Status &gt; Logs).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">⚙</span>
                      <div>
                        <strong className="text-gray-800">Mock API Mode:</strong>
                        <span className="text-gray-700"> Allows for testing the checkout flow without incurring live API requests.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">⚙</span>
                      <div>
                        <strong className="text-gray-800">Disable Throttling:</strong>
                        <span className="text-gray-700"> Removes the internal cache—useful only during heavy development testing.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('setup')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">4</span>
                  <h2 className="text-2xl font-bold text-gray-800">Setup & Product Configuration</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'setup' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'setup' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    For the plugin to generate accurate live rates, your product data must be complete.
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Product Requirements</h3>
                    <ol className="space-y-2 ml-4 list-decimal list-inside">
                      <li className="text-gray-700">Navigate to <strong>Products &gt; All Products</strong>.</li>
                      <li className="text-gray-700">In the <strong>Shipping tab</strong> for each product, you must enter:</li>
                    </ol>
                    <ul className="space-y-2 ml-8 mt-2">
                      <li className="flex items-start gap-3">
                        <span className="text-loadlink-orange font-bold">✓</span>
                        <span className="text-gray-700"><strong>Weight (kg)</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-loadlink-orange font-bold">✓</span>
                        <span className="text-gray-700"><strong>Dimensions (L / W / H in cm)</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-loadlink-orange font-bold">✓</span>
                        <span className="text-gray-700"><strong>Packaging Type</strong> (selectable from the dropdown)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Enabling Rates at Checkout</h3>
                    <ol className="space-y-2 ml-4 list-decimal list-inside">
                      <li className="text-gray-700">Go to <strong>WooCommerce &gt; Settings &gt; Shipping</strong>.</li>
                      <li className="text-gray-700">Select a <strong>Shipping Zone</strong> (e.g., Australia).</li>
                      <li className="text-gray-700">Click <strong>Add Shipping Method</strong> and select <strong>Loadlink Live Rates</strong>.</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('freight')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">5</span>
                  <h2 className="text-2xl font-bold text-gray-800">Managing Freight Orders</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'freight' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'freight' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    Navigate to <strong>Loadlink Parcel Freight &gt; My Parcel Freight</strong> to view your booking history.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold text-xl">📋</span>
                      <div>
                        <strong className="text-gray-800">The Freight List:</strong>
                        <span className="text-gray-700"> View Freight IDs, customer names, and delivery summaries.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold text-xl">🔍</span>
                      <div>
                        <strong className="text-gray-800">Search:</strong>
                        <span className="text-gray-700"> Quickly filter by Order Number or Customer Name.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold text-xl">👁</span>
                      <div>
                        <strong className="text-gray-800">View Details:</strong>
                        <span className="text-gray-700"> Click the button on any row to open a manifest popup showing the specific Service ID and full address data used for the booking.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-loadlink-orange font-bold text-xl">🧪</span>
                      <div>
                        <strong className="text-gray-800">Testing Tool:</strong>
                        <span className="text-gray-700"> Use the "Create Test Freight Data" button to populate the list with dummy records during your initial store setup.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('individual')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">6</span>
                  <h2 className="text-2xl font-bold text-gray-800">Managing Individual Orders</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'individual' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'individual' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    You can access Loadlink data directly from any standard WooCommerce order:
                  </p>
                  
                  <ol className="space-y-3 ml-4 list-decimal list-inside">
                    <li className="text-gray-700">Navigate to <strong>WooCommerce &gt; Orders</strong>.</li>
                    <li className="text-gray-700">Select a specific order.</li>
                    <li className="text-gray-700">Locate the <strong>Order Actions</strong> box on the right.</li>
                    <li className="text-gray-700">Select <strong>"View Freight Details"</strong> from the dropdown and click the Arrow/Update button.</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleSection('troubleshooting')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-bold">7</span>
                  <h2 className="text-2xl font-bold text-gray-800">Troubleshooting</h2>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'troubleshooting' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === 'troubleshooting' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    If rates are not appearing at checkout or bookings are failing, check the following:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-bold text-gray-800 mb-2">🔐 Credential Check:</h4>
                      <p className="text-gray-700">Ensure no trailing spaces exist in your API Key or Secret fields.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-bold text-gray-800 mb-2">📦 Missing Metadata:</h4>
                      <p className="text-gray-700">Verify that every item in the cart has an assigned Weight and Dimension. The API will return an error if these are zero or null.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-bold text-gray-800 mb-2">📍 Invalid Postcodes:</h4>
                      <p className="text-gray-700">Ensure the customer's address is a valid Australian postcode recognized by Loadlink.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-gray-800 mb-2">📝 Logs:</h4>
                      <p className="text-gray-700">If errors persist, enable Logging in Settings and review the raw API response in the WooCommerce Status logs.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Support CTA */}
          <div className="mt-12 bg-gradient-to-r from-loadlink-orange to-[#e67e22] rounded-xl p-8 text-white text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-3">Need Help?</h3>
            <p className="text-white/90 mb-6">Our support team is here to assist you with any questions or issues.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="mailto:support@loadlink.com.au" 
                className="inline-flex items-center gap-2 bg-white text-loadlink-orange py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Email Support
              </Link>
              <Link 
                href="tel:+61123456789" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Us
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
