/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
//default code:
// import { Linking } from 'react-native';
// export var launchUri = function (url) { return Linking.openURL(url); };
// //# sourceMappingURL=urlOpener.native.js.map

Object.defineProperty(exports, '__esModule', { value: true });
var react_native_1 = require('react-native');
var safariView = require('react-native-safari-view');

exports.launchUri = function (url) {
	if (react_native_1.Platform.OS == 'ios') {
		return safariView.default
			.isAvailable()
			.then(
				safariView.default.show({
					url: url,
				})
			)
			.catch((error) => {
				react_native_1.Linking.openURL(url);
				// Fallback WebView code for iOS 8 and earlier
			});
	} else {
		return react_native_1.Linking.openURL(url);
	}
};
