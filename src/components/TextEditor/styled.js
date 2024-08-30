import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BackgroundContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 25px;
  padding-top: 10px;
`

export const Image = styled.img`
  height: 250px;
  width: 250px;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 30px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
`

export const EditorList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`

export const NormalButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const HrElement = styled.button`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`

export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
   font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`

export const EditorItem = styled.li``
