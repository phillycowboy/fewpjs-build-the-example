// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// const heart = document.getElementsByClassName('like-glyph');
// Your JavaScript code goes here!
document.addEventListener('click', handleClickEvent);
// document.addEventListener('click', handleSecondClickEvent);

function handleClickEvent(e) {
  let heart = document.getElementsByClassName('like-glyph');
  e.target.style.color = 'red';
  alert("you liked a post!")
};

// function handleSecondClickEvent(e) {
//   let heart = document.getElementsByClassName('like-glyph');
//    e.target.style.color = 'blue'
// }


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
