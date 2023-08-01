import React, { useEffect, useRef, useState } from 'react';
import "./rightpanel.css";

interface Stage {
  stage: any;
  isVisible: boolean;
}

const RightPanelMenu = (props: Stage) => {

  const handlePanelClick = (title: string) => {
      document.getElementById(title)!.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
  };
  

  return (
    <div className={`right-panel-menu fixed right-[-20px] top-1/3 z-50 font-Outfit font-bold text-sm text-[#7F7F7F] transform transition-transform -translate-x-20 ${props.isVisible ? '-translate-x-9' : 'translate-x-full'
      }`}>
      <ul className='space-y-4 list-disc cursor-default'>
        <li className={props.stage === 'Introduction' ? 'active' : 'cursor-pointer'} onClick={() => handlePanelClick("homeDiv")}>Introduction</li>
        <li className={props.stage === 'Vision' ? 'active' : 'cursor-pointer'} onClick={() => handlePanelClick("visionDiv")}>Vision</li>
        <li className={props.stage === 'Features' ? 'active' : 'cursor-pointer'} onClick={() => handlePanelClick("feature")}>Features</li>
        <li className={props.stage === 'Early' ? 'active' : 'cursor-pointer'} onClick={() => handlePanelClick("earlyAccessDiv")}>Get early access</li>
      </ul>
    </div>
  );
};

export default RightPanelMenu;
