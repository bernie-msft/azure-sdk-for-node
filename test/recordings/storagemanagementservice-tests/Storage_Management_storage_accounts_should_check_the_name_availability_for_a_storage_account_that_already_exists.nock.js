// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2017-06-01', '*')
  .reply(200, "{\"message\":\"The storage account named testacc2604 is already taken.\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '5ea75850-675e-4045-bd3b-c4784db9fdf7',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': '5ea75850-675e-4045-bd3b-c4784db9fdf7',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024427Z:5ea75850-675e-4045-bd3b-c4784db9fdf7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:44:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2017-06-01', '*')
  .reply(200, "{\"message\":\"The storage account named testacc2604 is already taken.\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '5ea75850-675e-4045-bd3b-c4784db9fdf7',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': '5ea75850-675e-4045-bd3b-c4784db9fdf7',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024427Z:5ea75850-675e-4045-bd3b-c4784db9fdf7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:44:26 GMT',
  connection: 'close' });
 return result; }]];