FROM eclipse-temurin:21-jdk
EXPOSE 8080
ADD backend/target/MovieLibrary.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
