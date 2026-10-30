function bold(word) {
    return `<span class="user-input">${word}</span>`;
}
let adjective1 = prompt("Enter an adjective to describe the night.");
let name1 = prompt("Enter your name.");
let friend = prompt("Enter the name of a friend.");
let creature = prompt("Enter a spooky creature.");
let costume = prompt("Enter a Halloween costume.");
let location1 = prompt("Enter a creepy place.");
let weather = prompt("Enter a type of weather.");
let sound = prompt("Enter a spooky sound.");
let object = prompt("Enter a mysterious object.");
let color = prompt("Enter a creepy color.");
let food = prompt("Enter a Halloween food.");
let candy = prompt("Enter your favorite candy.");
let number = prompt("Enter a number.");
let emotion = prompt("Enter an emotion.");
let villain = prompt("Enter the name of a scary villain.");
let vehicle = prompt("Enter a type of vehicle.");
let adjective2 = prompt("Enter an adjective to describe a monster.");
let magicPower = prompt("Enter a supernatural power.");
let secret = prompt("Enter a strange secret.");
let ending = prompt("Enter a spooky final sentence.");

let story = `
<h2>The Mystery of Halloween Night</h2>

<p>On a ${bold(adjective1)} Halloween night, ${bold(name1)} and ${bold(friend)}
decided to explore a mysterious ${bold(location1)}. The ${bold(weather)}
made the night even creepier as they walked toward the entrance.</p>

<p>${bold(name1)} was wearing a ${bold(costume)}, while ${bold(friend)} carried
a strange ${bold(object)} that glowed ${bold(color)}. Suddenly, they heard
a loud "${bold(sound)}" coming from behind them!</p>

<p>Out of the darkness appeared a ${bold(adjective2)} ${bold(creature)}
with the supernatural power of ${bold(magicPower)}. It told them that
they had exactly ${bold(number)} minutes to escape before
${bold(villain)} arrived in a ${bold(vehicle)}.</p>

<p>Feeling ${bold(emotion)}, ${bold(name1)} and ${bold(friend)} ran through the
building. They discovered a hidden room filled with ${bold(food)}
and piles of ${bold(candy)}. But something was terribly wrong:
every piece of candy contained a message revealing a secret.</p>

<p>The secret said: "${bold(secret)}"</p>

<p>Suddenly, the lights went out. A shadow appeared at the end
of the hallway, and a terrifying voice whispered their names.</p>

<p>${bold(ending)}</p>

<img src="download.webp" class="halloween-image">

<h3>THE END... OR IS IT?</h3>
`;

let madLibOutputDiv = document.getElementById("madLibOutput");
madLibOutputDiv.innerHTML = story;



