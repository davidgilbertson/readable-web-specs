/* global chrome */
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({color: '#ff1111'}, () => {
//     console.log('The color is red')
//   })
//
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: {
//               hostEquals: 'developer.chrome.com'
//             }
//           })
//         ],
//         actions: [
//           new chrome.declarativeContent.ShowPageAction()
//         ]
//       }
//     ])
//   })
// })
