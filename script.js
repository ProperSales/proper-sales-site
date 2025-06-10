<script src="script.js"></script>
</body>
</html>

// Ping-pong loop for hero video
const heroVid = document.getElementById('hero-video');

// When playback naturally ends...
heroVid.addEventListener('ended', () => {
  // Flip direction: if playing forward, go backwards; if backwards, go forward
  heroVid.playbackRate = heroVid.playbackRate > 0 ? -1 : 1;
  // Restart playback at whichever end we’re on
  heroVid.play();
});
