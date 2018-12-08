//Open new Terminal window.

//Run nvm installer
//with either curl or wget. 

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

//reload the shell by running
source ~/.bashrc

// Or Open a New TAB

// Verify installation
command -v nvm

// See the full list of available versions by running
nvm ls-remote

// check version
node -v || node --version

// list installed versions of node (via nvm)
nvm ls

// install specific version of node
nvm install 8.9.4

// set default version of node
nvm alias default 6.9.2

// switch version of node
nvm use 6.9.1
