🏏 Royal Challengers Glory

A production-style DevOps CI/CD project for deploying a React web application using Docker, Jenkins, Ansible, Kubernetes, Helm, AWS EC2, Amazon S3, and Docker Hub.

The project demonstrates how source-code changes can be automatically built into a Docker image, pushed to a container registry, and deployed to a Kubernetes environment through an automated CI/CD pipeline.

---

🚀 Project Overview

This project implements an automated deployment workflow:

Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins
    │
    ├── Clone Repository
    │
    ├── Trigger Ansible
    │
    ▼
Build Server
    │
    ├── Clone Latest Code
    ├── Build Docker Image
    ├── Tag Image with Git Commit ID
    ├── Push Image to Docker Hub
    └── Store Commit ID in Amazon S3
    │
    ▼
Deployment Server
    │
    ├── Retrieve Image Version from S3
    ├── Update Helm values
    ├── Commit & Push Configuration
    └── Helm Upgrade
    │
    ▼
Kubernetes Cluster
    │
    ▼
React Application

---

🛠️ Technologies Used

Technology| Purpose
Git & GitHub| Source code management
Jenkins| CI/CD pipeline automation
Ansible| Configuration and deployment automation
Docker| Containerization
Docker Hub| Container image registry
Kubernetes| Container orchestration
Helm| Kubernetes application deployment
AWS EC2| Build and deployment infrastructure
Amazon S3| Store and exchange Git commit/version information
Nginx| Serve the production React application
React| Frontend application
Bash| Automation scripts

---

📁 Repository Structure

royal-challengers-glory/
│
├── ansible/
│   ├── docker-build.yml
│   └── k8s-script.yml
│
├── bash/
│   ├── docker.sh
│   └── k8s.sh
│
├── code/
│   ├── public/
│   ├── src/
│   ├── Jenkinsfile
│   ├── rcb-docfile
│   ├── package.json
│   └── ...
│
├── react-chart/
│   └── Kubernetes Helm chart
│
└── README.md

The repository currently contains separate Ansible automation for the build and deployment stages, Bash scripts for Docker/Kubernetes operations, the React application, a Jenkinsfile, and a Helm chart.

---

🔄 CI/CD Workflow

1. Developer pushes code

A developer pushes changes to the GitHub repository.

git add .
git commit -m "Update application"
git push origin main

---

2. Jenkins starts the pipeline

Jenkins executes the pipeline defined in:

code/Jenkinsfile

The pipeline contains three major stages:

1. Cleanup and clone repository
2. Build Docker image
3. Deploy application

The Jenkinsfile invokes the Ansible playbooks remotely to perform the build and deployment operations.

---

3. Ansible Build Automation

The build process is automated using:

ansible/docker-build.yml

The playbook:

- Removes the previous working directory
- Creates a new working directory
- Clones the GitHub repository
- Sets permissions for the Docker build script
- Executes "docker.sh"

This removes the need to manually perform the Docker build process on the build server.

---

4. Docker Image Creation

The "docker.sh" script:

1. Clones the latest application code
2. Gets the current Git commit ID
3. Builds the Docker image
4. Uses the Git commit ID as the image tag
5. Pushes the image to Docker Hub
6. Stores the commit ID in Amazon S3

Example:

rcb-nginx:<git-commit-id>

Using the Git commit ID as the image tag provides a direct relationship between a deployed container image and the exact source-code version used to build it.

---

🐳 Docker

The application uses a multi-stage Docker build.

Build stage

FROM node:18 AS build

The React application is installed and compiled using:

npm install
npm run build

Production stage

The generated React files are copied into an Nginx container:

FROM nginx:alpine

The application is served through Nginx on port "80".

This approach keeps the production container smaller because the Node.js build environment is not required at runtime.

---

☸️ Kubernetes Deployment

The application is deployed to Kubernetes using Helm.

The deployment process is automated through:

