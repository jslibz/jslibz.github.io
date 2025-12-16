function fullscreen(container) {
  if (!document.fullscreenElement) {
    // Request fullscreen mode for the container element
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) { /* Safari */
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) { /* IE11 */
      container.msRequestFullscreen();
    }
  } else {
    // Exit fullscreen mode if currently active
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
}
