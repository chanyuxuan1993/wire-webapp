/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {getMapsUrl} from 'Util/LocationUtil';

ko.components.register('location-asset', {
  template: `
    <div class="location-asset-icon icon-location"></div>
    <div class="location-asset-title" data-bind="text: asset.name" data-uie-name="location-name"></div>
    <a target="_blank" rel="nofollow noopener noreferrer" class="label-xs accent-text" data-bind="attr: {href: getMapsUrl(asset)}, text: t('conversationLocationLink')"></a>
  `,
  viewModel: function({asset}) {
    this.asset = asset;

    this.getMapsUrl = ({latitude, longitude, name, zoom}) => getMapsUrl(latitude, longitude, name, zoom);
  },
});
