# Build stage
FROM maven:3.9-eclipse-temurin-26 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:26-jre

WORKDIR /app

COPY --from=build /app/target/quizapp-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/quizapp-0.0.1-SNAPSHOT.jar"]