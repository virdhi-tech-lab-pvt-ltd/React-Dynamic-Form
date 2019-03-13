import ReactDOM from 'react-dom'

export const PAGE_LOADER_STYLE = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0)',
  zIndex: 10
}

export function disablePageScroll() {
  let el = document.getElementsByTagName('html')[0]
  el.style.overflow = 'hidden'
}

export function enablePageScroll() {
  let el = document.getElementsByTagName('html')[0]
  el.style.overflow = 'auto'
}

// Set the focus on the field also move the focus to the end of the input text
export function setFocusOnTextField(textfield) {
  let el = ReactDOM.findDOMNode(textfield).getElementsByTagName('input')[0]
  el.selectionStart = el.selectionEnd = el.value.length
  el.focus()
}

export function pageScroll(element) {
  if (!element)
    return;
  const node = ReactDOM.findDOMNode(element);
  node.scrollIntoView({ behavior: "smooth" });
}
