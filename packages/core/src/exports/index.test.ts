import { expect, test } from 'vitest'

import * as core from './index.js'

test('exports', () => {
  expect(Object.keys(core)).toMatchInlineSnapshot(`
    [
      "call",
      "connect",
      "deployContract",
      "disconnect",
      "estimateGas",
      "estimateFeesPerGas",
      "estimateMaxPriorityFeePerGas",
      "getAccount",
      "getBalance",
      "fetchBalance",
      "getBlock",
      "getBlockNumber",
      "fetchBlockNumber",
      "getBlockTransactionCount",
      "getBytecode",
      "getChainId",
      "getChains",
      "getClient",
      "getConnections",
      "getConnectors",
      "getConnectorClient",
      "getEnsAddress",
      "fetchEnsAddress",
      "getEnsAvatar",
      "fetchEnsAvatar",
      "getEnsName",
      "fetchEnsName",
      "getEnsResolver",
      "fetchEnsResolver",
      "getEnsText",
      "getFeeHistory",
      "getGasPrice",
      "getProof",
      "getPublicClient",
      "getStorageAt",
      "getToken",
      "fetchToken",
      "getTransaction",
      "fetchTransaction",
      "getTransactionConfirmations",
      "getTransactionCount",
      "getTransactionReceipt",
      "getWalletClient",
      "multicall",
      "prepareTransactionRequest",
      "readContract",
      "readContracts",
      "reconnect",
      "sendTransaction",
      "signMessage",
      "signTypedData",
      "simulateContract",
      "switchAccount",
      "switchChain",
      "switchNetwork",
      "verifyMessage",
      "verifyTypedData",
      "watchAccount",
      "watchAsset",
      "watchBlocks",
      "watchBlockNumber",
      "watchChainId",
      "watchClient",
      "watchConnections",
      "watchConnectors",
      "watchContractEvent",
      "watchPendingTransactions",
      "watchPublicClient",
      "waitForTransactionReceipt",
      "waitForTransaction",
      "writeContract",
      "createConnector",
      "injected",
      "mock",
      "createConfig",
      "createStorage",
      "noopStorage",
      "hydrate",
      "BaseError",
      "ChainNotConfiguredError",
      "ConnectorNotConnectedError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ConnectorAccountNotFoundError",
      "ConnectorChainMismatchError",
      "ProviderNotFoundError",
      "SwitchChainNotSupportedError",
      "custom",
      "http",
      "webSocket",
      "unstable_connector",
      "fallback",
      "cookieStorage",
      "cookieToInitialState",
      "parseCookie",
      "deepEqual",
      "deserialize",
      "normalizeChainId",
      "serialize",
      "version",
    ]
  `)
})
