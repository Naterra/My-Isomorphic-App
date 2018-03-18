## App

#### Heroku
<pre><code>git init
heroku login
heroku git:remote -a travel-mern</code></pre>

#### Initial commit
<pre><code>git add .
git commit -am "initial commit"
git push heroku master</code></pre>

#### Verify heroku app

<pre><code>// view heroku logs
heroku logs --tail

// view heroku app
heroku run bash
</code></pre>