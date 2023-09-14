

import MainEventBanner from "@/components/page/home/eventbanner/MainEventBanner";
import SubEventBanner from "@/components/page/home/eventbanner/SubEventBanner";
import MainMenu from "@/components/page/home/mainmenu/MainMenu";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from 'next-auth'




export default async function Home() {
  
  const session = await getServerSession(options)
  


  return (
    <div>
      <section id="main_event_banner">
        <div className="main_visual_banner">
            <MainEventBanner />
            
        </div>
        <MainMenu />
        <SubEventBanner />
      </section>
    </div>
  )
}