FROM node:stretch-slim
MAINTAINER Usemtech <docker@usem.tech>

# Install Bower & Grunt
RUN npm install -g mocha && \
    npm install -g chai && \
    npm install -g chai-http && \
    npm install -g mochawesome

# Define working directory.
WORKDIR /app

ADD . .


# Define default command.
CMD ["bash"]