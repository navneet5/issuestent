const development = {
  apiConfig: {
    endpoint: 'https://signer-dot-eosnewyorkio-205211.appspot.com',
  },
  firmware: {
    downloadEndpoint: 'https://www.firmware.eosmetro.io',
  },
}

const uat = {
  apiConfig: {
    endpoint: 'https://signer-dot-eosnewyorkio-205211.appspot.com',
  },
  firmware: {
    downloadEndpoint: 'https://www.firmware.eosmetro.io',
  },
}

const production = {
  apiConfig: {
    endpoint: 'https://signer-dot-eosnewyorkio-205211.appspot.com',
  },
  firmware: {
    downloadEndpoint: 'https://www.firmware.eosmetro.io',
  },
}

const getEnvironmentConfig = () => {
  switch (process.env.REACT_APP_STAGE) {
  case 'uat':
    return uat
  case 'production':
    return production
  default:
    return development
  }
}

const {
  apiConfig,
  firmware,
} = getEnvironmentConfig()

export {
  apiConfig,
  firmware,
}
