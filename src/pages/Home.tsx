import Balance from 'components/Balance'
import BiomerticActions from 'components/BiometricActions'
import Chains from 'components/Chains'
import ConfigActions from 'components/ConfigActions'
import Mfa from 'components/Mfa'
import OnRamp from 'components/OnRamp'
import SendBTCTransaction from 'components/SendBTCTransaction'
import SendEVMTransaction from 'components/SendEVMTransaction'
import SendSOLANATransaction from 'components/SendSOLANATransaction'
import SendTONTransaction from 'components/SendTONTransaction'
import SwapTokens from 'components/SwapTokens'
import TelegramActions from 'components/TelegramActions'
import Transactions from 'components/Transactions'
import UserInfoActions from 'components/UserInfoActions'
import UserTokens from 'components/UserTokens'
import { TomoProvider } from 'tomo-tg-wallet-sdk'
import TradePassword from 'components/TradePassword';
import { useState } from 'react';

const Home = () => {
  const tmaUserid = '1724167815691164884'
  const tmaKey =
    '9eef2af56006385f28723f7c8241ffe35535a45172f7ddcf80e63a5a790ac485'

  const [action, setAction] = useState('BiomerticActions');
  const actionList = [
    'BiomerticActions',
    'Mfa',
    'SendEVMTransaction',
    'SendSOLANATransaction',
    'SendBTCTransaction',
    'SendTONTransaction',
    'Transactions',
    'Balance',
    'SwapTokens',
    'OnRamp',
    'UserTokens',
    'TradePassword',
  ];

  return (
    <TomoProvider tmaid={tmaUserid} tmakey={tmaKey} env={'main'}>
      <ConfigActions />
      <TelegramActions />
      <UserInfoActions />
      {actionList.map((item, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              value={item}
              name={'action'}
              onChange={() => {
                setAction(item);
              }}
              checked={action == item}
            />
            {item}
          </label>
        );
      })}
      {action == 'BiomerticActions' && <BiomerticActions />}
      {action == 'Mfa' && <Mfa />}
      {action == 'SendEVMTransaction' && <SendEVMTransaction />}
      {action == 'SendSOLANATransaction' && <SendSOLANATransaction />}
      {action == 'SendBTCTransaction' && <SendBTCTransaction />}
      {action == 'SendTONTransaction' && <SendTONTransaction />}
      {action == 'Transactions' && <Transactions />}
      {action == 'Balance' && <Balance />}
      {action == 'SwapTokens' && <SwapTokens />}
      {action == 'OnRamp' && <OnRamp />}
      {action == 'UserTokens' && <UserTokens />}
      {action == 'TradePassword' && <TradePassword />}
      <div className='h-[80px]'></div>
    </TomoProvider>
  )
}

export default Home
