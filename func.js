document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to circuit overlay
    const circuitOverlay = document.querySelector('.circuit-overlay');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        circuitOverlay.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });

    // Add button click effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Add hover effect to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.animation = 'none';
        setTimeout(() => {
            logo.style.animation = 'glow 2s ease-in-out infinite alternate';
        }, 10);
    });
});

