// AccountPlan.tsx

import React from 'react';

interface AccountPlanProps {
  planName: string;
  renewalDate: string;
  storageUsed: string;
  storageTotal: string;
  storagePercentage: number;
  bandwidthUsed: string;
  bandwidthTotal: string;
  bandwidthPercentage: number;
}

const AccountPlan: React.FC<AccountPlanProps> = ({
  planName,
  renewalDate,
  storageUsed,
  storageTotal,
  storagePercentage,
  bandwidthUsed,
  bandwidthTotal,
  bandwidthPercentage
}) => {
  return (
    <div className="px-3 bg-custom-gray p-6 rounded-3xl">
      <div className=" text-black p-2 rounded">
        <p className="text-sm font-bold">{planName}</p>
        <p className="text-xs text-gray-500">{renewalDate}</p>
      </div>
      <div className="flex justify-between items-center mt-2 gap-2">
        <span className="text-xs font-light text-gray-600">Almacenamiento</span>
        <span className="text-xs font-semibold text-gray-400">{storageUsed}/{storageTotal}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-indigo-200">
        <div className="bg-custom-violet h-1.5 rounded-full" style={{ width: `${storagePercentage}%` }}></div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs font-light text-gray-600">Banda Mensual</span>
        <span className="text-xs font-semibold text-gray-400 ">{bandwidthUsed}/{bandwidthTotal}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-indigo-200">
        <div className="bg-custom-violet h-1.5 rounded-full" style={{ width: `${bandwidthPercentage}%` }}></div>
      </div>
      <button className="w-auto bg-custom-violet text-white p-1 px-4 rounded-3xl mt-3">
        Administrar Plan
      </button>
    </div>
  );
};

export default AccountPlan;
