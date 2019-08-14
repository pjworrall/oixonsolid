import React, { Component } from 'react';
import CorroboratingEventsPageContent from './corroboratingevents.component';
import { withWebId } from '@inrupt/solid-react-components';
import data from '@solid/query-ldflex';
import { withToastManager } from 'react-toast-notifications';
import {namedNode, literal} from "@rdfjs/data-model/index";

/**
 * Container component for the Corroborating Events page showing how to read and write content to the POD data store
 */
class CorroboratingEventsComponent extends Component<Props> {

    // todo: understand what the REACT pattern is providing properties to Component constructor

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            descriptions: [],
            ce: '',
            isLoading: false
        };


    }

    // todo: is this part of a pattern the Inrupt REACT SDK is using ?
    componentDidMount() {
        if (this.props.webId) {
            this.getCorroboratingEvents();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.webId && this.props.webId !== prevProps.webId) {
            this.getCorroboratingEvents();
        }
    }

    /**
     * This function retrieves a user's card data and tries to grab all the Colloborating Events.
     *
     * This is an example of how to use the LDFlex library to fetch different linked data fields.
     */
    getCorroboratingEvents = async () => {
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

    /**
     * addCEEvent will add a simple text field of an event
     * todo: this needs to become a structure object to represent a CE ontology model
     * @params{String} text arbitrary example text
     */
    addEvent = async (ce: String) => {
        try {

            alert('addEvent(): ' + ce);

            // how do I construct a node with the event name provided?

            // @prefix oix: <http://www.openidentityexchange.org/trustedenvironment#>.

            //     oix:event [
            //         oix:description "Residential Address Check";
            //     oix:corroboratingEvent <https://www.bank.io/event#1234567891011121314>
            // ];
            //     oix:event [
            //         oix:description "Passport Check";
            //     oix:corroboratingEvent <https://www.bank.io/event#545645764573646457>
            // ].



            const user = data[this.props.webId];
            await user['http://www.openidentityexchange.org/trustedenvironment#event'].add(literal(ce));

            console.log("addEvent: " + ce);

            this.props.toastManager.add(['', ce], {
                appearance: 'success',
            });
        } catch (error) {
            this.props.toastManager.add(['Error', error.message], {
                appearance: 'error',
                autoDismiss: false,
            });
        }
    };

    /**
     * handling for changes in input (yuk)
     *
     * @param event
     */

    async handleChange(event) {
        event.preventDefault();
        this.setState({ce: event.target.value});
    }

    /**
     * handling for submission for CE
     *
     * @param event
     */

    async handleSubmit(event) {
        event.preventDefault();
        await this.addEvent(this.state.ce);
    }


    render() {
        const { descriptions, isLoading, ce } = this.state;
        return (
            <CorroboratingEventsPageContent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                descriptions={descriptions}
                isLoading={isLoading}
                ce={ce}
            />
        );
    }
}

export default withWebId(withToastManager(CorroboratingEventsComponent));
