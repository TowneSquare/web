import { useEffect, useState, lazy, Suspense } from 'react';
import Home from '../../components/Home';
import RightPanelMenu from '../../components/RightPanel';
import Transparency from '../../components/Transparency';

const Vision = lazy(() => import("../../components/Vision"))
const Features = lazy(() => import("../../components/Features"))
const FeaturesMobile = lazy(() => import("../../components/FeaturesMobile"))
const EarlyAccess = lazy(() => import("../../components/EarlyAccess"))

function Main() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);
  const components = ['Home', 'Introduction', 'Vision', 'Features', 'FeaturesMobile', 'Early'];
  const [isTransparencyVisible, setIsTransparencyVisible] = useState(false);
  const [isJoinAppear, setIsJoinAppear] = useState(false);

  const [isWeb, setWebMode] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setWebMode(false);
    }

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
      <Home clickWaitlist={handleClick} />
      <Transparency
        isJoinAppear={isJoinAppear}
        isVisible={isTransparencyVisible}
        onClose={handleClick}
      />
      <RightPanelMenu stage={currentComponent} isVisible={currentComponent !== "Home" && currentComponent !== null} />
      <div className={`${currentComponent !== "Home" && currentComponent !== null ? "fixed bottom-0 z-40 backdrop-blur-xl bg-white/30 h-[44px] w-[100%] md:hidden": "hidden"}`}>
      <Suspense fallback={<div>LOADING</div>}>
        <Vision />
      </Suspense>
      {isWeb &&
        <Suspense fallback={<div>LOADING</div>}>
          <Features />
        </Suspense>
      }
      <Suspense fallback={<div>LOADING</div>}>
        <FeaturesMobile />
      </Suspense>
      <Suspense fallback={<div>LOADING</div>}>
        <EarlyAccess />
      </Suspense>
    </div>
  );
}

export default Main;
