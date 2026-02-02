function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function handleSignup(e) {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            alert(`Thanks for signing up with: ${email}`);
            e.target.reset();
        }

        