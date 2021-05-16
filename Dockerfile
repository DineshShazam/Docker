# declare the base image 
FROM alpine

# mention the run commands
RUN apk add --update redis

# final executing CMD command
CMD ["redis-server"]