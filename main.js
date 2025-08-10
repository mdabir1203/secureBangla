body {
  font-family: 'Noto Sans Bengali', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background: #1e1e1e;
  color: #ddd;
  margin: 0;
  padding: 1.5rem 2.5rem;
  max-width: 900px;
  line-height: 1.65;
}

.tutorial-section {
  background: #282c34;
  border-radius: 7px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.5),
    0 4px 10px rgba(0, 0, 0, 0.8);
  margin-bottom: 1.25rem;
  padding: 1.25rem 1.75rem;
  cursor: pointer;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
  user-select: none;
  position: relative;
}

.tutorial-section:hover,
.tutorial-section:focus-visible {
  box-shadow:
    0 5px 10px rgba(0, 188, 212, 0.25),
    0 15px 30px rgba(0, 188, 212, 0.5);
  transform: translateY(-2.5px);
  outline: none;
}

.tutorial-section:active {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.7),
    0 5px 10px rgba(0, 0, 0, 0.9);
  transform: translateY(1.5px);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  color: #00bcd4;
  font-weight: 600;
  user-select: none;
  outline-offset: 4px;
}

.section-header::after {
  content: "▼";
  font-weight: 900;
  color: #00bcd4;
  font-size: 1.1rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  backface-visibility: hidden;
  display: inline-block;
  margin-left: 0.6rem;
}

.tutorial-section[aria-expanded="true"] .section-header::after {
  transform: rotateX(180deg);
}

.section-content {
  margin-top: 1rem;
  font-size: 1rem;
  color: #bbb;
  user-select: text;
  max-height: 1000px; /* max to allow transition */
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.tutorial-section[aria-expanded="false"] .section-content {
  max-height: 0;
  margin-top: 0;
  padding-top: 0;
  color: transparent;
}

pre {
  background: #21252b;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  overflow-x: auto;
  color: #f8f8f2;
  box-shadow:
    inset 0 0 10px rgba(0, 188, 212, 0.2);
  user-select: text;
}

.copy-btn {
  position: absolute;
  top: 10px;
  right: 14px;
  background: #00bcd4;
  border: none;
  border-radius: 7px;
  padding: 0.3rem 0.8rem;
  font-weight: 700;
  font-size: 0.85rem;
  color: #1e1e1e;
  cursor: pointer;
  box-shadow:
    0 3px 6px rgba(0, 188, 212, 0.6);
  transition:
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.25s ease;
  user-select: none;
  z-index: 11;
}

.copy-btn:hover {
  background-color: #0097a7;
  box-shadow:
    0 6px 12px rgba(0, 188, 212, 0.8);
  transform: translateY(-1.5px) scale(1.05);
}

.copy-btn:active {
  background-color: #007c91;
  box-shadow:
    0 2px 5px rgba(0, 188, 212, 0.4);
  transform: translateY(1px) scale(0.95);
  transition: none;
}

#scrollTopBtn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 46px;
  height: 46px;
  background: #00bcd4;
  border-radius: 50%;
  box-shadow:
    0 8px 15px rgba(0, 188, 212, 0.55),
    inset 0 0 8px rgba(255, 255, 255, 0.15);
  color: #1e1e1e;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
  user-select: none;
  z-index: 999;
}

#scrollTopBtn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

#scrollTopBtn:hover {
  box-shadow:
    0 12px 20px rgba(0, 188, 212, 0.85),
    inset 0 0 10px rgba(255, 255, 255, 0.25);
  transform: translateY(-3px) scale(1.05);
}

#scrollTopBtn:active {
  box-shadow:
    0 5px 10px rgba(0, 188, 212, 0.5);
  transform: translateY(1px) scale(0.9);
  transition: none;
}
