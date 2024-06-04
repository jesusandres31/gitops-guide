---
sidebar_position: 2
---

# Create a Deployment Repository

To create the Deployment Repository, follow these steps.

Let's suppose your app is called "Test App".

### Monorepo Setup

If you are using a monorepo, where all the source code is managed under the same version control, and for example, you have it locally in a folder named "test-app" with separate folders for the backend and frontend:

```sh
someusr@localhost:~/projects$ cd test-app/
someusr@localhost:~/projects/test-app$ ls -la
drwxr-xr-x .git # Version control for the entire source code
drwxr-xr-x backend
drwxr-xr-x frontend
```

You can create a "deployment" folder within this structure:

```sh
someusr@localhost:~/projects/test-app$ mkdir deployment
someusr@localhost:~/projects/test-app$ ls -la
drwxr-xr-x .git
drwxr-xr-x backend
drwxr-xr-x deployment
drwxr-xr-x frontend
```

### Multirepo Setup

If you are using a multirepo setup, where each part of the project is managed with its own version control, it might look like this:

```sh
someusr@localhost:~/projects$ cd test-app/
someusr@localhost:~/projects/test-app$ ls -la
drwxr-xr-x test-backend
drwxr-xr-x test-frontend
# No .git folder here; each repo (test-backend and test-frontend) has its own .git folder
```

In this case, you can create a new repository to manage all the deployment code separately:

```sh
someusr@localhost:~/projects/test-app$ mkdir test-deployment
someusr@localhost:~/projects/test-app$ ls -la
drwxr-xr-x test-backend
drwxr-xr-x test-deployment
drwxr-xr-x test-frontend
someusr@localhost:~/projects/test-app$ cd test-deployment
someusr@localhost:~/projects/test-app/test-deployment$ git init
```

Then, create your repository on your chosen repository management platform (GitHub, GitLab, Bitbucket, etc.) and link the remote with your local repository.

```sh
someusr@localhost:~/projects/test-app/test-deployment$ git remote add origin <your-remote-repo-url>
```

This structure will help you organize your deployment code effectively whether you are using a monorepo or multirepo approach.
