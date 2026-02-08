FROM mcr.microsoft.com/devcontainers/base:alpine3.23@sha256:2ff82b3874eec11a87738d76d30c087bcd389499ea67af4505b50adea8469a9c
# FROM mcr.microsoft.com/devcontainers/base:trixie
ARG USERNAME=vscode

RUN bash <<'EOF'
mkdir -p /commandhistory
touch /commandhistory/.zsh_history
chown -R $USERNAME:$USERNAME /commandhistory
echo 'HISTFILE=/commandhistory/.zsh_history' >> /home/$USERNAME/.zshrc
EOF

USER $USERNAME

RUN bash <<'EOF'
echo "TIMEFMT=$'time %J: %*E total'" >> ~/.zshrc
echo "alias px='pnpm exec'" >> ~/.zshrc
echo "alias nx='pnpm exec nx'" >> ~/.zshrc
EOF
