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
    <div className="px-3 mt-6 bg-custom-gray m-4 p-4 rounded-3xl mt-64">
      <div className=" text-black p-2 rounded">
        <p className="text-sm font-medium">{planName}</p>
        <p className="text-xs">{renewalDate}</p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm font-light text-gray-600">Almacenamiento</span>
        <span className="text-sm font-semibold text-gray-700">{storageUsed}/{storageTotal}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div className="bg-custom-violet h-1.5 rounded-full" style={{ width: `${storagePercentage}%` }}></div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm font-light text-gray-600">Banda Mensual</span>
        <span className="text-sm font-semibold text-gray-700">{bandwidthUsed}/{bandwidthTotal}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div className="bg-custom-violet h-1.5 rounded-full" style={{ width: `${bandwidthPercentage}%` }}></div>
      </div>
      <button className="w-full bg-custom-violet text-white p-2 rounded-3xl mt-3">
        Administrar Plan
      </button>
    </div>
  );
};

export default AccountPlan;
