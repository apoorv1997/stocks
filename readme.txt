To run the front end:- 
1) open the folder 'stocks' in terminal and run the command 'npm i' to install all the dependencies.
2) run the command 'ng serve' to serve the front end on the browser and open http://localhost:4200.

To run the backend:-
1) open the folder 'stocks/backend' in terminal and run the command 'npm i' to install all the dependencies.
2) change directory into 'app' and run the command 'node index.js' to run the backend service. 
3) default port for backend is 3000. To see the documentation for the backend API's, open the folder 'apidoc' and open file 'index.html'
    in the browser.


Features of app:-
1) default dashboard view which consists of limited stocks initially, but as the user changes the current page, API is called 
to serve more and more stocks on the page.
2) On clicking 'see details' on a particular stock, another view with the variation of stock price in 'high', 'low', 'open' and 'close'
are shown in a line chart.
3) on clicking the symbol on top right corner on a particular stock, it shows stocks with only that symbol.
4) filter options are provided on top left corner, it shows stocks with decreasing values of any particular option.
