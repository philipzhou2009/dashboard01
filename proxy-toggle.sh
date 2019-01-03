#!/bin/zsh

# proxySwitch=$1

if [ "$1" = "on" ] ; then
    npm config set proxy http://philip_zhou:PhZhou@12345@proxy2.sq.com.sg:80
    npm config set https-proxy http://philip_zhou:PhZhou@12345@proxy2.sq.com.sg:80
    git config http.proxy http://philip_zhou:PhZhou@12345@proxy2.sq.com.sg:80
else
    npm config rm proxy
    npm config rm https-proxy
    git config http.proxy
fi