ansible/k8s-script.yml
bash/k8s.sh
react-chart/

The deployment script:

1. Retrieves the previous image version from Amazon S3
2. Retrieves the new image version
3. Updates the Helm configuration
4. Commits the updated configuration
5. Pushes the change to GitHub
6. Updates the stored version in S3
7. Runs "helm upgrade"

This allows the Kubernetes deployment to consume the newly built image version automatically.

---

☁️ AWS Infrastructure

The project uses AWS services as part of the deployment architecture.

EC2

EC2 instances are used for:

- Jenkins
- Docker image build operations
- Kubernetes/deployment operations

Amazon S3

S3 is used to store Git commit/version information.

Conceptually:

Build Server
     │
     │ New Git Commit ID
     ▼
   S3 Bucket
     │
     │ New Version
     ▼
Deployment Server
     │
     ▼
Helm Upgrade

---

🔐 Image Versioning

Instead of relying only on a generic tag such as:

latest

the project uses the Git commit ID:

rcb-nginx:<commit-id>

For example:

rcb-nginx:a82f91c

This makes image versions traceable to specific source-code commits.

---

⚙️ Automation Components

Jenkins

Responsible for orchestrating the CI/CD workflow.

Ansible

Responsible for executing build and deployment automation.

Bash

Responsible for Docker image creation and Kubernetes/Helm update operations.

Docker

Packages the React application into a portable container.

Kubernetes

Runs the containerized application.

Helm

Manages the Kubernetes deployment configuration.

---

🧪 Run the React Application Locally

Clone the repository:

git clone https://github.com/adya1554/royal-challengers-glory.git
cd royal-challengers-glory/code

Install dependencies:

npm install

Start the development server:

npm run dev

The project uses a React/Vite-based frontend stack.

---

🐳 Build Docker Image Manually

From the "code" directory:

docker build -t rcb-nginx:local -f rcb-docfile .

Run the container:

docker run -d -p 8080:80 rcb-nginx:local

Open:

http://localhost:8080

---

🔧 Prerequisites

Before running the complete CI/CD pipeline, make sure the environment has:

- Git
- Docker
- Jenkins
- Ansible
- AWS CLI
- AWS EC2
- Amazon S3
- Kubernetes
- Helm
- Docker Hub account
- GitHub repository access

---

🔑 Configuration

The following values should be configured through Jenkins credentials, environment variables, or secret management rather than hard-coded into scripts:

AWS credentials
Docker Hub credentials
GitHub credentials/token
EC2 SSH credentials
Kubernetes credentials
S3 bucket information

Never commit secrets directly to GitHub.

Example:

export GIT_TOKEN=<your-token>

Use Jenkins Credentials or another secret-management solution for production environments.

---

📊 Key DevOps Concepts Demonstrated

This project demonstrates practical understanding of:

- Source Code Management
- CI/CD
- Infrastructure automation
- Configuration management
- Containerization
- Container image versioning
- Docker registry
- Kubernetes deployment
- Helm
- AWS EC2
- Amazon S3
- Remote automation
- Bash scripting
- Ansible Playbooks
- Jenkins Pipeline
- Git-based deployment workflows

---

🎯 Project Objective

The primary objective of this project is to automate the application delivery lifecycle:

Code Change
     ↓
GitHub
     ↓
Jenkins
     ↓
Ansible
     ↓
Docker Build
     ↓
Docker Hub
     ↓
Version Tracking
     ↓
Helm
     ↓
Kubernetes
     ↓
Application Deployment

The project demonstrates how multiple DevOps tools can be integrated to reduce manual deployment steps and create a repeatable application delivery process.

---

👨‍💻 Author

Aditya Magadum

GitHub:
https://github.com/adya1554

---

⭐ Project Status

This is a learning/project implementation demonstrating an end-to-end DevOps CI/CD workflow using cloud infrastructure, containers, automation, and Kubernetes.
