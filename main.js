const categories = [
    { "id": 1, "category": "Christmas Songs", "difficulty": "easy", "type": "entertainment" },
    { "id": 2, "category": "Fast food restaurants", "difficulty": "easy", "type": "food" },
    { "id": 3, "category": "Card games", "difficulty": "medium", "type": "games" },
    { "id": 4, "category": "Languages", "difficulty": "medium", "type": "geography" },
    { "id": 5, "category": "Brands of Cars", "difficulty": "easy", "type": "brands" },
    { "id": 6, "category": "College Majors", "difficulty": "medium", "type": "education" },
    { "id": 7, "category": "Airlines", "difficulty": "medium", "type": "brands" },
    { "id": 8, "category": "Ways to Say Hello in Different Languages", "difficulty": "hard", "type": "culture" },
    { "id": 9, "category": "US Capitals", "difficulty": "hard", "type": "geography" },
    { "id": 10, "category": "Female Rappers", "difficulty": "medium", "type": "celebrities" },
    { "id": 11, "category": "Male Rappers", "difficulty": "medium", "type": "celebrities" },
    { "id": 12, "category": "Entertainment Titles Named After Main Characters", "difficulty": "medium", "type": "entertainment" },
    { "id": 13, "category": "Singers Who Act", "difficulty": "medium", "type": "celebrities" },
    { "id": 14, "category": "Broadway Plays and Musicals", "difficulty": "hard", "type": "entertainment" },
    { "id": 15, "category": "Disney Princesses", "difficulty": "easy", "type": "entertainment" },
    { "id": 16, "category": "Disney Villains", "difficulty": "easy", "type": "entertainment" },
    { "id": 17, "category": "Shonda Rhimes Shows", "difficulty": "medium", "type": "entertainment" },
    { "id": 18, "category": "Books Adapted into Movies", "difficulty": "medium", "type": "entertainment" },
    { "id": 19, "category": "NFL Teams", "difficulty": "medium", "type": "sports" },
    { "id": 20, "category": "NBA Teams", "difficulty": "medium", "type": "sports" },
    { "id": 21, "category": "MBA Teams", "difficulty": "medium", "type": "sports" },
    { "id": 22, "category": "US Presidents", "difficulty": "hard", "type": "politics" },
    { "id": 23, "category": "Beyoncé Songs", "difficulty": "medium", "type": "entertainment" },
    { "id": 24, "category": "Michael Jackson Songs", "difficulty": "medium", "type": "entertainment" },
    { "id": 25, "category": "Iconic Duos or Trios", "difficulty": "medium", "type": "celebrities" },
    { "id": 26, "category": "Celebrities Known by One Name", "difficulty": "medium", "type": "celebrities" },
    { "id": 27, "category": "Musical Instruments", "difficulty": "medium", "type": "music" },
    { "id": 28, "category": "Songs by Drake", "difficulty": "medium", "type": "entertainment" },
    { "id": 29, "category": "Human Cartoon Characters", "difficulty": "medium", "type": "entertainment" },
    { "id": 30, "category": "Animal Cartoon Characters", "difficulty": "medium", "type": "entertainment" },
    { "id": 31, "category": "Black Cartoon Characters", "difficulty": "medium", "type": "entertainment" },
    { "id": 32, "category": "Songs by Lil Wayne", "difficulty": "medium", "type": "entertainment" },
    { "id": 33, "category": "Disney Channel Shows and Movies", "difficulty": "easy", "type": "entertainment" },
    { "id": 34, "category": "R&B Singers", "difficulty": "medium", "type": "music" },
    { "id": 35, "category": "National Holidays", "difficulty": "medium", "type": "culture" },
    { "id": 36, "category": "Books in the Bible", "difficulty": "hard", "type": "religion" },
    { "id": 37, "category": "Popular American Cities", "difficulty": "easy", "type": "geography" },
    { "id": 38, "category": "Movies, Songs, or Artists Starting with (LETTER)", "difficulty": "medium", "type": "entertainment" },
    { "id": 39, "category": "Cocktails", "difficulty": "medium", "type": "food" },
    { "id": 40, "category": "US States", "difficulty": "easy", "type": "geography" },
    { "id": 41, "category": "Countries", "difficulty": "medium", "type": "geography" },
    { "id": 42, "category": "Fruits and Vegetables", "difficulty": "easy", "type": "food" },
    { "id": 43, "category": "Animals in the Sea", "difficulty": "medium", "type": "nature" },
    { "id": 44, "category": "Colors", "difficulty": "easy", "type": "general" },
    { "id": 45, "category": "African Countries", "difficulty": "medium", "type": "geography" },
    { "id": 46, "category": "Classic Black Movies", "difficulty": "medium", "type": "entertainment" },
    { "id": 47, "category": "Soul Food Dishes", "difficulty": "medium", "type": "food" },
    { "id": 48, "category": "Famous Landmarks", "difficulty": "medium", "type": "geography" },
    { "id": 49, "category": "Dance Moves", "difficulty": "medium", "type": "culture" },
    { "id": 50, "category": "Famous Black Comedians", "difficulty": "medium", "type": "celebrities" },
    { "id": 51, "category": "Types of Pasta", "difficulty": "medium", "type": "food" },
    { "id": 52, "category": "Pizza Toppings", "difficulty": "easy", "type": "food" },
    { "id": 53, "category": "Streaming Platforms", "difficulty": "easy", "type": "entertainment" },
    { "id": 54, "category": "Famous Chefs", "difficulty": "medium", "type": "food" },
    { "id": 55, "category": "Reality TV Shows", "difficulty": "medium", "type": "entertainment" },
    { "id": 56, "category": "Soda Brands", "difficulty": "easy", "type": "brands" },
    { "id": 57, "category": "Candy (Non-Chocolate)", "difficulty": "medium", "type": "food" },
    { "id": 58, "category": "Famous Black Authors", "difficulty": "medium", "type": "literature" },
    { "id": 59, "category": "Dog Breeds", "difficulty": "medium", "type": "nature" },
    { "id": 60, "category": "Ice Cream Flavors", "difficulty": "easy", "type": "food" },
    { "id": 61, "category": "Names of Dinosaurs", "difficulty": "hard", "type": "nature" },
    { "id": 62, "category": "Spices and Seasonings", "difficulty": "medium", "type": "food" },
    { "id": 63, "category": "TV Shows with Black Leads", "difficulty": "medium", "type": "entertainment" },
    { "id": 64, "category": "Black TV Hosts or Anchors", "difficulty": "medium", "type": "celebrities" },
    { "id": 65, "category": "Items in a Bathroom", "difficulty": "easy", "type": "general" },
    { "id": 66, "category": "Airport Codes", "difficulty": "hard", "type": "travel" },
    { "id": 67, "category": "Foods You Eat With Your Hands", "difficulty": "easy", "type": "food" },
    { "id": 68, "category": "Planets in the Solar System", "difficulty": "medium", "type": "science" },
    { "id": 69, "category": "Periodic Table Elements", "difficulty": "hard", "type": "science" },
    { "id": 70, "category": "US Vice Presidents", "difficulty": "hard", "type": "politics" },
    { "id": 71, "category": "Super Bowl Winners", "difficulty": "hard", "type": "sports" },
    { "id": 72, "category": "US States Starting with 'M'", "difficulty": "medium", "type": "geography" },
    { "id": 73, "category": "States Starting with 'New'", "difficulty": "easy", "type": "geography" },
    { "id": 74, "category": "Spanish-Speaking Countries", "difficulty": "medium", "type": "geography" },
    { "id": 75, "category": "Classic Black Movies", "difficulty": "medium", "type": "entertainment" },
    { "id": 76, "category": "Gospel Songs", "difficulty": "medium", "type": "music" },
    { "id": 77, "category": "Chocolate Candy", "difficulty": "easy", "type": "food" },
    { "id": 78, "category": "Board Games", "difficulty": "easy", "type": "games" },
    { "id": 79, "category": "Cartoons from the '90s", "difficulty": "medium", "type": "entertainment" },
    { "id": 80, "category": "Superheroes", "difficulty": "medium", "type": "entertainment" },
    { "id": 81, "category": "Villains", "difficulty": "medium", "type": "entertainment" },
    { "id": 82, "category": "Breakfast Foods", "difficulty": "easy", "type": "food" },
    { "id": 83, "category": "Clothing Brands", "difficulty": "easy", "type": "brands" },
    { "id": 84, "category": "Things You’d Find in a Kitchen", "difficulty": "easy", "type": "general" },
    { "id": 85, "category": "Famous Landmarks", "difficulty": "medium", "type": "geography" },
    { "id": 86, "category": "Dance Moves", "difficulty": "medium", "type": "culture" },
    { "id": 87, "category": "Famous Black Comedians", "difficulty": "medium", "type": "celebrities" },
    { "id": 88, "category": "Popular Cities in America", "difficulty": "easy", "type": "geography" },
    { "id": 89, "category": "Movies That Begin with (LETTER)", "difficulty": "medium", "type": "entertainment" },
    { "id": 90, "category": "Songs That Begin with (LETTER)", "difficulty": "medium", "type": "music" },
    { "id": 91, "category": "Musicians That Begin with (LETTER)", "difficulty": "medium", "type": "music" },
    { "id": 92, "category": "Black Sitcoms", "difficulty": "medium", "type": "entertainment" },
    { "id": 93, "category": "Soul Food Dishes", "difficulty": "medium", "type": "food" },
    { "id": 94, "category": "States", "difficulty": "easy", "type": "geography" },
    { "id": 95, "category": "Countries", "difficulty": "easy", "type": "geography" },
    { "id": 96, "category": "Books in the Bible", "difficulty": "medium", "type": "religion" },
    { "id": 97, "category": "Characters in the Bible", "difficulty": "easy", "type": "religion" },
    { "id": 98, "category": "Jesus' Disciples", "difficulty": "medium", "type": "religion" },
    { "id": 99, "category": "Ten Commandments", "difficulty": "easy", "type": "religion" },
    { "id": 100, "category": "Women in the Bible", "difficulty": "hard", "type": "religion" },
    { "id": 101, "category": "Horror Movies", "difficulty": "hard", "type": "entertainment" },
    { "id": 102, "category": "Wars and Conflicts", "difficulty": "hard", "type": "history" },
    { "id": 103, "category": "Ivy League Schools", "difficulty": "hard", "type": "education" },
    { "id": 104, "category": "Shakespeare Plays", "difficulty": "hard", "type": "entertainment" },
    { "id": 105, "category": "Nobel Prize Winners", "difficulty": "hard", "type": "history" },
    { "id": 106, "category": "State Birds", "difficulty": "hard", "type": "geography" },
    { "id": 107, "category": "European Capitals", "difficulty": "hard", "type": "geography" },
    { "id": 108, "category": "Olympic Sports", "difficulty": "hard", "type": "sports" },
    { "id": 109, "category": "National Parks in the US", "difficulty": "hard", "type": "geography" },
    { "id": 110, "category": "US Supreme Court Justices", "difficulty": "hard", "type": "politics" },
    { "id": 111, "category": "Safari Animals", "difficulty": "medium", "type": "nature" },
    { "id": 112, "category": "Animals", "difficulty": "easy", "type": "nature" },
    { "id": 113, "category": "Insect", "difficulty": "medium", "type": "nature" },
    { "id": 114, "category": "Types of Salads", "difficulty": "medium", "type": "food" },
    { "id": 115, "category": "Condiments", "difficulty": "easy", "type": "food" },
    { "id": 116, "category": "Sandwich Toppings", "difficulty": "easy", "type": "food" },
    { "id": 117, "category": "Wayans Brothers", "difficulty": "hard", "type": "entertainment" },
    { "id": 118, "category": "Michael Jackson's Siblings", "difficulty": "hard", "type": "entertainment" },
    { "id": 119, "category": "Late Night Hosts", "difficulty": "hard", "type": "entertainment" },
    { "id": 120, "category": "Makeup Brands", "difficulty": "medium", "type": "brands" },
    { "id": 121, "category": "Continents", "difficulty": "easy", "type": "geography" },
    { "id": 122, "category": "Board Games", "difficulty": "easy", "type": "games" },
    { "id": 123, "category": "Video Games", "difficulty": "easy", "type": "games" },
    { "id": 124, "category": "Farm Animals", "difficulty": "easy", "type": "nature" },
    { "id": 125, "category": "Burger Toppings", "difficulty": "easy", "type": "food" },
    { "id": 126, "category": "Found at a taco bar", "difficulty": "easy", "type": "food" },
    { "id": 127, "category": "School Subjects", "difficulty": "easy", "type": "education" },
    { "id": 128, "category": "Banks", "difficulty": "hard", "type": "general" },
    { "id": 129, "category": "Candy Bars", "difficulty": "easy", "type": "food" },
    { "id": 130, "category": "Types of Pasta", "difficulty": "easy", "type": "food" },
    { "id": 131, "category": "Types of Bread", "difficulty": "easy", "type": "food" },
    { "id": 132, "category": "Types of Cheese", "difficulty": "easy", "type": "food" },
    { "id": 133, "category": "Types of Rice", "difficulty": "easy", "type": "food" },
    { "id": 134, "category": "Types of Nuts", "difficulty": "easy", "type": "food" },
    { "id": 135, "category": "Types of Beans", "difficulty": "easy", "type": "food" },
    { "id": 136, "category": "Types of Tea", "difficulty": "easy", "type": "food" },
    { "id": 137, "category": "Types of Coffee", "difficulty": "easy", "type": "food" },
    { "id": 138, "category": "Types of Wine", "difficulty": "easy", "type": "food" },
    { "id": 139, "category": "Types of Beer", "difficulty": "easy", "type": "food" },
    { "id": 140, "category": "Types of Liquor", "difficulty": "easy", "type": "food" },
    { "id": 141, "category": "Types of Cocktails", "difficulty": "easy", "type": "food" },
    { "id": 142, "category": "Types of Juice", "difficulty": "easy", "type": "food" },
    { "id": 143, "category": "Types of Soda", "difficulty": "easy", "type": "food" },
    { "id": 144, "category": "Types of Ice Cream", "difficulty": "easy", "type": "food" },
    { "id": 145, "category": "Types of Cake", "difficulty": "easy", "type": "food" },
    { "id": 146, "category": "Household Chores", "difficulty": "easy", "type": "general" },
    { "id": 147, "category": "Office Supplies", "difficulty": "easy", "type": "general" },
    { "id": 148, "category": "School Supplies", "difficulty": "easy", "type": "general" },
    { "id": 149, "category": "Types of Furniture", "difficulty": "easy", "type": "general" },
    { "id": 150, "category": "Kitchen Utensils", "difficulty": "easy", "type": "general" },
    { "id": 151, "category": "Cleaning Supplies", "difficulty": "easy", "type": "general" },
    { "id": 152, "category": "Tools", "difficulty": "easy", "type": "general" },
    { "id": 153, "category": "Gardening Tools", "difficulty": "easy", "type": "general" },
    { "id": 154, "category": "Types of Vehicles", "difficulty": "easy", "type": "general" },
    { "id": 155, "category": "Electronic Devices", "difficulty": "easy", "type": "technology" },
    { "id": 156, "category": "Software Languages", "difficulty": "easy", "type": "technology" },
    { "id": 157, "category": "Boyz II Men Songs", "difficulty": "medium", "type": "entertainment" },
    { "id": 158, "category": "Streaming Apps", "difficulty": "easy", "type": "technology" },
    { "id": 159, "category": "Social Media Platforms", "difficulty": "easy", "type": "technology" },
    { "id": 160, "category": "Shades of (COLOR)", "difficulty": "easy", "type": "general" },
    
];

