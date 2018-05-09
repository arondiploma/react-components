/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { Label as TextfieldLabel } from '@zendeskgarden/react-textfields';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.label';

/**
 * Accepts all `<label>` props
 */
const Label = TextfieldLabel.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Label.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

/** @component */
export default Label;
