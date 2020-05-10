import exportPageEvents from '../../utils/exportPageEvents.js'

/**
 * Resources
 * @url - 
 */


const circleGestures = {
  touchStart: (e,circle) => {
    console.log(e,circle)
  },
  touchMove: (e, circle) => {
    console.log(e)
  }
}


function testEvent(){
  console.log("runned event")
}



(function onPageInit(){
  console.log("page initialized")
})()



exportPageEvents({
  testEvent,
  circleGestures,
})



