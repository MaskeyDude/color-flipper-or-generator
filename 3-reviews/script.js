// local review data

const reviews = [

    {
        id: 1,
        item_image_link: "https://pin.it/2imr3HQxZ",
        item_image: "./images/sketch.jpeg",
        item_name: "Sketching",
        item_info: "The special pictures",
        item_review: "I would recommend it to sketch roughly without erasing even if you made alot of mistakes just keep going. Looking at a picture so dear to me then sketching it with my most basic of skills is just damn...",
    },
    
    {
    
        id: 2,
        item_image_link: "https://pin.it/1xxvZQHV9",
        item_image: "./images/Book and pen.jpeg",
        item_name: "Poetry",
        item_info: "When feelings become too much...",
        item_review: "Yes I could be a most newbie poet but writing down how you feel in a poetic way. More like poetry gives me words to describe the feelings more clearly. I've liked rhymed poetry alot I would say so that's why I almost always have rhymes hehe but it has become a part of me",
    },
    
    {
    
        id: 3,
        item_image_link: "https://pin.it/4iNUMQU0Q",
        item_image: "./images/room.jpeg",
        item_name: "Card Making",
        item_info: "Every month for the one",
        item_review: "It just is a thing now. To make a card with a different message, a front lil cover & trying different styles just to give it to someone reminding them of the precious time together. How the childhood friendship rekindled or how long has it been since we met again. These little things just make me a lil more positive...",
    }
    ];
    
    // selecting items 
    
    const item_image_link = document.getElementById('#item-image-link');
    const item_image = document.getElementById('#item-image');
    const item_name = document.getElementById('#item-name');
    const item_info = document.getElementById('#item-info');
    const item_review = document.getElementById('#item-review');
    
    // buttons
    
    const prev_btn = document.querySelector('.prev-btn');
    const nexto_btn = document.querySelector('.nexto-btn');
    const random_btn = document.querySelector('.random-btn');
    
    
    // set starting item
    
    let currentItem = 1;
    
    // load initial item
    window.addEventListener("DOMContentLoaded", function () {
        console.log("lol");
        const item = reviews[currentItem];
// link link linkkkkk
        item_image.src = item.item_image;
        item_name.textContent = item.item_name;
        item_info.textContent = item.item_info;
        item_review.textContent = item.item_review;
    });
    
    
    
    
    
    
    