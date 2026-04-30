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
1. Update top 3 resume bullets with measurable outcomes.\n
2. Create a short script for introductions and practice with video.\n
3. Make a keywords list (start with the sample below) and add 8–12 relevant keywords to your resume and LinkedIn.\n
Sample keywords (start here): data analysis, data cleaning, feature engineering, exploratory data analysis, model evaluation, machine learning, regression, classification, SQL, visualization, pandas, numpy, matplotlib, seaborn, dashboarding, ETL, data preprocessing, model deployment, cross-validation, hyperparameter tuning, statistical analysis, A/B testing, hypothesis testing, Git, Python, R, SQL, APIs, data pipelines, cloud (AWS/GCP), Docker, Tableau, PowerBI, automation, scripting, reporting, stakeholder communication, presentation, teamwork, problem solving, critical thinking, time management, agile, JIRA, requirements analysis, technical writing, testing, debugging, data governance, privacy, data quality, scalability, optimization.`
        },
        {
            weekNumber: 4,
            date: 'Feb 2, 2026',
            topics: ['Self-introduction practice', 'Peer presentations on stage', 'Observing different speaking styles', 'Live delivery and handling pauses'],
            learnings: `The instructor conducted a practical session where each student presented their self-introduction on stage one by one. This was a valuable opportunity to observe different presentation styles, strengths, and areas for improvement across the batch. I noticed how different people structured their openings, used vocal variety, managed hand gestures, and handled pauses. When I delivered my introduction, I was relatively calm and composed compared to the first attempt, but I encountered brief pauses (3-4 seconds) between key points where I seemed to lose momentum.`,
            reflections: `Key takeaways from this session:\n
• I managed my nervousness better this time, which shows progress in comfort with public speaking.\n
• The pauses I experienced were likely due to not having a clear mental transition between topics in my script.\n
Improvements needed:\n
1. Create a tighter narrative flow: map out exactly what I'll say before each pause point so I don't stumble.\n
2. Practice with a timer and record myself to identify and eliminate dead air.\n
3. Prepare 2–3 fallback phrases for natural transitions (e.g., "Moving to my skills..." or "To summarize...").\n
4. Study the best presenters from today: note their pacing, tone shifts, and how they bridge between ideas.\n
5. Refine clarity: speak a bit slower and enunciate key accomplishments and goals.\n
Next action: record a video of my updated 1-minute intro focusing on smooth transitions and eliminate any verbal fillers or pauses.`
        },
        {
            weekNumber: 5,
            date: 'Feb 9, 2026',
            topics: ['Student self-introductions continued', 'Resume optimization'],
            learnings: `More students presented their self-introductions on stage. The instructor covered resume building, emphasizing structure, formatting, and tailoring for internship positions.`,
            reflections: `Resume key points:\n
1. Structure: Contact info, summary, education, experience, projects, skills.\n
2. Tailor for each role using JD keywords.\n
3. Quantify results with metrics (e.g., "reduced processing time by 30%").\n
Action: Update resume with measurable outcomes from projects and internship.`
        },
        {
            weekNumber: 6,
            date: 'Feb 16, 2026',
            topics: ['Absent'],
            learnings: 'I was absent this week due to a sports event.',
            reflections: 'Will catch up with notes and recordings from classmates regarding course material.'
        },
        {
            weekNumber: 7,
            date: 'Mar 9, 2026',
            topics: ['Essay writing fundamentals', 'Importance and benefits of essay writing', 'Critical thinking and communication', 'Essay structure and approach', 'Types of essay', 'Characteristics of good essay'],
            learnings: `The instructor introduced a new unit on essay writing. We learned about the importance and benefits of essay writing in developing multiple skills: critical thinking, communication, subject knowledge depth, and professional credibility. The session covered a structured approach to essay writing: (1) Understand the topic thoroughly, (2) Brainstorm and organize ideas, (3) Plan the essay structure. We also studied different types of essays (descriptive, narrative, expository, persuasive, analytical) and the characteristics that make an essay effective (clarity, coherence, proper grammar, strong thesis, evidence-based arguments).`,
            reflections: `Key takeaways:\n
