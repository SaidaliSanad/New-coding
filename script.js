
const projects = [
    { name: 'Project A', category: 'Web Development' },
    { name: 'Project B', category: 'Data Science' },
    { name: 'Project C', category: 'Mobile App' },
];

const displayProjects = (category) => {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = ''; 

    const filteredProjects = category === 'All'
        ? projects
        : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.textContent = project.name;

        projectsContainer.appendChild(projectCard);
    });
};
document.getElementById('filterButton').addEventListener('click', () => {
    const selectedCategory = document.getElementById('categoryDropdown').value;
    displayProjects(selectedCategory);
});

const skillData = {
    labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'React'],
    datasets: [{
        label: 'Skill Level',
        data: [90, 85, 80, 75, 70],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
    }],
};

const skillChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
        },
    },
};

const skillChartCanvas = document.getElementById('skillChart').getContext('2d');
new Chart(skillChartCanvas, {
    type: 'bar',
    data: skillData,
    options: skillChartOptions,
});


const validateForm = () => {
    const nameInput = document.getElementById('nameInput').value;
    const emailInput = document.getElementById('emailInput').value;

    if (nameInput.trim() === '' || emailInput.trim() === '') {
        alert('Name and email are required fields.');
    } else {
        alert('Form submitted successfully!');
    }
};

document.getElementById('submitForm').addEventListener('click', () => validateForm());