function toggleMenu() {
    const menu = document.querySelector('.caixa_idioma');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  function selectLanguage(language, flagSrc) {
    // Atualiza a bandeira e o texto do idioma selecionado
    const selectedLanguage = document.querySelector('.caixa_idioma_principal');
    selectedLanguage.querySelector('img').src = flagSrc;
    selectedLanguage.querySelector('span').textContent = language;
  
    // Fecha o menu de opções
    toggleMenu();
  }
  
  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (event) => {
    const languageSelector = document.querySelector('.seletor_de_idioma');
    if (!languageSelector.contains(event.target)) {
      document.querySelector('.caixa_idioma').style.display = 'none';
    }
  });

  function scrollDown(percentage) {
    const scrollAmount = window.innerHeight * percentage;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth' // Faz a rolagem ser suave
    });
  }