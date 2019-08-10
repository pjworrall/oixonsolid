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
    const { descriptions, toastManager } = props;

    console.log("collaboratingEvents: " + descriptions);
    console.log("toastManager : " + toastManager);

  return (
    <CorroboratingEventsWrapper>
      <CorroboratingEventsCard className="card">
        <CorroboratingEventsDetail>
          <p> This is the Corroborating Event (CE) page. This page will list all the CE you have received and enable you to control who can see them and how you share them.</p>

            <h3>Goals of this page</h3>
            <p>So, how do I? :</p>

          <div>
              <ul>
                  <li>Read from the POD - DONE</li>
                  <li>Write a set of triples to the POD</li>
                  <li>Write a file into the POD</li>
              </ul>
          </div>

            <h3>Corroborating Events found POD</h3>

          <div>
              <ul>
                  {descriptions.map(description => <li key={description}>{description}</li>)}
              </ul>
          </div>

            <div>
                <p>
                Icons made by <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">wanicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
                </p>
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
