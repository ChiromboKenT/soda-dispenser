import React, { ReactNode } from 'react';
import MachineDisplay from '../machine-display';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full   w-full bg-stone-200 p-6">
      <MachineDisplay />
      {children}
    </div>
  );
};

export default PageLayout;
