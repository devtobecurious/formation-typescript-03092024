export function setupCharacter(element: HTMLDivElement) {
    // Move the image to on zqsd key press
    let x = 0
    let y = 0
    const setCharacterPosition = (x: number, y: number) => {
        // if (x > (((window.innerWidth - element.width) / 2) - 20)) {
        //     x = ((window.innerWidth - element.width) / 2) - 40;
        // }
        // if (x < (-((window.innerWidth - element.width) / 2) + 20)) {
        //     x = (-(window.innerWidth - element.width) / 2) + 40;
        // }
        // if (y > ((window.innerHeight - element.height) / 2) - 50) {
        //     y = ((window.innerHeight - element.height) / 2) - 70;
        // }

        element.style.transform = `translate(${x}px, ${y}px)`;
    }
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'z':
                y -= 10
                break
            case 'q':
                x -= 10
                break
            case 's':
                y += 10
                break
            case 'd':
                x += 10
                break
            // case 'ArrowUp':
            //     y -= 10
            //     break
            // case 'ArrowLeft':
            //     x -= 10
            //     break
            // case 'ArrowDown':
            //     y += 10
            //     break
            // case 'ArrowRight':
            //     x += 10
            //     break
        }
        setCharacterPosition(x, y);
    })
}
