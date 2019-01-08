import React, { Component } from 'react'

import {
  ModalBackground,
  ModalBlock,
  ModalContainer,
  ModalTitleBlock,
  ModalTitleText,
  ModalFieldsBlock,
  ModalFooter,
  ModalLoginNav,
  ModalNavText,
  ModalNavLink,
  ModalButtonBlock,
  ModalBtn,
  ModalClose
} from '../../styles/modal_styles'

import {
  InputBlock,
  InputLabel,
  InputBottomBar,
  InputField,
} from '../../styles/input_styles'

class VerifyEmailModal extends Component {
  render() {
    return (
      <ModalBackground>
        <ModalBlock>
          <ModalClose />
          <ModalContainer>
            <ModalTitleBlock>
              <ModalTitleText>Verify your emal</ModalTitleText>
            </ModalTitleBlock>
            <form>
              <ModalFieldsBlock>
                <InputBlock>
                  <InputField type='text' required />
                  <InputBottomBar />
                  <InputLabel>Verify code</InputLabel>
                </InputBlock>
              </ModalFieldsBlock>
              <ModalFooter>
                <ModalButtonBlock>
                  <ModalBtn type="submit">
                    Done
                  </ModalBtn>
                </ModalButtonBlock>
              </ModalFooter>
            </form>
          </ModalContainer>
        </ModalBlock>
      </ModalBackground>
    )
  }
}

export default VerifyEmailModal