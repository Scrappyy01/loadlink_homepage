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
              The Loadlink Shopify Application is a professional integration middleware designed to bridge Shopify storefronts with the Loadlink freight platform. The application facilitates <strong>real-time logistics management</strong>, providing automated freight rate calculations during checkout and streamlined order fulfillment workflows directly within the Shopify Admin.
            </p>
          </div>

          {/* System Requirements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">System Requirements & Prerequisites</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-loadlink-orange">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-loadlink-orange font-bold">•</span>
                    <div><strong className="text-gray-800">Node.js:</strong> <span className="text-gray-700">Version 18.0.0 or higher</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loadlink-orange font-bold">•</span>
                    <div><strong className="text-gray-800">Shopify CLI:</strong> <span className="text-gray-700">For app management</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loadlink-orange font-bold">•</span>
                    <div><strong className="text-gray-800">Git:</strong> <span className="text-gray-700">For repository cloning</span></div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Account & Credentials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <div><strong className="text-gray-800">Shopify Partner Account:</strong> <span className="text-gray-700">For app distribution and API access</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <div><strong className="text-gray-800">Loadlink Credentials:</strong> <span className="text-gray-700">API Key, Secret, and User ID</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Functional Architecture Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-loadlink-orange">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-loadlink-orange text-white font-bold text-lg">1</span>
                  <h3 className="text-lg font-semibold text-gray-800">Rate Calculation</h3>
                </div>
                <p className="text-gray-700 text-sm">During checkout, real-time freight rates are calculated based on cart weight, dimensions, and delivery location using the Loadlink API.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg">2</span>
                  <h3 className="text-lg font-semibold text-gray-800">Order Automation</h3>
                </div>
                <p className="text-gray-700 text-sm">When an order is paid, webhooks automatically trigger freight booking in Loadlink and store the Freight ID in Shopify metafields.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold text-lg">3</span>
                  <h3 className="text-lg font-semibold text-gray-800">Admin Control</h3>
                </div>
                <p className="text-gray-700 text-sm">Centralized dashboard in Shopify Admin for managing API credentials, defaults, and system logging preferences.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-loadlink-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Data Flow
              </h3>
              <div className="text-center font-mono text-sm text-gray-700 space-y-2">
                <p>Customer adds product to cart</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Shopify requests shipping rates from app</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>App queries Loadlink API</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Real-time rates displayed at checkout</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Order paid → Webhook triggers freight booking</p>
                <p className="text-loadlink-orange font-semibold">⬇</p>
                <p>Freight confirmed in Loadlink & Shopify</p>
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
                  <h2 className="text-2xl font-bold text-gray-800">Create a Shopify Store (Testing Environment)</h2>
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 1: Create a Shopify Partner Account</h3>
                    <p className="text-gray-700 mb-3">Go to the <strong>Shopify Partner portal</strong> and create a free account. You need this because:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Carrier Service integrations require an app</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Apps are created inside the Partner dashboard</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">You can create unlimited dev stores</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 2: Create a Development Store</h3>
                    <p className="text-gray-700 mb-2">Inside the Partner dashboard:</p>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Click <strong>Stores</strong></li>
                      <li>Click <strong>Add store</strong></li>
                      <li>Choose <strong>Development store</strong></li>
                      <li>Give it a name (e.g. <code className="bg-gray-100 px-1 rounded">loadlink-test-store</code>)</li>
                      <li>Select latest Shopify version</li>
                      <li>Create store</li>
                    </ol>
                    <p className="text-gray-700 mb-1">This gives you:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">A fully functional Shopify store</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Free for development</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Ability to test custom apps</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 3: Upgrade Plan (Important for Carrier Services)</h3>
                    <p className="text-gray-700 mb-2">Shopify only allows Carrier Service apps on:</p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Advanced plan</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Shopify Plus</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Or stores with real-time carrier shipping enabled</span></li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-gray-700 text-sm"><strong>For dev stores:</strong> You can enable real-time carrier shipping manually in settings. If testing fails later, this is usually why.</p>
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
                  <h2 className="text-2xl font-bold text-gray-800">Set Up the Loadlink Shopify App</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'dashboard' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'dashboard' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm font-semibold">This is NOT a theme plugin. It's a Shopify App that runs externally.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 4: Install Required Tools</h3>
                    <p className="text-gray-700 mb-2">You need:</p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Node.js 18+</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Git</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Shopify CLI</span></li>
                    </ul>
                    <p className="text-gray-700 mb-2">Install Shopify CLI:</p>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto">npm install -g @shopify/cli @shopify/app</pre>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 5: Clone the App</h3>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto">{`git clone <repository-url>\ncd loadlink-app\nnpm install`}</pre>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 6: Create Shopify App via CLI</h3>
                    <p className="text-gray-700 mb-2">From inside the project folder:</p>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto mb-3">shopify app dev</pre>
                    <p className="text-gray-700 mb-2">This does several things automatically:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Prompts you to log in</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Creates the app in your Partner dashboard</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Generates API keys</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Creates a tunnel URL</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Installs the app into your dev store</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 7: Setup Database</h3>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto mb-3">npm run setup</pre>
                    <p className="text-gray-700 mb-2">What this does:</p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Runs Prisma migrations</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Generates the Prisma client</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Sets up SQLite</span></li>
                    </ul>
                    <p className="text-gray-700 mb-1">If schema changes:</p>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto">npx prisma migrate dev</pre>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 8: Run Development Server</h3>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto mb-3">npm run dev</pre>
                    <p className="text-gray-700 mb-2">This:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Starts the Node server</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Opens a secure tunnel</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Connects Shopify to your local machine</span></li>
                    </ul>
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
                  <h2 className="text-2xl font-bold text-gray-800">Configure the App Inside Shopify</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'settings' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'settings' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 9: Install the App in Store</h3>
                    <p className="text-gray-700 mb-2">If CLI didn't auto-install:</p>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700">
                      <li>Go to <strong>Shopify Admin</strong></li>
                      <li>Apps → <strong>Develop Apps</strong></li>
                      <li>Install Loadlink app</li>
                      <li>Approve permissions</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 10: Enter Loadlink API Credentials</h3>
                    <p className="text-gray-700 mb-3">Inside the app dashboard:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                        <thead className="bg-loadlink-orange text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Field</th>
                            <th className="px-4 py-3 text-left font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr><td className="px-4 py-3 font-medium text-gray-800">API Key</td><td className="px-4 py-3 text-gray-700">Your unique API key from Loadlink</td></tr>
                          <tr><td className="px-4 py-3 font-medium text-gray-800">Secret</td><td className="px-4 py-3 text-gray-700">Your API secret provided by Loadlink</td></tr>
                          <tr><td className="px-4 py-3 font-medium text-gray-800">User ID</td><td className="px-4 py-3 text-gray-700">Your Loadlink Account User ID</td></tr>
                        </tbody>
                      </table>
                    </div>
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
                  <h2 className="text-2xl font-bold text-gray-800">Enable Carrier Service</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'setup' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'setup' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4">
                    <p className="text-yellow-800 font-semibold text-sm">This step is critical.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Enable in Shopify Admin</h3>
                    <p className="text-gray-700 mb-2">Go to:</p>
                    <p className="text-gray-700 font-medium mb-3">Shopify Admin → Settings → Shipping and Delivery</p>
                    <p className="text-gray-700 mb-2">You should see <strong>Loadlink Carrier Service</strong>. Enable it for your shipping zone.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">If You Don't See It</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3"><span className="text-red-500 font-bold">•</span><span className="text-gray-700">Carrier Service may not be properly registered</span></li>
                      <li className="flex items-start gap-3"><span className="text-red-500 font-bold">•</span><span className="text-gray-700">Plan may not support real-time carrier shipping</span></li>
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
                  <h2 className="text-2xl font-bold text-gray-800">Test Checkout Rate Calculation</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'freight' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'freight' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 11: Create a Test Product</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Add product</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Add weight</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Make it physical</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Add inventory</span></li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
                      <p className="text-sm text-gray-700"><strong>Note:</strong> Weight is important because freight quotes depend on it.</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 12: Go Through Checkout</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700 mb-3">
                      <li>Add product to cart</li>
                      <li>Enter shipping address</li>
                      <li>At shipping step, Shopify sends a request to <code className="bg-gray-100 px-1 rounded">/api/rates</code></li>
                    </ol>
                    <p className="text-gray-700 mb-2">Your server:</p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Receives cart data</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Calls Loadlink API</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Returns shipping rates</span></li>
                    </ul>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-sm text-green-800">If working correctly, you will see <strong>Loadlink freight options</strong> at checkout.</p>
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
                  <h2 className="text-2xl font-bold text-gray-800">Test Order Automation</h2>
                </div>
                <svg className={`w-6 h-6 text-gray-600 transition-transform ${openSection === 'individual' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'individual' && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-loadlink-orange">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 13: Enable Test Payments</h3>
                    <ol className="space-y-1 ml-4 list-decimal list-inside text-gray-700">
                      <li>Shopify Admin → Settings → Payments → <strong>Enable test mode</strong></li>
                      <li>Complete a test checkout</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 14: Webhook Trigger</h3>
                    <p className="text-gray-700 mb-2">When order is paid, Shopify sends <code className="bg-gray-100 px-1 rounded">orders/paid</code>. Your app then:</p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Calls Loadlink</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Creates shipment</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">Stores Freight ID in metafields</span></li>
                    </ul>
                    <p className="text-gray-700 mb-2">You can verify:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Order page → Metafields</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Loadlink dashboard → Shipment created</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">How This Works Conceptually</h3>
                    <div className="bg-gray-50 rounded-lg p-4 text-center font-mono text-sm text-gray-700 space-y-1">
                      <p>Shopify Store</p>
                      <p>⬇</p>
                      <p>Calls Your Hosted App</p>
                      <p>⬇</p>
                      <p>Your App Talks to Loadlink</p>
                      <p>⬇</p>
                      <p>Returns data</p>
                    </div>
                    <p className="text-gray-700 mt-3 mb-2 text-sm">Your app must be hosted somewhere in production. Common hosting options:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Vercel</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">Render</span></li>
                      <li className="flex items-start gap-3"><span className="text-loadlink-orange font-bold">•</span><span className="text-gray-700">AWS</span></li>
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
