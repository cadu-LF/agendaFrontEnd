import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  margin: auto auto;
`
export const ContainerFlexX = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContainerFlexY = styled(Container)`
  display: flex;
  flex-flow: column wrap;
`

export const NameFont = styled.h4`
  font-size: 24px;
  text-align: center;
`

export const Label = styled.label`
  font-size: 24px;  
`
export const Field = styled.input`
  width: 300px;
  height: 30px;
  font-size:  15px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.25);
  color: #ABB5BE;
  margin-bottom: 40px;
`
export const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #1BBB6E;
  border: 0;
  border-radius: 3px;
  margin: auto auto;

  &:hover{
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 15px;
  color: #ABB5BE;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #1BBB6E;
  border: 0;
  border-radius: 3px;
  margin: auto auto;

  &:hover{
    cursor: pointer;
  }
`