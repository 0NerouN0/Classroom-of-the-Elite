let song = document.getElementById("song")
let play = document.getElementById("button")
document.querySelector('#button').addEventListener('click', function () {
    if (play.classList.contains('m_play')) {
        song.play();
        play.classList.remove('m_play');
        play.classList.add('m_pause');
        console.log(play)
    }
    else {
        song.pause();
        play.classList.remove('m_pause');
        play.classList.add('m_play');
        console.log(play)
    }
  })