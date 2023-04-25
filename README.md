# Ecomerce_node_js

# command git

> git checkout -b branch

> git status

> git add file

> git add -A

> git git commit -m " "

> git merge branch

> git push -u origin

> npm run lint:fix   to fix errors   or ctr+shift+t

 >npm run lint  to show errors

 >nmp test for make http testing

 >git branch -a
# The EditorConfig

  ```
  project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.
```



 # EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2


# Express session

[All about session and cokkies Guide](https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/)


# Passport
```

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
```
[All about passport use as Guide](https://www.npmjs.com/package/passport)


# The app.locals
```
object is a JavaScript object, and its properties are local variables within the application.

=> dima kaytsifto fdakhale app f les routes dyalha
kanhtajoha mnin tatkon 3andna chi obj dima kayt3awed yamkan ndiroh ghi mara wahda wghayb9a dim aytsafit

exp

app.locals.title
// => 'My App'
app.locals.email
// => 'me@myapp.com'

```
# res.locals
```
Use this property to set variables accessible in templates rendered with res.render. The variables set on res.locals are available within a single request-response cycle, and will not be shared between requests.

exp

app.use((req, res, next) => {
  // Make `user` and `authenticated` available in templates
  res.locals.user = req.user
  res.locals.authenticated = !req.user.anonymous
  next()
})
```

# morgan
```
HTTP request logger middleware for node.js

instalation=>    npm i morgan
```