1. Essay writing is not just an academic exercise—it develops critical thinking and professional communication skills.\n
2. Benefits of essay writing:\n
   • Enhances analytical and problem-solving abilities\n
   • Improves written communication clarity and structure\n
   • Deepens subject knowledge through research and organization\n
   • Builds professional credibility in reports and proposals\n
3. Structured approach to essay writing:\n
   Step 1: Understand the topic - break it down, identify key questions\n
   Step 2: Brainstorm ideas - gather thoughts, research, examples, evidence\n
   Step 3: Structure - outline with introduction, body (3-5 paragraphs), conclusion\n
4. Types of essays and when to use them:\n
   • Descriptive: paint a picture with vivid details\n
   • Narrative: tell a story with chronological flow\n
   • Expository: explain a concept or process\n
   • Persuasive: argue a point with evidence\n
   • Analytical: examine and interpret data or literature\n
5. Characteristics of a good essay:\n
   • Clear and concise thesis statement\n
   • Well-organized paragraphs with topic sentences\n
   • Evidence-based arguments with citations\n
   • Smooth transitions between ideas\n
   • Professional tone and grammar\n
Next action: Practice writing a short expository essay (500 words) on a topic relevant to data science to apply these principles.`
        },
        {
            weekNumber: 8,
            date: 'Mar 16, 2026',
            topics: ['Group essay activity', 'Collaborative essay selection', 'Essay presentation and review', 'Multi-perspective essay approaches'],
            learnings: `The instructor organized a group activity where students were divided into groups. Each group received 5 identical topics, and every student had to write a brief essay on all topics. Groups then reviewed all submissions and selected their 4 best essays to present in front of the class. During presentations, each group showcased their selected essays, and the faculty provided constructive feedback and critiques. I observed diverse approaches to the same topics—some essays were narrative-driven, others were analytical, and some took persuasive angles. This highlighted how different writing styles and perspectives can address the same subject effectively.`,
            reflections: `Key learnings from the group activity:\n
