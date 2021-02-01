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
  ```
  import { CreateAccount, ImportAccount, Transfer } from 'selendra-api';

  const res = CreateAccount({ username, type });
  const res = ImportAccount({ mnemonic, seed, type });
  const res = Transfer({ senderAddress, receiverAddress, senderPassword, amount });
  ```