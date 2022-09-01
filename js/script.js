$(document).ready(function() {
    //Popove
    var options = {
        html: true,
        content: $('[data-name="popover-content"]')
    }
    var customPopover = document.getElementById('custom__popover')
    var popover = new bootstrap.Popover(customPopover, options)    
})


let cat1 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy1 seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Salted1 Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Beef1 dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Healthy1 noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy1 instant noodle with special omelette",   
    },
]
let cat2 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy2 seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Salted2 Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Beef2 dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Healthy2 noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy2 instant noodle with special omelette",   
    },
]
let cat3 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy3 seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Salted3 Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Beef3 dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Healthy3 noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy3 instant noodle with special omelette",   
    },
]
let cat4 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy4 seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Salted4 Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Beef4 dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Healthy4 noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy4 instant noodle with special omelette",   
    },
]
let recipes = [];
// recipes.push(cat1,cat2)
console.log(recipes)
let allCheckBoxes = document.querySelectorAll('.form-check-input');
let checkbox1 = document.querySelector('#vegeterian');
let checkbox2 = document.querySelector('#gluten-free');
let checkbox3 = document.querySelector('#steak-only');
let checkbox4 = document.querySelector('#drinks');


// remove by default cat1
// allCheckBoxes.forEach(checkbox=>{
//     checkbox.addEventListener('click',function(){
//         recipes = [];
//         console.log('aby yar')
//     }, {once : true});
    
// });

checkbox1.addEventListener('click',()=>{
    if(checkbox1.checked == true){
        console.log("checkbox1 checked");
        recipes.push(cat1)
        console.log(recipes);
    }
    else{        
        console.log("checkbox1 unchecked");
        // remove when checkbox is unchecked
        let cat1Index = recipes.indexOf(cat1);
        if (cat1Index > -1) { // only splice array when item is found
            recipes.splice(cat1Index, 1); // 2nd parameter means remove one item only
        }
    }
})
checkbox2.addEventListener('click',()=>{
    if(checkbox2.checked == true){
        console.log("checkbox2 checked");
        recipes.push(cat2)
        console.log(recipes);
    }
    else{        
        console.log("checkbox2 unchecked");
        // remove when checkbox is unchecked
        let cat2Index = recipes.indexOf(cat2);
        if (cat2Index > -1) { // only splice array when item is found
            recipes.splice(cat2Index, 1); // 2nd parameter means remove one item only
        }
    }
})
checkbox3.addEventListener('click',()=>{
    if(checkbox3.checked == true){
        console.log("checkbox3 checked");
        recipes.push(cat3)
        console.log(recipes);
    }
    else{        
        console.log("checkbox3 unchecked");
        // remove when checkbox is unchecked
        let cat3Index = recipes.indexOf(cat3);
        if (cat3Index > -1) { // only splice array when item is found
            recipes.splice(cat3Index, 1); // 2nd parameter means remove one item only
        }
    }
})
checkbox4.addEventListener('click',()=>{
    if(checkbox4.checked == true){
        console.log("checkbox4 checked");
        recipes.push(cat4)
        console.log(recipes);
    }
    else{        
        console.log("checkbox4 unchecked");
        // remove when checkbox is unchecked
        let cat4Index = recipes.indexOf(cat4);
        if (cat4Index > -1) { // only splice array when item is found
            recipes.splice(cat4Index, 1); // 2nd parameter means remove one item only
        }
    }
})

// showing recipies 
allCheckBoxes.forEach(checkbox=>{
    checkbox.addEventListener('click',()=>{   
        // reset
        let food__card_wrapper = document.querySelector('.food__card-wrapper');
        food__card_wrapper.innerHTML = '';     
        let index;
        for(index =  0; index<5; index++){
            let food =  `<div class="food__card">
            <div class="food__card-content">
                <img src="${recipes[1][index]['path']}" alt="foodation" class="img-fluid">
                <p> ${recipes[1][index]['text']} </p>
                <a href="./recipe-detail.html">How to make it</a>
            </div>
            </div>`

            food__card_wrapper.innerHTML += food;
        }
    })
})