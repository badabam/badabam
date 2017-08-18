export class ModusOperandi {

  constructor() {
    this.menuIndex = 0;

    const workItems    = this.getAll('.modus-operandi .item');
    const workContents = this.getAll('.modus-operandi .content');
    const menuItems    = this.getAll('.modus-operandi .header-item');
    const slider       = this.get('.modus-operandi .header-slider');


    this.addClickHandler(workItems, event => {
      const subset = [].filter.call(workItems, item => {
        return workContents[this.menuIndex].contains(item);
      });
      this.toggleActive(subset, event.currentTarget);
    });

    this.addClickHandler(menuItems, event => {
      this.toggleActive(menuItems, event.currentTarget);
      this.moveSlider(slider, event.currentTarget);
      let index = [].findIndex.call(menuItems, item => {
        return item.classList.contains('active');
      });
      this.toggleActive(workContents, workContents[index]);
      this.menuIndex = index;
    });
  }

  addClickHandler(items, callback) {
    [].forEach.call(items, item => {
      item.addEventListener('click', callback);
    });
  }

  toggleActive(items, activeItem) {
    [].forEach.call(items, item => {
      item.classList.toggle('active', item === activeItem);
      item.classList.toggle('inactive', item !== activeItem);
    });
  }

  moveSlider(slider, target) {
    const targetRect = target.getBoundingClientRect();
    slider.style.width = targetRect.width + 24 + 'px';
    slider.style.left = target.offsetLeft - 12 + 'px';
  }

  //////// helpers //////////

  get(selector) {
    return document.querySelector(selector);
  }

  getAll(selector) {
    return document.querySelectorAll(selector);
  }
}
