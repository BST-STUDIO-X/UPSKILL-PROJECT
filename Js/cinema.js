let player;
const overlay = document.getElementById('clickOverlay');
const cinemaId = getVideoIdFromUrl();
// const API_BASE = 'http://localhost:5000/api/v1';
const API_BASE = 'https://virtual-cinema-backend.onrender.com/api/v1';
const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5Nzg4M2M0YjcwNDJlNWIxMWY2YjQ4In0sImlhdCI6MTc1NTU0OTIzMSwiZXhwIjoxNzU4MTQxMjMxfQ.lX2E_fka_BV-HBe4vEM8C2FcBD77OjbnVMgvPTlXXUY';
let syncCount = 0;

function onYouTubeIframeAPIReady() {
  initializeVideo();
}

function getVideoIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('v') || 'dQw4w9WgXcQ';
}

function calculateSyncTime() {
  const now = new Date();
  // return now.getSeconds();
  return Math.floor((now / 1000) % 3600); // seconds within the hour
}

function resyncVideo() {
  if (!player || typeof player.seekTo !== 'function') return;
  const syncTime = calculateSyncTime();
  player.seekTo(syncTime, true);
  player.playVideo();
}

function initializeVideo() {
  const videoId = getVideoIdFromUrl();
  const startTime = calculateSyncTime();

  player = new YT.Player('videoFrame', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      start: startTime,
    },
    events: {
      onReady: () => {
        document.getElementById('loadingOverlay').style.display = 'none';
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          window.location.href = '/';
        }
        if (e.data === YT.PlayerState.PLAYING) {
          if (syncCount >= 1) return;

          setTimeout(() => {
            resyncVideo();
          }, 5000);
          // console.log("Sync", syncCount);
          syncCount++;
        }
        if (e.data === YT.PlayerState.PAUSED) {
          resyncVideo();
        }
      },
    },
  });
}

function updateTimeDisplay() {
  if (!player || typeof player.getCurrentTime !== 'function') return;
  const elapsed = Math.floor(player.getCurrentTime());
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById(
    'timeDisplay'
  ).textContent = `Elapsed Time: ${timeString}`;
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const content = input.value.trim();
  if (!content) return;

  try {
    await fetch(`${API_BASE}/chat/messages/${cinemaId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ content }),
    });
    input.value = '';
  } catch (error) {
    console.error('Send error:', error);
  }
}

function addChatMessage(user, text) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerHTML = `
    <div class="message-user">${user}</div>
    <div class="message-text">${text}</div>
  `;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function goBack() {
  window.history.back();
}

async function fetchMessages() {
  try {
    const res = await fetch(`${API_BASE}/chat/messages/${cinemaId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!res.ok) throw new Error('Failed to fetch messages');
    const messages = await res.json();
    messages.forEach((msg) => {
      const sender =
        typeof msg.sender === 'object' ? msg.sender.username : 'User';
      addChatMessage(sender, msg.content);
    });
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function updateViewerDisplay(count) {
  const el = document.getElementById('viewerCount');
  if (el) el.textContent = count.toString();
}

function subscribeToSSE() {
  const url = `${API_BASE}/chat/messages/watch/${cinemaId}`;
  const eventSource = new EventSource(url);

  eventSource.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data);
      if (typeof payload.clients === 'number') {
        updateViewerDisplay(payload.clients);
      }

      if (payload.type === 'message') {
        const data = payload.data;
        const sender =
          typeof data.sender === 'object' ? data.sender.username : 'Me';
        addChatMessage(sender, data.content);
      }
    } catch (err) {
      console.error('SSE parse error:', err);
    }
  };

  eventSource.onerror = (err) => {
    console.error('SSE error:', err);
    eventSource.close();
  };
}

// Initialization
// setInterval(updateTimeDisplay, 1000);
// updateTimeDisplay();

// setTimeout(() => {
//   addChatMessage(
//     'System',
//     'Welcome to the virtual cinema! Text chat is enabled.'
//   );
// }, 3000);

// fetchMessages();
// subscribeToSSE();

// if (overlay) {
//   overlay.addEventListener(
//     'click',
//     () => {
//       if (player && typeof player.unMute === 'function') {
//         player.unMute();
//       }
//       overlay.remove();
//     },
//     { once: true }
//   );
// }

document.addEventListener('DOMContentLoaded', () => {
  // Initialization
  setInterval(updateTimeDisplay, 1000);
  updateTimeDisplay();

  setTimeout(() => {
    addChatMessage(
      'System',
      'Welcome to the virtual cinema! Text chat is enabled.'
    );
  }, 3000);

  fetchMessages();
  subscribeToSSE();

  if (overlay) {
    overlay.addEventListener(
      'click',
      () => {
        if (player && typeof player.unMute === 'function') {
          player.unMute();
        }
        overlay.remove();
      },
      { once: true }
    );
  }
});