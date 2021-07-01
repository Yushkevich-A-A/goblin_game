export default class Cursor {
  constructor() {
    this.body = document.body;
    this.cursor = document.querySelector('.cursor');
    this.listenerCursor();
  }

  listenerCursor() {
    document.addEventListener("mousemove", event => {
      let currentCursorPos = { x: event.clientX, y: event.clientY };
      this.cursor.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y - 80}px)`;
    });

    document.addEventListener('mousedown', () => {
      this.cursor.children[0].classList.add('attack');
      setTimeout(() => this.cursor.children[0].classList.remove('attack'),150)
    });
  }
}