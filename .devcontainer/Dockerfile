FROM mcr.microsoft.com/devcontainers/javascript-node:dev-24-bullseye@sha256:3965c50ff0473662331ac3c9092b73e1112ffd746c111e8d9b222060a2b8e8ea
ARG USERNAME=vscode

RUN bash <<'EOF'
# Used to persist bash history as per https://code.visualstudio.com/remote/advancedcontainers/persist-bash-history
set -e
mkdir -p /commandhistory
chown -R $USERNAME:$USERNAME /commandhistory
touch /commandhistory/.zsh_history
chown -R $USERNAME:$USERNAME /commandhistory/.zsh_history
echo 'HISTFILE=/commandhistory/.zsh_history' >> /home/$USERNAME/.zshrc
EOF

USER $USERNAME

RUN bash <<'EOF'
# Setup aliases
echo "TIMEFMT=$'time %J: %*E total'" >> ~/.zshrc
echo "alias px='pnpm exec'" >> ~/.zshrc
echo "alias nx='pnpm exec nx'" >> ~/.zshrc
EOF
