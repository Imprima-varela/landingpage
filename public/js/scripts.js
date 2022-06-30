
//scroll select menu
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li a");
const nav = (document.querySelectorAll("nav").length > 0?document.querySelectorAll("nav")[0]:"");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
    if (current === "inicio") {
        nav.classList.remove("top-nav-collapse")
    }else{
        nav.classList.add("top-nav-collapse")
    }
  });
});

/*Slide*/
const items = document.querySelectorAll('.img-slide');
const itemCount = items.length;
const nextItem = document.querySelector('.next-slide');
const previousItem = document.querySelector('.previous-slide');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);


function menuDevice(){
  console.log(document.getElementById("nav-items-menu").style.display);
  document.getElementById("nav-items-menu").style.display == "none" || document.getElementById("nav-items-menu").style.display == ""
  ?
  document.getElementById("nav-items-menu").style.display = "block"
  :
  document.getElementById("nav-items-menu").style.display = "none"
}