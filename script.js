const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');
const toggleButton = document.querySelector('.navbar-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
      toggleButton.classList.toggle('active');
    });




    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        
        tab.classList.add('active');
        const targetTab = tab.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
      });
    });