const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')

btn.addEventListener('click', async () => {
  const filePaths = await window.electronAPI.openFile()
  filePathElement.innerText = Array.isArray(filePaths) ? filePaths.join('\n') : filePaths
})