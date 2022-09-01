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
        "text" : "vegeterian: Spicy seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "vegeterian: Salted Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "vegeterian: Beef dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "vegeterian: Healthy noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "vegeterian: Spicy instant noodle with special omelette",   
    },
]
let cat2 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "gluten-free: Spicy seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "gluten-free: Salted Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "gluten-free: Beef dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "gluten-free: Healthy noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "gluten-free: Spicy instant noodle with special omelette",   
    },
]
let cat3 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "steak-only: Spicy seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "steak-only: Salted Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "steak-only: Beef dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "steak-only: Healthy noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "steak-only: Spicy instant noodle with special omelette",   
    },
]
let cat4 = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "drinks: Spicy seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "drinks: Salted Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "drinks: Beef dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "drinks: Healthy noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "drinks: Spicy instant noodle with special omelette",   
    },
]
let recipes = [];
// recipes.push(cat1,cat2)
// console.log(recipes)
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
        // console.log("checkbox1 checked");
        recipes.push(cat1)
        // console.log(recipes);
    }
    else{        
        // console.log("checkbox1 unchecked");
        // remove when checkbox is unchecked
        let cat1Index = recipes.indexOf(cat1);
        if (cat1Index > -1) { // only splice array when item is found
            recipes.splice(cat1Index, 1); // 2nd parameter means remove one item only
        }
    }
})
checkbox2.addEventListener('click',()=>{
    if(checkbox2.checked == true){
        // console.log("checkbox2 checked");
        recipes.push(cat2)
        // console.log(recipes);
    }
    else{        
        // console.log("checkbox2 unchecked");
        // remove when checkbox is unchecked
        let cat2Index = recipes.indexOf(cat2);
        if (cat2Index > -1) { // only splice array when item is found
            recipes.splice(cat2Index, 1); // 2nd parameter means remove one item only
        }
    }
})
checkbox3.addEventListener('click',()=>{
    if(checkbox3.checked == true){
        // console.log("checkbox3 checked");
        recipes.push(cat3)
        // console.log(recipes);
    }
    else{        
        // console.log("checkbox3 unchecked");
        // remove when checkbox is unchecked
        let cat3Index = recipes.indexOf(cat3);
        if (cat3Index > -1) { // only splice array when item is found
            recipes.splice(cat3Index, 1); // 2nd parameter means remove one item only
        }
    }
})
checkbox4.addEventListener('click',()=>{
    if(checkbox4.checked == true){
        // console.log("checkbox4 checked");
        recipes.push(cat4)
        // console.log(recipes);
    }
    else{        
        // console.log("checkbox4 unchecked");
        // remove when checkbox is unchecked
        let cat4Index = recipes.indexOf(cat4);
        if (cat4Index > -1) { // only splice array when item is found
            recipes.splice(cat4Index, 1); // 2nd parameter means remove one item only
        }
    }
})

// showing recipies 
let categoryCount;
allCheckBoxes.forEach(checkbox=>{
    checkbox.addEventListener('click',()=>{   
        // reset
        let food__card_wrapper = document.querySelector('.food__card-wrapper');
        food__card_wrapper.innerHTML = '';     
        categoryCount = $('.form-check-input:checked').length;
        // console.log(r);
        let index;
        if(categoryCount > 0){

            for(index =  0; index<5; index++){
                var r = Math.floor(Math.random() * categoryCount);
                let food =  `<div class="food__card">
            <div class="food__card-content">
                <img src="${recipes[r][index]['path']}" alt="foodation" class="img-fluid">
                <p> ${recipes[r][index]['text']} </p>
                <a href="./recipe-detail.html">How to make it</a>
                </div>
                </div>`
                
                food__card_wrapper.innerHTML += food;
            }
        }
        else{
            let food = `<div class="food__card">
            <div class="food__card-content">
                <img src="./images/Front-Sandwich.png" alt="foodation" class="img-fluid">
                <p>Spicy seasoned seafood noodles</p>
                <a href="./recipe-detail.html">How to make it</a>
            </div>
        </div>
        <div class="food__card">
            <div class="food__card-content">
                <img src="./images/Front-Sandwich.png" alt="foodation" class="img-fluid">
                <p>Salted Pasta with mushroom sauce</p>
                <a href="./recipe-detail.html">How to make it</a>
            </div>
        </div>
        <div class="food__card active">
            <div class="food__card-content">
                <img src="./images/Front-Sandwich.png" alt="foodation" class="img-fluid">
                <p>Beef dumpling in hot and sour soup</p>
                <a href="./recipe-detail.html">How to make it</a>
            </div>
        </div>
        <div class="food__card">
            <div class="food__card-content">
                <img src="./images/Front-Sandwich.png" alt="foodation" class="img-fluid">
                <p>Healthy noodle with spinach leaf</p>
                <a href="./recipe-detail.html">How to make it</a>
            </div>
        </div>
        <div class="food__card">
            <div class="food__card-content">
                <img src="./images/Front-Sandwich.png" alt="foodation" class="img-fluid">
                <p>Spicy instant noodle with special omelette</p>
                <a href="./recipe-detail.html">How to make it</a>
            </div>
        </div>`
        food__card_wrapper.innerHTML += food;
        }
        //  active class on every 3rd card
        let food__card = document.querySelectorAll('.food__card');
        // default active
        food__card[2].classList.add('active');
    })
})


// work for shuffle cards
let activeCardOrder;

function shuffleCards(){
    var arr = [];
    while(arr.length < 5){
        var r = Math.floor(Math.random() * 5) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    let food__card = document.querySelectorAll('.food__card');
    // default active
    // food__card[2].classList.add('active');
    
    food__card.forEach(function (card,i){        
        card.style.order = arr[i];                                   
        console.log(arr[i]);        
            if(card.style.order == 3){
                card.style.order = activeCardOrder;
                $('.food__card').removeClass('active');
                card.classList.add('active');
            }             
    })  
}

let spinner_btn = document.querySelector('.spinner_btn');
spinner_btn.addEventListener('click',()=>{    
    shuffleCards()  
})
