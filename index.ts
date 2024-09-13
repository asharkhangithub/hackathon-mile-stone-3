document.getElementById("resumeform")?.addEventListener("submit",function(event){
    event.preventDefault();


    const nameelement=  document.getElementById('name') as HTMLInputElement;
    const emailelement=  document.getElementById('email') as HTMLInputElement;
    const phonelement=  document.getElementById('phone') as HTMLInputElement;
    const educationelement=  document.getElementById('education') as HTMLInputElement;
    const experienceelement=  document.getElementById('experience') as HTMLInputElement;
    const skillselement=  document.getElementById('skills') as HTMLInputElement;


    if(nameelement && emailelement && phonelement && educationelement && experienceelement && skillselement){
        const name = nameelement.value;
        const email= emailelement.value;
        const phone = phonelement.value;
        const education = educationelement.value;
        const experience = experienceelement.value;
        const skills = skillselement.value;
    


    const resumeoutput = 
    `
    <h2>RESUME</h2>
    <p><strong>NAME:</strong> ${name}</p>
    <p><strong>EMAIL:</strong> ${email}</p>
    <p><strong>PHONE:</strong> ${phone}</p>
    <h3>EDUCATION</h3>
    <p>${education}</p>
    <h3>EXPERIENCE</h3>
    <p> ${experience}</p>
    <h3>SKILLS</h3>
    <p>${skills}</p>
    `;

    const resumeoutputelement = document.getElementById("resumeoutput")
    if(resumeoutputelement){
        resumeoutputelement.innerHTML =resumeoutput
    }else{
        console.error("resume output elements are missing");
    } 
}
else{
    console.error("one or more output elements are missing")
}
})


