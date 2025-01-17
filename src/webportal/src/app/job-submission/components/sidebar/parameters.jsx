/*
 * Copyright (c) Microsoft Corporation
 * All rights reserved.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, {useState} from 'react';
import {isEmpty} from 'lodash';
import {Stack} from 'office-ui-fabric-react';
import PropTypes from 'prop-types';
import {Hint} from './hint';
import {SidebarCard} from './sidebar-card';
import {KeyValueList} from '../controls/key-value-list';
import {PROTOCOL_TOOLTIPS} from '../../utils/constants';

export const Parameters = React.memo(
  ({parameters, onChange, selected, onSelect}) => {
    const [error, setError] = useState('');
    return (
      <SidebarCard
        title='Parameters'
        tooltip={PROTOCOL_TOOLTIPS.parameters}
        selected={selected}
        onSelect={onSelect}
        error={!isEmpty(error)}
      >
        <Stack gap='m'>
          <Hint>
            You could reference these parameters in command by{' '}
            <code>{'<% $parameters.paramKey %>'}</code>.
          </Hint>
          <div>
            <KeyValueList
              name='Parameter List'
              value={parameters}
              onChange={onChange}
              onError={setError}
            />
          </div>
        </Stack>
      </SidebarCard>
    );
  },
);

Parameters.propTypes = {
  parameters: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};
