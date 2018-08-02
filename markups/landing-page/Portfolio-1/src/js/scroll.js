import { debounce } from './debounce';

let instance;


export class WindowScroll {
  /**
   * 
   * @param {Array<String>} sectionNames - array with sectons id 
   */
  constructor(sectionNames) { 
    if (!instance) { instance = this; }

    this.enableBindingScrollToNav = false;

    this.sections = {};
    this.sectionNames = sectionNames;
    sectionNames.forEach( sectionId => { this.sections[sectionId] = document.querySelector(`#${sectionId}`)})

    this.currentSection = 0;
    this.sectionsCount = sectionNames.length;

    this.scrollWindow = this.scrollWindow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);

    return instance;
  }

  initHandler(debounceTime = 0) { 
    window.addEventListener('wheel', debounce(this.scrollWindow, debounceTime));
  }

  initNavHandler(navSelector, navItemSelector, activeClassName = 'active') {
    this.nav = { 
      navContainer: document.querySelector(navSelector), 
      navItemSelector,
      activeClassName 
    };

    document.querySelector(navSelector).addEventListener('click', (e) => {
      const tab = e.target.closest(this.nav.navItemSelector);

      if (tab) {
        e.preventDefault();
        
        const sectionName = /\w*$/.exec(tab.getAttribute('href'))[0];
        const newPosition = this.sectionNames.indexOf(sectionName);
        
        if (newPosition !== -1) {
          this.clearActiveNav();
          this.currentSection = newPosition;

          this.setActiveTab(sectionName)
        
          this.sections[this.sectionNames[this.currentSection]].scrollIntoView({ behavior: 'smooth' });
          
          if (this.navListener) {
            this.navListener(sectionName);
          }
        }
      }
    })
  }

  bindScrollWithNav() {
    this.enableBindingScrollToNav = true;
  }

  sectionChangeListen(handler) {
    this.navListener = handler;
  }

  clearActiveNav() {
    const activeTab = this.nav.navContainer.querySelector(`${this.nav.navItemSelector}.${this.nav.activeClassName}`);
    
    if (activeTab) {
      activeTab.classList.remove(this.nav.activeClassName);
    }
  }

  countNextSection(delta) { 
    if (delta > 0) {
      this.currentSection = Math.min(this.currentSection + 1, this.sectionsCount - 1);
    } else {
      this.currentSection = Math.max(this.currentSection - 1, 0);
    }
  }

  scrollWindow(e) {
    const delta = e.deltaY || e.detail || e.wheelDelta;
    
    this.countNextSection(delta);

    const sectionName = this.sectionNames[this.currentSection];

    this.sections[sectionName].scrollIntoView({ behavior: 'smooth' });

    if (this.navListener) {
      this.navListener(sectionName);
    }

    if (this.enableBindingScrollToNav) {
      this.clearActiveNav();

      this.setActiveTab(sectionName);
    }
  }

  setActiveTab(tabName) {
    const tab = this.nav.navContainer.querySelector(`[href="#${tabName}"]`);

    if (tab) {
      tab.classList.add(this.nav.activeClassName);
    }
  }

  scrollToTop() {
    this.currentSection = 0;
    const sectionName = this.sectionNames[this.currentSection];

    this.sections[sectionName].scrollIntoView({ behavior: 'smooth' });
    this.navListener(sectionName);

    if (this.enableBindingScrollToNav) {
      this.clearActiveNav();
      this.setActiveTab(sectionName);
    }
  }

  scrollToBottom() {
    this.currentSection = this.sectionsCount - 1;
    const sectionName = this.sectionNames[this.currentSection];

    this.sections[sectionName].scrollIntoView({ behavior: 'smooth' });
    this.navListener(sectionName);

    if (this.enableBindingScrollToNav) {
      this.clearActiveNav();
      this.setActiveTab(sectionName);
    }
  }
}