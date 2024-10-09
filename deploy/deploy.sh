# shellcheck disable=SC2164
cd ~/Advanced-Frontend-Project
yarn build:prod

rm -rf ~/../var/www/production/html
mv ~/Advanced-Frontend-Project/build ~/../var/www/production/html
