const cir = document.querySelector('.cir')
const bar = document.querySelector('.bar')
const fileInput = document.getElementById('file-input');
console.log(fileInput)
const fileList = document.querySelector('.list-items');
const playPause = document.querySelector('.run img:nth-child(2)')
const loop = document.querySelector('.loop img:nth-child(3)')
console.log(loop)
let isPaused = true;

console.log(fileList)
let playButton;
// console.log(playButton)


const songList = [];
let number = 1;

const audioPlayer = document.getElementById('audioPlayer');
let audio = new Audio();
fileInput.addEventListener('change', function() {
    const files = fileInput.files;
    console.log(files[0].name)
    // fileList.innerHTML = ''; // Clear the file list
    for (const file of files) {
        const listItem = document.createElement('div');
        listItem.classList.add('song')
        const button = document.createElement('span');
        button.classList.add('file-item')
        button.setAttribute("data-number" ,number++);
        console.log(button.getAttribute("data-number"))
        const objectURL = URL.createObjectURL(file);
        button.textContent = `${file.name}`;
        button.addEventListener('click', function(e) {
            audio.src = objectURL;
            console.log(e.target.textContent)
            audio.setAttribute("data-number" ,e.target.getAttribute('data-number'));
            audio.play();
            audioContext.resume();
            document.querySelector('.name').innerHTML = e.target.textContent
            console.log(document.querySelector('.name'))
            console.log(document.querySelector('.duration').innerHTML)
            console.log(audio.duration)
            playPause.src = "SVG/pause.svg"
            isPaused = false;
            audio.loop = false;
        });
        listItem.appendChild(button)
        const remove = document.createElement('img')
        remove.src = "SVG/remove.svg";
        listItem.appendChild(remove)
        songList.push(listItem);
        
    }
    // console.log(songList[0])
    for (const song of songList) {
        fileList.appendChild(song);
        // console.log(song);
    }
});
fileList.addEventListener('click', (e) => {
    // console.log(e.target.parentNode)
    if(e.target.tagName === 'IMG'){
        let targetNum = e.target.previousSibling.getAttribute("data-number")
        let audioNum = audio.getAttribute("data-number")
        if(targetNum === audioNum){
            audio.pause()
            audio.currentTime = 0;
        }
        console.log(e.target.previousSibling)
        for (let index = 0; index < songList.length; index++) {
            if(songList[index] === e.target.parentNode)
            songList.splice(index, 1);
        }
        e.target.parentNode.remove();
    }
})

// audio.src = "sample.mp3";
audio.addEventListener('play', () => {
    draw();
    console.log('Audio started playing');
    audio.addEventListener('timeupdate', () => {
    cir.style.left = (audio.currentTime/audio.duration) * 100 + "%"
    });
    let isDragging = false;

    cir.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Prevent text selection during dragging
        document.body.style.userSelect = 'none';
    });

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Get the bounding box of the progress bar
        let barRect = bar.getBoundingClientRect();
    
        // Calculate the new position of the circle relative to the bar
        let offsetX = e.clientX - barRect.left; // Distance from the left side of the bar
        let currentTimeInPercentage = (offsetX / bar.offsetWidth) * 100;
    
        // Ensure the circle stays within the bar boundaries
        currentTimeInPercentage = Math.max(0, Math.min(100, currentTimeInPercentage));
    
        // Move the circle
        cir.style.left = currentTimeInPercentage + "%";
    
        // Update the audio time
        audio.currentTime = (currentTimeInPercentage / 100) * audio.duration;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        // Re-enable text selection after dragging
        document.body.style.userSelect = '';
    }
});

bar.addEventListener('click', (e) => {
    let currentTimeInPercentage = (e.offsetX / bar.offsetWidth) * 100;
    cir.style.left = currentTimeInPercentage + "%";
    audio.currentTime = (currentTimeInPercentage / 100) * audio.duration
    })
});
// Create a new audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();


const canvas = document.querySelector('.canvas');
console.log(canvas)
    const canvasCtx = canvas.getContext('2d');

    const track = audioContext.createMediaElementSource(audio);

    // Create an AnalyserNode for frequency analysis
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;  // Determines the number of frequency data points
    const bufferLength = analyser.frequencyBinCount;  // Half of fftSize
    const dataArray = new Uint8Array(bufferLength);  // Array to hold frequency data

    // Connect the track to the analyser, then to the destination (speakers)
    track.connect(analyser).connect(audioContext.destination);

    // Assume you have these variables
    let isDrawing = true;
    // Visualization function
    function draw() {
        if (!isDrawing) {
            return;  // Stop the iteration if the flag is false
        }
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);  // Get frequency data
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            // Scale the barHeight relative to the canvas height
            const scaledBarHeight = ((barHeight / 255) * canvas.height) * 2;
            canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
            canvasCtx.fillRect(x, canvas.height - scaledBarHeight / 2, barWidth, scaledBarHeight / 2);

            x += barWidth + 1;
        }
    }

    // Start drawing the animation
    function startDrawing() {
        if (!isDrawing) {
            isDrawing = true;
            requestAnimationFrame(draw);  // Start the animation loop again if it was stopped
        }
    }

    // Stop drawing the animation
    function stopDrawing() {
        isDrawing = false;  // Stop the drawing loop by setting the flag to false
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Attach event listeners to the audio element

    audio.addEventListener('play', startDrawing);  // Start drawing when audio plays
    audio.addEventListener('pause', stopDrawing);  // Stop drawing when audio is paused
    audio.addEventListener('ended', stopDrawing);  // Stop drawing when audio ends

    audio.addEventListener('timeupdate', () => {
        let minute = Math.floor(audio.currentTime / 60);
        let second =  Math.ceil(audio.currentTime - minute * 60);
        document.querySelector('.current').innerHTML = `${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`
        let minute1 = Math.floor(audio.duration / 60);
        let second1 =  Math.ceil(audio.duration - minute1 * 60);
        document.querySelector('.duration').innerHTML = `${minute1 < 10 ? "0" + minute1 : minute1}:${second1 < 10 ? "0" + second1 : second1}`
        if(audio.currentTime == audio.duration){
            cir.style.left = 0 + "%" 
        }
    })
    console.log(document.querySelector('.current').innerHTML)
    console.log(document.querySelector('.run img:nth-child(2)').src)
    playPause.addEventListener('click', () => {
        if(!isPaused){
            if(audioContext.state === 'running'){
                audioContext.suspend()
                playPause.src = "SVG/play.svg"
            } else {
                audioContext.resume()
                playPause.src = "SVG/pause.svg"
            }
            isPaused = false;
        }
    })

    loop.addEventListener('click', () => {
        if(audio.loop){
            audio.loop = false;
        } else {
            audio.loop = true;
        }
    })
    // Pause the audio
    // pauseButton.addEventListener('click', () => {
    //     audio.pause();
    // });