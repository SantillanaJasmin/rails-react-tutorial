FROM ruby:2.5.9

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && apt-get install -y postgresql-client nodejs yarn

# Create non-root user
ARG DOCKER_UID=9999
ARG DOCKER_GID=9999

RUN addgroup --gid $DOCKER_GID app
RUN adduser --disabled-password --gecos '' --uid $DOCKER_UID --gid $DOCKER_GID app

# bundle install
WORKDIR /home/app/myapp
COPY Gemfile Gemfile.lock /home/app/myapp/
RUN bundle install

RUN chown -R app:app /home/app

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]