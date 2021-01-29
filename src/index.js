import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import keyring from '@polkadot/ui-keyring';
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto';
import BigNumber from "bignumber.js";

const CreateAccount = async ({username, type, ...props}) => {
  const keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });
  const mnemonic = mnemonicGenerate(12);
  try {
    const pair = keyring.addFromMnemonic(mnemonic, { name: username }, type);
    
    console.log(keyring.pairs.length, 'pairs available');
    console.log(pair.meta.name, 'has address', pair.address);
    console.log('has Type', pair.type);
    console.log('Mnemomic', mnemonic);
    
    return { mnemonic, pair };
  } catch (error) {
    console.log(error);
  }
}

const ImportAccount = async ({mnemonic, seed}) => {
  const keyring = new Keyring({ ss58Format: 2 });
  try {
    const pair = keyring.addFromMnemonic(mnemonic);

    console.log(keyring.pairs.length, 'pairs available');
    console.log(pair.meta.name, 'has address', pair.address);
    console.log('has Type', pair.type );

    return { pair };
  } catch(error) {
    console.log(error);
  }
}

const Transfer = async({senderAddress, receiverAddress, senderPassword, amount}) => {
  try {
    const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: wsProvider });
    // const keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });
    await cryptoWaitReady()
    .then(() => {
      keyring.loadAll({ type: 'sr25519', ss58Format: 2 });
    })
    const senderPair = keyring.getPair(senderAddress);
    senderPair.decodePkcs8(senderPassword);
  
    let chainDecimals = (10 ** api.registry.chainDecimals);
    let balance = new BigNumber(chainDecimals * amount);
  
    const transfer = await api.tx.balances
    .transfer(receiverAddress, balance.toFixed())
    .signAndSend(senderPair, (result) => {
      console.log(`Current status is ${result.status}`);
    })
  
    return { transfer };
  }catch(error) {
    console.log(error);
  }
}

export { 
  CreateAccount,
  ImportAccount,
  Transfer
};