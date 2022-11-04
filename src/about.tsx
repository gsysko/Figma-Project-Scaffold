import * as React from 'react';
import './ui.css'
import { Paragraph, SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';

import { createRoot } from 'react-dom/client';
import App from './ui';


const StyledDiv = styled.div`
margin-bottom: 20;
`;

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        parent.postMessage({ pluginMessage: { type: 'resize', height: 220 } }, '*');
    }

    restartApp() {
        parent.postMessage({ pluginMessage: { type: 'resize', height: 330 } }, '*');
        const container = document.getElementById('react-page');
        const root = createRoot(container);
        root.render(<App/>);
    }

    render() {
        return (<ThemeProvider>
                <StyledDiv><LG>Ztart has already been run on this document</LG></StyledDiv>
                <StyledDiv><SM>Run Ztart on a new document to auto-generate a thumbnail and a set of recommended pages that you can edit, delete, or add to.</SM></StyledDiv>
                <StyledDiv><SM isBold>Rerunning Ztart on this file may cause duplicate pages to be created.</SM></StyledDiv>
                <Button onClick={() => this.restartApp()} isDanger isStretched>
                    Rerun
                </Button>
          </ThemeProvider>);
    }
}

export default About