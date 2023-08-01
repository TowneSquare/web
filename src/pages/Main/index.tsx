import React, { useEffect, useRef, useState } from 'react';
import Home from '../../components/Home';
import Header from '../../components/Header';
import Vision from '../../components/Vision';
import Features from '../../components/Features';
import EarlyAccess from '../../components/EarlyAccess';
import { Footer } from '../../components/Footer';
import RightPanelMenu from '../../components/RightPanel';
import FeaturesMobile from '../../components/FeaturesMobile';
import Transparency from '../../components/Transparency';

function Main() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);
  const components = ['Home', 'Introduction', 'Vision', 'Features', 'Early'];
  const [isTransparencyVisible, setIsTransparencyVisible] =  useState(false);
  const [isJoinAppear, setIsJoinAppear] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const positions = components.map((component) => {
        const element = document.querySelector(`[data-component="${component}"]`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            name: component,
            top: rect.top + scrollY,
            bottom: rect.bottom + scrollY,
            left: rect.left,
            right: rect.right
          };
        }
        return null;
      });
      const visibleComponent = positions.find((position) => {
        if(position && position?.name == "Introduction") {
          return position && (position.top <= scrollY + windowHeight / 2 && position.bottom >= scrollY + windowHeight / 2) && position.right <= windowWidth && position.right >= windowWidth/3;
        } else if(position && position?.name == "Vision") {
          return position && (position.top <= scrollY + windowHeight / 2 && position.bottom >= scrollY + windowHeight / 2) && (position.right > windowWidth / 3 || position.right > windowWidth*-3 );
        } else if(position) {
          return position && position.top <= scrollY + windowHeight / 2 && position.bottom >= scrollY + windowHeight / 2;
        }
      });
      if (visibleComponent) {
        setCurrentComponent(visibleComponent.name);
      } else {
        setCurrentComponent('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsTransparencyVisible(!isTransparencyVisible);
    setIsJoinAppear(true);
  }

  return (
    <div>
      <Home clickWaitlist={handleClick}/>
       <Transparency
        isJoinAppear={isJoinAppear}
        isVisible={isTransparencyVisible}
        onClose={handleClick}
      />
      <RightPanelMenu stage={currentComponent} isVisible={currentComponent !== "Home" && currentComponent !== null} />
      <Vision />
      <Features />
      {/* <FeaturesMobile /> */}
      <EarlyAccess />
      {/* <Footer/> */}
    </div>
  );
}

export default Main;
