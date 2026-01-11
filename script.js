// ========================================
// HARD-CODED DATA FOR PORTFOLIO
// Edit this section to add/update your weeks and assignments
// ========================================

const portfolioData = {
    weeks: [
        {
            weekNumber: 1,
            date: 'Jan 5, 2026',
            topics: ['Absent'],
            learnings: 'I was absent during this week and missed the class.',
            reflections: 'Will catch up on the missed material by reviewing course notes and reaching out to classmates for updates.'
        },
        // Add more weeks here as objects in this array
        // Example:
        // {
        //     weekNumber: 2,
        //     date: 'Jan 13, 2026',
        //     topics: ['Pandas', 'Data Manipulation'],
        //     learnings: 'Explored pandas library...',
        //     reflections: 'Very useful for data handling...'
        // }
    ],
    assignments: [
        // No assignments completed yet - will be updated as I complete them
        // Add your first assignment using the format below:
        // {
        //     assignmentNumber: 1,
        //     title: 'Assignment Title',
        //     dueDate: 'Due Date',
        //     description: 'Assignment description',
        //     status: 'pending', // Options: 'pending', 'in-progress', 'completed'
        //     grade: 'Pending',
        //     overview: 'Overview of your work...',
        //     link: '' // Optional: GitHub or project link
        // }
    ]
};

// ========================================
// TAB NAVIGATION FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(tabName) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show selected tab content
        const selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        // Add active class to clicked nav link
        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Update URL hash without scrolling
        history.pushState(null, null, `#${tabName}`);
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Handle initial page load with hash
    function handleInitialHash() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            switchTab(hash);
        }
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            switchTab(hash);
        } else {
            switchTab('about');
        }
    });

    // Initialize on page load
    handleInitialHash();

    // Load portfolio content
    loadWeeks();
    loadAssignments();
});

// ========================================
// LOAD WEEKS FROM DATA
// ========================================

function loadWeeks() {
    const container = document.getElementById('learningsContainer');
    container.innerHTML = ''; // Clear existing content

    if (portfolioData.weeks.length === 0) {
        container.innerHTML = '<p style="color: #64748b; text-align: center; font-size: 1.2rem; padding: 2rem;">📚 No weeks added yet.</p>';
        return;
    }

    portfolioData.weeks.forEach(week => {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card';
        weekCard.innerHTML = `
            <div class="week-header">
                <h3>Week ${week.weekNumber}</h3>
                <span class="date">Date: ${week.date}</span>
            </div>
            <div class="week-content">
                <h4>Topics Covered:</h4>
                <ul>
                    ${week.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                <h4>Key Learnings:</h4>
                <p>${week.learnings}</p>
                <h4>Reflections:</h4>
                <p>${week.reflections}</p>
            </div>
        `;
        container.appendChild(weekCard);
    });
}

// ========================================
// LOAD ASSIGNMENTS FROM DATA
// ========================================

function loadAssignments() {
    const container = document.getElementById('assignmentsContainer');
    container.innerHTML = ''; // Clear existing content

    if (portfolioData.assignments.length === 0) {
        container.innerHTML = '<p style="text-align: center; font-size: 1.2rem; padding: 2rem; color: #64748b;">📝 No assignments added yet.</p>';
        return;
    }

    portfolioData.assignments.forEach(assignment => {
        // Status badge text
        let statusText = 'Pending';
        if (assignment.status === 'completed') statusText = 'Completed';
        else if (assignment.status === 'in-progress') statusText = 'In Progress';

        const assignmentCard = document.createElement('div');
        assignmentCard.className = 'assignment-card';
        assignmentCard.innerHTML = `
            <div class="assignment-header">
                <h3>Assignment ${assignment.assignmentNumber}</h3>
                <span class="status ${assignment.status}">${statusText}</span>
            </div>
            <div class="assignment-details">
                <p><strong>Title:</strong> ${assignment.title}</p>
                <p><strong>Due Date:</strong> ${assignment.dueDate}</p>
                <p><strong>Description:</strong> ${assignment.description}</p>
                <p><strong>Grade:</strong> ${assignment.grade}</p>
                <div class="assignment-content">
                    <h4>Overview:</h4>
                    <p>${assignment.overview}</p>
                </div>
                ${assignment.link ? `<button class="btn-view" onclick="window.open('${assignment.link}', '_blank')">View Assignment</button>` : ''}
            </div>
        `;
        container.appendChild(assignmentCard);
    });
}
