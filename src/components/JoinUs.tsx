
import React from 'react';
import { Mail } from 'lucide-react';

export function JoinUs() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Join Us</h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
          <p className="text-gray-600">
          There are currently no open positions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Volunteers</h3>
          <p className="text-gray-600 mb-6">
            If you are based in Dublin, please feel free to get in touch if you would like to get involved in our research. We are always looking for volunteers for our experiments.
          </p>
          <a
            href="mailto:gdiliber@tcd.ie"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full transition-colors text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
