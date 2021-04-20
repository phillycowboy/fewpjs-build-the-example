// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
// const heart = document.querySelectorAll('#like')
// heart.addEventListener('click', handleClickEvent);

// function handleClickEvent(e) {
//   e.target.style.color = "red";
//   alert('go fuck yourself!')
// };
// function addHeartClick() {
//   const likeHeart = document.querySelectorAll('.like-glyph');
//   likeHeart.forEach(heart => {
//     heart.addEventListener('click', toggleHeart)
//   });
// }
// document.addEventListener('DOMContentLoaded', function () {

//   addHeartClick();
// });

//FUNCTIONS
// function hideErrors() {
//   hidden.classList.add('hidden');
// }

// function addHeartClick() {
//   const likeHeart = document.querySelectorAll('.like-glyph');
//   likeHeart.forEach(heart => {
//     heart.addEventListener('click', toggleHeart)
//   });
// }

// function toggleHeart(e) {
//   return mimicServerCall()
//     .then(response => response)
//     .then(resp => {
//       let heart = e.target
//       heart.classList.toggle('activated-heart');

//       if (e.target.className === 'activated-heart') {
//         heart.innerHTML = FULL_HEART;
//       } else {
//         heart.innerHTML = EMPTY_HEART;
//       }

//     })
//     .catch(error => {
//       hidden.classList.toggle('hidden');
//       const message = document.querySelector('#modal-message');
//       message.innerText = error;
//       setTimeout(hideErrors, 5000)
//     });
// }
const heartBtns = document.querySelectorAll('.like-glyph');

// heartBtns.addEventListener('click', () => {
//   console.log(e.target)
// })
function likePost(){
  heartBtns.forEach(heart => {
    heart.id = 'like-button';
    heart.addEventListener('click', (e) => {
      console.log(e);
      heart.classList = "activated-heart"
      if(heart.classList.value === "activated-heart"){
        heart.classList = "like-glyph";
      }else if(heart.classList.value === "like-glyph"){
        heart.classList = "activated-heart";
      }
    })
  });

  }
likePost();
  


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
