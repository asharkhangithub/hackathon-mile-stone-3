var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameelement = document.getElementById('name');
    var emailelement = document.getElementById('email');
    var phonelement = document.getElementById('phone');
    var educationelement = document.getElementById('education');
    var experienceelement = document.getElementById('experience');
    var skillselement = document.getElementById('skills');
    if (nameelement && emailelement && phonelement && educationelement && experienceelement && skillselement) {
        var name_1 = nameelement.value;
        var email = emailelement.value;
        var phone = phonelement.value;
        var education = educationelement.value;
        var experience = experienceelement.value;
        var skills = skillselement.value;
        var resumeoutput = "\n    <h2>RESUME</h2>\n    <p><strong>NAME:</strong> ".concat(name_1, "</p>\n    <p><strong>EMAIL:</strong> ").concat(email, "</p>\n    <p><strong>PHONE:</strong> ").concat(phone, "</p>\n    <h3>EDUCATION</h3>\n    <p>").concat(education, "</p>\n    <h3>EXPERIENCE</h3>\n    <p> ").concat(experience, "</p>\n    <h3>SKILLS</h3>\n    <p>").concat(skills, "</p>\n    ");
        var resumeoutputelement = document.getElementById("resumeoutput");
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = resumeoutput;
        }
        else {
            console.error("resume output elements are missing");
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
