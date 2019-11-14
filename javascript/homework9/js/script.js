document.querySelector('.tabs-title').classList.add('active');
 document.querySelector('.tabs-content-item').classList.add('active');


 let tabsTitle = document.querySelectorAll('.tabs-title'),
     tabsContent = document.querySelectorAll('.tabs-content li');

 tabsContent.forEach((e,index) => e.dataset.index = index);

 for (let el of tabsTitle) {
     el.addEventListener('click', e=>{
         e.preventDefault();

         document.querySelector('.tabs-title.active').classList.remove('active');
         document.querySelector('.tabs-content-item.active').classList.remove('active');

         el.classList.add('active');
         const index = [...tabsTitle].indexOf(el);

         const content = [...tabsContent].filter(el => el.getAttribute('data-index') == index);
         content[0].classList.add('active');
     })
 }
