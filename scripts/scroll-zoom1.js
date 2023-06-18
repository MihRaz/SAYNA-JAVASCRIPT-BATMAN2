document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 1024) {
  const character = document.querySelector('.inline-images').querySelectorAll('.characters');
  let currentCharacterIndex = 0;

  function showCharacter(index) {
    character.forEach((character, characterIndex) => {
      if (characterIndex === index) {
        character.classList.add('active');
      } else {
        character.classList.remove('active');
      }
    });

  updateNavigation(index);
  }

  function updateNavigation(index) {
    const navItems = document.querySelectorAll('.nav-items');
    navItems.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function nextCharacter() {
    currentCharacterIndex = (currentCharacterIndex + 1) % character.length;
    showCharacter(currentCharacterIndex);
  }

  setInterval(nextCharacter, 3000);

  character.forEach(character => {
    character.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      const actor = this.querySelector('.actor');
      if (actor) {
        actor.style.display = 'flex';
      }
    });
    character.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      const actor = this.querySelector('.actor');
      if (actor) {
        actor.style.display = 'none';
      }
    })
  });
  }

  else if (window.innerWidth > 1024) {
    const character = document.querySelector('.inline-images').querySelectorAll('.characters');
    character.forEach(character => {
      character.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(0.9)';
        const actor = this.querySelector('.actor');
        if (actor) {
          actor.style.display = 'flex';
        }
      });
      character.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(0.8)';
        const actor = this.querySelector('.actor');
        if (actor) {
          actor.style.display = 'none';
        }
      })
    })
  }
});
