(function () {
  const DEFAULT_VIDEO =
    "https://f03c6muyk19qotz61yhf.c.websim.com/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up%20(Official%20Video)%20(4K%20Remaster).mp4";

  function requestFullscreen(el) {
    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  }

  function rickRoll(options = {}) {
    const opts = {
      text: options.text ?? true,
      video: {
        controls: options.video?.controls ?? false,
        loop: options.video?.loop ?? true,
        audio: options.video?.audio ?? true
      }
    };

    const container = document.createElement("div");
    container.style.cssText = `
      position: fixed;
      inset: 0;
      background: black;
      z-index: 999999;
    `;

    const video = document.createElement("video");
    video.src = DEFAULT_VIDEO;
    video.autoplay = true;
    video.loop = opts.video.loop;
    video.controls = opts.video.controls;
    video.muted = !opts.video.audio;
    video.playsInline = true;
    video.style.cssText = `
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    `;

    container.appendChild(video);

    if (opts.text) {
      const text = document.createElement("div");
      text.textContent = "You have been rickrolled!";
      text.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        font-weight: 800;
        color: white;
        background: rgba(0,0,0,0.6);
        padding: 20px 40px;
        border-radius: 12px;
        pointer-events: none;
      `;
      container.appendChild(text);
    }

    document.body.appendChild(container);

    // Must be user-initiated
    document.addEventListener(
      "click",
      () => {
        requestFullscreen(container);
        video.play();
      },
      { once: true }
    );
  }

  window.librickroll = { rickRoll };
})();
