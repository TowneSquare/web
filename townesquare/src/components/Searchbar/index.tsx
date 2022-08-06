import React, { useCallback,useState } from 'react';
import styled from '@emotion/styled';
import { Search as SearchIcon } from '@mui/icons-material';
import { Card } from '../Foundation';
import { useTheme } from '@emotion/react';

const SearchBar = ({
    changeHandler,
}: {
    changeHandler: (e: any) => void;
}) => {
    const theme = useTheme()
    const [query, setQuery] = useState('')

  const inputHandler = useCallback(
    (e: any) => {
      setQuery(e.target.value)
      changeHandler(e.target.value)
    },
    [changeHandler],
  )

    return (
        <Card height="45px" style={{cursor: 'pointer'}} background={theme.colors.overlay} boxShadow="none" >
            <SearchBarWrapper >
                <Input 
                    type="text"
                    value={query}
                    placeholder="Search anything"
                    onChange={inputHandler}
                />
                <IconWrapper>
                    <SearchIcon/>
                </IconWrapper>
            </SearchBarWrapper>
        </Card>
    )
}

const SearchBarWrapper = styled.div`
    padding: 8px 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-between;

    > * svg {
        width: 2em;
        height: 2em;
    }
`;

const IconWrapper = styled.div`
    svg {
        width: 1.5em;
        height: 1.5em;
    }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
  &:focus {
    color: ${({ theme }) => theme.colors.textPrimary};
    ::placeholder {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`

export default SearchBar;