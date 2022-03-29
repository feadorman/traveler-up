const toggleStickHeader = () => {
  const header = document.querySelector('.header');


  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header__active');
      return 
    } 
    
    header.classList.remove('header__active');
  };
};

toggleStickHeader();
