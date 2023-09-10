git fetch
git add -A
git commit -m"update website"
git push
git subtree push -f --prefix app origin main
pause