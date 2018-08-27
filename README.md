## App

#### Run Development Version on localhost:3000
<pre><code>npm run dev</code></pre>

#### Make a Build 
it will generate a build_server folder
<pre><code>npm run prod:compile_server</code></pre>



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