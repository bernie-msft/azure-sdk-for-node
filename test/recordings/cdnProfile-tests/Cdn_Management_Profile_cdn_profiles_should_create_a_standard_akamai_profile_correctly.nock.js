// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile7789\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5af6fc96-3a61-4199-8900-9d124632ccb3',
  'x-ms-client-request-id': 'aee86ba1-cc27-49f2-93ef-696886a6d2a7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/0ed55386-022e-479a-ad63-d411ff384b84?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '317e9cb2-815e-404b-9681-e989a5932680',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225903Z:317e9cb2-815e-404b-9681-e989a5932680',
  date: 'Thu, 27 Oct 2016 22:59:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile7789\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5af6fc96-3a61-4199-8900-9d124632ccb3',
  'x-ms-client-request-id': 'aee86ba1-cc27-49f2-93ef-696886a6d2a7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/0ed55386-022e-479a-ad63-d411ff384b84?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '317e9cb2-815e-404b-9681-e989a5932680',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225903Z:317e9cb2-815e-404b-9681-e989a5932680',
  date: 'Thu, 27 Oct 2016 22:59:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/0ed55386-022e-479a-ad63-d411ff384b84?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '292dcfbb-99de-4830-863d-5c1f064b42ba',
  'x-ms-client-request-id': '8c3d1fae-d637-40db-b2e0-c9a12eae7cda',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1617861f-3414-40e5-ae6e-b21b00deef85',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225933Z:1617861f-3414-40e5-ae6e-b21b00deef85',
  date: 'Thu, 27 Oct 2016 22:59:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/0ed55386-022e-479a-ad63-d411ff384b84?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '292dcfbb-99de-4830-863d-5c1f064b42ba',
  'x-ms-client-request-id': '8c3d1fae-d637-40db-b2e0-c9a12eae7cda',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1617861f-3414-40e5-ae6e-b21b00deef85',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225933Z:1617861f-3414-40e5-ae6e-b21b00deef85',
  date: 'Thu, 27 Oct 2016 22:59:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile7789\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '402',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'c9838257-560a-4fda-8dc1-d3247c687c3e',
  'x-ms-client-request-id': '0a2462cc-175b-4be7-b7f2-bc486735710d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cae3e702-421d-4e63-b102-41538d727db6',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225934Z:cae3e702-421d-4e63-b102-41538d727db6',
  date: 'Thu, 27 Oct 2016 22:59:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile7789\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile7789\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '402',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'c9838257-560a-4fda-8dc1-d3247c687c3e',
  'x-ms-client-request-id': '0a2462cc-175b-4be7-b7f2-bc486735710d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cae3e702-421d-4e63-b102-41538d727db6',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225934Z:cae3e702-421d-4e63-b102-41538d727db6',
  date: 'Thu, 27 Oct 2016 22:59:34 GMT',
  connection: 'close' });
 return result; }]];