
//Hamburger menu
document.getElementById("hamburger1").addEventListener("click", function(){
    document.getElementById("mobile-nav1").classList.remove("hidden");
})
document.getElementById("close1").addEventListener("click", function(){
    document.getElementById("mobile-nav1").classList.add("hidden");
})

function myalert(){
    alert("Sucessfully edited profile")
}
function myalert1(){
    alert("Sucessfully registered new pet, it will take 1 day for us to process, and update the list")
}
function enquiries(){
    alert("Thank you for your enquiry, our team will respond to your enquiry shortly")
}