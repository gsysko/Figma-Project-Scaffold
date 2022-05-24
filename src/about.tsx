import * as React from 'react';
import './ui.css'
import { Paragraph, SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { ThemeProvider } from '@zendeskgarden/react-theming';

// parent.postMessage({ pluginMessage: { type: 'resize', height: 100 } }, '*');

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        parent.postMessage({ pluginMessage: { type: 'resize', height: 140 } }, '*');
    }

    render() {
        return (<ThemeProvider>
            <Paragraph size="small">
                <LG>Ztart has already been run on this document.</LG>
            </Paragraph>
            <Paragraph size="small">
                Run Ztart on a new document to auto-generate a thumbnail and a set of recommended pages that you can edit, delete, or add to.
            </Paragraph>
          </ThemeProvider>);
    }
}

export default About