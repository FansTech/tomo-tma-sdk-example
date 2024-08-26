import Balance from 'components/Balance'
import BiomerticActions from 'components/BiometricActions'
import Chains from 'components/Chains'
import ConfigActions from 'components/ConfigActions'
import Mfa from 'components/Mfa'
import OnRamp from 'components/OnRamp'
import PaymentPasswdActions from 'components/PaymentPasswdActions'
import SendBTCTransaction from 'components/SendBTCTransaction'
import SendEVMTransaction from 'components/SendEVMTransaction'
import SendSOLANATransaction from 'components/SendSOLANATransaction'
import SendTONTransaction from 'components/SendTONTransaction'
import SwapTokens from 'components/SwapTokens'
import TelegramActions from 'components/TelegramActions'
import TransactionActions from 'components/TransactionActions'
import Transactions from 'components/Transactions'
import UserInfoActions from 'components/UserInfoActions'
import UserTokens from 'components/UserTokens'
import { TomoProvider } from 'tomo-tg-wallet-sdk'

const Home = () => {
  const tmaUserid = '1724167815691164884'
  const tmaKey =
    '9eef2af56006385f28723f7c8241ffe35535a45172f7ddcf80e63a5a790ac485'

  return (
    <TomoProvider tmaid={tmaUserid} tmakey={tmaKey} env={'main'}>
      <ConfigActions />
      <TelegramActions />
      <UserInfoActions />
      <PaymentPasswdActions />
      <BiomerticActions />
      <Mfa />
      <TransactionActions />
      <SendEVMTransaction />
      <SendSOLANATransaction />
      <SendBTCTransaction />
      <SendTONTransaction />
      <Transactions />
      <Chains />
      <Balance />
      <SwapTokens />
      <OnRamp />
      <UserTokens />
    </TomoProvider>
  )
}

export default Home
