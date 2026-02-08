FROM mcr.microsoft.com/devcontainers/base:dev-alpine3.23@sha256:44a07e62d6ac1a51ed0fe06c1381433a9c7798633fc66d6c9ae55ae3a4bddc51
ARG USERNAME=vscode

RUN bash <<'EOF'
# Install Zsh
aok update
apk add zsh
EOF

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
