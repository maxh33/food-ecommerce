import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

import star from '../../assets/images/estrela.png'

export const Card = styled.div`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.mainPink};
  border-radius: 2px;
  position: relative;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  ${TagContainer} {
    margin-right: 8px;
    background-color: ${Colors.mainPink};
    color: ${Colors.white};
    font-size: 12px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 8px;
  color: ${Colors.mainPink};

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    &::before {
      content: '';
      background-image: url(${star});
      background-size: cover;
      width: 21px;
      height: 21px;
      display: inline-block;
      margin-right: 8px;
    }
  }
`

export const Descricao = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.mainPink};
  margin: 8px 8px;
  height: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
