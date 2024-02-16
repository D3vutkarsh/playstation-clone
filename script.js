const wall = document.querySelector(".games img")
document.querySelector(".general").addEventListener("click", (e) => {

    wall.src = "images/general.png";

})
document.querySelector(".lastofus").addEventListener("click", (e) => {

    wall.src = "images/last-of-us.png";

})
document.querySelector(".cod").addEventListener("click", (e) => {

    wall.src = "images/cod.png";

})
document.querySelector(".wwe").addEventListener("click", (e) => {

    wall.src = "images/wwe.png";

})
document.querySelector(".spidey").addEventListener("click", (e) => {

    wall.src = "images/spiderman-2.png";

})

const accessories = document.querySelector(".material")
document.querySelector(".consol").addEventListener("click", (e) => {

    accessories.src = "images/console.webp";

})
document.querySelector(".controllers").addEventListener("click", (e) => {

    accessories.src = "images/controllers.webp";

})
document.querySelector(".headset").addEventListener("click", (e) => {

    accessories.src = "images/headset.webp";

})
document.querySelector(".earbuds").addEventListener("click", (e) => {

    accessories.src = "images/earbuds.webp";

})
document.querySelector(".controller2").addEventListener("click", (e) => {

    accessories.src = "images/controller2.0.webp";

})
document.querySelector(".joystick").addEventListener("click", (e) => {

    accessories.src = "images/joystick.webp";

})
document.querySelector(".console-variety").addEventListener("click", (e) => {

    accessories.src = "images/console-variety.webp";

})
document.querySelector(".remote").addEventListener("click", (e) => {

    accessories.src = "images/remote.webp";

})
document.querySelector(".camera").addEventListener("click", (e) => {

    accessories.src = "images/camera.webp";

})
const New = document.querySelector(".new-releases")
const Soon = document.querySelector(".coming-soon")

const item_1 = document.querySelector(".item-1")
const item_2 = document.querySelector(".item-2")
const item_3 = document.querySelector(".item-3")
const item_4 = document.querySelector(".item-4")
const item_5 = document.querySelector(".item-5")
const item_6 = document.querySelector(".item-6")
const item_7 = document.querySelector(".item-7")
const item_8 = document.querySelector(".item-8")
const item_9 = document.querySelector(".item-9")
const item_10 = document.querySelector(".item-10")
const item_11 = document.querySelector(".item-11")
const item_12 = document.querySelector(".item-12")

New.addEventListener("click", (e) => {
    //     console.log(New.background-color); 
    New.style.backgroundColor = "#FFFFFF";
    New.style.color = "#000000";
    Soon.style.backgroundColor = "#222323";
    Soon.style.color = "#ffffff";
    item_1.src = "images/hogwarts.png";
    item_2.src = "images/spider.png";
    item_3.src = "images/tekken-8.png";
    item_4.src = "images/fifa.png";
    item_5.src = "images/suicide-squad.png";
    item_6.src = "images/pop.png";
    item_7.src = "images/god-war.png";
    item_8.src = "images/lou.png";
    item_9.src = "images/like-dragon.png";
    item_10.src = "images/final-fantasy.png";
    item_11.src = "images/call.png";
    item_12.src = "images/lego-fortnite.png";
})
Soon.addEventListener("click", (e) => {
    //     console.log(New.background-color); 
    Soon.style.backgroundColor = "#FFFFFF";
    Soon.style.color = "#000000";
    New.style.backgroundColor = "#222323";
    New.style.color = "#ffffff";
    item_1.src = "images/pacific-drive.png";
    item_2.src = "images/final-fantasy-rebirth.png";
    item_3.src = "images/hell.png";
    item_4.src = "images/ronin.png";
    item_5.src = "images/skull-bones.png";
    item_6.src = "images/silent-hill.png";
    item_7.src = "images/defiant.png";
    item_8.src = "images/stellar-blade.png";
    item_9.src = "images/alone-dark.png";
    item_10.src = "images/dragons-dogma.png";
    item_11.src = "images/death-stranding.png";
    item_12.src = "images/until-dawn.png";
})
