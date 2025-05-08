# sit737-2025-prac7p

## Prerequisites
To run this microservice, you need to have the following installed:
- Node.js
- npm

## Installation
- Clone the repository:
git clone https://github.com/s224021028/sit737-2025-prac7p.git

- Install dependencies:
npm install express winston

## Running the Microservice
Start the server with:
node index.js
The server will run on port 3000 by default and log a startup message.

### Docker
To run this microservice from an image, you need to have Docker installed

- Build the image with:
```docker build -t sit737-2025-prac5p-calculator-1 .```

- Start the service with:
```docker-compose up```

- Verify healthcheck of the service with:
```docker inspect --format='{{json .State.Health}}' s224021028/sit737-2025-prac5p-calculator-1```

- Stop the service with:
```docker-compose down```

- Tag and Push the image to a registry (Docker Hub) with:
```docker tag sit737-2025-prac5p-calculator-1 s224021028/sit737-2025-prac5p-calculator-1```<br><br>
```docker push s224021028/sit737-2025-prac5p-calculator-1```

### Google Cloud Artifact Registry
To push the built image to cloud

- Create a repository on Google Artifact Registry with the name <b>s224021028-ar</b>
- Install gcloud CLI

- Authenticate to Google Cloud with:
```gcloud auth login```

- Login to the created repository with:
```docker login -u oauth2accesstoken -p "$(gcloud auth print-access-token)" australia-southeast2-docker.pkg.dev/sit737-25t1-jarjana-785f7a0/s224021028-ar```

- Tag and push the image to Google ACR with:
```docker tag s224021028/sit737-2025-prac5p-calculator australia-southeast2-docker.pkg.dev/sit737-25t1-jarjana-785f7a0/s224021028-ar/s224021028/sit737-2025-prac5p-calculator:latest```<br><br>
```docker push australia-southeast2-docker.pkg.dev/sit737-25t1-jarjana-785f7a0/s224021028-ar/s224021028/sit737-2025-prac5p-calculator:latest```

### Create and Configure a Kubernetes cluster
To create and configure a Kubernetes cluster on GCP

- Create a VPC in the australia-southeast2 region.
- Create a subnet with the address range 10.0.0.0/20
- Create a Kubernetes Standard Cluster with the default node configuration and the created VPC in the australia-southeast2-a zonal region.
- Configure kubectl to point to the created cluster with:
```gcloud container clusters get-credentials cluster-1 --region australia-southeast2-a```
- Verify current context of kubectl with:
```kubectl config current-context```

### Deploy app to Kubernetes GCP
To deploy an app to GCP Kubernetes

- Create the deployment.yaml file
- Create the service.yaml file
- Apply the deployment with:
```kubectl apply -f deployment.yaml```
- Apply the service with:
```kubectl apply -f service.yaml```
- Check the running pod with:
```kubectl get pods```
- Check the service with:
```kubectl get services```
- Check application logs with:
```kubectl logs <pod_name>```
- Access the application running in the pod with the External IP of the LoadBalancer

## Testing the Microservice on LocalHost
To test the microservice, you can:

- Addition: http://localhost:3000/add?num1=5&num2=3
- Subtraction: http://localhost:3000/sub?num1=10&num2=4
- Multiplication: http://localhost:3000/mul?num1=6&num2=7
- Division: http://localhost:3000/div?num1=20&num2=5
- Exponent: http://localhost:3000/exp?num1=2&num2=8
- Square root: http://localhost:3000/sqrt?num1=35
- Modulo: http://localhost:3000/mod?num1=60&num2=9

## Testing the Microservice on Kubernetes Cluster Pod
To test the microservice, you can:

- Addition: http://external-ip:3000/add?num1=5&num2=3
- Subtraction: http://external-ip:3000/sub?num1=10&num2=4
- Multiplication: http://external-ip:3000/mul?num1=6&num2=7
- Division: http://external-ip:3000/div?num1=20&num2=5
- Exponent: http://external-ip:3000/exp?num1=2&num2=8
- Square root: http://external-ip:3000/sqrt?num1=35
- Modulo: http://external-ip:3000/mod?num1=60&num2=9

<b>Check the logs:</b>

- Console output for all logs during development
- logs/error.log for error messages
- logs/combined.log for all non-error messages
