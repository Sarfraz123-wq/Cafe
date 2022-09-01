$(document).ready(function() {
    //Popove
    var options = {
        html: true,
        content: $('[data-name="popover-content"]')
    }
    var customPopover = document.getElementById('custom__popover')
    var popover = new bootstrap.Popover(customPopover, options)    
})


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
// default active
food__card[2].classList.add('active')
let spinner_btn = document.querySelector('.spinner_btn');
spinner_btn.addEventListener('click',()=>{    
    shuffleCards()  
})
// shuffle cards

let activeCardOrder;
// let order3Card;
    function shuffleCards(){    
    // generating random unique numbers
    var arr = [];
    while(arr.length < 5){
        var r = Math.floor(Math.random() * 5) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    // const indexOf2 = arr.indexOf(2);
    // if (index > -1) { // only splice array when item is found
    //     arr.splice(indexOf2, 1); // 2nd parameter means remove one item only
    // }
    console.log(arr);
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