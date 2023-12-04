const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders .forEach ((accordion)  =>  {
  accordion.addEventListener("click", collapseAccordions); 
    function collapseAccordions(){
        const activeAccordion = document.querrySelector(".active");
        if (accordion && activeAccordion !== accordion) {
            activeAccordion.classList.toggle("active");
            activeAccordion.nextElementSibling.style.maxHeight = 0;
        }
        
            accordion.classList.toggle("active");
            const accordionItemBody = accordion.nextElementSibling;
        if (accordion.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.strollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    }
});