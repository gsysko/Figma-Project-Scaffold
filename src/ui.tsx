import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import './ui.css'

/* Optional CSS normalization with selected element resets */
import '@zendeskgarden/css-bedrock';

declare function require(path: string): any

class App extends React.Component {
  onmessage = (event) => {
    if (event.data.pluginMessage == "missing_font"){
      //Do nothing on missing fonts
    }
  }

  createProject() {
    debugger
    const title = document.getElementById("title-input") as HTMLInputElement;
    const type = document.getElementById("type-select") as HTMLSelectElement;
    parent.postMessage({ pluginMessage: { type: 'create-projct', projectTitle: title.value, projectType: type.value } }, '*');
  }

  render() {
    return <div style={{ padding: DEFAULT_THEME.space.md }}>
    <ThemeProvider>
      <Row justifyContent="center">
        <Col sm={5}>
          <Field>
            <Label>Project title</Label>
            <Input />
          </Field>
        </Col>
      </Row>
    </ThemeProvider>
  </div>
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))