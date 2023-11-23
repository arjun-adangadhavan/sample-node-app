node("slave"){
    stage("clone"){
        git branch: 'main', url: 'https://github.com/arjun-adangadhavan/sample-node-app.git'
        sh "ls"
    }
    stage("docker image"){
        sh "docker build -t dante97/nodejs-app ."
    }
    stage("docker hub"){
        sh "docker login -u dante97 -p Arjun1997//"
        sh "docker push dante97/nodejs-app"
    }
    stage("docker container"){
        sh "docker rm -f nodejs-app"
        sh "docker run -d -p 9000:9000 --name=nodejs-app dante97/nodejs-app "
    }
}
