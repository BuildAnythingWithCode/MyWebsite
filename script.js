document.addEventListener('DOMContentLoaded', function() {
  var words = ['FUN', 'CREATIVE', 'CHALLENGING', 'PASSIONATE', 'EXCITING', 'DIFFICULT', 'REWARDING', 'ENGAGING', 'INSPIRING', 'EXPRESSION'];
  var sentence = document.querySelector('.code-is-fun-flex-cont h1');
  var currentWord = document.getElementById('dynamicWord');
  
  currentWord.textContent = words[Math.floor(Math.random() * words.length)];

  sentence.style.opacity = 1;

  sentence.addEventListener('click', function() {
      sentence.style.opacity = 0;

      setTimeout(function() {
          var newWord;
          do {
              newWord = words[Math.floor(Math.random() * words.length)];
          } while (newWord === currentWord.textContent);

          currentWord.textContent = newWord;

          sentence.style.opacity = 1;
      }, 200);
  });
});