1. Multiple approaches are valid: The same topic can be written as narrative, analytical, persuasive, or descriptive—each has merit depending on the context.\n
2. Collaborative selection improves quality: Group discussion helped identify the strongest essays with better structure, clarity, and argumentation.\n
3. Peer review is valuable: Hearing feedback from faculty on different essays showed common mistakes (weak thesis, poor organization, lack of evidence) and strengths (compelling opening, smooth transitions).\n
4. Presentation skills matter: Representing my essay in front of everyone helped me practice public speaking while showcasing my writing.\n
Observations from other groups:\n
• Some groups prioritized storytelling for engagement; others focused on analytical depth.\n
• Best essays had clear thesis statements, well-developed body paragraphs with examples, and strong conclusions.\n
• Weaker essays lacked structure or evidence to support claims.\n
Personal action items:\n
1. Review faculty feedback on the essays presented—note common patterns in good vs. weak writing.\n
2. Rewrite my selected essay incorporating feedback to improve clarity and structure.\n
3. Practice presenting essays with better pacing and emphasis on key points.`
        },
        {
            weekNumber: 9,
            date: 'Mar 23, 2026',
            topics: ['No class - Placement drive'],
            learnings: 'No class conducted this week. Most students were at the convention center attending a placement drive organized by Infosys.',
            reflections: 'This was an opportunity for students to explore internship and placement opportunities with a leading IT company.'
        },
        {
            weekNumber: 10,
            date: 'Mar 30, 2026',
            topics: ['Interview preparation', 'Interview do\'s and don\'ts', 'Common difficult interview questions', 'Group activity - Q&A exchange'],
            learnings: `The instructor covered the fundamentals of interviews: dos and don'ts that can make or break your performance. We learned about maintaining professionalism, body language, handling difficult questions, time management, and follow-up etiquette. Then, an interactive group activity took place where students were divided into groups. Each group was tasked with researching and compiling 5 of the hardest or most common interview questions they believed were critical for candidates to prepare for. Groups then shared their questions with other groups, and each group provided their own answers to questions from other groups. This revealed that the same question can have multiple valid approaches depending on perspective and experience.`,
            reflections: `Interview fundamentals covered:\n
Do's:\n
• Arrive 10-15 minutes early and research the company.\n
• Maintain eye contact and confident body language (shoulders back, hands visible).\n
• Listen carefully before answering; pause and think if needed.\n
• Use the STAR method for behavioral questions (Situation, Task, Action, Result).\n
• Ask thoughtful questions about the role and company.\n
• Send a thank-you message after the interview.\n
Don'ts:\n
• Don't speak negatively about previous employers or colleagues.\n
• Don't use filler words ("um," "like," "you know") excessively.\n
• Don't interrupt or dominate the conversation.\n
• Don't check your phone or appear disinterested.\n
• Don't lie or exaggerate qualifications.\n
Key insights from group activity:\n
1. Different groups identified varied "hardest" questions, showing the diversity of interview styles.\n
2. Multiple correct answers exist for the same question—interviewers often evaluate thought process more than the exact answer.\n
3. Groups' answers ranged from technical depth to more narrative/experience-based responses.\n

Personal action items:\n
1. Practice STAR method responses for 5-10 common behavioral questions.\n
2. Research companies thoroughly before interviews and prepare 2-3 genuine questions.\n
3. Record mock interviews with peers to review body language and filler words.\n
4. Prepare a concise 2-minute "Tell me about yourself" pitch specific to data science/internships.`
        },
        {
            weekNumber: 11,
            date: 'Apr 6, 2026',
            topics: ['One-on-one interview practice', 'Observing peer interviews', 'Tricky interview questions', 'Core stories for interviews'],
            learnings: `The instructor conducted one-on-one mock interviews with students. Although I didn't get a chance to participate in a one-on-one interview myself, I observed other students being interviewed and heard the tricky questions posed by the instructor. This gave me insights into how different candidates approach difficult questions and where they struggle. The instructor emphasized the importance of preparing 4 core stories that are universally useful in interviews: (1) An achievement/success story showing results, (2) A failure story demonstrating resilience and learning, (3) A leadership story showing initiative and influence, (4) A team conflict resolution story showing collaboration and problem-solving.`,
            reflections: `Key observations from observing interviews:\n
• Candidates who had prepared stories answered more confidently and provided structured answers.\n
• Some candidates rambled or went off-topic when asked tricky questions.\n
• Best performers used concrete examples with numbers and specific outcomes.\n
The 4 core stories to prepare:\n
1. Achievement Story:\n
   - Focus on a project or accomplishment with measurable results.\n
   - Highlight your role, skills used, and impact.\n
   - Example structure: Challenge → Your approach → Actions taken → Results\n
2. Failure Story:\n
   - Choose a failure you learned from (not a major mistake).\n
   - Emphasize what you learned and how you improved.\n
   - Shows humility, growth mindset, and resilience.\n
3. Leadership Story:\n
   - Demonstrate initiative, influence, or mentorship.\n
   - Can be formal (project lead) or informal (helping a peer).\n
   - Show how you motivated or guided others toward a goal.\n
4. Team Conflict Story:\n
   - Describe a disagreement or challenge while working in a team.\n
   - Focus on your approach to resolve it collaboratively.\n
   - Highlight listening, empathy, and compromise.\n
Personal action items:\n
1. Write out these 4 core stories in 2-3 minutes each using the STAR format.\n
2. Practice delivering each story until it sounds natural (not memorized).\n
3. Have someone review these stories and provide feedback on clarity and impact.\n
4. Prepare a 1-minute version and a full 3-minute version of each story for flexibility in interviews.`
        },
        {
            weekNumber: 12,
            date: 'Apr 13, 2026',
            topics: ['Group discussion (GD) fundamentals', 'GD tips and techniques', 'Live group discussion on stage', 'Topic: Gig economy - opportunity or exploitation'],
            learnings: `The instructor covered the basics of group discussions and shared key tips for effective participation. Selected students were then asked to participate in a live group discussion on stage. I was one of the participants in a 25-minute fruitful discussion on the topic: "Gig economy - opportunity or exploitation?" This was an opportunity to apply GD skills in real-time with peers, observe how others approach group discussions, and engage in a substantive debate on a contemporary topic.`,
            reflections: `GD tips covered by instructor:\n
1. Listen actively: Don't just wait for your turn to speak; genuinely listen to others' points.\n
2. Be respectful: Disagree with ideas, not people. Maintain a professional tone.\n
3. Speak clearly and confidently: Avoid fillers and hesitation; make your points concisely.\n
4. Add value: Don't repeat what others said; build on ideas or introduce new perspectives.\n
5. Manage time: Be mindful of time limits and allow others to speak.\n
6. Body language: Maintain eye contact, open posture, and show engagement.\n
7. Handle disagreement gracefully: If someone disagrees, acknowledge their point before clarifying yours.\n
8. Ask clarifying questions: Shows interest and critical thinking.\n
Key insights from the GD on "Gig economy - opportunity or exploitation":\n
• Opportunities: flexibility, independence, lower barriers to entry, supplementary income.\n
• Concerns: job insecurity, lack of benefits, income volatility, worker exploitation.\n
• Nuanced view: The reality depends on individual circumstances, company practices, and regulations.\n
Personal observations:\n
• I participated actively by contributing balanced viewpoints and acknowledging diverse perspectives.\n
• Some participants were more vocal; others were thoughtful but hesitant.\n
• The best participants cited examples and data to support their points.\n
• Managing emotions when discussing sensitive topics (labor rights) is important.\n
Personal action items:\n
1. Record or reflect on my GD participation and identify areas for improvement (clarity, conciseness, engagement).\n
2. Read more about current topics (gig economy, AI, climate change, education) for future GDs.\n
3. Practice speaking in discussions more frequently to build confidence.\n
4. Learn to balance assertiveness with respect—hold opinions but remain open to others.`
        },
        {
            weekNumber: 13,
            date: 'Apr 27, 2026',
            topics: ['Absent'],
            learnings: 'I was absent this week due to personal matters.',
            reflections: 'I heard from classmates that the group discussion session continued with more students participating. Will catch up with notes and recordings from peers on the ongoing GD topics and feedback.'
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

    // Wrapper to hold single-visible cards
    const wrapper = document.createElement('div');
    wrapper.className = 'weeks-wrapper';

    // Build cards
    portfolioData.weeks.forEach((week) => {
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
                <h4>Reflections & Improvements:</h4>
                <div class="reflections">${week.reflections.replace(/\n/g, '<br>')}</div>
            </div>
        `;

        // Controls (Prev + Next) inside each card
        const controls = document.createElement('div');
        controls.className = 'week-controls';
        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn-prev';
        prevBtn.textContent = '← Prev';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-next';
        nextBtn.textContent = 'Next →';

        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);
        weekCard.appendChild(controls);

        wrapper.appendChild(weekCard);
    });

    container.appendChild(wrapper);

    // Carousel logic: show one card at a time
    const cards = Array.from(wrapper.querySelectorAll('.week-card'));
    let current = 0;

    function show(index, direction = 'next') {
        if (index < 0) index = 0;
        if (index >= cards.length) index = cards.length - 1;
        cards.forEach((c, i) => {
            c.classList.remove('visible', 'slide-in', 'slide-out', 'highlight');
            c.style.display = 'none';
        });

        const target = cards[index];
        if (!target) return;
        // display then animate
        target.style.display = '';
        target.classList.add('visible', 'slide-in', 'highlight');
        setTimeout(() => target.classList.remove('highlight'), 900);
        // cleanup slide-in after animation
        setTimeout(() => target.classList.remove('slide-in'), 700);
        current = index;

        // enable/disable prev/next buttons
        cards.forEach((c, i) => {
            const prev = c.querySelector('.btn-prev');
            const next = c.querySelector('.btn-next');
            if (prev) prev.disabled = (i === 0);
            if (next) next.disabled = (i === cards.length - 1);
        });
    }

    // Attach event listeners to controls
    cards.forEach((c, i) => {
        const prev = c.querySelector('.btn-prev');
        const next = c.querySelector('.btn-next');
        if (prev) prev.addEventListener('click', () => show(i - 1, 'prev'));
        if (next) next.addEventListener('click', () => show(i + 1, 'next'));
    });

    // show first card
    show(0);
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
