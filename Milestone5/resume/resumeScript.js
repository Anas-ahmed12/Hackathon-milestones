"use strict";
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let desig = localStorage.getItem("desig");
    let Phone = localStorage.getItem("Phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass1 = localStorage.getItem("pass1");
    let uni = localStorage.getItem("uni");
    let deg = localStorage.getItem("deg");
    let pass2 = localStorage.getItem("pass2");
    let uni2 = localStorage.getItem("uni2");
    let deg2 = localStorage.getItem("deg2");
    let Skills1 = localStorage.getItem("Skills1");
    let Skills2 = localStorage.getItem("Skills2");
    let Skills3 = localStorage.getItem("Skills3");
    let Skills4 = localStorage.getItem("Skills4");
    let Skills5 = localStorage.getItem("Skills5");
    let Skills6 = localStorage.getItem("Skills6");
    let lang = localStorage.getItem("lang");
    let lang2 = localStorage.getItem("lang2");
    let about = localStorage.getItem("about");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let Campany = localStorage.getItem("Campany");
    let comlocation = localStorage.getItem("comlocation");
    let Jobtitle = localStorage.getItem("Jobtitle");
    let Achi1 = localStorage.getItem("Achi1");
    let Achi2 = localStorage.getItem("Achi2");
    let Achi3 = localStorage.getItem("Achi3");
    let Achi4 = localStorage.getItem("Achi4");
    let details = localStorage.getItem("details");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById('resName');
    resName.textContent = localStorage.getItem("myName");
    let resDesig = document.getElementById('resDesig');
    resDesig.textContent = localStorage.getItem("desig");
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = localStorage.getItem("Phone");
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = localStorage.getItem("email");
    let resAddress = document.getElementById('resAddress');
    resAddress.textContent = localStorage.getItem("add");
    let resMatric = document.getElementById('resMatric');
    resMatric.textContent = localStorage.getItem("pass1");
    let resMatricLocation = document.getElementById('resMatricLocation');
    resMatricLocation.textContent = localStorage.getItem("uni");
    let resMatricDeg = document.getElementById('resMatricDeg');
    resMatricDeg.textContent = localStorage.getItem("deg");
    let resIntermadiateYear = document.getElementById('resIntermadiateYear');
    resIntermadiateYear.textContent = localStorage.getItem("pass2");
    let resIntermadiateLocation = document.getElementById('resIntermadiateLocation');
    resIntermadiateLocation.textContent = localStorage.getItem("uni2");
    let resIntermadiateDeg = document.getElementById('resIntermadiateDeg');
    resIntermadiateDeg.textContent = localStorage.getItem("deg2");
    let resSkills1 = document.getElementById('resSkills1');
    resSkills1.textContent = localStorage.getItem("Skills1");
    let resSkills2 = document.getElementById('resSkills2');
    resSkills2.textContent = localStorage.getItem("Skills2");
    let resSkills3 = document.getElementById('resSkills3');
    resSkills3.textContent = localStorage.getItem("Skills3");
    let resSkills4 = document.getElementById('resSkills4');
    resSkills4.textContent = localStorage.getItem("Skills4");
    let resSkills5 = document.getElementById('resSkills5');
    resSkills5.textContent = localStorage.getItem("Skills5");
    let resSkills6 = document.getElementById('resSkills6');
    resSkills6.textContent = localStorage.getItem("Skills6");
    let resLan1 = document.getElementById('resLan1');
    resLan1.textContent = localStorage.getItem("lang");
    let resLan2 = document.getElementById('resLan2');
    resLan2.textContent = localStorage.getItem("lang2");
    let resAbout = document.getElementById('resAbout');
    resAbout.textContent = localStorage.getItem("about");
    let resStartDate = document.getElementById('resStartDate');
    resStartDate.textContent = localStorage.getItem("styear");
    let resEndDate = document.getElementById('resEndDate');
    resEndDate.textContent = localStorage.getItem("endyear");
    let resCompany = document.getElementById('resCompany');
    resCompany.textContent = localStorage.getItem("Campany");
    let resCompanyLocation = document.getElementById('resCompanyLocation');
    resCompanyLocation.textContent = localStorage.getItem("comlocation");
    let resjobTitle = document.getElementById('resjobTitle');
    resjobTitle.textContent = localStorage.getItem("Jobtitle");
    let resAch1 = document.getElementById('resAch1');
    resAch1.textContent = localStorage.getItem("Achi1");
    let resAch2 = document.getElementById('resAch2');
    resAch2.textContent = localStorage.getItem("Achi2");
    let resAch3 = document.getElementById('resAch3');
    resAch3.textContent = localStorage.getItem("Achi3");
    let resAch4 = document.getElementById('resAch4');
    resAch4.textContent = localStorage.getItem("Achi4");
    let resJobDesc = document.getElementById('resJobDesc');
    resJobDesc.textContent = localStorage.getItem("details");
    let resImg = document.getElementById('resImg');
    resImg.src = picture;
});
// -------------------print Section-----------------------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
// -------------------edit_btn-----------------------
let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
// -------------------shareable_btn-----------------------
let share_btn = document.getElementById('share_btn');
let anc = document.getElementById("anc");
let userName;
if (myName) {
    userName = myName.toLowerCase().replace(/\s+/g, '-');
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let UniqeUrl = `${baseUrl}?/${userName}`;
share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", UniqeUrl);
});
// -------------------Copy link btn-----------------------
let copy_btn = document.getElementById('copy_btn');
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(UniqeUrl).then(() => {
        alert("copied successfully");
    });
});