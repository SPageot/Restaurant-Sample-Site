$(() => {
    let windowWidth = $(window).width();
    
    if (windowWidth < 300) {
        $("#main__section--menu_food").turn({
            width: 250,
            height: 250,
            autoCenter: true
    
        })
    } else {
        $("#main__section--menu_food").turn({
            width: 300 ,
            height: 300,
            autoCenter: true
    
        }) 
    }
	
	
		
	

	} )
		

	


const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
		if (entry.isIntersecting) {
			
            // Add the animation class
            entry.target.classList.add('scroll');
           return;// if we added the class, exit the function
        }
            // We're not intersecting, so remove the class!
        entry.target.classList.remove('scroll')
    })
});

const observerTarget = (element) => {
	return observer.observe(document.querySelector(element))
}


const targetArray = ['.header__nav h4','.main__section--headline','.main__section--about_info','.main__section--about_cont h2']

targetArray.forEach(item => observerTarget(item))

