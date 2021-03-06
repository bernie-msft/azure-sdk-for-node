/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A WebLinkedService that uses basic authentication to communicate with an
 * HTTP endpoint.
 *
 * @extends models['WebLinkedServiceTypeProperties']
 */
class WebBasicAuthentication extends models['WebLinkedServiceTypeProperties'] {
  /**
   * Create a WebBasicAuthentication.
   * @member {object} username User name for Basic authentication. Type: string
   * (or Expression with resultType string).
   * @member {object} password The password for Basic authentication.
   * @member {string} [password.value] Value of secure string.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebBasicAuthentication
   *
   * @returns {object} metadata of WebBasicAuthentication
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Basic',
      type: {
        name: 'Composite',
        className: 'WebBasicAuthentication',
        modelProperties: {
          url: {
            required: true,
            serializedName: 'url',
            type: {
              name: 'Object'
            }
          },
          authenticationType: {
            required: true,
            serializedName: 'authenticationType',
            type: {
              name: 'String'
            }
          },
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'Object'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'SecureString'
            }
          }
        }
      }
    };
  }
}

module.exports = WebBasicAuthentication;
