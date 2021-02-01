import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate } from '@polkadot/util-crypto';
import BigNumber from "bignumber.js";

const CreateAccount = async ({username, type}) => {
  const keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });
  const mnemonic = mnemonicGenerate(12);
  try {
    const pair = keyring.addFromUri(mnemonic, { name: username }, type);
    
    console.log(keyring.pairs.length, 'pairs available');
    console.log(pair.meta.name, 'has address', pair.address);
    console.log('has Type', pair.type);
    console.log('Mnemomic', mnemonic);
    
    return { mnemonic, pair };
  } catch (error) {
    console.log(error);
  }
}

const ImportAccount = async ({mnemonic, seed, type}) => {
  const keyring = new Keyring({ ss58Format: 2 });
  try {
    const pair = keyring.addFromUri(mnemonic, {} ,type);

    console.log(keyring.pairs.length, 'pairs available');
    console.log(pair.meta.name, 'has address', pair.address);
    console.log('has Type', pair.type );

    return { pair };
  } catch(error) {
    console.log(error);
  }
}

const Transfer = async({receiverAddress, rawSeed, amount}) => {
  try {
    const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });
    
    const senderPair = keyring.createFromUri(rawSeed);
  
    let chainDecimals = (10 ** api.registry.chainDecimals);
    let balance = new BigNumber(amount * chainDecimals);
  
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