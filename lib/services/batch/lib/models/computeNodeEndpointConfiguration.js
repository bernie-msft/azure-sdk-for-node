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
 * @summary The endpoint configuration for the compute node.
  *
 */
class ComputeNodeEndpointConfiguration {
  /**
   * Create a ComputeNodeEndpointConfiguration.
   * @member {array} inboundEndpoints The list of inbound endpoints that are
   * accessible on the compute node.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputeNodeEndpointConfiguration
   *
   * @returns {object} metadata of ComputeNodeEndpointConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeNodeEndpointConfiguration',
      type: {
        name: 'Composite',
        className: 'ComputeNodeEndpointConfiguration',
        modelProperties: {
          inboundEndpoints: {
            required: true,
            serializedName: 'inboundEndpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InboundEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'InboundEndpoint'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeNodeEndpointConfiguration;