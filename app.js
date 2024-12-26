let recorder, ws, isRecording = false;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const transcriptionDiv = document.getElementById('transcription');
const statusDiv = document.getElementById('status');
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;
// 阿里云配置
const appKey = '6Pny08300aHYHpjp';
const token = 'e4fa18d5395a4be1aabc54e9b9013d66'; // 使用后端生成的 Token
const websocketUrl = `wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1?appkey=${appKey}&token=${token}`;

// 初始化录音
async function startRecording () {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    statusDiv.textContent = '当前浏览器不支持麦克风功能，请使用最新的 Chrome、Firefox 或 Edge。';
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new AudioContext();
    const input = audioContext.createMediaStreamSource(stream);
    recorder = new Worker('./recorder-worker.js');

    recorder.postMessage({ command: 'init', config: { sampleRate: 16000 } });
    recorder.onmessage = (e) => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(e.data);
      }
    };

    input.connect(audioContext.destination);
    connectWebSocket();

    isRecording = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    statusDiv.textContent = '录音中，请说话...';
  } catch (err) {
    statusDiv.textContent = '无法访问麦克风，请检查权限或更换浏览器。';
    console.error('录音失败:', err);
  }
}

// 停止录音
function stopRecording () {
  if (recorder) {
    recorder.postMessage({ command: 'stop' });
  }
  if (ws) {
    ws.close();
  }
  isRecording = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statusDiv.textContent = '录音已停止。';
}

// 建立 WebSocket 连接
function connectWebSocket () {
  ws = new WebSocket(websocketUrl);

  ws.onopen = () => {
    console.log('WebSocket 连接成功');
  };

  ws.onmessage = (event) => {
    const result = JSON.parse(event.data);
    if (result.result && result.result.text) {
      transcriptionDiv.textContent = result.result.text;
    }
  };

  ws.onclose = () => {
    console.log('WebSocket 连接已关闭');
    statusDiv.textContent = 'WebSocket 连接已关闭。';
  };

  ws.onerror = (error) => {
    console.error('WebSocket 错误:', error);
    statusDiv.textContent = 'WebSocket 发生错误，请检查网络或配置。';
  };
}

// 按钮事件绑定
startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);
