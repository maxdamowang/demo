let sampleRate, buffer = [];

onmessage = (e) => {
  if (e.data.command === 'init') {
    sampleRate = e.data.config.sampleRate;
  } else if (e.data.command === 'process') {
    buffer.push(e.data.audioData);
    const pcmData = convertToPCM(buffer);
    postMessage(pcmData);
    buffer = [];
  } else if (e.data.command === 'stop') {
    buffer = [];
  }
};

function convertToPCM(buffer) {
  // 实现音频 PCM 转换逻辑
  // 示例：将 Float32Array 转换为 Int16Array
  const pcm = new Int16Array(buffer.length);
  for (let i = 0; i < buffer.length; i++) {
    pcm[i] = Math.max(-1, Math.min(1, buffer[i])) * 0x7fff;
  }
  return pcm.buffer;
}
