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

/**
 * @class
 * Initializes a new instance of the ResourceReference class.
 * @constructor
 * Represents a reference to another resource.
 *
 * @member {string} id Resource URI.
 *
 * @member {string} [type] Resource type qualifier.
 *
 * @member {string} [name] Resource name.
 *
 * @member {string} kind Polymorphic Discriminator
 *
 */
class ResourceReference {
  constructor() {
  }

  /**
   * Defines the metadata of ResourceReference
   *
   * @returns {object} metadata of ResourceReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceReference',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'ResourceReference',
        className: 'ResourceReference',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceReference;