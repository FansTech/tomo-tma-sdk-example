import * as React from 'react'
import { useTomo } from 'tomo-tg-wallet-sdk'
export default function UserInfoActions() {
  const { onLogin, onLogout } = useTomo()
  const [link, setLink] = React.useState('')

  const onReset = () => {
    window.localStorage.clear()
    window.sessionStorage.clear()
    window.location.href = window.location.origin
  }

  return (
    <div>
      <div className={'module-title'}>UserInfo Actions</div>
      <div
        style={{
          display: 'flex',
          gap: '10px'
        }}
      >
        <button
          onClick={async () => {
            setLink(await onLogin())
          }}
        >
          Login
        </button>
        <button onClick={onLogout}>Logout</button>
        <button onClick={onReset}>Reset env</button>
        {link && (
          <button
            onClick={() => {
              window.open(link)
            }}
          >
            Open Telegram
          </button>
        )}
      </div>
    </div>
  )
}
