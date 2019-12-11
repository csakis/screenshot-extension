// eslint-disable-next-line import/prefer-default-export
export const sendMessage = (msg) => {
  console.log('msg :', msg);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { msg }, (res) => {
      console.log(res.msg);
    });
  });
};
