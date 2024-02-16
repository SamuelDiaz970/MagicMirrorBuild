/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			position: "top_left",
			hiddenOnStartup: true,
			config: {
				maxmimumEntries: 100,
				broadcastPastEvents: false,
				calendars: [
					{
						color: "red",
						url: "private_calendar_link"
					}
				]
			}
		},
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			title: "",
			config: {
				mode: "month",
				instanceId: "basicCalendar",
				maxEventLines: 5,
				firstDayOfWeek: 0,
				calendarSet:[]
			}
		},
		{
			module: "weather",
			position: "top_center",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Denver",
				locationID: "5419384", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "872f2a3acf6c397a014d7caa52c23a99"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Denver",
				locationID: "5419384", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "872f2a3acf6c397a014d7caa52c23a99"
			}
		},
		{
			module: "MMM-Jast",
			position: "bottom_bar",
			config: {
			  currencyStyle: "code", // One of ["code", "symbol", "name"]
			  fadeSpeedInSeconds: 60,
			  lastUpdateFormat: "HH:mm",
			  maxChangeAge: 1 * 24 * 60 * 60 * 1000,
			  maxWidth: "100%",
			  numberDecimalsPercentages: 1,
			  numberDecimalsValues: 2,
			  displayMode: "horizontal", // One of ["none", "vertical", "horizontal", "table"]
			  showColors: true,
			  showCurrency: true,
			  showChangePercent: true,
			  showChangeValue: false,
			  showChangeValueCurrency: false,
			  showHiddenStocks: false,
			  showLastUpdate: false,
			  showPortfolioValue: false,
			  showPortfolioGrowthPercent: false,
			  showPortfolioGrowth: false,
			  showPortfolioPerformanceValue: false,
			  showPortfolioPerformancePercent: false,
			  showStockPerformanceValue: false,
			  showStockPerformanceValueSum: false,
			  showStockPerformancePercent: false,
			  stocksPerPage: 2, // Only relevant for display mode "table"
			  updateIntervalInSeconds: 300,
			  useGrouping: false,
			  virtualHorizontalMultiplier: 2,
			  stocks: [
				{ name: 'AMD', symbol: 'AMD', quantity: 10},
				{ name: 'NVDA', symbol: 'NVDA', quantity: 15},
				{ name: 'INTC', symbol: 'INTC' },
				{ name: 'Bitcoin', symbol: 'BTC-USD' }
			  ]
			}
		},
		{
			module: 'MMM-AutoDimmer',
			position: 'fullscreen_above',
			header: '',
			// Don't change anything above this line
			config: {
				schedules: [
				{}, // default schedule - 8pm to 7am daily
				{
					// will dim completely from 11pm to 6 am
					maxDim: 1,
					dimTime: 2300,
					brightTime: 600
					// defaults are used for values that are not explicitly set
				}
				]
			}
		},
	]
};
https://finance.yahoo.com/quote/AMD?.tsrc=fin-srch
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
