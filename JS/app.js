class Star {
    constructor(name, age, color, galaxy, distance) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.galaxy = galaxy;
        this.distance = distance;
    }

    toHtml() {
        return `
            <div class="star">
                <h2>Name: ${this.name}</h2>
                <p>Age: ${this.age}</p>
                <p>Color: ${this.color}</p>
                <p>Galaxy: ${this.galaxy}</p>
                <p>Distance: ${this.distance}</p>
            </div>
        `;
    }
}

const stars = [
    new Star("45IR1", 690000, "#F4F6F4", "Andromeda", 100054),
    new Star("45IR2", 680000, "#F4F5F4", "Andromeda", 100353),
    new Star("45IR3", 670000, "#F4F4F4", "Andromeda", 100454),
    new Star("45IR4", 660000, "#F4F3F4", "Andromeda", 100554),
    new Star("45IR5", 650000, "#F4F2F4", "Andromeda", 100654),
    new Star("45IR6", 640000, "#F4F1F4", "Andromeda", 100754),
    new Star("45IR7", 630000, "#F4F0F4", "Andromeda", 100854),
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container__01');

    for (const star of stars) {
        const starElement = document.createElement('div');
        starElement.classList.add('star');
        starElement.innerHTML = `
            <h2>Name: ${star.name}</h2>
            <p>Age: ${star.age}</p>
            <p>Color: ${star.color}</p>
            <p>Galaxy: ${star.galaxy}</p>
            <p>Distance: ${star.distance}</p>
        `;
        container.appendChild(starElement);
    }
});