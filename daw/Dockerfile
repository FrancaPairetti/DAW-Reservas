FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ./target/daw-0.0.1-SNAPSHOT.jar java-app.jar
ENTRYPOINT ["java","-jar", "/java-app.jar"]