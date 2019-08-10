import React, { Component } from 'react';
import CorroboratingEventsPageContent from './corroboratingevents.component';
import { withWebId } from '@inrupt/solid-react-components';
import data from '@solid/query-ldflex';
import { withToastManager } from 'react-toast-notifications';

/**
 * Container component for the Corroborating Events page showing how to read and write content to the POD data store
 */
class CorroboratingEventsComponent extends Component<Props> {

    // todo: understand what the REACT pattern is providing properties to Component constructor

    constructor(props) {
        super(props);

        this.state = {
            descriptions: [],
            isLoading: false
        };
    }

    // todo: is this part of a pattern the Inrupt REACT SDK is using ?
    componentDidMount() {
        if (this.props.webId) {
            this.getProfileData();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.webId && this.props.webId !== prevProps.webId) {
            this.getProfileData();
        }
    }

    /**
     * This function retrieves a user's card data and tries to grab all the Colloborating Events.
     *
     * This is an example of how to use the LDFlex library to fetch different linked data fields.
     */
    getProfileData = async () => {
        this.setState({ isLoading: true });

        /*
         * This is an example of how to use LDFlex. Here, we're loading the webID link into a user variable. This user object
         * will contain all of the data stored in the webID link, such as profile information.
         */

        const user = data[this.props.webId];

        // const name = nameLd ? nameLd.value : '';

        // whoopeee! got my first custom data from a Solid PoD
        let event = await user['http://www.openidentityexchange.org/trustedenvironment#event'];

        console.log('\nCorroborating Events');
        let descriptions = [];
        for await (const description of event['http://www.openidentityexchange.org/trustedenvironment#description']) {
            console.log(`  - ${description}`);
            descriptions.push(`${description}`);
        }
        console.log('\nCorroborating Event Descriptions Array');
        console.log(descriptions);


        /**
         * This is where we set the state with descriptions from the CE.
         */
        this.setState({ descriptions, isLoading: false });
    };

    render() {
        const { descriptions, isLoading } = this.state;
        return (
            <CorroboratingEventsPageContent
                descriptions={descriptions}
                isLoading={isLoading}
            />
        );
    }
}

export default withWebId(withToastManager(CorroboratingEventsComponent));
