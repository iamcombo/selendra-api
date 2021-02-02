<p align="center">
  <h3 align="center">README</h3>

  <p align="center">
    <br />
    <a href="https://github.com/iamcombo/selendra-api"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation
* npm
  ```sh
  npm install selendra-api
  ```
* yarn
  ```sh
  yarn add selendra-api
  ```

### Usage
* import
  ```sh
  import { CreateAccount, ImportAccount, Transfer } from 'selendra-api';
  ```
* Create Account
  ```sh
  const res = await CreateAccount({ username, type });
  console.log(res.mnemonic, res.pair);
  ```
* Import Account
  ```sh
  const res = await ImportAccount({ mnemonic, seed, type });
  console.log(res.pair);
  ```
* Transfer
  ```sh
  const res = await Transfer({ rawSeed, receiverAddress, amount });
  ```