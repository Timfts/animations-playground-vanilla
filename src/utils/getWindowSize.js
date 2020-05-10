/**
 * Function to get window size
 * 
 * @return {{height: number, width:number}} screen size properties
 */
export default function getWindowSize() {
  const windowWidth = window.innerWidth; // window?.innerWidth
  const windowHeight = window.innerHeight; // window?.innerHeight

  return { height: windowHeight, width: windowWidth };
}
