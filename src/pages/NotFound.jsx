// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[70vh]">
      <div className="wrapper py-20 text-center">
        <div className="p-20 bg-white border border-gray-100 rounded-md shadow-xs">
          <h1 className="text-5xl font-bold text-black-txt pb-6">404</h1>
          <p className="text-2xl pb-4">Page not found</p>
          <Link className="text-lg" to="/">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
