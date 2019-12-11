chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log(
    sender.tab
      ? `from a content script: ${sender.tab.url}`
      : 'from the extension',
  );
  if (req.msg === 'screenshot') sendResponse({ msg: 'goodbye' });
});
