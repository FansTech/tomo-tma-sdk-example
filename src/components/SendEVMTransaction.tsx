import * as React from 'react'
import { useState } from 'react'
import { useBalance, useConfig } from 'wagmi'
import { sepolia } from 'viem/chains'
import { parseUnits, zeroAddress } from 'viem'
import { useLoading } from '../hooks/useLoading'
import { useSendTransaction, useTomoUserInfo } from 'tomo-tg-wallet-sdk'

const SendEVMTransaction = () => {
  const [inputCount, setInputCount] = useState<string>()
  const [toAddress, setToAddress] = useState<string>()
  const config = useConfig()
  const { evmAddress } = useTomoUserInfo()
  const { sendEVMTransaction } = useSendTransaction()

  const [sendEVMLoading, sendEVMLoadingFn] = useLoading()

  // const balance = useBalance({
  //   chainId: sepolia.id,
  // });

  const handleSendEVMToken = () => {
    sendEVMLoadingFn(async () => {
      const res = await sendEVMTransaction({
        chainId: sepolia.id,
        fromAddress: evmAddress,
        toAddress: toAddress,
        value: parseUnits(inputCount || '0', 18),
        // rpc: sepolia.rpcUrls.default.http[0],
        config,
        tokenValue: parseUnits(inputCount || '0', 18),
        token: {
          chainId: sepolia.id,
          image: 'https://etherscan.io/images/main/empty-token.png',
          name: 'Ether',
          symbol: 'ETH',
          decimals: 18,
          address: zeroAddress
        }
      })
    })
  }

  return (
    <div>
      <div>
        <h2>SendEVMTransaction</h2>
        <div>
          <p>fromAddress: {evmAddress}</p>
          {/* <p>balance: {balance.data?.formatted}</p> */}
          <p>
            toAddress:
            <input
              value={toAddress}
              type="text"
              onChange={(e) => setToAddress(e.target.value)}
            />
          </p>
          <p>
            value:
            <input
              value={inputCount}
              type="text"
              onChange={(e) => setInputCount(e.target.value)}
            />
          </p>
          <button disabled={sendEVMLoading} onClick={handleSendEVMToken}>
            {sendEVMLoading ? 'Sending...' : 'Send EVM Token'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendEVMTransaction
