pipeline {
    agent any

    tools{
        gradle 'gradle-6.8.3'
    }
    environment{
        DOCKERHUB_CREDENTIALS = credentials('gabustoledo-dockerhub')
    }

    stages {

        stage('Docker Build'){
            steps{
                dir("/var/lib/jenkins/workspace/frontend/frontend"){
                    sh 'docker build -t gabustoledo/repo-front .'
                }        
            }
        }
        stage('Login'){
            steps{
                sh  'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Docker Hub'){
            steps{
                dir("/var/lib/jenkins/workspace/frontend/frontend"){
                    sh 'docker push gabustoledo/repo-front'
                }
            }
        }
    }
}