import { AlertTriangle } from 'lucide-react';

const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl shadow-lg border border-pink-200 my-8">
    <AlertTriangle className="w-10 h-10 text-pink-500 mb-2" />
    <h2 className="text-2xl font-semibold text-gray-800 mb-1">Soap and Bleach is Coming Soon!</h2>
  </div>
);

export default ComingSoon; 