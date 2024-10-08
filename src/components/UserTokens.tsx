import * as React from 'react'
import {  useUserTokens } from 'tomo-tg-wallet-sdk'

const UserTokens = () => {
  const { tokens } = useUserTokens()

  return (
    <div>
      <h2>UserTokens</h2>
      <div>
        {tokens.map((token, index) => {
          return <p key={index.toString()}>{token.symbol}</p>
        })}
      </div>
    </div>
  )
}

export default UserTokens
