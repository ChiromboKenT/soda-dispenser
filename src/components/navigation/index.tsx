import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../shared/Icon';
import { colors } from '../../theme';

const Navigation = ({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) => {
  const menus = [
    {
      name: 'Manual',
      icon: 'manual-outline',
      dis: 'translate-x-0',
      to: '/',
    },
    {
      name: 'Auto',
      icon: 'auto-outline',
      dis: 'translate-x-16',
      to: '/auto',
    },
  ];

  return (
    <div className="bg-gray-900  w-full">
      <div className="flex justify-between w-full bg-white h-[4.4rem] px-6 rounded-t-lg shadow-shadow2 ">
        <div className="my-auto">
          <h1 className=" font-logo text-xl text-purple-800">Soda Machine</h1>
        </div>
        <ul className="flex relative ">
          <div
            className={`bg-green-600 flex justify-center items-center duration-500  ${menus[active].dis} border-[5px] border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full  `}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-[0.9rem] -left-[18px] 
          rounded-tr-[11px] shadow-shadow1"
            ></span>
            <span className="animate-ping">
              <Icon name={menus[active].icon} size="1.8rem" color="#fff" />
            </span>

            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-[0.9rem] -right-[18px] 
          rounded-tl-[11px] shadow-shadow2"
            ></span>
          </div>
          {menus.map((menu, index) => (
            <li key={`menu-item-${index}`} className="w-16">
              <NavLink
                to={menu.to}
                className="flex flex-col text-center pt-6 "
                onClick={() => setActive(index)}
              >
                <div
                  className={`text-xl flex justify-center items-center cursor-pointer opacity-100 duration-500 ${
                    index === active && '-mt-6 text-white opacity-0'
                  }`}
                >
                  <Icon name={menu.icon} size="1.5rem" color={colors.primary} />
                </div>
                <p
                  className={` font-sans font-semibold text-green-700 ${
                    active === index
                      ? 'translate-y-5 duration-700 opacity-100'
                      : 'opacity-0 translate-y-10'
                  } `}
                >
                  {menu.name}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
