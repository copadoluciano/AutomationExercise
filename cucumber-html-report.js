const report = require("multiple-cucumber-html-reporter");
report.generate({
  pageTitle:"Test Report",
  reportName:"Test Report Team Performance",
  displayReportTime: true,
  //customMetadata: true,
  displayDuration: true,
 // durationInMS: true,
  jsonDir: "cucumber-json", // ** Path of .json file **//
  reportPath: "./cucumber-json/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: 'Run info',
    data: [
        {label: 'Project', value: 'Custom project'},
        {label: 'Release', value: '1.2.3'},
        {label: 'Cycle', value: 'B11221.34321'},
        {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
        {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
    ]
}
});