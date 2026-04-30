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
        {
            weekNumber: 2,
            date: 'Jan 12, 2026',
            topics: ['Introduction basics', 'Instructor introduction', '1-minute self-introduction on stage', 'Opening statements and pacing'],
            learnings: 'The instructor introduced the course and shared best practices for presenting yourself. I delivered a 1-minute self-introduction on stage which gave me practical exposure to public speaking. Key takeaways: structure your opening (name → background → current focus → goal), keep a clear pace, and finish with a concise closing statement.',
            reflections: `Observed I tend to speak too quickly under pressure. Concrete improvements:\n
• Practice with a timer and aim for small pauses between sentences.\n
• Record and review short clips to monitor pacing and clarity.\n
• Prepare a 3-line elevator pitch that you can deliver confidently.\n
Action plan: rehearse my 1-minute intro 10 times this week, focusing on breathing and articulation.`
        },
        {
            weekNumber: 3,
            date: 'Jan 19, 2026',
            topics: ['Detailed self-introduction', 'Verbal & non-verbal aspects', 'Internship landscape', 'Reading job descriptions (JDs)', 'Top keywords for different roles'],
            learnings: `The instructor covered deeper elements that make introductions and resumes effective. Topics included verbal techniques (pace, tone, emphasis), non-verbal cues (posture, eye contact, gestures), and how lifestyle and project work influence internship readiness. We learned how to read JDs to extract required skills and responsibility words and how to map those to resume bullet points. I was given a list of high-impact keywords often sought by employers for internship roles.`,
            reflections: `Resume improvements:\n
• Tailor each resume bullet to include an action verb + quantifiable result when possible.\n
• Match keywords from JDs in your skills and project descriptions (but be honest).\n
• Highlight internships, projects, and tools (e.g., Pandas, NumPy, SQL).\n
Intro improvements:\n
• Structure: 1) Name + current role, 2) 1–2 relevant achievements or projects, 3) what you’re seeking (internship/role), 4) closing with career goal.\n
• Verbal: slow down, use deliberate pauses, and vary tone to emphasize key points.\n
• Non-verbal: maintain open posture, steady eye contact, and measured gestures.\n
Practical next steps:\n
1. Update top 3 resume bullets with measurable outcomes.\n+2. Create a short script for introductions and practice with video.\n+3. Make a keywords list (start with the sample below) and add 8–12 relevant keywords to your resume and LinkedIn.\n
Sample keywords (start here): data analysis, data cleaning, feature engineering, exploratory data analysis, model evaluation, machine learning, regression, classification, SQL, visualization, pandas, numpy, matplotlib, seaborn, dashboarding, ETL, data preprocessing, model deployment, cross-validation, hyperparameter tuning, statistical analysis, A/B testing, hypothesis testing, Git, Python, R, SQL, APIs, data pipelines, cloud (AWS/GCP), Docker, Tableau, PowerBI, automation, scripting, reporting, stakeholder communication, presentation, teamwork, problem solving, critical thinking, time management, agile, JIRA, requirements analysis, technical writing, testing, debugging, data governance, privacy, data quality, scalability, optimization.`
        },
        // Add more weeks here as objects in this array
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

    // Create a wrapper so we can control spacing and transitions
    const wrapper = document.createElement('div');
    wrapper.className = 'weeks-wrapper';

    portfolioData.weeks.forEach((week, index) => {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card';

        // Use innerHTML so reflections can include line breaks and simple formatting
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
                <h4>Reflections & Improvements:</h4>
                <div class="reflections">${week.reflections.replace(/\n/g, '<br>')}</div>
            </div>
        `;

        // Add Next button if there is a following week
        const controls = document.createElement('div');
        controls.className = 'week-controls';
        if (index < portfolioData.weeks.length - 1) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn-next';
            nextBtn.textContent = 'Next →';
            nextBtn.addEventListener('click', () => {
                const nextCard = wrapper.children[index + 1];
                if (nextCard) {
                    // Add slide-in animation
                    nextCard.classList.add('slide-in');
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Emphasize briefly
                    nextCard.classList.add('highlight');
                    setTimeout(() => {
                        nextCard.classList.remove('highlight');
                    }, 900);
                    // Remove slide-in after animation completes
                    setTimeout(() => nextCard.classList.remove('slide-in'), 900);
                }
            });
            controls.appendChild(nextBtn);
        }

        weekCard.appendChild(controls);
        wrapper.appendChild(weekCard);
    });

    container.appendChild(wrapper);
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
