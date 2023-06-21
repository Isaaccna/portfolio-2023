/* eslint-disable no-unused-vars */
import {Code} from 'phosphor-react'
import './styles.css'
import { useEffect, useState } from 'react';

export function Header () {

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const { offsetTop, offsetHeight } = section;
        const scrollY = window.scrollY;
console.log(section.id);
   


        if (scrollY + 50 >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActiveLink(section.id);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
    <a href="hero"> <Code color='var(--primary-color)' size={50}/> </a>
    <nav>
      <ul>
     
        <li>
          <a 
          href="#about" 
          className={activeLink === 'about' ? 'active' : ''}
          >About</a>
        </li>
        <li>
          <a href="#skill"
          className={activeLink === 'skill' ? 'active' : ''}
          >Skill</a>
        </li>
        <li>
          <a href="#portfolio"
          className={activeLink === 'portfolio' ? 'active' : ''}
          >Portfolio</a>
        </li>
        <li>
          <a href="#contact"
          className={activeLink === 'contact' ? 'active' : ''}
          >Contact</a>
        </li>
      </ul>

      <button type='button'> <a href="https://drive.google.com/file/d/157sCSlj0RXblbDFazZr4zxb8VJWUn9AU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a> </button>
    </nav>
      </header>
  )

}