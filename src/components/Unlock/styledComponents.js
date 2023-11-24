// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161617;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const Description = styled.p`
  font-size: 20px;
  color: #e2e8f0;
  font-family: 'Roboto';
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  text-align: center;
  border-style: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  margin-top: 50px;
`
