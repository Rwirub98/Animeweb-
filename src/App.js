
import React, {useEffect, useRef} from "react";
import './App.css';
import { stagger, createTimeline } from 'animejs'; // ✅ Correct


function App() {
  const containerRef = useRef(null)
   useEffect(()=>{
    const container=containerRef.current;
    container.innerHTML="";

    for(let i=1;i<=100;i++){
      let dot = document.createElement("div");
      dot.classList.add("element")
      container.appendChild(dot);

    }

    let dotAll = container.querySelectorAll(".element");
    const animation = createTimeline({
      easing: 'easeInOutExpo',
      loop: true,
    });

    animation.add({
      targets: dotAll,
      scale: [0.5, 1.2],
      opacity: [0, 1],  
      delay: stagger(100, { grid: [10, 10], from: 'center' }),
    });

    animation.add({
      targets: dotAll,
      rotateZ: 180,
      translateY: stagger(20, { grid: [10, 10], from: 'center', axis: 'y' }),
      translateX: stagger(20, { grid: [10, 10], from: 'center', axis: 'x' }),
      opacity: 1,
      duration: 1000,
  
    })
    .add({
      scale:0.2,
      opacity:0.2,
    })
  }, []);
    



  return (
    <div>
      <header>
        <a href='#' className="logo">
          LOGO
        </a>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>

          </li>
          <li>
            <a href='#' >Project</a>

          </li>
          <li>

            <a href='#' >Contact</a>
          </li>
        </ul>
      </header>
   <section>
      <div className='content'>
        <h2>
          Level up your website <b>Anime.js</b>
        </h2>
        <p>fggdui bfjwegf cgifuwegfcb bfiuwegfcbnb  fgiweugvb sghfjhmn tyfgjb wey89 wgieg fihf wu g arb8tgbf igbwghd </p>
        <a href='#' className='btn'>Learn More</a>
      </div>

      <div className="container" ref={containerRef}></div>
      </section>
    </div>
  );
}

export default App;
