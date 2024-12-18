const navbar=document.querySelector(".NavBar");
const dropdown=document.querySelector(".Dropdown");
const hamburg=document.querySelector(".Hamburger");
const placeholder=document.querySelector(".Placeholder");
const home=document.querySelector(".Home");
const a=document.querySelector(".A");
const title=document.querySelector(".Title");
const text=document.querySelector(".Text");
function isElmInView(elm){
    const position=elm.getBoundingClientRect();
    return position.top >= 0 && position.bottom <= window.innerHeight;
}

console.log(isElmInView(home));
window.addEventListener('scroll',()=>{
    if(isElmInView(home)){
        dropdown.classList.remove("hidden");
        hamburg.classList.remove("active");
        placeholder.classList.remove("hide");

    }else{
        dropdown.classList.add("hidden");
        hamburg.classList.add("active");
        placeholder.classList.add("hide");
    }
    const rect = a.getBoundingClientRect();
    if (rect.top <= 40 && !a.classList.contains('anim')) {
        a.classList.add('anim');
        title.classList.add('Apper');
        text.classList.add('Type');
        
    }
});

hamburg.addEventListener('click',()=>{
    dropdown.classList.toggle("hidden");
    hamburg.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', () => {
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Hide all dropdown content first
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the clicked dropdown's content
            const content = header.nextElementSibling;
            content.style.display = 'block';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
        window.location.hash = '#home';

        setTimeout(() => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); 
    } else if (!window.location.hash) {
        window.location.hash = '#home';
    }
});
