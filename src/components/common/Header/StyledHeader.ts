import styled from "styled-components";

const StyledHeader = styled.header`
  color: grey;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  justify-content: space-between;

  .account-info {

    display: flex;
      .info {
        margin-right: 15px;
        .name {
          text-align: right;
        }
      }
    }

    .btn-exit {
      font-size: 16px;
      color: white;
      padding: 10px 10px;
      border-radius: 5px;
      background-color: black;
    }
  }
  
`;

export default StyledHeader;