/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


/**
 * @class
 * Initializes a new instance of the ResourceLinkFilter class.
 * @constructor
 * Resource link filter.
 *
 * @member {string} targetId The target Id of the resource.
 * 
 */
export interface ResourceLinkFilter {
  targetId: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceLink class.
 * @constructor
 * The resource link.
 *
 * @member {string} [id] The fully qualified Id of the resource link.
 * 
 * @member {string} [name] The name of the resource link.
 * 
 * @member {object} [properties]
 * 
 * @member {string} [properties.sourceId] The fully qualified source resource
 * Id.
 * 
 * @member {string} [properties.targetId] The fully qualified target resource
 * Id. For example,
 * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite.
 * 
 * @member {string} [properties.notes] The resource link notes.
 * 
 */
export interface ResourceLink {
  id?: string;
  name?: string;
  properties?: ResourceLinkProperties;
}

/**
 * @class
 * Initializes a new instance of the ResourceLinkProperties class.
 * @constructor
 * The resource link properties.
 *
 * @member {string} [sourceId] The fully qualified source resource Id.
 * 
 * @member {string} targetId The fully qualified target resource Id. For
 * example,
 * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite.
 * 
 * @member {string} [notes] The resource link notes.
 * 
 */
export interface ResourceLinkProperties {
  sourceId?: string;
  targetId: string;
  notes?: string;
}


/**
 * @class
 * Initializes a new instance of the ResourceLinkResult class.
 * @constructor
 * List of resource links.
 *
 * @member {string} [nextLink] The URL to get the next set of results.
 * 
 */
export interface ResourceLinkResult extends Array<ResourceLink> {
  nextLink?: string;
}
