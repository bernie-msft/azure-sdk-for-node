// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile2165?api-version=2016-10-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/a9fbc851-e924-4846-ba5a-fa477335296f/profileresults/cdnTestProfile2165?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '97de9959-80c1-4131-99d3-9a65d2e2bf10',
  'x-ms-client-request-id': '5d09e9cc-61be-4fe3-9274-35cbd504be1f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/a9fbc851-e924-4846-ba5a-fa477335296f?api-version=2016-10-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3bb766c5-638b-4687-8b70-8baa598adc97',
  'x-ms-routing-request-id': 'WESTUS2:20161027T225750Z:3bb766c5-638b-4687-8b70-8baa598adc97',
  date: 'Thu, 27 Oct 2016 22:57:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile2165?api-version=2016-10-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/a9fbc851-e924-4846-ba5a-fa477335296f/profileresults/cdnTestProfile2165?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '97de9959-80c1-4131-99d3-9a65d2e2bf10',
  'x-ms-client-request-id': '5d09e9cc-61be-4fe3-9274-35cbd504be1f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/a9fbc851-e924-4846-ba5a-fa477335296f?api-version=2016-10-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3bb766c5-638b-4687-8b70-8baa598adc97',
  'x-ms-routing-request-id': 'WESTUS2:20161027T225750Z:3bb766c5-638b-4687-8b70-8baa598adc97',
  date: 'Thu, 27 Oct 2016 22:57:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/a9fbc851-e924-4846-ba5a-fa477335296f?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'bc09373e-8050-4de6-8612-b55d01dd91cf',
  'x-ms-client-request-id': 'e5b48dad-61e6-429a-8d35-a9fa7eb52340',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9a219388-8ede-46b1-891b-af8302efa4f0',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225821Z:9a219388-8ede-46b1-891b-af8302efa4f0',
  date: 'Thu, 27 Oct 2016 22:58:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup3471/providers/Microsoft.Cdn/operationresults/a9fbc851-e924-4846-ba5a-fa477335296f?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'bc09373e-8050-4de6-8612-b55d01dd91cf',
  'x-ms-client-request-id': 'e5b48dad-61e6-429a-8d35-a9fa7eb52340',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9a219388-8ede-46b1-891b-af8302efa4f0',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225821Z:9a219388-8ede-46b1-891b-af8302efa4f0',
  date: 'Thu, 27 Oct 2016 22:58:20 GMT',
  connection: 'close' });
 return result; }]];