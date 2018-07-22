# EJS React

Use Node server to render EJS in `index.html` created by Create React App.

# Live

Hosted on [AWS](http://ec2-13-59-53-118.us-east-2.compute.amazonaws.com).

# How it works

The Node server is run and maintained by [PM2](https://pm2.io/doc/en/runtime/overview) on PORT 3000, and serves every requested file.

Nginx acts as a reverse proxy, passing every request from PORT 80 to the Node server.

# Maintenance

To apply updates pushed to the repository, `ssh` into the EC2 instance and then:

```bash
$ cd /home/ec2-user/ejs_react/
$ git pull
$ yarn build
$ sudo cp nginx.conf /etc/nginx/nginx.conf
$ sudo service nginx restart
$ pm2 restart all
```

# License

It's free! See the [LICENSE](./LICENSE) file for details.
