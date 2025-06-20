import React from 'react';
import { Link } from 'gatsby';

const MagicMirrorPricing: React.FC = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4">
          Bring Magic Mirror to Your Event
        </h3>
        <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
          Create unforgettable AI-powered photo experiences at your next celebration
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="card bg-base-100 shadow-xl border border-primary/20 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-primary text-primary-content text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </span>
          </div>
          <div className="card-body text-center p-8">
            <h4 className="text-2xl font-bold mb-2">Magic Mirror Experience</h4>
            <p className="text-base-content/70 mb-6">
              FOR EVENTS & CELEBRATIONS
            </p>
            <p className="text-base-content/80 mb-8">
              Everything you need for an unforgettable AI photo booth experience at your event
            </p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold">Custom</span>
              <span className="text-xl text-base-content/70 ml-2">pricing</span>
            </div>

            <Link to="/photobooth" className="btn btn-primary btn-block btn-lg mb-8">
              Get your custom quote
            </Link>

            <div className="text-left space-y-4">
              <h5 className="font-semibold mb-4">What's included:</h5>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-base-content/80">Professional setup and teardown</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-base-content/80">Unlimited AI-generated photos</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-base-content/80">Custom themes and backgrounds</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-base-content/80">Digital gallery for all guests</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-base-content/80">On-site event coordinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicMirrorPricing;