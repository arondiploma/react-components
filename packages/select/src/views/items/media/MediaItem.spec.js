/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import MediaItem from './MediaItem';

describe('MediaItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<MediaItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
