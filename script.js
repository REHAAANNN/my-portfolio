// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired!');
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    console.log('Nav links found:', navLinks.length);
    console.log('Tab contents found:', tabContents.length);

    // Function to switch tabs
    function switchTab(tabName) {
        console.log('Switching to tab:', tabName);
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
        console.log('Selected tab element:', selectedTab);
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
            console.log('Link clicked:', this.getAttribute('data-tab'));
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

    // Console log for debugging
    console.log('E-Portfolio loaded successfully!');
});

// Modal functionality
function openModal(title, formHTML, onSubmit) {
    const modal = document.getElementById('customModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const submitBtn = document.getElementById('modalSubmit');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = formHTML;
    modal.classList.add('active');
    
    // Remove old event listeners
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
    
    // Add new event listener
    document.getElementById('modalSubmit').addEventListener('click', onSubmit);
    
    // Focus first input
    const firstInput = modalBody.querySelector('input, textarea');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('active');
}

// Close modal on outside click
window.addEventListener('click', function(event) {
    const modal = document.getElementById('customModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Function to add a new week interactively
function addNewWeek() {
    const formHTML = `
        <div class="modal-form-group">
            <label for="weekDate">📅 Date:</label>
            <input type="text" id="weekDate" placeholder="e.g., Jan 10, 2026" required>
        </div>
        <div class="modal-form-group">
            <label for="weekTopics">📚 Topics Covered (separate with commas):</label>
            <textarea id="weekTopics" placeholder="Topic 1, Topic 2, Topic 3" required></textarea>
        </div>
        <div class="modal-form-group">
            <label for="weekLearnings">💡 Key Learnings:</label>
            <textarea id="weekLearnings" placeholder="Describe what you learned this week..." required></textarea>
        </div>
        <div class="modal-form-group">
            <label for="weekReflections">💭 Reflections:</label>
            <textarea id="weekReflections" placeholder="Share your thoughts and reflections..." required></textarea>
        </div>
    `;
    
    openModal('Add New Week', formHTML, function() {
        const date = document.getElementById('weekDate').value || 'Date TBA';
        const topicsInput = document.getElementById('weekTopics').value || 'No topics added';
        const learnings = document.getElementById('weekLearnings').value || 'Add your key learnings here';
        const reflections = document.getElementById('weekReflections').value || 'Add your reflections here';
        
        const topics = topicsInput.split(',').map(t => t.trim());
        
        const container = document.getElementById('learningsContainer');
        
        // Remove placeholder message if it exists
        const placeholder = container.querySelector('p');
        if (placeholder && placeholder.textContent.includes('Click')) {
            placeholder.remove();
        }
        
        // Get week number
        const existingWeeks = container.querySelectorAll('.week-card').length;
        const weekNumber = existingWeeks + 1;
        
        // Create week card
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card';
        weekCard.innerHTML = `
            <div class="week-header">
                <h3>Week ${weekNumber}</h3>
                <span class="date">Date: ${date}</span>
                <button class="btn-delete" onclick="this.closest('.week-card').remove()" style="background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; font-size: 0.85rem; font-weight: 600;">Delete</button>
            </div>
            <div class="week-content">
                <h4>Topics Covered:</h4>
                <ul>
                    ${topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                <h4>Key Learnings:</h4>
                <p>${learnings}</p>
                <h4>Reflections:</h4>
                <p>${reflections}</p>
            </div>
        `;
        
        container.appendChild(weekCard);
        
        // Close modal and scroll to new card
        closeModal();
        setTimeout(() => {
            weekCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    });
}

// Function to add a new assignment interactively
function addNewAssignment() {
    const formHTML = `
        <div class="modal-form-group">
            <label for="assignmentTitle">📝 Assignment Title:</label>
            <input type="text" id="assignmentTitle" placeholder="Enter assignment title" required>
        </div>
        <div class="modal-form-group">
            <label for="assignmentDueDate">📅 Due Date:</label>
            <input type="text" id="assignmentDueDate" placeholder="e.g., Jan 15, 2026" required>
        </div>
        <div class="modal-form-group">
            <label for="assignmentDescription">📋 Description:</label>
            <textarea id="assignmentDescription" placeholder="Brief description of the assignment" required></textarea>
        </div>
        <div class="modal-form-group">
            <label for="assignmentStatus">✅ Status:</label>
            <select id="assignmentStatus">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>
        <div class="modal-form-group">
            <label for="assignmentGrade">🎯 Grade:</label>
            <input type="text" id="assignmentGrade" placeholder="e.g., A+ or 95/100 (or leave empty)" >
        </div>
        <div class="modal-form-group">
            <label for="assignmentOverview">📖 Overview:</label>
            <textarea id="assignmentOverview" placeholder="Detailed overview of what you accomplished..." required></textarea>
        </div>
        <div class="modal-form-group">
            <label for="assignmentLink">🔗 Link (optional):</label>
            <input type="url" id="assignmentLink" placeholder="https://github.com/...">
        </div>
    `;
    
    openModal('Add New Assignment', formHTML, function() {
        const title = document.getElementById('assignmentTitle').value || 'Untitled Assignment';
        const dueDate = document.getElementById('assignmentDueDate').value || 'TBA';
        const description = document.getElementById('assignmentDescription').value || 'No description provided';
        const status = document.getElementById('assignmentStatus').value;
        const grade = document.getElementById('assignmentGrade').value || 'Pending';
        const overview = document.getElementById('assignmentOverview').value || 'To be updated...';
        const link = document.getElementById('assignmentLink').value || '';
        
        // Status badge text
        let statusText = 'Pending';
        if (status === 'completed') statusText = 'Completed';
        else if (status === 'in-progress') statusText = 'In Progress';
        
        const container = document.getElementById('assignmentsContainer');
        
        // Remove placeholder message if it exists
        const placeholder = container.querySelector('p');
        if (placeholder && placeholder.textContent.includes('Click')) {
            placeholder.remove();
        }
        
        // Get assignment number
        const existingAssignments = container.querySelectorAll('.assignment-card').length;
        const assignmentNumber = existingAssignments + 1;
        
        // Create assignment card
        const assignmentCard = document.createElement('div');
        assignmentCard.className = 'assignment-card';
        assignmentCard.innerHTML = `
            <div class="assignment-header">
                <h3>Assignment ${assignmentNumber}</h3>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status ${status}">${statusText}</span>
                    <button class="btn-delete" onclick="this.closest('.assignment-card').remove()" style="background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; font-size: 0.85rem; font-weight: 600;">Delete</button>
                </div>
            </div>
            <div class="assignment-details">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Due Date:</strong> ${dueDate}</p>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Grade:</strong> ${grade}</p>
                <div class="assignment-content">
                    <h4>Overview:</h4>
                    <p>${overview}</p>
                </div>
                ${link ? `<button class="btn-view" onclick="window.open('${link}', '_blank')">View Assignment</button>` : ''}
            </div>
        `;
        
        container.appendChild(assignmentCard);
        
        // Close modal and scroll to new card
        closeModal();
        setTimeout(() => {
            assignmentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    });
}

// Example usage (uncomment to test):
// addWeek(5, '2026-02-10', ['Topic 1', 'Topic 2'], 'This week we learned...', 'My reflection...');
// addAssignment(4, 'Final Project', '2026-03-15', 'Complete final project', 'Pending');
