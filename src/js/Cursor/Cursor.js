export default class Cursor {
  constructor() {
    this.body = document.body;
    this.cursor = document.querySelector('.cursor');
    this.listenerCursor();
  }

  listenerCursor() {
    document.addEventListener('mousemove', (event) => {
      const currentCursorPos = { x: event.clientX, y: event.clientY };
      this.cursor.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y - 56}px)`;
    });

    document.addEventListener('mousedown', (event) => {
      this.cursor.children[0].classList.add('attack');
      setTimeout(() => this.cursor.children[0].classList.remove('attack'), 150);
    });
  }
}
