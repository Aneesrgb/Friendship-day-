let current = 1;

function showPage(id){
    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function nextPage(){
    showPage("page2");
}

function nextPage2(){
    showPage("page3");
}

function bestFriend(){
    showPage("page4");
    createHearts();
}

function no1(){
    alert("😒 Surprise miss kar doge? yahi umeed thii chalo ab yes pai click karo nhi too🔪🔪 ❤️");
}

function no2(){
    alert("🐵 Bandariya! 😂 pher sai wohii chalo Pehle Yes par click karo.");
}

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("touchstart",moveButton);
noBtn.addEventListener("mouseover",moveButton);

function moveButton(){

    let x=Math.random()*220-110;
    let y=Math.random()*180-90;

    noBtn.style.transform=`translate(${x}px,${y}px)`;
}

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        document.querySelector(".hearts").appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    },250);

}

function showFireworks(){

    alert("yai loo gift 🎁 chocolate 🍫🍫🍫🍫🍫🍪🍩🍰🍭🍬🌰🍩🍰🍪🧁🧁🧁our noodles bi🍜🍜🍜🍜 our mera bi jaldi sai bhjoo warna🥳");
}
