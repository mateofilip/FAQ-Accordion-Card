// let questionsToSelect = document.querySelectorAll('.questionContainer');
// let selectedQuestion;

// questionsToSelect.forEach((element) => {
//   addEventListener('click', () => {
//     console.log(element);
//     selectedQuestion = element;

//     selectedQuestion
//       .querySelector('.question')
//       .classList.toggle('questionSelected');

//     let answer = selectedQuestion.querySelector('.answer');

//     answer.style.display === 'block'
//       ? (answer.style.display = 'none')
//       : (answer.style.display = 'block');
//   });
// });

// // let questionsToSelect = document.querySelectorAll('.questionContainer');

// // questionsToSelect.toArrayforEach(
// //   addEventListener('click', () => {
// //     alert('Hola');
// //   })
// // );

let questionsToSelect = document.querySelectorAll('.questionContainer');
let selectedQuestion;

questionsToSelect.forEach((element) => {
  element.addEventListener('click', toggleVisibility);
});

function toggleVisibility() {
  selectedQuestion = this;
  selectedQuestion
    .querySelector('.question')
    .classList.toggle('questionSelected');

  let answer = selectedQuestion.querySelector('.answer');

  answer.style.display === 'block'
    ? (answer.style.display = 'none')
    : (answer.style.display = 'block');
}
