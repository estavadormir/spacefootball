Spacefootball challenge

Using NextJS13 with experimental App dir with Tailwind and in Typescript
- Used this palette https://colorhunt.co/palette/dddddd22283130475ef05454
- used @tailwindcss/forms 
- used https://github.com/iuccio/CSVtoJSON to read from CSV


To run it with docker do the following:

cd to the folder

docker build -t spacefootball .

docker run -p 3000:3000 spacefootball


Otherwise:

npm run build
npm run start

or if you'd like to tweak this

npm run dev


Left to do:
- a 404 page
- make use of NextJS layouts https://nextjs.org/blog/next-13#layouts
- Hover effect on table headers
- Assign random images to clubs
- a search functionality (by club and player)
- implement tests
