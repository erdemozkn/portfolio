# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:22-jdk-jammy

# Set the working directory
WORKDIR /app

# Ensure the target directory exists before copying
RUN mkdir -p /app/target

# Copy the JAR file into the container (handle missing files)
COPY target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
