---
sidebar_position: 1
---

# Deploy App in a VPS

## Clone GitHub repository with ssh

```sh
# you can use $HOME or ~/

# create ssh key:
ssh-keygen -C test -f "$HOME/.ssh/id_rsa_test"
cat $HOME/.ssh/id_rsa_test.pub
ls $HOME/.ssh

# compare a fingerprint:
ssh-keygen -lf $HOME/.ssh/id_rsa_test.pub

# strat ssh agent (bash):
eval `ssh-agent -s`

# list added keys to ssh agent
ssh-add -l

# add to ssh agent:
ssh-add $HOME/.ssh/id_rsa_test

# ssh config file:
# ~/.ssh/config
```

```sh
# GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_test
```

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
