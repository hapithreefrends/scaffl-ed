# Git Workflow Guidelines for the Team

This guide provides a comprehensive and beginner-friendly Git workflow for our team. Follow these steps to ensure smooth collaboration and version control.

---

## Table of Contents
[Setup](#setup)
[Key Concepts](#key-concepts)
[Git Workflow Overview](#git-workflow-overview)
[Step-by-Step Instructions](#step-by-step-instructions)
- [Cloning the Repository](#cloning-the-repository)
- [Creating a New Branch](#creating-a-new-branch)
- [Making Changes](#making-changes)
- [Committing Changes](#committing-changes)
- [Pushing Changes](#pushing-changes)
- [Creating a Pull Request](#creating-a-pull-request)
- [Reviewing and Merging](#reviewing-and-merging)
[Best Practices](#best-practices)

---

## Setup
### Install Git
1. Download Git from [git-scm.com](https://git-scm.com/).
2. Follow the installation instructions for your operating system.
3. Verify installation:
   ```bash
   git --version
   ```

### Configure Git
1. Set your name:
   ```bash
   git config --global user.name "Your Name"
   ```

2. Set your email:
   ```bash
   git config --global user.email "your-email@example.com"
   ```

3. Optional: Set your preferred text editor (e.g., VS Code):
   ```bash
   git config --global core.editor "code --wait"
   ```

---

## Key Concepts
- **Repository (Repo)**: A folder containing your project and its version history.
- **Branch**: A separate line of development (e.g., `main`, `develop`, `feature/login`).
- **Commit**: A snapshot of your changes with a descriptive message.
- **Pull Request (PR)**: A request to merge your branch into another branch.
- **Merge**: Combining changes from one branch into another.
- **Remote**: The version of your repository stored on GitHub.

---

## Git Workflow Overview
1. Clone the repository.
2. Create a new branch for your work.
3. Make changes and commit them locally.
4. Push your branch to the remote repository.
5. Open a pull request to merge your changes.
6. Get feedback and make updates if needed.
7. Merge the pull request after approval.

---

## Step-by-Step Instructions
### Cloning the Repository
1. Copy the repository URL from GitHub.
2. Run this command in your terminal:
   ```bash
   git clone <repository-url>
   ```
3. Navigate into the project directory:
   ```bash
   cd <repository-name>
   ```

### Creating a New Branch
1. Check the current branch:
   ```bash
   git branch
   ```
   You should see an asterisk (`*`) next to the active branch (e.g., `main`).

2. Create and switch to a new branch:
   ```bash
   git checkout -b feature/<branch-name>
   ```
   Example:
   ```bash
   git checkout -b feature/login-page
   ```

### Making Changes
1. Edit files in your preferred code editor.
2. Check the status of your changes:
   ```bash
   git status
   ```

### Committing Changes
1. Stage the changes:
   ```bash
   git add .
   ```
   Or stage specific files:
   ```bash
   git add <file-name>
   ```

2. Commit your changes with a message:
   ```bash
   git commit -m "<type>: <description>"
   ```
   Example:
   ```bash
   git commit -m "feat: add login page UI"
   ```

### Pushing Changes
1. Push your branch to the remote repository:
   ```bash
   git push origin feature/<branch-name>
   ```

2. Example:
   ```bash
   git push origin feature/login-page
   ```

### Creating a Pull Request
1. Go to the repository on GitHub.
2. Click the **Pull Requests** tab.
3. Click **New Pull Request**.
4. Select your branch and the target branch (e.g., `develop`).
5. Add a description and submit the pull request.

### Reviewing and Merging
1. Review feedback and make changes if necessary.
2. Ensure your branch is up-to-date with the target branch:
   ```bash
   git pull origin develop
   ```

3. Once approved, merge the pull request into the target branch on GitHub.
4. Delete the branch after merging to keep the repository clean.

---

## Best Practices
- **Commit Often**: Make small, incremental commits with meaningful messages.
- **Pull Regularly**: Stay updated with the latest changes from the remote repository:
  ```bash
  git pull origin develop
  ```
- **Write Clear PR Descriptions**: Explain what your changes do and why they are needed.
- **Resolve Conflicts Promptly**: Follow the GitHub instructions to resolve merge conflicts.
- **Keep Branches Small**: Limit branches to specific features or fixes.

---

For further assistance, refer to [Git Documentation](https://git-scm.com/doc).

