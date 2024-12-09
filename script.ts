document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resumeDisplay = document.getElementById('Resume-Display');

form?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect form data
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const education = document.getElementById('education');
    const experience = document.getElementById('Experience');
    const skills = document.getElementById('skills');

    // Generate resume content
    const resumeHTML = `
        <h2>${fullName?.textContent || ''}'s Resume</h2>
        <p><strong>Email:</strong> ${email?.textContent || ''}</p>
        <p><strong>Phone:</strong> ${phone?.textContent || ''}</p>
        <h3>Education</h3>
        <p>${education?.textContent || ''}</p>
        <h3>Experience</h3>
        <p>${experience?.textContent || ''}</p>
        <h3>Skills</h3>
        <p>${skills?.textContent || ''}</p>
    `;

    // Display resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
});




});