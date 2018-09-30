/* global chrome */
// const buttonEl = document.getElementById('changeColor')

// chrome.storage.sync.get('color', data => {
//   buttonEl.style.backgroundColor = data.color
//   buttonEl.setAttribute('value', data.color)
// })

// const getCurrentTab = () => {
//   return new Promise((resolve) => {
//     chrome.tabs.query(
//       {
//         active: true,
//         currentWindow: true
//       },
//       tabs => resolve(tabs[0])
//     )
//   })
// }

// buttonEl.addEventListener('click', async e => {
//   const color = e.target.value
//   const tab = await getCurrentTab()
//   console.log('  --  >  popup.js:24 > tab', tab)
//
//   chrome.tabs.executeScript(
//     tab.id,
//     {
//       code: `document.body.style.backgroundColor = "${color}";`
//     }
//   )
// })
