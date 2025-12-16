const modeBTN = document.querySelector(".mode-container")
modeBTN.addEventListener("click", ()=>{
    if(modeBTN.classList.contains("active")){
        modeBTN.classList.remove("active")
        document.body.classList.remove("active")
    }else{
        modeBTN.classList.add("active")
        document.body.classList.add("active")
    }
});

//Current Time
const currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

const AMPM = currentHours >= 12 ? "PM" : "AM";
currentHours = currentHours % 12;
currentHours = currentHours ? currentHours : 12;

currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

document.getElementById("time").innerHTML = currentHours + ":" + currentMinutes +" "+ AMPM;

// Comment Section

const newComment = document.getElementById("new-comment");
const mainContainer = document.querySelector(".Section:nth-child(4)");
const closeComment = document.querySelector(".comment-main-container .fa-xmark")

newComment.addEventListener("click", ()=>{
    mainContainer.classList.add("active")
});
closeComment.addEventListener("click", ()=>{
    mainContainer.classList.remove("active");
})

// New Comment

function updateNewComment(){
    const commentContainer = document.querySelector(".comment-content:nth-child(1)");


    //Get the value of input
    const commentInputValue = CommentInput.value.trim(); 
    const Name = userNames.value.trim();

    //clear the value of the input
    CommentInput.value = "";
    userNames.value = "";

    //create new element
    const NewComment = document.createElement("div");
    const UserName = document.createElement("p");

    //set the innerhtml of element
    NewComment.innerText = commentInputValue;

    UserName.innerHTML = Name !== "" ? Name : "Anonymous";

    //ID and Classname of element
    NewComment.className = "comment";
    UserName.className = "username";

    
    //append the element
    NewComment.appendChild(UserName);
    commentContainer.appendChild(NewComment);

    // save to localStorage
}


// send comment
const CommentInput = document.getElementById("comment-input");
const userNames = document.getElementById("userName");

const send_comment = document.getElementById("send-comment");
const sendIcon = send_comment.querySelector("i");

CommentInput.addEventListener("input", ()=>{
    sendIcon.style.color = CommentInput.value.trim() !== "" ? "black" : "gray"
})


send_comment.addEventListener("click", ()=>{

    if(CommentInput.value === ""){
        alert("Invalid Empty input!");
    }else{
        updateNewComment();
        sendIcon.style.color = "gray"
    }
});

// hire me buttons

const hireMe = document.getElementById("hireMe")
const background =  document.querySelector(".blur-background")
const closepopUp = document.getElementById("closepopUp");

hireMe.addEventListener("click", ()=>{
background.classList.add("active")
})
const hireMe2 = document.getElementById("hireMe2")

hireMe2.addEventListener("click", ()=>{
background.classList.add("active")
})
closepopUp.addEventListener("click", ()=>{
    background.classList.remove("active")
   
})

//acc show

const accounts = document.querySelectorAll(".accContainer .account");

const accountText = [
  { default: "Google GMAIL", hover: "erickbulalaquevidal@gmail.com" },
  { default: "facebook FB", hover: "Erick Jasper B. Vidal" },
  { default: "Twitter X", hover: "erick_jasperX" },
  { default: "GitHub", hover: "jasper-dev01" },
  { default: "Gcash", hover: "09XX-XXX-XXXX" },
  { default: "Paypal", hover: "jasper.payments@gmail.com" }
];

accounts.forEach((account, index) => {
  const text = account.querySelector("p");

  account.addEventListener("mouseenter", () => {
    text.textContent = accountText[index].hover;
  });

  account.addEventListener("mouseleave", () => {
    text.textContent = accountText[index].default;
  });
});

// get in touch

const visits = document.querySelectorAll(".visit")

visits.forEach((visit, index)=>{
    visit.addEventListener("click", ()=>{
        alert("System is shutdown before 15 days of working")
    })
})