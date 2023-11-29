let nav = document.querySelector("nav");
      let scrollBtn = document.querySelector(".scroll-button a");
      console.log(scrollBtn);
      let val;
      window.onscroll = function() {
        if(document.documentElement.scrollTop > 20){
          nav.classList.add("sticky");
          scrollBtn.style.display = "block";
        }else{
          nav.classList.remove("sticky");
          scrollBtn.style.display = "none";
        }
      
      }
//       window.onload = function() {
//     window.scrollTo(0, 0);
// };

      
      // Side NavIgation Menu JS Code
      let body = document.querySelector("body");
      let navBar = document.querySelector(".navbar");
      let menuBtn = document.querySelector(".menu-btn");
      let cancelBtn = document.querySelector(".cancel-btn");
      menuBtn.onclick = function(){
        navBar.classList.add("active");
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
        body.style.overflow = "hidden";
        scrollBtn.style.pointerEvents = "none";
      }
      cancelBtn.onclick = function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflow = "auto";
        scrollBtn.style.pointerEvents = "auto";
      }
      
      // Side Navigation Bar Close While We Click On Navigation Links
      let navLinks = document.querySelectorAll(".menu li a");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click" , function() {
          navBar.classList.remove("active");
          menuBtn.style.opacity = "1";
          menuBtn.style.pointerEvents = "auto";
        });

        // download CV 
        document.getElementById('download-cv').addEventListener('click', function() {
        // Specify the path to the CV file within the 'cv_files' folder
        const cvUrl = '/pdf/ajanurcv.pdf';
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = cvUrl;
        a.download = 'AjanurRahman_CV.pdf'; // Set the desired file name
        a.click();
        window.URL.revokeObjectURL(cvUrl);
    });
      }