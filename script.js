document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transition = 'opacity 2s';

    setTimeout(() => {
        container.style.opacity = 1;
    }, 100);

    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    noButton.addEventListener('mouseover', () => {
        const offsetX = (Math.random() - 0.5) * 200;
        const offsetY = (Math.random() - 0.5) * 200;
        noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    noButton.addEventListener('mouseout', () => {
        noButton.style.transform = 'translate(0, 0)';
    });

    const messageBox = document.getElementById('message-box');
    const overlay = document.getElementById('overlay');
    const closeMessageButton = document.getElementById('close-message');

    yesButton.addEventListener('click', () => {
        messageBox.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
            window.location.href = "https://wa.me/5587988111514?text=Eu%20aceito%20seu%20pedido";
        }, 1000); // 1 segundo de atraso antes de redirecionar
    });

    closeMessageButton.addEventListener('click', () => {
        messageBox.style.display = 'none';
        overlay.style.display = 'none';
    });
});
