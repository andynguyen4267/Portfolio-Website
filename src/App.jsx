import React, { useEffect } from 'react';
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

export const App = () => {
  // useEffect(() => {
  //   const cursor = document.querySelector('.cursor');

  //   const moveCursor = (e) => {
  //     if (cursor) {
  //       cursor.style.left = `${e.clientX}px`;
  //       cursor.style.top = `${e.clientY}px`;
  //     }
  //   };

  //   const addHoverEffect = () => {
  //     if (cursor) cursor.classList.add('cursor-hover');
  //   };

  //   const removeHoverEffect = () => {
  //     if (cursor) cursor.classList.remove('cursor-hover');
  //   };

  //   window.addEventListener('mousemove', moveCursor);
  //   document.querySelectorAll('a, button').forEach((el) => {
  //     el.addEventListener('mouseover', addHoverEffect);
  //     el.addEventListener('mouseout', removeHoverEffect);
  //   });

  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor);
  //     document.querySelectorAll('a, button').forEach((el) => {
  //       el.removeEventListener('mouseover', addHoverEffect);
  //       el.removeEventListener('mouseout', removeHoverEffect);
  //     });
  //   };
  // }, []);

  return (
    <div className={styles.App}>
      {/* <div className='cursor'></div> Make sure this is present */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
