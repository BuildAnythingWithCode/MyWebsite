document.addEventListener('DOMContentLoaded', function() {
  var words = ['FUN', 'CREATIVE', 'CHALLENGING', 'PASSIONATE', 'EXCITING', 'DIFFICULT', 'REWARDING', 'ENGAGING', 'INSPIRING', 'EXPRESSION'];
  var currentWord = document.getElementById('dynamicWord');

  currentWord.textContent = words[Math.floor(Math.random() * words.length)];

  currentWord.addEventListener('click', function() {
      var newWord;
      do {
          newWord = words[Math.floor(Math.random() * words.length)];
      } while (newWord === currentWord.textContent); // Ensure the new word is different
      currentWord.textContent = newWord;
  });
});
