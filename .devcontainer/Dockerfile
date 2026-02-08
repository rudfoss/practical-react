FROM mcr.microsoft.com/devcontainers/base:noble@sha256:ad92cae7c25cafb1e7bb5aa7520b81be85fac022ea92e404b94a11127631fae3
ARG USERNAME=vscode

# Install zsh
RUN bash <<'EOF'
rm -rf /root/.oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
EOF

RUN bash <<'EOF'
set -e
apt-get update
apt-get install -y sshfs
mkdir -p /commandhistory
touch /commandhistory/.zsh_history
chown -R $USERNAME:$USERNAME /commandhistory/.zsh_history
echo 'HISTFILE=/commandhistory/.zsh_history' >> /home/$USERNAME/.zshrc
EOF

USER $USERNAME

RUN bash <<'EOF'
echo "TIMEFMT=$'time %J: %*E total'" >> ~/.zshrc
echo "alias px='pnpm exec'" >> ~/.zshrc
echo "alias nx='pnpm exec nx'" >> ~/.zshrc
EOF
