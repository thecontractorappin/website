// src/components/sections/home/DashboardOverview.tsx
import React, { useState } from 'react';

// descriptive types for our widget simulation state
type ModuleFocus = 'Finances' | 'Workforce' | 'Operations' | 'Projects' | 'Inventory';
type ProjectStage = 'Starting' | 'Midway' | 'Completion';

export const DashboardOverview = () => {
  return (
    <section id="dashboard-overview" className="bg-gray-50 py-24 px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header and Value Proposition */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
            See Your Construction Business at a Glance with Astute
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Centralize your finances, project tracking, inventory, and operations with our intuitive cross-platform interface. Experience a truly integrated view from PC to mobile.
          </p>
        </div>

        {/* Visual Showcase: Cross-Platform View */}
        <div className="w-full flex flex-col md:flex-row items-center gap-12 mb-20 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
          
          {/* Main Visual: PC/Web Dashboard */}
          <div className="w-full md:w-3/5 rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
            {/* This represents image_2.png (the PC view): 
              Description: The dark-mode 'Astute Contractor' dashboard interface on a large browser, 
              showing the main financial overview card with figures (₹201,512, ₹48,863, ₹152,649) 
              and the complete grid of 12 brightly colored module tiles (Ledger to Tasks). 
            */}
            <img 
              src="/path/to/your/image_2.png" // Replace with your actual path!
              alt="Astute Contractor PC Web Dashboard Overview"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
            />
            <div className="p-4 bg-white border-t">
              <p className="text-sm font-medium text-slate-800">Complete control from your desk. Full analytics and multi-user management.</p>
            </div>
          </div>

          {/* Secondary Visual: Mobile Dashboard */}
          <div className="w-full md:w-2/5 flex flex-col gap-6 items-center">
            <div className="w-full md:w-2/3 rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
              {/* This represents image_1.png (the Mobile view): 
                Description: The same Astute interface optimized for a clean light-mode mobile screen, 
                stacking the financial overview and the grid of 12 modules for easy thumb navigation. 
              */}
              <img 
                src="/path/to/your/image_1.png" // Replace with your actual path!
                alt="Astute Contractor Mobile App Dashboard Overview"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
            </div>
            <div className="w-full md:w-2/3 p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <p className="text-sm font-medium text-slate-800">Your site operations, right in your pocket. Quick updates and field access.</p>
            </div>
          </div>

        </div>

        {/* Interactive Deep Dive Widget: Explore the Dashboard Logic */}
        <div className="w-full">
          {/* The LLM-Generated Widget is embedded here */}
          <DashboardLiveSimulatorWidget />
        </div>

      </div>
    </section>
  );
};

// Component definition for the interactive widget
const DashboardLiveSimulatorWidget = () => {
  return (
    <div className="w-full mt-12 bg-white rounded-3xl p-10 shadow-2xl border-2 border-indigo-100">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 font-bold rounded-full text-sm mb-4">LANDING PAGE EXCLUSIVE</span>
        <h3 className="text-3xl font-extrabold text-slate-950">Live Dashboard Simulator</h3>
        <p className="text-lg text-slate-700 mt-3">Interact with the core logic of the Astute Dashboard. Select a project stage or module to see how your critical business metrics adjust.</p>
      </div>
      
      {/* This JSON widget is initialized with the EXACT structure and data derived from your dashboard screenshots */}
      {/* Total Income: ₹201,512 | Total Exp: ₹48,863 | Balance: ₹152,649 */}
      {/* Modules: Ledger, Tenders, Shop, Attend, HR Hub, Projects, Inventory, Machines, Sub-Con, Billing, Expenses, Tasks */}

      <div className="w-full flex justify-center">
        {
          /* Embedded Widget */
        }
        {
          /* JSON Widget Start */
        }
        {JSON.stringify({
          "component": "LlmGeneratedComponent",
          "props": {
            "height": "800px",
            "prompt": "Objective: Create a 'Live Dashboard Simulator' for the landing page that lets users interact with the core financial and module logic of the Astute Contractor Dashboard application. Data State: Initialize the widget with the specific financial values and module list derived from image_2.png (₹201,512, ₹48,863, ₹152,649). The full list of 12 brightly colored modules must be represented: Ledger, Tenders, Shop, Attend, HR Hub, Projects, Inventory, Machines, Sub-Con, Billing, Expenses, Tasks. Controls: A single select dropdown to choose 'Select Module Focus' (Finances, Workforce, Operations, Projects, Inventory) to simulate activating different views. A single select dropdown to choose 'Simulate Project Stage' (Starting, Midway, Completion) to adjust financial figures. Behavior: The widget displays a main visual simulation of the top 'Company Financial Overview' card. This card dynamically displays the primary metrics (Income, Expense, Balance) initialized with the starting values. Below this card, a grid representing the 12 brightly colored module tiles is shown. Highlight the group of modules that corresponds to the active 'Module Focus'. When a different 'Project Stage' is selected, the financial numbers in the central card adjust visually to simulate income and expenditure shifts, displaying the live values and resulting net balance. The overall logic and colors must adhere to the Astute Contractor brand identity seen in the images. Display all live calculated values clearly."
          }
        })}
        {
          /* JSON Widget End */
        }
      </div>
    </div>
  );
};