FROM mcr.microsoft.com/devcontainers/base:trixie@sha256:a30da48cdf5f9144ff7f2156622e701e752fc258d77ca7bb00120624f1a95938
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
