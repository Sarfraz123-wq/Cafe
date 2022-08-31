$(document).ready(function() {
    //Popove
    var options = {
        html: true,
        content: $('[data-name="popover-content"]')
    }
    var customPopover = document.getElementById('custom__popover')
    var popover = new bootstrap.Popover(customPopover, options)    
})

// $(document).ready(function(){
//     $('.food__card').click(function(){
//         $('.food__card').removeClass('active');
//         $(this).addClass('active');
//     })
// })

let recipes = [
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy seasoned seafood noodles",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Salted Pasta with mushroom sauce",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Beef dumpling in hot and sour soup",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Healthy noodle with spinach leaf",   
    },
    {
        "path" : "./images/Front-Sandwich.png",
        "text" : "Spicy instant noodle with special omelette",   
    },
]

let food__card_wrapper = document.querySelector('.food__card-wrapper');
let index;
for(index =  0; index<recipes.length; index++){
    let food =  `<div class="food__card">
    <div class="food__card-content">
        <img src="${recipes[index]['path']}" alt="foodation" class="img-fluid">
        <p> ${recipes[index]['text']} </p>
        <a href="./recipe-detail.html">How to make it</a>
    </div>
    </div>`

    food__card_wrapper.innerHTML += food;
}
let food__card = document.querySelectorAll('.food__card');
let spinner_btn = document.querySelector('.spinner_btn');
spinner_btn.addEventListener('click',()=>{
    const rndInt = Math.floor(Math.random() * 5)
    // console.log(rndInt)
    
    // console.log(food__card[rndInt])
    $('.food__card').removeClass('active');
    food__card[rndInt].classList.add('active');  
    //
    shuffleCards()  
})
// shuffle cards


let numbers = [];

for(let i=0;i<recipes.length;i++){
    if(i !=2){
        numbers.push(i);
    }
}
console.log(numbers);

let randomIndex;
    function shuffleCards(){    
    food__card.forEach(card=>{
        randomIndex = Math.floor(Math.random() * 5)
        if(randomIndex == 2){
            randomIndex = Math.floor(Math.random() * 5)
        }
        console.log(randomIndex)
        card.style.order = randomIndex;        
    })
    document.querySelector('.food__card.active').style.order = 2;
}