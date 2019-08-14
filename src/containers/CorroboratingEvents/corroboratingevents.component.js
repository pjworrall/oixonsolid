import React from 'react';
import isLoading from '@hocs/isLoading';
//import { Trans, withTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';

import {
  CorroboratingEventsWrapper,
  CorroboratingEventsCard,
  CorroboratingEventsDetail
} from './corroboratingevents.style';
import { withToastManager } from 'react-toast-notifications';

/**
 * Corroborating Events Page UI component, containing the list of CE the user has in their POD
 *
 * @param props
 */
const CorroboratingEventsPageContent = props => {

    const { descriptions,  handleSubmit, handleChange, ce, toastManager }  =props;

  return (
    <CorroboratingEventsWrapper>
      <CorroboratingEventsCard className="card">
        <CorroboratingEventsDetail>
            <h3>Corroborating Events</h3>
          <p>This page will list all the Corroborating Events (CE) you have, enable you to save new ones and control who can see them.</p>

            <h5>These CE were found in your POD:</h5>

            <p>Using react component accessing an array object..</p>
          <div>
              <table>
                  {descriptions.map(description => <tr> <td key={description}>{description} </td></tr>)}
              </table>
          </div>

            <hr/>
            <h5>Add a Corroborating Event (CE)</h5>
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea value={ce} onChange={handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </CorroboratingEventsDetail>
      </CorroboratingEventsCard>
    </CorroboratingEventsWrapper>
  );
};

export { CorroboratingEventsPageContent };
export default withTranslation()(
  isLoading(withToastManager(CorroboratingEventsPageContent))
);
