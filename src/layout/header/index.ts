import styled from 'styled-components'

// Own
import Header from './component'

export default styled(Header)`
  padding: 10px 5px;
  position: relative;

  .header__links-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: initial;

    button {
      cursor: pointer;
    }
  }

  .header__author {
    margin: 0;
    text-align: center;
  }
`
