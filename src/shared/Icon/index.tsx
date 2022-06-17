import React from 'react';
import { MdOutlineBrightnessAuto } from 'react-icons/md';
import { TbManualGearbox } from 'react-icons/tb';
const Icon = ({
  name,
  size,
  color,
}: {
  name: string;
  size?: string;
  color?: string;
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'auto-outline':
        return <MdOutlineBrightnessAuto size={size} color={color} />;
      case 'manual-outline':
        return <TbManualGearbox size={size} color={color} />;
      default:
        return null;
    }
  };
  return <>{renderIcon(name)}</>;
};

export default Icon;
