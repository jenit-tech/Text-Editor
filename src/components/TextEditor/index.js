import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  BackgroundContainer,
  TextContainer,
  Heading,
  Image,
  EditorContainer,
  EditorList,
  EditorItem,
  NormalButton,
  ItalicButton,
  UnderlineButton,
  HrElement,
  TextAreaElement,
} from './styled.js'

class TextEditor extends Component {
  state = {textBold: false, textItalic: false, textUnderline: false}

  renderBold = () => {
    this.setState(prevState => ({
      textBold: !prevState.textBold,
    }))
  }

  renderItalic = () => {
    this.setState(prevState => ({
      textItalic: !prevState.textItalic,
    }))
  }

  renderUnderline = () => {
    this.setState(prevState => ({
      textUnderline: !prevState.textUnderline,
    }))
  }

  render() {
    const {textBold, textItalic, textUnderline} = this.state

    const NormalColor = textBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textBold === false ? 'normal' : 'bold'

    const fontStyle = textItalic === false ? 'normal' : 'italic'

    const textDecoration = textUnderline === false ? 'normal' : 'underline'

    return (
      <AppContainer>
        <BackgroundContainer>
          <TextContainer>
            <Heading>Text Editor</Heading>

            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="image"
              alt="text editor"
            />
          </TextContainer>
          <EditorContainer>
            <EditorList>
              <EditorItem>
                <NormalButton
                  data-testid="bold"
                  color={NormalColor}
                  type="button"
                  onClick={this.renderBold}
                >
                  <VscBold size={25} />
                </NormalButton>
              </EditorItem>
              <EditorItem>
                <ItalicButton
                  data-testid="italic"
                  type="button"
                  color={italicButtonColor}
                  onClick={this.renderItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </EditorItem>
              <EditorItem>
                <UnderlineButton
                  className="button"
                  data-testid="underline"
                  type="button"
                  color={underlineButtonColor}
                  onClick={this.renderUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </EditorItem>
            </EditorList>
            <HrElement />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </BackgroundContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
