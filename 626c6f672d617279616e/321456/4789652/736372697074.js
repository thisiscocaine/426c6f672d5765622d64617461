function goBack() {
    window.history.back();
}

const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
resizeCanvas();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawLines();
}

window.addEventListener('resize', resizeCanvas);

function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1;

    const verticalLines = 4;
    const horizontalLines = 3;

    for (let i = 1; i <= verticalLines; i++) {
        let x = (canvas.width / (verticalLines + 1)) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let i = 1; i <= horizontalLines; i++) {
        let y = (canvas.height / (horizontalLines + 1)) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

drawLines();
