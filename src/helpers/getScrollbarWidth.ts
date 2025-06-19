export default function getScrollbarWidth(): number {
  if (window.innerHeight === document.documentElement.scrollHeight) {
    return 0;
  }
  const div = Object.assign(document.createElement('div'), {
    style: `
      width: 100px;
      height: 100px;
      overflow: scroll;
      position: absolute;
      top: -9999px;
    `
  });
  document.body.appendChild(div);
  const width = div.offsetWidth - div.clientWidth;
  div.remove();
  return width;
}