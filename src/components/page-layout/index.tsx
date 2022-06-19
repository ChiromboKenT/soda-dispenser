import React, { ReactNode } from 'react';
import MachineDisplay from '../machine-display';
import Card from '../standard-elements/card';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full p-8 h-full">
      <MachineDisplay />
      {children}
    </div>
  );
};

export default PageLayout;
