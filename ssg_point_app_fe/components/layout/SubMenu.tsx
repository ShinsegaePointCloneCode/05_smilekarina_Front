"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import modulestyle from "./SubMenu.module.css"
import { MenuType } from '@/types/MenuType';
import { mypageMenuData, memberMenuData, eventMenuData, myPointMenuData, myloungeMenuData } from '@/datas/subMenuData';

const menuDataMapping: {
  [key: string]: MenuType[];
} = {
  mypoint: myPointMenuData,
  event: eventMenuData,
  myinfo: memberMenuData,
  mypage: mypageMenuData,
  mylounge: myloungeMenuData,
  
  // 다른 pathname을 추가하려면 여기에 추가하세요.
  // 예: anotherPath: anotherMenuData
};

export default function PageHeader() {
  const path = usePathname();
  const pathname = path.split("/")[1];

  let currentMenuData: MenuType[] = menuDataMapping[pathname] || [];


if (currentMenuData.length === 0) {
  for (const key in menuDataMapping) {
      if (menuDataMapping[key].some(menu => {
          
          if (Array.isArray(menu.url)) {
              return menu.url.some(url => path.includes(url));
          }
          return path.includes(menu.url);
      })) {
          currentMenuData = menuDataMapping[key];
          break;
      }
  }
}


  return (
    <div className={modulestyle.tab_menu_box}>
      <PageMenuUi
        data={currentMenuData}
        path={path}
      />
    </div>
  )
}

const PageMenuUi = ({ data, path }: { data: MenuType[], path: string }) => {
  if (data.length === 0) return null;

  return (
    <ul>
      {data.map((menu, idx) => {
        
        const isActive = Array.isArray(menu.url) ? menu.url.some(url => path.includes(url)) : path.includes(menu.url);

        return (
          <li key={idx}>
            <Link 
              href={Array.isArray(menu.url) ? menu.url[0] : menu.url}  
              className={`
                ${modulestyle.gnbDepth2Link} 
                ${isActive ? `${modulestyle.tab} ${modulestyle.on} ${modulestyle.gnbDepth2LinkActive}` : modulestyle.tab}
              `}
            >
              {menu.name}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
