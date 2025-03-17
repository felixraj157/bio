// Bio Data Information
const userData = {
    name: "Kevin Shanks",
    age: 19,
    email: "kevinjose.28csb@licet.ac.in",
    phone: "6385646675",
    address: "No 93 Vinayagar St, Villupuram",
    education: [
        "Bachelor of Computer Science - Loyola ICAM College of Engineering and Technology",
        "Venus Matric Hr Sec School"
    ],
    skills: ["Web Development (HTML, CSS, JS)", "Python", "Machine Learning", "Database Management"],
    experience: [
        "Real Estate Executive Team",
        "Holding ₹50K worth stock (Kalyan Jewellers)"
    ]
};

// Load Bio Data Dynamically
document.getElementById("name").textContent = userData.name;
document.getElementById("age").textContent = userData.age;
document.getElementById("email").textContent = userData.email;
document.getElementById("phone").textContent = userData.phone;
document.getElementById("address").textContent = userData.address;
document.getElementById("footer-name").textContent = userData.name;

// Function to Clear Existing List Items
function clearList(elementId) {
    const list = document.getElementById(elementId);
    list.innerHTML = ""; // Clears previous entries
}

// Function to Populate Lists
function populateList(elementId, data) {
    clearList(elementId); // Clear before adding new items
    const list = document.getElementById(elementId);
    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// Populate All Lists
populateList("education-list", userData.education);
populateList("skills-list", userData.skills);
populateList("experience-list", userData.experience);

// Animate sections on scroll
const sections = document.querySelectorAll(".slide-in");

const scrollAnimation = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.animation = "slideIn 1s forwards";
        }
    });
};

// Run Animation on Scroll
window.addEventListener("scroll", scrollAnimation);
scrollAnimation(); // Run on page load