const newCardBtn = document.getElementById("new-card-btn");
const startTimerBtn = document.getElementById("start-timer-btn");

let timeLeft = 30 * 1000;

const drawCard = (categories) => {
    timeLeft = 30 * 1000;
    document.getElementById("card").classList.remove("flash");

    const categoryList = document.getElementById("card");
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    let formattedCategory = randomCategory.category;
    if (formattedCategory.includes("(LETTER)")) {
        formattedCategory = formattedCategory.replace("(LETTER)", letterChooser());
    }

    if (formattedCategory.includes("(COLOR)")) {}
        formattedCategory = formattedCategory.replace("(COLOR)", colorChooser());

    const cardHtml = `
        <div class="card">
            <div class="card-difficulty ${randomCategory.difficulty}">${randomCategory.difficulty}</div>
            <div class="card-category">${formattedCategory}</div>
            <div class="card-type">${randomCategory.type}</div>
        </div>`;

        categoryList.innerHTML = cardHtml;

    }

const letterChooser = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return randomLetter;
}

const colorChooser = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}


const startTimer = () => {
    const timerElement = document.getElementById("timer");

    const intervalId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            timerElement.innerHTML = "00:00:00";
            document.getElementById("card").classList.add("flash");

            return;
        }

        timeLeft -= 10;

        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        const milliseconds = Math.floor((timeLeft % 1000) / 10);

        timerElement.innerHTML = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    }, 10);
};

const pad = (num) => {
    return num < 10 ? "0" + num : num;
};


const init = () => {
    drawCard(categories);

    newCardBtn.addEventListener("click", () => drawCard(categories));
    startTimerBtn.addEventListener("click", () => startTimer());
}

init();