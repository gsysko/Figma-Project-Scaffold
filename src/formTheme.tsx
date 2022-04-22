import * as React from 'react';
import { useState } from 'react';
import { Colorpicker } from '@zendeskgarden/react-colorpickers';
import styled from 'styled-components';
import { rgb, parseToRgb, toColorString } from 'polished';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { Field, Label, Input, InputGroup, Hint } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';

const StyledRow = styled(Row)`
  padding-top: 16px;
`;

const validHex = /^#(?:(?:[0-9A-F]{6}(?:[0-9A-F]{2})?)|(?:[0-9A-F]{3})(?:[0-9A-F]?))$/iu;

const toHex = (selectedColor: IColor) => {
  let colorHex = selectedColor.hex;

  if (selectedColor.alpha === 100) {
    return colorHex;
  }

  let alphaHex = Math.round((selectedColor.alpha / 100) * 255).toString(16);

  if (alphaHex.length === 1) {
    alphaHex = `0${alphaHex}`;
  }

  if (colorHex.length === 4) {
    if (alphaHex.charAt(0) === alphaHex.charAt(1)) {
      alphaHex = alphaHex.charAt(0);
    } else {
      colorHex = `#${colorHex.charAt(1)}${colorHex.charAt(1)}${colorHex.charAt(2)}${colorHex.charAt(
        2
      )}${colorHex.charAt(3)}${colorHex.charAt(3)}`;
    }
  }

  return `${colorHex}${alphaHex}`;
};


const FormTheme = () => {
  const [primaryColor, setPrimaryColor] = useState<string | IColor>("#17494D");
  const [messageColor, setMessageColor] = useState<string | IColor>("#03363D");
  const [actionColor, setActionColor] = useState<string | IColor>("#008847");

  return (<>
    <Row>
      <Col>
        <Label>Theme colors</Label>
      </Col>
    </Row>
    <Row>
      <Col>
        <Field>
          <Hint>Primary</Hint>
          <ColorpickerDialog
              focusInset
              defaultColor={primaryColor}
              isOpaque
              onChange={selectedColor => {
                setPrimaryColor(selectedColor);
              }}
              buttonProps={{
                'aria-label': 'choose your primary color'
              }}
            />
        </Field>
      </Col>
      <Col>
        <Field>
          <Hint>Message</Hint>
          <ColorpickerDialog
              focusInset
              defaultColor={messageColor}
              isOpaque
              onChange={selectedColor => {
                setMessageColor(selectedColor);
              }}
              buttonProps={{
                'aria-label': 'choose your message color'
              }}
            />
        </Field>
      </Col>
      <Col>
        <Field>
          <Hint>Action</Hint>
          <ColorpickerDialog
              focusInset
              defaultColor={actionColor}
              isOpaque
              onChange={selectedColor => {
                setActionColor(selectedColor);
              }}
              buttonProps={{
                'aria-label': 'choose your action color'
              }}
            />
        </Field>
      </Col>
    </Row>
    <StyledRow>
          <Col>
            <Button isPrimary isStretched>
              Generate theme
            </Button>
          </Col>
    </StyledRow></>
  );
};

export default FormTheme;

