import './styles/main.css';

import { WOW } from 'wowjs'

import { 
  debounce, 
  WindowScroll, SkillsHighchart
} from './js';

alert('TODO: make white logo on last section');

(() => {

  new WOW().init();

  const renderImage = (imgClass, src, alt) => (`<img class="${imgClass}" src="${src}" alt="${alt}" >`)

  window.onload = () => {
    const toTopBtn = document.querySelector('.to-top-btn');
    const toBottomBtn = document.querySelector('.to-bottom-btn');
    const header = document.querySelector('header');

    const sections = [ 'home', 'about', 'service', 'skills', 'portfolio', 'testimonials', 'contact' ];

    const scrollHandler = new WindowScroll(sections);
    const skillsHighchart = new SkillsHighchart('skills-chart');
    
    const handleLastSection = name => {
      console.log(name)
      if (name !== 'contact') { 
        header.classList.remove('white');
      } else {
        header.classList.add('white');
      }
    }

    const chartData = [
      { display: renderImage('image-skill', '/images/skills/xd.png', 'xd'), value: 83},
      { display: renderImage('image-skill', '/images/skills/ae.png', 'ae'), value: 71},
      { display: renderImage('image-skill', '/images/skills/ps.png', 'ps'), value: 96},
      { display: renderImage('image-skill', '/images/skills/ai.png', 'ai'), value: 82}
    ]

    scrollHandler.initHandler(100);
    scrollHandler.initNavHandler('.nav-tabs', '.nav-link');
    scrollHandler.sectionChangeListen(handleLastSection)
    scrollHandler.bindScrollWithNav();
    skillsHighchart.setData(chartData);
    skillsHighchart.renderChart();

    toTopBtn.addEventListener('click', scrollHandler.scrollToTop);
    toBottomBtn.addEventListener('click', scrollHandler.scrollToBottom);
  }

})()