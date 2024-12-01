let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})


// -------------------experience Section-----------------------

let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp-btn');

exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle('hide')
})

// -------------------About Section-----------------------

let about_section = document.getElementById('about');
let about_btn = document.getElementById('about_btn');

about_btn?.addEventListener('click', ()=>{
    about_section!.classList.toggle('hide')
})

// -------------------skills Section-----------------------
let skills_section = document.getElementById('skills');
let skills_btn = document.getElementById('skills_btn');

skills_btn?.addEventListener('click', ()=>{
    skills_section!.classList.toggle('hide')
})

// -------------------skills Section-----------------------
let education_section = document.getElementById('education');
let education_btn = document.getElementById('education_btn');

education_btn?.addEventListener('click', ()=>{
    education_section!.classList.toggle('hide')
})

// -------------------contact Section-----------------------
let contact_section = document.getElementById('contact');
let contact_btn = document.getElementById('contact_btn');

contact_btn?.addEventListener('click', ()=>{
    contact_section!.classList.toggle('hide')
})


// -------------------print Section-----------------------

let print_btn = document.getElementById('print_btn');

print_btn?.addEventListener('click', ()=>{
    window.print()
})