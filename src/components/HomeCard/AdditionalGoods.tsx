import React from 'react';

const AdditionalGoods = () => {
  return (
    <div className="items-center flex flex-col mt-10">
    <div className="p-4 bg-gray-50 shadow-md w-250 rounded-lg ">
      <h3 className="flex items-center text-lg font-semibold text-gray-700">
        <span className="mr-2 text-blue-500">📄</span> Additional goods
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
          <h4 className="text-md font-medium text-gray-900">Free AI Marketing</h4>
          <p className="text-sm text-gray-600 mt-2">
            An AI Cofounder that knows your brand. Start creating marketing copy that converts.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
          <h4 className="text-md font-medium text-gray-900">Free SEO Improvement Tool</h4>
          <p className="text-sm text-gray-600 mt-2">
            Quickly evaluate your website's SEO performance for free. AI-generated improvements + Open graph preview.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
          <h4 className="text-md font-medium text-gray-900">Full Stack Shadcn Templates</h4>
          <p className="text-sm text-gray-600 mt-2">
            Comprehensive Next.js + Supabase templates built with Tailwind CSS, Skipper components, and shadcn.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdditionalGoods;