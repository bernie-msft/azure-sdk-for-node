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
 * The list of cognitive services accounts operation response.
 *
 */
class CognitiveServicesAccountEnumerateSkusResult {
  /**
   * Create a CognitiveServicesAccountEnumerateSkusResult.
   * @member {array} [value] Gets the list of Cognitive Services accounts and
   * their properties.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CognitiveServicesAccountEnumerateSkusResult
   *
   * @returns {object} metadata of CognitiveServicesAccountEnumerateSkusResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CognitiveServicesAccountEnumerateSkusResult',
      type: {
        name: 'Composite',
        className: 'CognitiveServicesAccountEnumerateSkusResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CognitiveServicesResourceAndSkuElementType',
                  type: {
                    name: 'Composite',
                    className: 'CognitiveServicesResourceAndSku'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CognitiveServicesAccountEnumerateSkusResult;
