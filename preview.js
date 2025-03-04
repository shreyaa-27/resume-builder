document.addEventListener("DOMContentLoaded", function() {
    const template = localStorage.getItem("selectedTemplate") || "template1";
    document.getElementById('templateStylesheet').href = `${template}.css`;

    const resume = document.getElementById("resumeTemplate");

    const fullName = localStorage.getItem("fullName") || "Your Name";
    const email = localStorage.getItem("email") || "your.email@example.com";
    const phone = localStorage.getItem("phone") || "123-456-7890";
    const address = localStorage.getItem("address") || "Your Address";
    const language = localStorage.getItem("language") || "English";
    const linkedin = localStorage.getItem("linkedin") || "https://linkedin.com/in/yourprofile";

    const workExperience = JSON.parse(localStorage.getItem("workExperience") || "{}");
    const summary = localStorage.getItem("summary") || "No summary provided.";
    const education = JSON.parse(localStorage.getItem("education") || "[]");
    const skillsProjects = JSON.parse(localStorage.getItem("skillsProjects") || "{}");

    resume.innerHTML = `
        <div class="header">
            <h1>${fullName}</h1>
        </div>
        <div class="section">
            <h3>Summary</h3>
            <p>${summary}</p>
        </div>
        <div class="section">
            <h3>Contact Information</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            <p>Languages: ${language}</p>
        </div>
        <div class="section">
            <h3>Work Experience</h3>
            ${workExperience.jobTitle ? `
                <p><strong>${workExperience.jobTitle}</strong> at ${workExperience.companyName}</p>
                <p>${workExperience.startDate} - ${workExperience.endDate}</p>
                <p>${workExperience.responsibilities}</p>
            ` : '<p>No work experience provided.</p>'}
        </div>
        <div class="section">
            <h3>Education</h3>
            ${education.degreeName ? `
                <p><strong>${education.degreeName}</strong> at ${education.collegeName} (${education.yearOfCompletion})</p>
            ` : '<p>No education details provided.</p>'}
        </div>
        <div class="section">
            <h3>Skills & Projects</h3>
            <p><strong>Skills:</strong> ${skillsProjects.skills || "Not provided"}</p>
            <p><strong>Project:</strong> ${skillsProjects.projectName || "No project provided"}</p>
            <p>${skillsProjects.projectDescription || ""}</p>
            <p><strong>Technologies Used:</strong> ${skillsProjects.technologies || "N/A"}</p>
        </div>
    `;
});

function downloadPDF() {
    const resume = document.getElementById("resumeContainer");

    const options = {
        margin: 10,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(resume).save();
}

