chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'MyExtensionAct') {
    const promptTextarea = document.getElementById('prompt-textarea')
    if (promptTextarea) {
      promptTextarea.value = request.actText
      promptTextarea.style.height = '120px'
      promptTextarea.style.maxHeight = '240px'
    }
  }
})
