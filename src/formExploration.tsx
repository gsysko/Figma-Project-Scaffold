import * as React from 'react';
import { Field, Label, Hint, Input, Message, Textarea } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  padding-top: 16px;
`;

function createProject(type, title, description ) {
  parent.postMessage({ pluginMessage: { type: 'create-projct', projectTitle: title, projectType: type, projectDescription: description } }, '*');
}

export function FormExploration(props) {
  this.inputTitle = React.createRef();
  this.inputDescription = React.createRef();

  return (<>
    <Row>
      <Col>
        <Field>
          <Label>Title</Label>
          <Input placeholder="E.g. Agent Workspace" ref={this.inputTitle}/>
        </Field>
      </Col>
    </Row>
    <Row>
      <Col>
        <Field>
          <Label>Description</Label>
          <Textarea placeholder="E.g. Agent Workspace gives agents a space to work!" ref={this.inputDescription}/>
        </Field>
      </Col>
    </Row>
    <StyledRow>
          <Col>
            <Button onClick={() => createProject(props.projectType, this.inputTitle.current.value, this.inputDescription.current.value)} isPrimary isStretched>
              Create
            </Button>
          </Col>
    </StyledRow>
    </>);
}

