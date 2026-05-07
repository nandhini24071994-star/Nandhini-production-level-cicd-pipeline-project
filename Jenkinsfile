pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t nandhini-devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop nandhini-container || true
                docker rm nandhini-container || true
                docker run -d -p 3000:3000 --name nandhini-container nandhini-devops-app
                '''
            }
        }
    }
}
