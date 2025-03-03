---
sidebar_position: 2
---

# Clone a Repository on a VPS

If you're going to deploy your app in a VPN and you're using GitHub or any other version control platform that supports tokens, you can follow this strategy to clone your repository.

## Clone GitHub repository with ssh

### Token Strategy

Creating a token for each project with the required permissions offers several benefits:

- **Improved Security**: Each token has limited scope and can be revoked individually.
- **Granular Control**: Permissions can be finely tuned for each project, minimizing risk.
- **Auditability**: Easier to track which token was used for what action.

### Useful Commands

- Create ssh key:

```sh
# you can use $HOME or ~/

ssh-keygen -C test -f "$HOME/.ssh/id_rsa_test"
cat $HOME/.ssh/id_rsa_test.pub
ls $HOME/.ssh
```

- Get fingerprint:

```sh
ssh-keygen -lf $HOME/.ssh/id_rsa_test.pub
```

- Strat ssh agent (bash):

```sh
eval `ssh-agent -s`
```

- List added keys to ssh agent:

```sh
ssh-add -l
```

- Add to ssh agent:

```sh
ssh-add $HOME/.ssh/id_rsa_test
```

### SSH GitHub Configuration

To configure SSH for GitHub, add the following to your SSH config file (~/.ssh/config):

```sh
# GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_test
```

### Steps to Clone Repository

1. Generate an SSH Key: Follow the commands above to generate an SSH key if you don't already have one.

2. Add the SSH Key to GitHub:

- Go to GitHub.
- Navigate to Settings > SSH and GPG keys.
- Click New SSH key, give it a title, and paste the contents of your id_rsa_test.pub file.

3. Configure SSH: Ensure your SSH configuration (~/.ssh/config) includes the GitHub host settings.

4. Clone the Repository:`

```sh
git clone git@github.com:your-username/your-repository.git
```

### Additional Tips

1. SSH Key Management: Regularly rotate your SSH keys and remove any that are no longer in use.

2. Permissions: Always ensure your SSH key permissions are set correctly (`chmod 600 ~/.ssh/id_rsa_test`).

3. Testing Connectivity: Before cloning, you can test your SSH connection with `ssh -T git@github.com`.
