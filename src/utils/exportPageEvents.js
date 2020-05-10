
/**
 * Adds custom events to the global scope to be used directly in html
 * 
 * @param {*} events - Object with handler functions
 */
export default function exportPageEvents(events) {
  if(typeof events === 'object'){
    const customPageEvents = globalThis.exported || {}
    const newPageEvents = {...customPageEvents, ...events}
    globalThis.exported = newPageEvents
  }else {
    throw new TypeError(`given property is not an object`, events)
  }
}