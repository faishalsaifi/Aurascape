
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight:true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow : '<div class="priv_arrow"><i class="fa-solid fa-angle-left carousel-icon"></i></div>',
    nextArrow : '<div class="next_arrow"><i class="fa-solid fa-angle-right carousel-icon"></i></div>',
  });

function sendmail() {

  var params = {
    name: document.getElementById("name").value ,
    email: document.getElementById("email").value ,
    message: document.getElementById("messgae").value ,
  };

const serviceID = "service_z8dvudw";
const templateID = "template_zkqhjak";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  console.log(res);
  alert("your message sent succesfully ");
})
.catch((err) => console.log(err));
}

function validation(){

  var form = document.getElementById("form");
  var email = document.getElementById("email").value;

  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern))
  {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Your Email is Valid";
      text.style.color = "#00ff00";
          
  }
  else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Your Email is Invalid";
      text.style.color = "#ff0000";
      
  }
  if (email == "")
  {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      text.style.color = "#00ff00";
  }
}

let dropDown = document.getElementById('dropdown')
let dropDownBtn = document.getElementById('dropdownbtn')

function dropShow(){
  dropDown.classList.toggle("drop-flex");
  dropDown.classList.remove(".pages-nav-block-dropdown");
}
let q1 = document.getElementById("q1");
let qbtn = document.getElementById("qbtn");

function questionToggle1(){
q1.classList.toggle("q-block");
q1.style.maxHeight = "fit-content";
q1.classList.toggle("question-box-text");
}
function questionToggle2(){
q2.classList.toggle("q-block");
q2.style.maxHeight = "fit-content";
q2.classList.toggle("question-box-text");
}
function questionToggle3(){
q3.classList.toggle("q-block");
q3.style.maxHeight = "fit-content";
q3.classList.toggle("question-box-text");
}
function questionToggle4(){
q4.classList.toggle("q-block");
q4.style.maxHeight = "fit-content";
q4.classList.toggle("question-box-text");
}
function questionToggle5(){
q5.classList.toggle("q-block");
q5.style.maxHeight = "fit-content";
q5.classList.toggle("question-box-text");
}
function questionToggle6(){
q6.classList.toggle("q-block");
q6.style.maxHeight = "fit-content";
q6.classList.toggle("question-box-text");
}
function questionToggle7(){
q7.classList.toggle("q-block");
q7.style.maxHeight = "fit-content";
q7.classList.toggle("question-box-text");
}
