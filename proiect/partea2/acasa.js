window.onload = function() {   
    const bineText = document.querySelector('.bine');

    if (bineText) {
        bineText.addEventListener('mouseover', () => {
            const styles = window.getComputedStyle(bineText);
            const currentColor = styles.color;

            // culoare random
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            let newColor;
            do {
                newColor = getRandomColor();
            } while (newColor === currentColor);

            bineText.style.color = newColor;
        });
    }
}
