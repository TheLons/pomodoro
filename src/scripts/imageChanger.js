const imageChanger = () => {
    const images = document.querySelectorAll('.bg-images-preview img');
    const bg_video = document.querySelector('source');
    const video = document.querySelector('video');

    for (let img of images) {
        img.addEventListener('click', () => {
            bg_video.setAttribute('src', `./Assets/Videos/${img.id}.mp4`);
            video.load();
            video.play();
        })
    }
}

export default imageChanger;