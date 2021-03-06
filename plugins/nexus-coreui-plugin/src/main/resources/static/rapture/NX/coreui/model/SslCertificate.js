/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * Ssl Certificate model.
 *
 * @since 3.0
 */
Ext.define('NX.coreui.model.SslCertificate', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id', type: 'string'},
    {name: 'fingerprint', type: 'string'},
    {name: 'pem', type: 'string'},
    {name: 'serialNumber', type: 'string'},
    {name: 'subjectCommonName', type: 'string'},
    {name: 'subjectOrganization', type: 'string'},
    {name: 'subjectOrganizationalUnit', type: 'string'},
    {name: 'issuerCommonName', type: 'string'},
    {name: 'issuerOrganization', type: 'string'},
    {name: 'issuerOrganizationalUnit', type: 'string'},
    {name: 'issuedOn', type: 'int'},
    {name: 'expiresOn', type: 'int'},
    {name: 'inTrustStore', type: 'boolean'}
  ]
});
