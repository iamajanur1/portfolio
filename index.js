
        // Project data in JSON format
        const projectsData = [
            {
                title: "E-commerce Web App",
                icon: "fas fa-shopping-cart",
                description: "A full-stack e-commerce application built with MERN stack. Features user authentication, product catalog, shopping cart, and payment integration. Provides an intuitive user experience for browsing and purchasing products.",
                shortDescription: "A full-stack e-commerce application built with MERN stack...",
                githubRepo: "https://github.com/yourusername/ecommerce-app",
                livePreview: "https://yourapp.netlify.app"
            },
            {
                title: "Social Media Platform",
                icon: "fas fa-share-alt",
                description: "Developed a social media platform allowing users to create profiles, post updates, connect with friends, and engage in real-time chat. Utilized Node.js for the backend and React for the frontend.",
                shortDescription: "Developed a social media platform allowing users to create profiles, post updates...",
                githubRepo: "https://github.com/yourusername/social-media",
                livePreview: "https://yoursocialapp.netlify.app"
            },
            {
                title: "Task Management Tool",
                icon: "fas fa-tasks",
                description: "A productivity tool designed to help individuals and teams manage tasks efficiently. Features include task creation, categorization, due dates, and progress tracking. Built with React and Express.js.",
                shortDescription: "A productivity tool designed to help individuals and teams manage tasks efficiently...",
                githubRepo: "https://github.com/yourusername/task-manager",
                livePreview: "https://yourtaskapp.netlify.app"
            },
            {
                title: "Portfolio Website (Current)",
                icon: "fas fa-user-tie",
                description: "This very portfolio website! Developed to showcase my skills and projects, featuring responsive design, smooth animations, and clear navigation. Built using HTML, CSS, JavaScript, and various libraries.",
                shortDescription: "This very portfolio website! Developed to showcase my skills and projects...",
                githubRepo: "https://github.com/yourusername/portfolio",
                livePreview: "#home"
            },
            {
                title: "Recipe Finder App",
                icon: "fas fa-utensils",
                description: "An application that allows users to search for recipes based on ingredients or meal types. Integrates with a third-party API to fetch recipe data and displays detailed instructions. Built with plain JavaScript.",
                shortDescription: "An application that allows users to search for recipes based on ingredients or meal types...",
                githubRepo: "https://github.com/yourusername/recipe-finder",
                livePreview: "https://yourrecipeapp.netlify.app"
            }
        ];

        // Function to create a project card from data
        function createProjectCard(project) {
            const card = document.createElement('div');
            card.classList.add('project-card');

            card.innerHTML = `
                <div class="icon"><i class="${project.icon}"></i></div>
                <div class="text">${project.title}</div>
                <div class="description">
                    <span class="short-desc">${project.shortDescription}</span>
                    <span class="full-desc">${project.description}</span>
                    <span class="read-more-btn">Read more</span>
                </div>
                <div class="project-buttons">
                    <a href="${project.githubRepo}" target="_blank">GitHub Repo</a>
                    <a href="${project.livePreview}" target="_blank">Live Preview</a>
                </div>
            `;

            // Add event listener for "Read more" for a specific card
            const readMoreBtn = card.querySelector('.read-more-btn');
            readMoreBtn.addEventListener('click', () => {
                const shortDesc = card.querySelector('.short-desc');
                const fullDesc = card.querySelector('.full-desc');
                if (shortDesc.style.display !== 'none') {
                    shortDesc.style.display = 'none';
                    fullDesc.style.display = 'inline';
                    readMoreBtn.textContent = 'Read less';
                } else {
                    shortDesc.style.display = 'inline';
                    fullDesc.style.display = 'none';
                    readMoreBtn.textContent = 'Read more';
                }
            });

            return card;
        }

        // Function to load projects into the DOM
        function loadProjects() {
            const container = document.getElementById('project-cards-container');
            projectsData.forEach(project => {
                container.appendChild(createProjectCard(project));
            });
        }

        // Call loadProjects when the DOM is fully loaded
        $(document).ready(function(){
            loadProjects();
            
            // Existing scripts from your original code
            $(window).scroll(function(){
                if(this.scrollY > 20){
                    $('.navbar').addClass("sticky");
                }else{
                    $('.navbar').removeClass("sticky");
                }
                if(this.scrollY > 500){
                    $('.scroll-up-btn').addClass("show");
                }else{
                    $('.scroll-up-btn').removeClass("show");
                }
            });

            $('.scroll-up-btn').click(function(){
                $('html').animate({scrollTop: 0});
                $('html').css("scrollBehavior", "auto");
            });

            $('.navbar .menu li a').click(function(){
                $('html').css("scrollBehavior", "smooth");
            });

            $('.menu-btn').click(function(){
                $('.navbar .menu').toggleClass("active");
                $('.menu-btn i').toggleClass("active");
            });

            var typed = new Typed(".typing", {
                strings: ["Developer", "Designer", "Freelancer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });

            var typed = new Typed(".typing-2", {
                strings: ["Developer", "Designer", "Freelancer"],
                typeSpeed: 60,
                backSpeed: 60,
                loop: true
            });
        });
    