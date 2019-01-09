//drewkravets/react-native-android another one 
    // jaydp17/react-native-android best one 
pipeline {
    agent { docker { image 'rougeo/react-flutter-sg:v2'
                      args '-u root:sudo'
                     label 'administrator'} 
          }
    stages {
        
        stage('Checkout project') {
            steps {
                            
                
                sh "ls -lat"
                sh "chown -R root *"
            }
    }
        stage('build') {
            steps {
                script {
                    currentBuild.displayName = "The name."
                    currentBuild.description = "The best description."
                }
                sh 'printenv'
                sh 'ls'
                sh 'yarn'
                /*
                sh 'echo y | /sdk/android-sdk-linux/tools/android update sdk  --no-ui '
                sh 'rm -r /sdk/android-sdk-linux/platforms/android-26/'
                sh 'echo y | /sdk/android-sdk-linux/tools//bin/sdkmanager --update'
                sh 'echo y | /sdk/android-sdk-linux/tools//bin/sdkmanager "extras;android;m2repository"'
                sh 'echo y | /sdk/android-sdk-linux/tools//bin/sdkmanager "extras;google;m2repository"'
                sh ' yes | /sdk/android-sdk-linux/tools/bin/sdkmanager --licenses'
                sh 'echo y | /sdk/android-sdk-linux/tools/android update sdk --no-ui --all --filter build-tools-26.0.3,android-26,extra-android-m2repository'
                */
                sh 'mkdir -p android/app/src/main/assets && rm -rf android/app/build'
                
                sh 'react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res'
                 
                sh 'cd android && chmod u+x gradlew && ./gradlew --refresh-dependencies && ./gradlew  assembleDebug && cd ../'
                
            }
        } 
    }
    post { 
        success {
            archiveArtifacts artifacts: 'android/app/**/*.apk'
            cleanWs()
        }
        /*always { 
            
        }*/
        failure {
            cleanWs()
        }
    }
}