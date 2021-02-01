[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
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

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install selendra-api
  ```

### Usage
  ```
  import { CreateAccount, ImportAccount, Transfer } from 'selendra-api';

  const res = CreateAccount({ username, type });
  const res = ImportAccount({ mnemonic, seed, type });
  const res = Transfer({ senderAddress, receiverAddress, senderPassword, amount });
  ```