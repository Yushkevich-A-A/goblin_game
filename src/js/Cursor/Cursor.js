export default class Cursor {
  constructor() {
    this.body = document.body;
    this.cursor = document.querySelector('.cursor');
    this.listenerCursor();
  }

  listenerCursor() {
    document.addEventListener("mousemove", event => {
      let currentCursorPos = { x: event.clientX, y: event.clientY };
      this.cursor.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y - 56}px)`;
    })
  }
}