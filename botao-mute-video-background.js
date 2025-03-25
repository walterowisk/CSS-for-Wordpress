// Botão de Mute on/off em vídeo de background na seção elementor

.toggle_sound{
        cursor: pointer;
}



document.addEventListener('DOMContentLoaded', function() {

var toggleSoundButton = document.querySelector('.toggle_sound');
var heroBackgroundVideo = document.querySelector('.herosection video');
toggleSoundButton.addEventListener('click', function (event) {

if (heroBackgroundVideo.muted !== false){
heroBackgroundVideo.muted=false;
} else {
heroBackgroundVideo.muted=true;
} }); });