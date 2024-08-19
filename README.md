# Deployment Repository Guide 📦🛠️⚙️

This project is a step-by-step guide to creating a Deployment Repository for Web App projects.

### Local Development

1. Clone the repository:

```
git clone https://github.com/jesusandres31/repository-base-deploy.git
```

2. Instgall dependencies:

```
cd repository-base-deploy
npm install
```

3. Start the project:

```
npm start
```

### Contributing

1. Create a new feature branch:

```
git checkout -b feature/my-feature
```

2. Make your changes and commit them:

```
git commit -am "Add new feature"
```

3. Push your branch to the repository:

```
git push origin feature/my-feature
```

6. Open a pull request against the `master` branch on GitHub.

### Deployment

The project is deployed on Cloudflare Pages and automatically triggers deployment whenever code is merged into the `master` branch. You can access the deployed website at [https://repository-base-deploy.pages.dev/](https://repository-base-deploy.pages.dev/).
