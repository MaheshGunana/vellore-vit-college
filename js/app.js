function sidebarShowing() {
    const hamburger = document.querySelector('.hamburger');
    const sidebarCloseButton = document.querySelector('.close-button');

    // This is for adding a new class('show-sidebar') to this
    const sidebarContainer = document.querySelector('.sidebar-container');

    //open sidebar
    const openSidebar = () => {
        sidebarContainer.classList.add('show-sidebar')
    }
    hamburger.addEventListener('click', openSidebar);

    //close sidebar
    const closeSidebar=() => {
        sidebarContainer.classList.remove('show-sidebar');
    }
    sidebarCloseButton.addEventListener('click',closeSidebar)
}
sidebarShowing();

function navStickyBar(){
    const navContainer = document.querySelector('.nav-container');

    window.addEventListener('scroll',()=>{
        const targetNumber= window.innerWidth >=992 ? 70 : 50;
        const scrollNumber= window.scrollY; 

        if(scrollNumber>=targetNumber){
            navContainer.classList.add('sticky-nav')
            console.log(scrollNumber,window.innerWidth);
        }else{
            navContainer.classList.remove('sticky-nav')
        }    
    })
}
navStickyBar()
  
    