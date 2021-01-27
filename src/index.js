import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate } from '@polkadot/util-crypto';

const CreateAccount = async ({username, type, ...props}) => {
  const keyring = new Keyring({ ss58Format: 2 });
  const mnemonic = mnemonicGenerate();
  try {
    const pair = keyring.addFromUri(mnemonic, { name: username }, type);
      
    console.log(keyring.pairs.length, 'pairs available');
    console.log(pair.meta.name, 'has address', pair.address);
    console.log('has Type', pair.type );
    
    return { mnemonic, pair };
  } catch (error) {
    console.log(error);
  }
}

export { 
  CreateAccount,
};