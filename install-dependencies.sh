#check if brew is install
if [ ! -d $HOME/.brew ] ; then
    mkdir $HOME/.brew && curl -fsSL https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C $HOME/.brew
    mkdir -p /tmp/.$(whoami)-brew-locks
    mkdir -p $HOME/.brew/var/homebrew
    ln -s /tmp/.$(whoami)-brew-locks $HOME/.brew/var/homebrew/locks
    export PATH="$HOME/.brew/bin:$PATH"
    brew update && brew upgrade

    echo "mkdir -p /tmp/.\$(whoami)-brew-locks" >> ~/.zshrc
    echo "export PATH=\"\$HOME/.brew/bin:\$PATH\"" >> ~/.zshrc

    source ~/.zshrc
fi

brew install node
brew install postgresql
brew services start postgres
npm install -g create-react-app
npm install -g typescript
npm install -g create-react-native-app

# curl https://eggerapps.at/postico/download/ > postico.zip
# unzip postico.zip
# curl https://dl.pstmn.io/download/latest/osx > ~/Downloads/postman.zip
# unzip ~/Downloads/postman.zip > ~/Desktop

# curl https://download-test.robomongo.org/mac/robo3t-1.3.1-darwin-x86_64-7419c40.dmg > ~/Downloads/robo3t.dmg
# hdiutil attach ~/Downloads/robo3t.dmg
# cp -R /Volumes/robo3t-1.3.1-darwin-x86_64-7419c40/Robo\ 3T.app ~/Desktop
#install brew if not
#install node and npm
#install mongodb, postgres, angular7, postico, postman