# E-Portfolio Setup Instructions

## Adding the Background Image

1. Save the laptop image you provided as `background.jpg` in the EPortfolio folder
2. The Weekly Learnings section will automatically use it as the background

## How to Add Weekly Learnings

Copy and paste this template for each week:

```html
<div class="week-card">
    <div class="week-header">
        <h3>Week [Number]</h3>
        <span class="date">Date: [Add Date]</span>
    </div>
    <div class="week-content">
        <h4>Topics Covered:</h4>
        <ul>
            <li>[Topic 1]</li>
            <li>[Topic 2]</li>
            <li>[Topic 3]</li>
        </ul>
        <h4>Key Learnings:</h4>
        <p>[Describe what you learned this week]</p>
        <h4>Reflections:</h4>
        <p>[Share your thoughts and reflections]</p>
    </div>
</div>
```

## How to Add Assignments

Copy and paste this template for each assignment:

```html
<div class="assignment-card">
    <div class="assignment-header">
        <h3>Assignment [Number]</h3>
        <span class="status pending">Pending</span>
        <!-- Status options: completed, in-progress, pending -->
    </div>
    <div class="assignment-details">
        <p><strong>Title:</strong> [Assignment Title]</p>
        <p><strong>Due Date:</strong> [Date]</p>
        <p><strong>Description:</strong> [Description]</p>
        <p><strong>Grade:</strong> [Grade or Pending]</p>
        <div class="assignment-content">
            <h4>Overview:</h4>
            <p>[Assignment details]</p>
            <h4>Key Points:</h4>
            <ul>
                <li>[Point 1]</li>
                <li>[Point 2]</li>
            </ul>
        </div>
        <button class="btn-view" onclick="alert('Add your assignment link')">View Assignment</button>
    </div>
</div>
```

## File Structure
```
EPortfolio/
├── index.html          (Main HTML file)
├── styles.css          (Styling)
├── script.js           (JavaScript functionality)
├── background.jpg      (Weekly Learnings background - add this!)
└── README.md           (This file)
```
