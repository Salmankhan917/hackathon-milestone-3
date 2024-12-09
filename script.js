document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture input values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Generate the resume content
    const resumeContent = `
        <h2>${fullName}</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    document.getElementById("resumeDisplay").innerHTML = resumeContent;
});
