'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/Footer';

export default function WooCommerceIntegration() {
  const [openSection, setOpenSection] = useState<string | null>('accessing');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-[5%]" style={{ background: 'linear-gradient(180deg, #0B1E3F 0%, #132B55 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Loadlink for Shopify
              </h1>
              <p className="text-white/90 text-xl mb-2">User Manual & Integration Guide</p>
              <p className="text-white/80 text-sm">Document Version: 1.0.0</p>
              <p className="text-white/80 text-sm mb-6">Target Audience: Store Administrators, Fulfillment Teams, and Shop Managers</p>
              
              <button 
                disabled
                className="inline-flex items-center gap-3 bg-gray-300 text-gray-500 py-4 px-8 rounded-lg font-semibold text-lg cursor-not-allowed opacity-60 transition-all duration-200 shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                </svg>
                Connect Now
              </button>
            </div>
            
            <div className="flex-shrink-0 relative w-98 h-48">
              <Image 
                src="/images/shopify-setup.jpg" 
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

          {/* Introduction Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Loadlink Shopify App connects your Shopify store directly to the Loadlink freight network. Once installed and configured, your customers will automatically see <strong>live freight rates at checkout</strong>, and every paid order will be instantly booked with Loadlink — no manual steps required.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This guide walks you through everything you need to get up and running, from installing the app to understanding how freight bookings work.
            </p>
          </div>

          {/* What You'll Need */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What You'll Need</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-loadlink-orange">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Shopify Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-loadlink-orange font-bold">•</span>
                    <div><strong className="text-gray-800">Active Shopify Store:</strong> <span className="text-gray-700">Any paid Shopify plan</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loadlink-orange font-bold">•</span>
                    <div><strong className="text-gray-800">Shopify Plan:</strong> <span className="text-gray-700">Advanced or Shopify Plus for real-time carrier rates at checkout</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loadlink-orange font-bold">•</span>
                    <div><strong className="text-gray-800">Admin Access:</strong> <span className="text-gray-700">You must be a store owner or have full admin permissions</span></div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Loadlink Account</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <div><strong className="text-gray-800">Active Loadlink Account:</strong> <span className="text-gray-700">Contact Loadlink to create your account</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <div><strong className="text-gray-800">API Credentials:</strong> <span className="text-gray-700">Your API Key, API Secret, and User ID — provided by Loadlink</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <div><strong className="text-gray-800">Configured Carriers:</strong> <span className="text-gray-700">At least one active carrier set up in your Loadlink account</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-loadlink-orange">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold text-lg">1</span>
                  <h3 className="text-lg font-semibold text-gray-800">Live Rates at Checkout</h3>
                </div>
                <p className="text-gray-700 text-sm">When your customer enters their delivery address, the app instantly fetches real freight rates from Loadlink and displays them directly at checkout.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg">2</span>
                  <h3 className="text-lg font-semibold text-gray-800">Automatic Booking</h3>
                </div>
                <p className="text-gray-700 text-sm">As soon as an order is paid, Loadlink automatically creates the freight booking for you — no manual data entry needed.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold text-lg">3</span>
                  <h3 className="text-lg font-semibold text-gray-800">Manage from Shopify</h3>
                </div>
                <p className="text-gray-700 text-sm">All your freight details and booking references are stored directly in your Shopify order, so everything is in one place.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-loadlink-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                The Order Journey
              </h3>
              <div className="text-center font-mono text-sm text-gray-700 space-y-2">
                <p>Customer adds items to cart</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Live freight rates appear at checkout</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Customer selects a shipping option & pays</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Loadlink automatically books the freight</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Booking reference saved to your Shopify order</p>
              </div>
            </div>
          </div>

          {/* Manual Sections */}
          <div className="space-y-4 mt-12">
            
            {/* Section 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => toggleSection('accessing')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">1</span>
                  <h2 className="text-2xl font-bold text-gray-800">Install the Loadlink App</h2>
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
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 1: Find the App in the Shopify App Store</h3>
                    <p className="text-gray-700 mb-3">Log in to your <strong>Shopify Admin</strong> and navigate to the App Store:</p>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700">
                      <li>In your Shopify Admin, click <strong>Apps</strong> in the left sidebar</li>
                      <li>Click <strong>Shopify App Store</strong></li>
                      <li>Search for <strong>Loadlink</strong></li>
                      <li>Click on the Loadlink app in the results</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 2: Install the App</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Click the <strong>Install</strong> button on the app listing page</li>
                      <li>Review the permissions the app requires</li>
                      <li>Click <strong>Install app</strong> to confirm</li>
                    </ol>
                    <p className="text-gray-700 mb-1">After installing, you will:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Be redirected to the Loadlink app dashboard inside Shopify</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">See the app listed under your installed apps</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Shopify Plan Requirement</h3>
                    <p className="text-gray-700 mb-2">To display live freight rates at checkout, your store must be on one of the following plans:</p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700"><strong>Advanced Shopify</strong></span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700"><strong>Shopify Plus</strong></span></li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-gray-700 text-sm"><strong>Not sure about your plan?</strong> Go to <strong>Settings → Plan</strong> in your Shopify Admin to check. If you're on a lower plan, contact Shopify support to enquire about enabling third-party carrier rates.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => toggleSection('dashboard')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">2</span>
                  <h2 className="text-2xl font-bold text-gray-800">Enter Your Loadlink Credentials</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'dashboard' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'dashboard' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm font-semibold">You will need your Loadlink API credentials before completing this step. Contact Loadlink support if you don't have these yet.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 3: Open the Loadlink App</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700">
                      <li>In your Shopify Admin, click <strong>Apps</strong></li>
                      <li>Select <strong>Loadlink</strong> from your installed apps</li>
                      <li>You will be taken to the Loadlink app settings dashboard</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 4: Enter Your API Credentials</h3>
                    <p className="text-gray-700 mb-3">Fill in the following fields in the app settings:</p>
                    <div className="overflow-x-auto mb-3">
                      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                        <thead className="bg-loadlink-orange text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Field</th>
                            <th className="px-4 py-3 text-left font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr><td className="px-4 py-3 font-medium text-gray-800">API Key</td><td className="px-4 py-3 text-gray-700">Your unique API key provided by Loadlink</td></tr>
                          <tr><td className="px-4 py-3 font-medium text-gray-800">API Secret</td><td className="px-4 py-3 text-gray-700">Your API secret provided by Loadlink</td></tr>
                          <tr><td className="px-4 py-3 font-medium text-gray-800">User ID</td><td className="px-4 py-3 text-gray-700">Your Loadlink account User ID</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700">
                      <li>Paste each value into the corresponding field</li>
                      <li>Click <strong>Save Settings</strong></li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 5: Verify the Connection</h3>
                    <p className="text-gray-700 mb-2">After saving, the app will test the connection to Loadlink. You should see:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">A <strong>Connection Successful</strong> confirmation message</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Your account name displayed in the dashboard</span></li>
                    </ul>
                    <div className="bg-red-50 border border-red-200 rounded p-3 mt-3">
                      <p className="text-red-800 text-sm"><strong>Error?</strong> Double-check that you've copied the credentials exactly as provided, with no extra spaces. Contact Loadlink support if the issue persists.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => toggleSection('settings')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">3</span>
                  <h2 className="text-2xl font-bold text-gray-800">Enable Live Shipping Rates at Checkout</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'settings' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'settings' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4">
                    <p className="text-yellow-800 font-semibold text-sm">This step is required for Loadlink rates to appear at your checkout.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 6: Go to Shipping and Delivery Settings</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700">
                      <li>In your Shopify Admin, go to <strong>Settings</strong></li>
                      <li>Click <strong>Shipping and delivery</strong></li>
                      <li>Under <strong>Shipping</strong>, click <strong>Manage</strong> next to your shipping profile</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 7: Add Loadlink as a Carrier</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Find the shipping zone you want to apply Loadlink rates to (e.g. <strong>Australia</strong>)</li>
                      <li>Click <strong>Add rate</strong></li>
                      <li>Select <strong>Use carrier or app to calculate rates</strong></li>
                      <li>Choose <strong>Loadlink</strong> from the list of carriers</li>
                      <li>Click <strong>Done</strong>, then <strong>Save</strong></li>
                    </ol>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-sm text-green-800">Loadlink rates will now appear at checkout for customers in the selected shipping zone.</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">If Loadlink Doesn't Appear in the Carrier List</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3"><span className="text-red-500 font-bold">•</span><span className="text-gray-700">Confirm the app was installed successfully (check <strong>Apps</strong> in your Admin)</span></li>
                      <li className="flex items-start gap-3"><span className="text-red-500 font-bold">•</span><span className="text-gray-700">Your Shopify plan may not support third-party carrier rates — contact Shopify support</span></li>
                      <li className="flex items-start gap-3"><span className="text-red-500 font-bold">•</span><span className="text-gray-700">Try uninstalling and reinstalling the Loadlink app</span></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => toggleSection('setup')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">4</span>
                  <h2 className="text-2xl font-bold text-gray-800">Configure Your Product Dimensions</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'setup' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'setup' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm font-semibold">Accurate weights and dimensions on your products ensure customers receive correct freight quotes.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 8: Set Product Weight & Dimensions</h3>
                    <p className="text-gray-700 mb-2">For each product in your store:</p>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Go to <strong>Products</strong> in your Shopify Admin</li>
                      <li>Open a product and scroll to the <strong>Shipping</strong> section</li>
                      <li>Enter the <strong>Weight</strong> of the item</li>
                      <li>If applicable, enter the <strong>dimensions</strong> (length, width, height)</li>
                      <li>Click <strong>Save</strong></li>
                    </ol>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-sm text-gray-700"><strong>Tip:</strong> Use the weight and dimensions of the packed item as it would be shipped, not the product itself.</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 9: Set Default Dimensions in Loadlink App</h3>
                    <p className="text-gray-700 mb-2">In the Loadlink app settings, you can define <strong>default package dimensions</strong> as a fallback for products without specific sizes set:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Default length, width, and height</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Default weight (used when a product has no weight set)</span></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => toggleSection('freight')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">5</span>
                  <h2 className="text-2xl font-bold text-gray-800">What Your Customers Experience</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'freight' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'freight' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">At Checkout</h3>
                    <p className="text-gray-700 mb-3">Once everything is configured, here's what your customers will see:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">They add items to their cart and proceed to checkout</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">After entering their delivery address, <strong>Loadlink freight options</strong> will appear under Shipping</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Rates are calculated in real time based on their location, and the weight/dimensions of their cart</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">They select their preferred shipping option and complete their order</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Testing It Yourself</h3>
                    <p className="text-gray-700 mb-2">We recommend doing a test order before going live:</p>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Visit your store as a customer (use a private/incognito window)</li>
                      <li>Add a product with a weight set to your cart</li>
                      <li>Proceed to checkout and enter an Australian delivery address</li>
                      <li>On the shipping step, confirm that <strong>Loadlink rates appear</strong></li>
                    </ol>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-sm text-gray-700"><strong>No rates showing?</strong> Check that your products have weights set, Loadlink is added to your shipping zone, and your API credentials are saved correctly.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => toggleSection('individual')}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold">6</span>
                  <h2 className="text-2xl font-bold text-gray-800">Viewing & Managing Your Freight Bookings</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'individual' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'individual' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatic Freight Booking on Payment</h3>
                    <p className="text-gray-700 mb-3">When a customer successfully pays for their order, Loadlink automatically creates the freight booking. You don't need to do anything — it happens instantly.</p>
                    <p className="text-gray-700 mb-2">The following is stored on the order:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Loadlink <strong>Freight ID</strong> (your booking reference)</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Carrier and service selected by the customer</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Freight cost charged at checkout</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Finding the Freight Booking in Shopify</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Go to <strong>Orders</strong> in your Shopify Admin</li>
                      <li>Open the relevant order</li>
                      <li>Scroll down to the <strong>Additional details</strong> or <strong>Metafields</strong> section</li>
                      <li>You will see the <strong>Loadlink Freight ID</strong> listed here</li>
                    </ol>
                    <p className="text-gray-700">Use this Freight ID to look up the booking directly in your <strong>Loadlink account</strong> for tracking and manifests.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Managing Bookings in Loadlink</h3>
                    <p className="text-gray-700 mb-3">Log in to your Loadlink account to:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700"><strong>Print labels</strong> and consignment notes for your shipments</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700"><strong>Track shipments</strong> through your chosen carriers</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700"><strong>Generate manifests</strong> for carrier pickup</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700"><strong>View booking history</strong> and freight costs</span></li>
                    </ul>
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
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-loadlink-orange py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Email Support
              </Link>
              <Link 
                href="/contact" 
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
      <Footer />
    </>
  );
}
