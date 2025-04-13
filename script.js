const reviews = [

    {
        id: 1,
        name: 'john doe',
        job: 'software engineer',
        img: 'images/profile-1.jpg',
        text: "Passionate coder and tech enthusiast. Loves to build web applications and explore new technologies every day.",
    },
    {
        id: 2,
        name: 'michael scott',
        job: 'project manager',
        img: 'images/profile-2.jpg',
        text: "Leading teams with humor and efficiency. Believes in teamwork and delivering the best results with a smile.",
    },
    {
        id: 3,
        name: 'emma watson',
        job: 'graphic designer',
        img: 'images/profile-3.jpg',
        text: "Creative soul turning ideas into visual stories. Passionate about colors, typography, and pixel-perfect designs.",
    },
    {
        id: 4,
        name: 'olivia brown',
        job: 'content writer',
        img: 'images/profile-4.jpg',
        text: "Words are my playground. Crafting compelling content that engages and informs readers around the globe.",
    },
    {
        id: 5,
        name: 'david miller',
        job: 'data analyst',
        img: 'images/profile-5.jpg',
        text: "Numbers speak louder than words. Turning data into actionable insights for better business decisions.",
    },
    {
        id: 6,
        name: 'sophia davis',
        job: 'digital marketer',
        img: 'images/profile-6.jpg',
        text: "Strategizing marketing campaigns that reach and resonate. Social media wizard and SEO specialist.",
    },
    {
        id: 7,
        name: 'james wilson',
        job: 'intern',
        img: 'images/profile-7.jpg',
        text: "Eager to learn and grow in the tech industry. Bringing fresh ideas and enthusiasm to the team every day.",
    },
    {
        id: 8,
        name: 'mia taylor',
        job: 'ui/ux designer',
        img: 'images/profile-8.jpg',
        text: "Designing user-friendly interfaces that delight and engage users. Focused on creating seamless experiences.",
    },
    {
        id: 9,
        name: 'william clark',
        job: 'network engineer',
        img: 'images/profile-9.jpg',
        text: "Building and maintaining robust network infrastructures. Keeping systems connected and running smoothly.",
    },
];


// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//setting starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// showing person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});


// show previous person
prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', () => {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});