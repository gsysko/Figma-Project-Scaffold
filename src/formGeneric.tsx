import * as React from 'react';
import { Field, Label, Hint, Input, Message, Textarea } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  padding-top: 12px;
`;

interface IGenericFormProps {
  projectType?: string;
}

interface IGenericFormState {
}

class FormGeneric extends React.Component<IGenericFormProps, IGenericFormState> {
  inputTitle: React.RefObject<HTMLInputElement>;
  inputDescription: React.RefObject<HTMLTextAreaElement>;
  constructor(props) {
    super(props)
    this.createProject = this.createProject.bind(this);
    this.inputTitle = React.createRef();
    this.inputDescription = React.createRef();
  }

  createProject(type, title, description ) {
    parent.postMessage({ pluginMessage: { type: 'create-project', projectTitle: title, projectType: type, projectDescription: description } }, '*');
  } 

  render() {
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
            <Textarea placeholder="E.g. Agent Workspace gives agents a space to work!" minRows={2} maxRows={15} ref={this.inputDescription}/>
          </Field>
        </Col>
      </Row>
      <StyledRow>
            <Col>
              <Button onClick={() => this.createProject(this.props.projectType, this.inputTitle.current.value, this.inputDescription.current.value)} isPrimary isStretched>
                Create
              </Button>
            </Col>
      </StyledRow>
      </>);
  }
}

export default FormGeneric