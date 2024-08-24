import * as React from 'react'
import { useTomo } from 'tomo-tg-wallet-sdk'

export function Test() {
  return (
    <div>
      <Test1 />
      <Test2 />
    </div>
  )
}
export function Test1() {
  const tomo = useTomo()

  return <div>Test1</div>
}
export function Test2() {
  return <div>Test2</div>
}
