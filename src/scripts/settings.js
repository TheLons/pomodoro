const settings = () => {
    const settingsButton = document.querySelector('.button-settings');
    const saveButton = document.querySelector('.button-save');
    const dialogLayer = document.querySelector('.dialog-layer');
    console.log('clicked settings');

    settingsButton.addEventListener('click', () => {
        dialogLayer.showModal();
    })

    saveButton.addEventListener('click', () => {
        dialogLayer.close();
    })
}

export default settings;