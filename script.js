document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").textContent = localStorage.getItem("fullName") || "Your Name";
    document.getElementById("location").textContent = localStorage.getItem("address") || "Your Location";
    document.getElementById("summary").textContent = localStorage.getItem("summary") || "";

    document.getElementById("phone").querySelector("span").textContent = localStorage.getItem("phone") || "";
    document.getElementById("email").querySelector("span").textContent = localStorage.getItem("email") || "";
    document.getElementById("linkedin").querySelector("span").textContent = localStorage.getItem("linkedin") || "";

    // Work Experience - Convert from JSON
    let experienceData = JSON.parse(localStorage.getItem("workExperience") || "{}");
    document.getElementById("experience").innerHTML = experienceData.jobTitle ? `
        <p><strong>${experienceData.jobTitle}</strong> at ${experienceData.companyName}</p>
        <p>${experienceData.startDate} - ${experienceData.endDate}</p>
        <p>${experienceData.responsibilities}</p>
    ` : "<p>No work experience provided.</p>";

    // Education - Convert from JSON
    let educationData = JSON.parse(localStorage.getItem("education") || "{}");
    document.getElementById("education").innerHTML = educationData.degreeName ? `
        <p><strong>${educationData.degreeName}</strong> at ${educationData.collegeName} (${educationData.yearOfCompletion})</p>
    ` : "<p>No education details provided.</p>";

    // Skills & Projects - Convert from JSON
    let skillsData = JSON.parse(localStorage.getItem("skillsProjects") || "{}");
    document.getElementById("projects").innerHTML = `
        <p><strong>Skills:</strong> ${skillsData.skills || "Not provided"}</p>
        <p><strong>Project:</strong> ${skillsData.projectName || "No project provided"}</p>
        <p>${skillsData.projectDescription || ""}</p>
        <p><strong>Technologies Used:</strong> ${skillsData.technologies || "N/A"}</p>
    `;

    // Profile Picture Fix
    let profilePic = localStorage.getItem("photo");
    if (profilePic) {
        document.getElementById("profile-pic").src = profilePic;
    }
});
