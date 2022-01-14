const ctaClickHandler = () => {
    const formCta = document.querySelector('.formCta');
    const logFrom = document.querySelector('.loginFrom');
    const signFrom = document.querySelector('.signUpFrom');

    formCta && formCta.addEventListener("click", (e) => {
        e.target.classList.add("active");
        e.target.nextElementSibling && e.target.nextElementSibling.classList.remove("active");
        e.target.previousElementSibling && e.target.previousElementSibling.classList.remove("active");
        if(e.target.id == "login"){
            signFrom.classList.add("disp");
            logFrom.classList.remove("disp");
        }else{
            logFrom.classList.add("disp");
            signFrom.classList.remove("disp");
        }
    })
}


ctaClickHandler();