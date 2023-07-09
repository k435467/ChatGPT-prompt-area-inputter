// ---------- Storage ----------

const saveOptions = () => {
  const actText = document.getElementById('act-text').value
  chrome.storage.sync.set({ actText }, () => {})
}

const restoreOptions = () => {
  chrome.storage.sync.get({ actText: '' }, (items) => {
    document.getElementById('act-text').value = items.actText
  })
}

// ---------- Main ----------

// restore options on dom loaded
document.addEventListener('DOMContentLoaded', restoreOptions)

// add click handler on the btn
document.addEventListener('DOMContentLoaded', () => {
  const actBtn = document.getElementById('act-btn')

  actBtn.addEventListener('click', () => {
    const actText = document.getElementById('act-text').value

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'MyExtensionAct',
        actText,
      })
    })
  })
})

// add change hanlder on the textfield
document.addEventListener('DOMContentLoaded', () => {
  const actText = document.getElementById('act-text')

  actText.addEventListener('change', saveOptions)
})
