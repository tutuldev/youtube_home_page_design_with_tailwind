
          const inputElement = document.getElementById('myInput');
          const targetElement = document.getElementById('targetElement');
          const prnDev = document.getElementById('prnDev');
          
          inputElement.addEventListener('focus', () => {
              targetElement.classList.remove('hidden');
              prnDev.classList.add('focus-color');
          });
          
          inputElement.addEventListener('blur', () => {
              targetElement.classList.add('hidden');
              prnDev.classList.remove('focus-color');
          });

        //   when menu bar click width decrease

        document.addEventListener('DOMContentLoaded', (event) => {
            const menuBtn = document.getElementById('menuBtn');
            const menuBtnIn = document.getElementById('menuBtnIn');
            const sideBar = document.getElementById('sideBar');
            const allSidNav = document.getElementById('allSidNav');
            const cmnSidNav = document.getElementById('cmnSidNav');
            const exAllSidNav = document.getElementById('exAllSidNav');
            
            
            let isToggled = false; // This variable will keep track of the toggle state
        
            menuBtn.addEventListener('click', function() {
                if (isToggled) {
                    // Revert to original state
                    allSidNav.classList.add('xl:block');
                    cmnSidNav.classList.add('xl:hidden');
                    sideBar.classList.add('xl:w-[250px]');
                       
                } else {
                    allSidNav.classList.remove('xl:block');
                    cmnSidNav.classList.remove('xl:hidden');
                    sideBar.classList.remove('xl:w-[250px]');
                    exAllSidNav.classList.remove('hidden');
                }

                
                // Toggle the state
                isToggled = !isToggled;
            });


            menuBtnIn.addEventListener('click', function() {
                if (isToggled) {
                    // Revert to original state
              
                    exAllSidNav.classList.add('hidden');

                       
                } else {
            
                    exAllSidNav.classList.remove('hidden');
                }

                
                // Toggle the state
                isToggled = !isToggled;
            });
        });
         
      